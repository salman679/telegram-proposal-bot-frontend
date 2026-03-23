"use client";

import { useEffect, useState, useTransition } from "react";

const REFRESH_INTERVAL_MS = 60_000;
const DASHBOARD_TIME_ZONE = "Asia/Dhaka";
const MARKETING_TRACK_LABELS = {
  proposal: "Proposal",
  profile: "Profile",
  portfolio: "Portfolio",
  pricing: "Pricing",
  filter: "Job Filter",
  interview: "Interview",
  close: "Close CTA",
  secret: "Winning Secret"
};
const SECTION_META = {
  overview: {
    label: "Overview",
    title: "Overview",
    copy: "See users, proposals, contacts, and follow-ups in one place."
  },
  audience: {
    label: "Audience",
    title: "Audience",
    copy: "See recent users, saved contacts, and recent activity."
  },
  followups: {
    label: "Follow-ups",
    title: "Follow-ups",
    copy: "See who needs a reminder and how the queue is doing."
  },
  broadcast: {
    label: "Broadcast",
    title: "Broadcasts",
    copy: "Preview today's post and check when it will be sent."
  }
};

function isRecord(value) {
  return Boolean(value) && typeof value === "object" && !Array.isArray(value);
}

function asArray(value) {
  return Array.isArray(value) ? value : [];
}

function normalizeSnapshot(value) {
  const snapshot = isRecord(value) ? value : {};
  const overview = isRecord(snapshot.overview) ? snapshot.overview : {};
  const stats = isRecord(overview.stats) ? overview.stats : {};
  const totals = isRecord(stats.totals) ? stats.totals : {};
  const activeUsers = isRecord(stats.activeUsers) ? stats.activeUsers : {};
  const contact = isRecord(overview.contact) ? overview.contact : {};
  const marketing = isRecord(overview.marketing) ? overview.marketing : {};
  const followups = isRecord(overview.followups) ? overview.followups : {};
  const dueByStage = isRecord(followups.dueByStage) ? followups.dueByStage : {};
  const schedules = isRecord(snapshot.schedules) ? snapshot.schedules : {};
  const followupSchedule = isRecord(schedules.followups) ? schedules.followups : {};
  const dailyBroadcast = isRecord(schedules.dailyBroadcast)
    ? schedules.dailyBroadcast
    : {};
  const currentBroadcast = isRecord(dailyBroadcast.current)
    ? dailyBroadcast.current
    : {};
  const environment = isRecord(snapshot.environment) ? snapshot.environment : {};

  return {
    ...snapshot,
    overview: {
      ...overview,
      stats: {
        ...stats,
        storageMode: stats.storageMode || "unknown",
        totals: {
          uniqueUsers: 0,
          proposalRequests: 0,
          proposalSuccesses: 0,
          proposalFailures: 0,
          messages: 0,
          commands: 0,
          ...totals
        },
        activeUsers: {
          last24Hours: 0,
          last7Days: 0,
          last30Days: 0,
          ...activeUsers
        },
        topUsers: asArray(stats.topUsers)
      },
      contact: {
        withEmail: 0,
        withPhone: 0,
        withFullContact: 0,
        awaitingContact: 0,
        ...contact
      },
      marketing: {
        totalInterested: 0,
        warmLeads: 0,
        hotLeads: 0,
        activeIn7Days: 0,
        ...marketing,
        trackCounts: asArray(marketing.trackCounts)
      },
      followups: {
        dueNow: 0,
        optedOut: 0,
        errors: 0,
        completedSequence: 0,
        ...followups,
        dueByStage: {
          stage0: 0,
          stage1: 0,
          stage2: 0,
          ...dueByStage
        }
      },
      recentUsers: asArray(overview.recentUsers)
    },
    schedules: {
      ...schedules,
      followups: {
        cron: "-",
        localTime: "-",
        path: "/api/cron/followups",
        batchLimit: 25,
        ...followupSchedule
      },
      dailyBroadcast: {
        cron: "-",
        localTime: "-",
        path: "/api/cron/broadcasts/upwork-tips",
        templateCount: 0,
        ...dailyBroadcast,
        current: {
          key: "Unavailable",
          index: 0,
          isoDate: "-",
          text: "No broadcast preview is available.",
          trackKey: null,
          trackLabel: null,
          keyword: null,
          ...currentBroadcast
        }
      }
    },
    environment: {
      mode: "local",
      dashboardKeySource: null,
      botTokenConfigured: false,
      ...environment
    }
  };
}

function formatNumber(value) {
  return new Intl.NumberFormat("en-US").format(Number(value || 0));
}

function formatPercent(value) {
  return `${Number(value || 0).toFixed(1)}%`;
}

function formatDate(value) {
  if (!value) {
    return "-";
  }

  try {
    return new Intl.DateTimeFormat("en-GB", {
      dateStyle: "medium",
      timeStyle: "short",
      timeZone: DASHBOARD_TIME_ZONE
    }).format(new Date(value));
  } catch {
    return String(value);
  }
}

function getUserLabel(user) {
  if (user?.username) {
    return `@${user.username}`;
  }

  const fullName = [user?.firstName, user?.lastName].filter(Boolean).join(" ").trim();
  return fullName || `user ${user?.userId || "-"}`;
}

function getContactStatus(user) {
  if (user?.hasEmail && user?.hasPhoneNumber) {
    return { tone: "success", label: "Full contact" };
  }

  if (user?.hasEmail || user?.hasPhoneNumber) {
    return { tone: "warning", label: "Partial contact" };
  }

  if (user?.pendingProposalText) {
    return { tone: "accent", label: "Awaiting capture" };
  }

  return { tone: "muted", label: "No contact" };
}

function getMarketingStatus(user) {
  if (!user?.marketingTrack || Number(user?.marketingSignalCount || 0) < 1) {
    return { tone: "muted", label: "No signal" };
  }

  const stage = user?.marketingStage || "engaged";
  const tone = stage === "hot" ? "danger" : stage === "warm" ? "warning" : "info";
  const label = `${MARKETING_TRACK_LABELS[user.marketingTrack] || user.marketingTrack} / ${stage}`;

  return { tone, label };
}

function getFollowupStatus(user) {
  if (user?.lastFollowupErrorAt) {
    return { tone: "danger", label: "Error" };
  }

  const stage = Number(user?.followupStage || 0);

  if (stage >= 3) {
    return { tone: "success", label: "Completed" };
  }

  if (stage > 0) {
    return { tone: "info", label: `Stage ${stage}` };
  }

  return { tone: "accent", label: "New" };
}

function getSystemHealth(snapshot) {
  if (!snapshot.environment?.botTokenConfigured) {
    return { tone: "danger", label: "Bot token missing" };
  }

  const errors = Number(snapshot.overview?.followups?.errors || 0);
  const dueNow = Number(snapshot.overview?.followups?.dueNow || 0);

  if (errors > 0) {
    return { tone: "danger", label: "Reminder errors" };
  }

  if (dueNow > Number(snapshot.schedules?.followups?.batchLimit || 25)) {
    return { tone: "warning", label: "High reminder load" };
  }

  return { tone: "success", label: "Healthy" };
}

function StatGlyph({ icon }) {
  switch (icon) {
    case "users":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M16 19v-1.2c0-1.9-1.7-3.3-4-3.3s-4 1.4-4 3.3V19" />
          <path d="M12 12a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z" />
          <path d="M19 19v-.8c0-1.3-.8-2.4-2.2-2.9" />
          <path d="M16.8 5.4A3.3 3.3 0 0 1 18.5 11" />
        </svg>
      );
    case "brief":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M8 7V5.8C8 5 8.7 4.3 9.5 4.3h5c.8 0 1.5.7 1.5 1.5V7" />
          <path d="M4.5 9.2h15a1.5 1.5 0 0 1 1.5 1.5V17a2.2 2.2 0 0 1-2.2 2.2H5.2A2.2 2.2 0 0 1 3 17v-6.3a1.5 1.5 0 0 1 1.5-1.5Z" />
          <path d="M3 12.3h18" />
        </svg>
      );
    case "contact":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <rect x="4" y="5" width="16" height="14" rx="3" />
          <path d="M8 10.2h8" />
          <path d="M8 14h5" />
          <circle cx="8.2" cy="8.2" r="1.2" fill="currentColor" stroke="none" />
        </svg>
      );
    case "bell":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M6.5 15.8V11a5.5 5.5 0 1 1 11 0v4.8l1.3 1.7H5.2l1.3-1.7Z" />
          <path d="M10 19.5a2.3 2.3 0 0 0 4 0" />
        </svg>
      );
    case "pulse":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M3 12h4l2.1-4.2L13 16l2.2-4H21" />
        </svg>
      );
    case "calendar":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <rect x="4" y="5" width="16" height="15" rx="3" />
          <path d="M8 3.8v3.1" />
          <path d="M16 3.8v3.1" />
          <path d="M4 9.2h16" />
          <path d="M8 13h3" />
          <path d="M13 13h3" />
          <path d="M8 16.2h3" />
        </svg>
      );
    case "stack":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="m12 4 7 3.8-7 3.8L5 7.8 12 4Z" />
          <path d="m5 11.3 7 3.8 7-3.8" />
          <path d="m5 14.8 7 3.8 7-3.8" />
        </svg>
      );
    case "check":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="m6.8 12.4 3.2 3.2 7.2-7.2" />
          <circle cx="12" cy="12" r="8.5" />
        </svg>
      );
    case "alert":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 4.8 20 18.6a1 1 0 0 1-.9 1.4H4.9A1 1 0 0 1 4 18.6L12 4.8Z" />
          <path d="M12 9.2v4.6" />
          <circle cx="12" cy="17.1" r=".9" fill="currentColor" stroke="none" />
        </svg>
      );
    case "send":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M4 11.8 19.4 4.9c.7-.3 1.4.4 1.1 1.1L13.6 21.4c-.3.7-1.3.6-1.5-.1l-1.7-5.5L4.9 14c-.8-.2-.9-1.2-.1-1.5l5.5-1.8" />
          <path d="M10.4 15.8 20 6.2" />
        </svg>
      );
    case "template":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <rect x="5" y="4" width="14" height="16" rx="3" />
          <path d="M9 9.2h6" />
          <path d="M9 12.2h6" />
          <path d="M9 15.2h4" />
        </svg>
      );
    case "spark":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="m12 4 1.7 4.3L18 10l-4.3 1.7L12 16l-1.7-4.3L6 10l4.3-1.7L12 4Z" />
          <path d="m18.5 4.8.8 1.9 1.9.8-1.9.8-.8 1.9-.8-1.9-1.9-.8 1.9-.8.8-1.9Z" />
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <circle cx="12" cy="12" r="7.5" />
        </svg>
      );
  }
}

function StatCard({ label, value, meta, tone = "accent", icon = "spark" }) {
  return (
    <article className="stat-card">
      <div className={`stat-icon tone-${tone}`} aria-hidden="true">
        <StatGlyph icon={icon} />
      </div>
      <p className="stat-label">{label}</p>
      <h2 className="stat-value">{value}</h2>
      <p className="stat-meta">{meta}</p>
    </article>
  );
}

function PanelHeader({ title, copy, action }) {
  return (
    <div className="panel-header">
      <div>
        <h2 className="panel-title">{title}</h2>
        {copy ? <p className="panel-copy">{copy}</p> : null}
      </div>
      {action}
    </div>
  );
}

function ProgressRow({ label, value, total, tone = "accent" }) {
  const width = total > 0 ? Math.min((value / total) * 100, 100) : 0;

  return (
    <div className="progress-row">
      <div className="progress-meta">
        <span>{label}</span>
        <strong>{formatNumber(value)}</strong>
      </div>
      <div className="progress-track">
        <div className={`progress-fill tone-${tone}`} style={{ width: `${width}%` }} />
      </div>
    </div>
  );
}

function SectionButton({ id, activeSection, onSelect }) {
  return (
    <button
      className={`nav-item ${activeSection === id ? "nav-item-active" : ""}`}
      onClick={() => onSelect(id)}
      type="button"
    >
      {SECTION_META[id].label}
    </button>
  );
}

function SummaryPanel({ snapshot, stats }) {
  return (
    <section className="panel">
      <PanelHeader title="System" copy="Basic app settings." />
      <div className="summary-list">
        <div className="summary-row">
          <span>Dashboard mode</span>
          <strong>{snapshot.environment?.mode || "local"}</strong>
        </div>
        <div className="summary-row">
          <span>Bot token configured</span>
          <strong>{snapshot.environment?.botTokenConfigured ? "Yes" : "No"}</strong>
        </div>
        <div className="summary-row">
          <span>Storage mode</span>
          <strong>{stats?.storageMode || "unknown"}</strong>
        </div>
        <div className="summary-row">
          <span>Key source</span>
          <strong>{snapshot.environment?.dashboardKeySource || "not set"}</strong>
        </div>
      </div>
    </section>
  );
}

function TopUsersPanel({ users }) {
  return (
    <section className="panel">
      <PanelHeader title="Top users" copy="Users with the most requests and messages." />
      <div className="leader-list">
        {(users || []).slice(0, 5).map((user, index) => (
          <div className="leader-row" key={`${user.userId}-${index}`}>
            <div className="leader-rank">{String(index + 1).padStart(2, "0")}</div>
            <div>
              <strong>{getUserLabel(user)}</strong>
              <p>
                {formatNumber(user.proposalRequests)} requests and {formatNumber(user.messageCount)} messages
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function MarketingPanel({ marketing, totalUsers }) {
  const trackRows = Array.isArray(marketing?.trackCounts)
    ? marketing.trackCounts.filter((item) => Number(item?.count || 0) > 0)
    : [];

  return (
    <section className="panel">
      <PanelHeader title="Interested segments" copy="Users who replied to CTA keywords." />
      <div className="mini-stats-grid">
        <div className="mini-stat-card">
          <span>Total interested</span>
          <strong>{formatNumber(marketing?.totalInterested)}</strong>
        </div>
        <div className="mini-stat-card">
          <span>Warm leads</span>
          <strong>{formatNumber(marketing?.warmLeads)}</strong>
        </div>
        <div className="mini-stat-card">
          <span>Hot leads</span>
          <strong>{formatNumber(marketing?.hotLeads)}</strong>
        </div>
        <div className="mini-stat-card">
          <span>Active in 7d</span>
          <strong>{formatNumber(marketing?.activeIn7Days)}</strong>
        </div>
      </div>

      {trackRows.length ? (
        <div className="progress-stack compact-stack">
          {trackRows.map((item) => (
            <ProgressRow
              key={item.trackKey}
              label={`${item.label} (${item.keyword})`}
              value={item.count}
              total={Math.max(totalUsers, 1)}
              tone="info"
            />
          ))}
        </div>
      ) : (
        <p className="panel-copy">No CTA signals yet.</p>
      )}
    </section>
  );
}

function ContactBreakdownPanel({ rows, totalUsers }) {
  return (
    <section className="panel">
      <PanelHeader title="Contact status" copy="How many users have saved phone or email." />
      <div className="progress-stack compact-stack">
        {rows.map((item) => (
          <ProgressRow
            key={item.label}
            label={item.label}
            value={item.value}
            total={Math.max(totalUsers, 1)}
            tone={item.tone}
          />
        ))}
      </div>
    </section>
  );
}

function RecentUsersTable({ users }) {
  return (
    <div className="table-wrap">
      <table className="data-table">
        <thead>
          <tr>
            <th>User</th>
            <th>Requests</th>
            <th>Messages</th>
            <th>Contact</th>
            <th>Interest</th>
            <th>Follow-up</th>
            <th>Last seen</th>
          </tr>
        </thead>
        <tbody>
          {(users || []).map((user) => {
            const contact = getContactStatus(user);
            const marketing = getMarketingStatus(user);
            const followup = getFollowupStatus(user);

            return (
              <tr key={user.userId}>
                <td>
                  <div className="table-user">
                    <strong>{getUserLabel(user)}</strong>
                    <small>{user.userId}</small>
                  </div>
                </td>
                <td>{formatNumber(user.proposalRequests)}</td>
                <td>{formatNumber(user.messageCount)}</td>
                <td>
                  <span className={`badge tone-${contact.tone}`}>{contact.label}</span>
                </td>
                <td>
                  <span className={`badge tone-${marketing.tone}`}>{marketing.label}</span>
                </td>
                <td>
                  <span className={`badge tone-${followup.tone}`}>{followup.label}</span>
                </td>
                <td>{formatDate(user.lastSeenAt)}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

function FollowupUsersTable({ users }) {
  return (
    <div className="table-wrap">
      <table className="data-table">
        <thead>
          <tr>
            <th>User</th>
            <th>Follow-up</th>
            <th>Contact</th>
            <th>Requests</th>
            <th>Last seen</th>
          </tr>
        </thead>
        <tbody>
          {(users || []).map((user) => {
            const contact = getContactStatus(user);
            const marketing = getMarketingStatus(user);
            const followup = getFollowupStatus(user);

            return (
              <tr key={user.userId}>
                <td>
                  <div className="table-user">
                    <strong>{getUserLabel(user)}</strong>
                    <small>{user.userId}</small>
                  </div>
                </td>
                <td>
                  <span className={`badge tone-${followup.tone}`}>{followup.label}</span>
                </td>
                <td>
                  <span className={`badge tone-${contact.tone}`}>{contact.label}</span>
                </td>
                <td>{formatNumber(user.proposalRequests)}</td>
                <td>{formatDate(user.lastSeenAt)}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

function AutomationPanel({ snapshot }) {
  return (
    <section className="panel">
      <PanelHeader title="Automation" copy="Scheduled jobs running in Vercel." />
      <div className="schedule-list">
        <article className="schedule-item">
          <div>
            <p className="item-label">Follow-up cron</p>
            <h3>{snapshot.schedules.followups.localTime}</h3>
          </div>
          <div className="item-meta">
            <span>{snapshot.schedules.followups.cron}</span>
            <span>{snapshot.schedules.followups.path}</span>
          </div>
        </article>
        <article className="schedule-item">
          <div>
            <p className="item-label">Daily tips cron</p>
            <h3>{snapshot.schedules.dailyBroadcast.localTime}</h3>
          </div>
          <div className="item-meta">
            <span>{snapshot.schedules.dailyBroadcast.cron}</span>
            <span>{snapshot.schedules.dailyBroadcast.path}</span>
          </div>
        </article>
      </div>
    </section>
  );
}

function OverviewView({
  snapshot,
  stats,
  totalUsers,
  proposalRequests,
  proposalSuccesses,
  proposalFailures,
  totalMessages,
  totalCommands,
  fullContact,
  contactCoverage,
  activityBars,
  contactRows,
  successRate
}) {
  return (
    <>
      <section className="stat-grid">
        <StatCard
          label="Users"
          value={formatNumber(totalUsers)}
          meta={`${formatNumber(stats?.activeUsers?.last7Days)} active in 7 days`}
          tone="accent"
          icon="users"
        />
        <StatCard
          label="Proposal requests"
          value={formatNumber(proposalRequests)}
          meta={`${formatNumber(proposalSuccesses)} successful generations`}
          tone="info"
          icon="brief"
        />
        <StatCard
          label="Contact coverage"
          value={formatPercent(contactCoverage)}
          meta={`${formatNumber(fullContact)} users with phone and email`}
          tone="success"
          icon="contact"
        />
        <StatCard
          label="Follow-ups due"
          value={formatNumber(snapshot.overview?.followups?.dueNow)}
          meta="Users eligible for the next reminder"
          tone="warning"
          icon="bell"
        />
      </section>

      <section className="main-grid">
        <section className="panel">
          <PanelHeader
            title="User activity"
            copy="See how many users were active recently."
          />
          <div className="progress-stack">
            {activityBars.map((item) => (
              <ProgressRow
                key={item.label}
                label={item.label}
                value={item.value}
                total={Math.max(totalUsers, 1)}
                tone={item.tone}
              />
            ))}
          </div>

          <div className="mini-stats-grid">
            <div className="mini-stat-card">
              <span>Total messages</span>
              <strong>{formatNumber(totalMessages)}</strong>
            </div>
            <div className="mini-stat-card">
              <span>Total commands</span>
              <strong>{formatNumber(totalCommands)}</strong>
            </div>
            <div className="mini-stat-card">
              <span>Success rate</span>
              <strong>{formatPercent(successRate)}</strong>
            </div>
            <div className="mini-stat-card">
              <span>Failures</span>
              <strong>{formatNumber(proposalFailures)}</strong>
            </div>
          </div>
        </section>

        <div className="stack-grid">
          <AutomationPanel snapshot={snapshot} />
        </div>
      </section>

      <section className="bottom-grid">
        <ContactBreakdownPanel rows={contactRows} totalUsers={totalUsers} />
        <TopUsersPanel users={stats?.topUsers || []} />
      </section>
    </>
  );
}

function AudienceView({ snapshot, stats, totalUsers, fullContact, contactRows, activityBars }) {
  return (
    <>
      <section className="stat-grid">
        <StatCard
          label="Total users"
          value={formatNumber(totalUsers)}
          meta={`${formatNumber(fullContact)} full contacts captured`}
          tone="accent"
          icon="users"
        />
        <StatCard
          label="Active in 24h"
          value={formatNumber(stats?.activeUsers?.last24Hours)}
          meta="Recent active users"
          tone="info"
          icon="pulse"
        />
        <StatCard
          label="Active in 7d"
          value={formatNumber(stats?.activeUsers?.last7Days)}
          meta="Weekly active users"
          tone="success"
          icon="calendar"
        />
        <StatCard
          label="Active in 30d"
          value={formatNumber(stats?.activeUsers?.last30Days)}
          meta="Monthly active users"
          tone="warning"
          icon="calendar"
        />
      </section>

      <section className="main-grid">
        <section className="panel" id="audience">
          <PanelHeader
            title="Recent users"
            copy="Latest users, requests, contacts, reminders, and last activity."
          />
          <RecentUsersTable users={snapshot.overview?.recentUsers || []} />
        </section>

        <div className="stack-grid">
          <section className="panel">
            <PanelHeader title="Activity windows" copy="Activity by time range." />
            <div className="progress-stack compact-stack">
              {activityBars.map((item) => (
                <ProgressRow
                  key={item.label}
                  label={item.label}
                  value={item.value}
                  total={Math.max(totalUsers, 1)}
                  tone={item.tone}
                />
              ))}
            </div>
          </section>

          <ContactBreakdownPanel rows={contactRows} totalUsers={totalUsers} />
          <TopUsersPanel users={stats?.topUsers || []} />
        </div>
      </section>
    </>
  );
}

function FollowupsView({ snapshot, totalUsers }) {
  const dueNow = Number(snapshot.overview?.followups?.dueNow || 0);
  const errors = Number(snapshot.overview?.followups?.errors || 0);
  const completedSequence = Number(snapshot.overview?.followups?.completedSequence || 0);
  const followupRows = [
    {
      label: "Due from stage 0",
      value: Number(snapshot.overview?.followups?.dueByStage?.stage0 || 0),
      tone: "accent"
    },
    {
      label: "Due from stage 1",
      value: Number(snapshot.overview?.followups?.dueByStage?.stage1 || 0),
      tone: "info"
    },
    {
      label: "Due from stage 2",
      value: Number(snapshot.overview?.followups?.dueByStage?.stage2 || 0),
      tone: "warning"
    },
    {
      label: "Completed sequence",
      value: completedSequence,
      tone: "success"
    }
  ];

  return (
    <>
      <section className="stat-grid">
        <StatCard
          label="Due now"
          value={formatNumber(dueNow)}
          meta="Ready for the next reminder"
          tone="accent"
          icon="bell"
        />
        <StatCard
          label="Batch limit"
          value={formatNumber(snapshot.schedules.followups.batchLimit)}
          meta="Max reminder sends per cron run"
          tone="warning"
          icon="stack"
        />
        <StatCard
          label="Completed"
          value={formatNumber(completedSequence)}
          meta="Reached stage 3"
          tone="success"
          icon="check"
        />
        <StatCard
          label="Errors"
          value={formatNumber(errors)}
          meta="Latest reminder failures"
          tone="danger"
          icon="alert"
        />
      </section>

      <section className="main-grid">
        <section className="panel" id="followups">
          <PanelHeader title="Reminder stages" copy="Users waiting in each reminder step." />
          <div className="progress-stack compact-stack">
            {followupRows.map((item) => (
              <ProgressRow
                key={item.label}
                label={item.label}
                value={item.value}
                total={Math.max(totalUsers, 1)}
                tone={item.tone}
              />
            ))}
          </div>

          <div className="mini-stats-grid">
            <div className="mini-stat-card">
              <span>Batch limit</span>
              <strong>{formatNumber(snapshot.schedules.followups.batchLimit)}</strong>
            </div>
            <div className="mini-stat-card">
              <span>Send time</span>
              <strong>{snapshot.schedules.followups.localTime}</strong>
            </div>
            <div className="mini-stat-card">
              <span>Cron</span>
              <strong>{snapshot.schedules.followups.cron}</strong>
            </div>
            <div className="mini-stat-card">
              <span>Path</span>
              <strong>{snapshot.schedules.followups.path}</strong>
            </div>
          </div>
        </section>

        <div className="stack-grid">
          <section className="panel">
            <PanelHeader title="Quick summary" copy="Simple view of current reminder load." />
            <div className="summary-list">
              <div className="summary-row">
                <span>Due now</span>
                <strong>{formatNumber(dueNow)}</strong>
              </div>
              <div className="summary-row">
                <span>Batch limit</span>
                <strong>{formatNumber(snapshot.schedules.followups.batchLimit)}</strong>
              </div>
              <div className="summary-row">
                <span>Error records</span>
                <strong>{formatNumber(errors)}</strong>
              </div>
              <div className="summary-row">
                <span>Completed sequence</span>
                <strong>{formatNumber(completedSequence)}</strong>
              </div>
            </div>
          </section>

          <section className="panel">
            <PanelHeader title="Reminder schedule" copy="When the bot sends follow-up messages." />
            <div className="schedule-list">
              <article className="schedule-item">
                <div>
                  <p className="item-label">Follow-up schedule</p>
                  <h3>{snapshot.schedules.followups.localTime}</h3>
                </div>
                <div className="item-meta">
                  <span>{snapshot.schedules.followups.cron}</span>
                  <span>{snapshot.schedules.followups.path}</span>
                </div>
              </article>
            </div>
          </section>
        </div>
      </section>

      <section className="panel">
        <PanelHeader title="Recent reminder status" copy="Latest users and their follow-up status." />
        <FollowupUsersTable users={snapshot.overview?.recentUsers || []} />
      </section>
    </>
  );
}

function BroadcastView({ snapshot, stats, totalUsers }) {
  const current = snapshot.schedules.dailyBroadcast.current;

  return (
    <>
      <section className="stat-grid">
        <StatCard
          label="Send time"
          value={snapshot.schedules.dailyBroadcast.localTime}
          meta={snapshot.schedules.dailyBroadcast.cron}
          tone="accent"
          icon="send"
        />
        <StatCard
          label="Templates"
          value={formatNumber(snapshot.schedules.dailyBroadcast.templateCount)}
          meta="Rotating Bangla tip library"
          tone="info"
          icon="template"
        />
        <StatCard
          label="Current template"
          value={formatNumber(current.index)}
          meta={current.isoDate}
          tone="success"
          icon="spark"
        />
        <StatCard
          label="Known users"
          value={formatNumber(totalUsers)}
          meta="Broadcast sends from the current known audience"
          tone="warning"
          icon="users"
        />
      </section>

      <section className="main-grid" id="broadcast">
        <section className="panel">
          <PanelHeader
            title="Today's post"
            copy={`Template ${current.index} of ${snapshot.schedules.dailyBroadcast.templateCount}`}
          />
          <div className="broadcast-meta">
            <span className="status-chip">{current.isoDate}</span>
            <span className="status-chip">{current.key}</span>
          </div>
          <div className="message-preview">{current.text}</div>
        </section>

        <div className="stack-grid">
          <section className="panel">
            <PanelHeader title="Send settings" copy="Time, route, and campaign key." />
            <div className="summary-list">
              <div className="summary-row">
                <span>Send time</span>
                <strong>{snapshot.schedules.dailyBroadcast.localTime}</strong>
              </div>
              <div className="summary-row">
                <span>Cron</span>
                <strong>{snapshot.schedules.dailyBroadcast.cron}</strong>
              </div>
              <div className="summary-row">
                <span>Route</span>
                <strong>{snapshot.schedules.dailyBroadcast.path}</strong>
              </div>
              <div className="summary-row">
                <span>Current key</span>
                <strong>{current.key}</strong>
              </div>
            </div>
          </section>

          <section className="panel">
            <PanelHeader title="Audience size" copy="Users available for daily posts." />
            <div className="summary-list">
              <div className="summary-row">
                <span>Total known users</span>
                <strong>{formatNumber(totalUsers)}</strong>
              </div>
              <div className="summary-row">
                <span>Batch limit</span>
                <strong>{formatNumber(snapshot.schedules.followups.batchLimit)}</strong>
              </div>
              <div className="summary-row">
                <span>Template index</span>
                <strong>{formatNumber(current.index)}</strong>
              </div>
              <div className="summary-row">
                <span>Storage mode</span>
                <strong>{stats?.storageMode || "unknown"}</strong>
              </div>
            </div>
          </section>
        </div>
      </section>

      <section className="bottom-grid">
        <TopUsersPanel users={stats?.topUsers || []} />
        <MarketingPanel
          marketing={snapshot.overview?.marketing}
          totalUsers={totalUsers}
        />
      </section>
    </>
  );
}

export default function DashboardClient({ initialSnapshot, apiPath }) {
  const [snapshot, setSnapshot] = useState(() => normalizeSnapshot(initialSnapshot));
  const [error, setError] = useState("");
  const [isPending, startTransition] = useTransition();
  const [activeSection, setActiveSection] = useState("overview");

  const stats = snapshot.overview?.stats;
  const totalUsers = Number(stats?.totals?.uniqueUsers || 0);
  const proposalRequests = Number(stats?.totals?.proposalRequests || 0);
  const proposalSuccesses = Number(stats?.totals?.proposalSuccesses || 0);
  const proposalFailures = Number(stats?.totals?.proposalFailures || 0);
  const totalMessages = Number(stats?.totals?.messages || 0);
  const totalCommands = Number(stats?.totals?.commands || 0);
  const fullContact = Number(snapshot.overview?.contact?.withFullContact || 0);
  const withEmail = Number(snapshot.overview?.contact?.withEmail || 0);
  const withPhone = Number(snapshot.overview?.contact?.withPhone || 0);
  const awaitingContact = Number(snapshot.overview?.contact?.awaitingContact || 0);
  const partialContact = Math.max(withEmail + withPhone - fullContact * 2, 0);
  const noContact = Math.max(totalUsers - fullContact - partialContact, 0);
  const successRate = proposalRequests > 0 ? (proposalSuccesses / proposalRequests) * 100 : 0;
  const contactCoverage = totalUsers > 0 ? (fullContact / totalUsers) * 100 : 0;
  const health = getSystemHealth(snapshot);

  const activityBars = [
    {
      label: "Active in 24 hours",
      value: Number(stats?.activeUsers?.last24Hours || 0),
      tone: "accent"
    },
    {
      label: "Active in 7 days",
      value: Number(stats?.activeUsers?.last7Days || 0),
      tone: "info"
    },
    {
      label: "Active in 30 days",
      value: Number(stats?.activeUsers?.last30Days || 0),
      tone: "success"
    }
  ];

  const contactRows = [
    { label: "Full contact", value: fullContact, tone: "success" },
    { label: "Partial contact", value: partialContact, tone: "warning" },
    { label: "Awaiting capture", value: awaitingContact, tone: "accent" },
    { label: "No stored contact", value: noContact, tone: "muted" }
  ];

  useEffect(() => {
    function syncFromHash() {
      const hash = typeof window !== "undefined" ? window.location.hash.replace("#", "") : "";

      if (hash && SECTION_META[hash]) {
        setActiveSection(hash);
        return;
      }

      setActiveSection("overview");
    }

    syncFromHash();
    window.addEventListener("hashchange", syncFromHash);

    return () => window.removeEventListener("hashchange", syncFromHash);
  }, []);

  async function refreshSnapshot() {
    try {
      const response = await fetch(apiPath, { cache: "no-store" });
      const payload = await response.json();

      if (!response.ok) {
        throw new Error(payload?.error || "Dashboard refresh failed");
      }

      setSnapshot(normalizeSnapshot(payload.snapshot));
      setError("");
    } catch (refreshError) {
      setError(refreshError.message || "Dashboard refresh failed");
    }
  }

  useEffect(() => {
    const timer = window.setInterval(() => {
      startTransition(() => {
        void refreshSnapshot();
      });
    }, REFRESH_INTERVAL_MS);

    return () => window.clearInterval(timer);
  }, [apiPath, startTransition]);

  function handleRefresh() {
    startTransition(() => {
      void refreshSnapshot();
    });
  }

  function handleSectionChange(nextSection) {
    setActiveSection(nextSection);

    if (typeof window !== "undefined") {
      const url = new URL(window.location.href);
      url.hash = nextSection;
      window.history.replaceState({}, "", url);
    }
  }

  function renderSection() {
    if (activeSection === "audience") {
      return (
        <AudienceView
          snapshot={snapshot}
          stats={stats}
          totalUsers={totalUsers}
          fullContact={fullContact}
          contactRows={contactRows}
          activityBars={activityBars}
        />
      );
    }

    if (activeSection === "followups") {
      return <FollowupsView snapshot={snapshot} totalUsers={totalUsers} />;
    }

    if (activeSection === "broadcast") {
      return <BroadcastView snapshot={snapshot} stats={stats} totalUsers={totalUsers} />;
    }

    return (
      <OverviewView
        snapshot={snapshot}
        stats={stats}
        totalUsers={totalUsers}
        proposalRequests={proposalRequests}
        proposalSuccesses={proposalSuccesses}
        proposalFailures={proposalFailures}
        totalMessages={totalMessages}
        totalCommands={totalCommands}
        fullContact={fullContact}
        contactCoverage={contactCoverage}
        activityBars={activityBars}
        contactRows={contactRows}
        successRate={successRate}
      />
    );
  }

  const currentSection = SECTION_META[activeSection] || SECTION_META.overview;

  return (
    <main className="ops-layout">
      <aside className="sidebar">
        <div className="brand-block">
          <div className="brand-mark">PB</div>
          <div className="brand-text">
            <p className="brand-kicker">Telegram Proposal Bot</p>
            <h1 className="brand-title">Dashboard</h1>
          </div>
        </div>

        <nav className="sidebar-nav" aria-label="Dashboard sections">
          {Object.keys(SECTION_META).map((sectionId) => (
            <SectionButton
              key={sectionId}
              id={sectionId}
              activeSection={activeSection}
              onSelect={handleSectionChange}
            />
          ))}
        </nav>

        <div className="sidebar-card">
          <p className="sidebar-label">Environment</p>
          <div className="sidebar-meta-row">
            <span>Mode</span>
            <strong>{snapshot.environment?.mode || "local"}</strong>
          </div>
          <div className="sidebar-meta-row">
            <span>Storage</span>
            <strong>{stats?.storageMode || "unknown"}</strong>
          </div>
          <div className="sidebar-meta-row">
            <span>Key source</span>
            <strong>{snapshot.environment?.dashboardKeySource || "not set"}</strong>
          </div>
        </div>
      </aside>

      <div className="workspace">
        <header className="topbar" id="overview">
          <div className="page-intro">
            <p className="page-kicker">Operations / {currentSection.label}</p>
            <h1 className="page-title">{currentSection.title}</h1>
            <p className="page-copy">{currentSection.copy}</p>
          </div>

          <div className="topbar-actions">
            <div className={`status-chip tone-${health.tone}`}>System: {health.label}</div>
            <div className="status-chip">Updated: {formatDate(snapshot.generatedAt)}</div>
            <button className="refresh-button" onClick={handleRefresh} type="button">
              {isPending ? "Refreshing..." : "Refresh"}
            </button>
          </div>
        </header>

        {error ? <div className="error-banner">{error}</div> : null}

        {renderSection()}
      </div>
    </main>
  );
}

