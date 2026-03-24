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
  overview: { label: "Overview", title: "Operations", note: "What matters now" },
  audience: { label: "People", title: "Audience", note: "Users and signals" },
  followups: { label: "Queue", title: "Follow-ups", note: "Reminder load" },
  broadcast: { label: "Broadcast", title: "Daily tips", note: "Send and response" }
};

function isRecord(value) {
  return Boolean(value) && typeof value === "object" && !Array.isArray(value);
}

function asArray(value) {
  return Array.isArray(value) ? value : [];
}

function clampPercent(value) {
  return Math.max(0, Math.min(Number(value || 0), 100));
}

function getPercent(value, total) {
  return total > 0 ? (Number(value || 0) / total) * 100 : 0;
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
  const broadcastAnalytics = isRecord(dailyBroadcast.analytics)
    ? dailyBroadcast.analytics
    : {};
  const broadcastDelivery = isRecord(broadcastAnalytics.delivery)
    ? broadcastAnalytics.delivery
    : {};
  const broadcastFunnel = isRecord(broadcastAnalytics.funnel)
    ? broadcastAnalytics.funnel
    : {};
  const broadcastRates = isRecord(broadcastAnalytics.rates)
    ? broadcastAnalytics.rates
    : {};
  const broadcastSegments = isRecord(broadcastAnalytics.segments)
    ? broadcastAnalytics.segments
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
        ...followupSchedule,
        analytics: {
          supported:
            followupAnalytics.supported === undefined
              ? true
              : Boolean(followupAnalytics.supported),
          available: Boolean(followupAnalytics.available),
          isoDate: null,
          startedAt: null,
          openMetricLabel: "Opened (estimated)",
          openMetricNote:
            "Telegram bots do not expose exact read or open data. Opened is estimated from users who sent any message after the follow-up was delivered.",
          note: null,
          error: null,
          ...followupAnalytics,
          delivery: {
            sent: 0,
            failed: 0,
            disabled: 0,
            scheduled: 0,
            ...followupDelivery
          },
          funnel: {
            openedEstimateUsers: 0,
            startedWorkUsers: 0,
            startedWorkRequests: 0,
            createdProposalUsers: 0,
            createdProposalCount: 0,
            ...followupFunnel
          },
          rates: {
            openedEstimateRate: 0,
            startedWorkRate: 0,
            createdProposalRate: 0,
            ...followupRates
          },
          stageMix: {
            stage1: 0,
            stage2: 0,
            stage3: 0,
            ...followupStageMix
          },
          segmentMix: {
            onboarding: 0,
            pendingContact: 0,
            reactivation: 0,
            ...followupSegmentMix
          },
          segments: {
            fullContactUsers: 0,
            noContactUsers: 0,
            withAnyContactUsers: 0,
            warmUsers: 0,
            hotUsers: 0,
            hadProposalHistoryUsers: 0,
            firstTimeProposalUsers: 0,
            startedAfterFollowupUsers: 0,
            ...followupSegments
          },
          engagedUsers: asArray(followupAnalytics.engagedUsers)
        }
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
          slug: null,
          text: "No broadcast preview is available.",
          trackKey: null,
          trackLabel: null,
          keyword: null,
          ...currentBroadcast
        },
        analytics: {
          supported:
            broadcastAnalytics.supported === undefined
              ? true
              : Boolean(broadcastAnalytics.supported),
          available: Boolean(broadcastAnalytics.available),
          campaignKey: null,
          startedAt: null,
          completedAt: null,
          trackKey: null,
          trackLabel: null,
          keyword: null,
          isoDate: null,
          slug: null,
          index: 0,
          note: null,
          error: null,
          openMetricLabel: "Opened (estimated)",
          openMetricNote:
            "Telegram bots do not expose exact read or open data. Opened is estimated from users who sent any message after delivery.",
          ...broadcastAnalytics,
          delivery: {
            totalRecipients: 0,
            sent: 0,
            failed: 0,
            sending: 0,
            ...broadcastDelivery
          },
          funnel: {
            openedEstimateUsers: 0,
            ctaReplyUsers: 0,
            ctaReplyCount: 0,
            proposalUsers: 0,
            proposalRequests: 0,
            proposalSuccessUsers: 0,
            proposalSuccesses: 0,
            ...broadcastFunnel
          },
          rates: {
            openedEstimateRate: 0,
            ctaReplyRate: 0,
            proposalUserRate: 0,
            proposalRequestRate: 0,
            proposalSuccessRate: 0,
            ...broadcastRates
          },
          segments: {
            fullContactUsers: 0,
            noContactUsers: 0,
            withAnyContactUsers: 0,
            warmUsers: 0,
            hotUsers: 0,
            withProposalHistoryUsers: 0,
            newToProposalUsers: 0,
            repliedAndRequestedUsers: 0,
            ...broadcastSegments
          },
          interestedUsers: asArray(broadcastAnalytics.interestedUsers)
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
  return fullName || `User ${user?.userId || "-"}`;
}

function getUserInitials(user) {
  const source = [user?.firstName, user?.lastName].filter(Boolean).join(" ").trim() || user?.username || "User";
  return source
    .split(/\s+/)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() || "")
    .join("") || "U";
}

function getMissingContactCopy(user) {
  const missing = [];

  if (!user?.hasPhoneNumber) {
    missing.push("phone");
  }

  if (!user?.hasEmail) {
    missing.push("email");
  }

  return missing.length ? `Need ${missing.join(" + ")}` : "Contact saved";
}

function getContactStatus(user) {
  if (user?.hasEmail && user?.hasPhoneNumber) {
    return { tone: "success", label: "Full" };
  }

  if (user?.hasEmail || user?.hasPhoneNumber) {
    return { tone: "warning", label: "Partial" };
  }

  if (user?.pendingProposalText) {
    return { tone: "accent", label: "Pending" };
  }

  return { tone: "muted", label: "None" };
}

function getMarketingStatus(user) {
  if (!user?.marketingTrack || Number(user?.marketingSignalCount || 0) < 1) {
    return null;
  }

  const stage = user?.marketingStage || "engaged";
  const tone = stage === "hot" ? "danger" : stage === "warm" ? "warning" : "info";
  const label = MARKETING_TRACK_LABELS[user.marketingTrack] || user.marketingTrack;

  return { tone, label, stage };
}

function getFollowupStatus(user) {
  if (user?.lastFollowupErrorAt) {
    return { tone: "danger", label: "Error" };
  }

  const stage = Number(user?.followupStage || 0);

  if (stage >= 3) {
    return { tone: "success", label: "Done" };
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
function Glyph({ icon }) {
  switch (icon) {
    case "users":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M16 19v-1.2c0-1.9-1.7-3.3-4-3.3s-4 1.4-4 3.3V19" />
          <path d="M12 12a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z" />
          <path d="M19 18.2v-.4c0-1.3-.8-2.4-2.2-2.9" />
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
    case "send":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M4 11.8 19.4 4.9c.7-.3 1.4.4 1.1 1.1L13.6 21.4c-.3.7-1.3.6-1.5-.1l-1.7-5.5L4.9 14c-.8-.2-.9-1.2-.1-1.5l5.5-1.8" />
          <path d="M10.4 15.8 20 6.2" />
        </svg>
      );
    case "clock":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <circle cx="12" cy="12" r="8.5" />
          <path d="M12 8v4.5l3 1.8" />
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <circle cx="12" cy="12" r="8.5" />
        </svg>
      );
  }
}

function TonePill({ tone = "muted", children }) {
  return <span className={`tone-pill tone-${tone}`}>{children}</span>;
}

function SectionButton({ id, activeSection, onSelect, badge }) {
  return (
    <button
      className={`nav-item ${activeSection === id ? "nav-item-active" : ""}`}
      onClick={() => onSelect(id)}
      type="button"
    >
      <span>{SECTION_META[id].label}</span>
      {badge ? <span className="nav-count">{badge}</span> : null}
    </button>
  );
}

function HeroFact({ label, value }) {
  return (
    <div className="hero-fact">
      <span>{label}</span>
      <strong>{value}</strong>
    </div>
  );
}

function HeroPanel({ eyebrow, title, value, meta, tone = "accent", children }) {
  return (
    <section className={`hero-panel hero-${tone}`}>
      <span className="hero-kicker">{eyebrow}</span>
      <h2 className="hero-title">{title}</h2>
      <div className="hero-main">
        <strong className="hero-value">{value}</strong>
        <span className="hero-meta">{meta}</span>
      </div>
      {children}
    </section>
  );
}

function RingMeter({ label, value, tone = "accent", note, suffix = "%", decimals = 0 }) {
  const safeValue = Number(value || 0);
  const progress = clampPercent(safeValue);
  const formatted = decimals > 0 ? safeValue.toFixed(decimals) : Math.round(safeValue);

  return (
    <article className="ring-card">
      <div className={`ring-track tone-${tone}`} style={{ "--progress": `${progress}%` }}>
        <div className="ring-center">
          <strong>{formatted}{suffix}</strong>
        </div>
      </div>
      <div className="ring-copy">
        <span className="ring-label">{label}</span>
        <span className="ring-note">{note}</span>
      </div>
    </article>
  );
}

function MetricCard({ label, value, meta, tone = "accent", icon = "users" }) {
  return (
    <article className="metric-card">
      <div className="metric-top">
        <span className={`metric-icon tone-${tone}`}>
          <Glyph icon={icon} />
        </span>
        <span className="metric-label">{label}</span>
      </div>
      <strong className="metric-value">{value}</strong>
      {meta ? <span className="metric-meta">{meta}</span> : null}
    </article>
  );
}

function SignalCard({ label, value, meta, tone = "accent" }) {
  return (
    <article className={`signal-card signal-${tone}`}>
      <span className="signal-label">{label}</span>
      <strong className="signal-value">{value}</strong>
      <span className="signal-meta">{meta}</span>
    </article>
  );
}

function ActionCard({ label, value, meta, hint, tone = "accent" }) {
  return (
    <article className={`action-card action-${tone}`}>
      <div className="action-top">
        <span className="action-label">{label}</span>
        <span className={`action-dot tone-${tone}`} aria-hidden="true" />
      </div>
      <strong className="action-value">{value}</strong>
      <strong className="action-meta">{meta}</strong>
      {hint ? <span className="action-hint">{hint}</span> : null}
    </article>
  );
}

function PanelHeader({ title, action }) {
  return (
    <div className="panel-header">
      <h2 className="panel-title">{title}</h2>
      {action}
    </div>
  );
}

function VisualBar({ label, value, total, tone = "accent" }) {
  const width = total > 0 ? Math.min((value / total) * 100, 100) : 0;

  return (
    <div className="visual-bar-row">
      <div className="visual-bar-top">
        <span>{label}</span>
        <strong>{formatNumber(value)}</strong>
      </div>
      <div className="visual-bar-track">
        <div className={`visual-bar-fill tone-${tone}`} style={{ width: `${width}%` }} />
      </div>
    </div>
  );
}

function MiniStat({ label, value }) {
  return (
    <div className="mini-stat">
      <span>{label}</span>
      <strong>{value}</strong>
    </div>
  );
}

function EmptyState({ label }) {
  return <div className="empty-state">{label}</div>;
}
function UserCard({ user }) {
  const contact = getContactStatus(user);
  const marketing = getMarketingStatus(user);
  const followup = getFollowupStatus(user);

  return (
    <article className="user-card">
      <div className="user-head">
        <div className="user-avatar">{getUserInitials(user)}</div>
        <div className="user-copy">
          <strong className="user-name">{getUserLabel(user)}</strong>
          <span className="user-subtle">{user.userId || "-"}</span>
        </div>
      </div>
      <div className="user-stats">
        <span>{formatNumber(user.proposalRequests)} req</span>
        <span>{formatNumber(user.messageCount)} msg</span>
        <span>{formatDate(user.lastSeenAt)}</span>
      </div>
      <div className="user-tags">
        <TonePill tone={contact.tone}>{contact.label}</TonePill>
        <TonePill tone={followup.tone}>{followup.label}</TonePill>
        {marketing ? <TonePill tone={marketing.tone}>{marketing.label}</TonePill> : null}
      </div>
    </article>
  );
}

function TopUserCard({ user, index }) {
  return (
    <article className="rank-card">
      <span className="rank-badge">{String(index + 1).padStart(2, "0")}</span>
      <div className="user-head user-head-tight">
        <div className="user-avatar user-avatar-small">{getUserInitials(user)}</div>
        <div className="user-copy">
          <strong className="user-name">{getUserLabel(user)}</strong>
          <span className="user-subtle">{formatNumber(user.proposalRequests)} requests</span>
        </div>
      </div>
      <div className="rank-metrics">
        <span>{formatNumber(user.proposalRequests)} req</span>
        <span>{formatNumber(user.messageCount)} msg</span>
      </div>
    </article>
  );
}

function ScheduleCard({ label, time, meta, tone = "accent" }) {
  return (
    <article className={`schedule-card schedule-${tone}`}>
      <span className="schedule-label">{label}</span>
      <strong className="schedule-time">{time}</strong>
      <span className="schedule-meta">{meta}</span>
    </article>
  );
}

function FocusPanel({ title, items, emptyLabel, tone = "muted" }) {
  return (
    <section className="panel">
      <PanelHeader title={title} action={<TonePill tone={tone}>{items.length}</TonePill>} />
      <div className="focus-list">
        {items.length ? (
          items.slice(0, 4).map((item) => (
            <article className="focus-row" key={item.id}>
              <div className="focus-main">
                <strong className="focus-title">{item.title}</strong>
                <span className="focus-subtle">{item.subtitle}</span>
              </div>
              <div className="focus-badges">
                {(item.badges || []).map((badge) => (
                  <TonePill key={`${item.id}-${badge.label}`} tone={badge.tone}>
                    {badge.label}
                  </TonePill>
                ))}
              </div>
            </article>
          ))
        ) : (
          <EmptyState label={emptyLabel} />
        )}
      </div>
    </section>
  );
}

function buildPendingContactItems(users) {
  return users
    .filter((user) => user.pendingProposalText)
    .map((user) => ({
      id: `pending-${user.userId}`,
      title: getUserLabel(user),
      subtitle: getMissingContactCopy(user),
      badges: [
        { tone: getContactStatus(user).tone, label: getContactStatus(user).label },
        { tone: "accent", label: "Saved draft" }
      ]
    }));
}

function buildHotLeadItems(users) {
  return users
    .filter((user) => {
      const status = getMarketingStatus(user);
      return status && (status.stage === "hot" || status.stage === "warm");
    })
    .sort((left, right) => Number(right.marketingSignalCount || 0) - Number(left.marketingSignalCount || 0))
    .map((user) => {
      const marketing = getMarketingStatus(user);
      return {
        id: `lead-${user.userId}`,
        title: getUserLabel(user),
        subtitle: `${formatNumber(user.marketingSignalCount)} signals`,
        badges: [
          { tone: marketing.tone, label: marketing.label },
          { tone: "muted", label: formatDate(user.lastSeenAt) }
        ]
      };
    });
}

function buildQueueIssueItems(users) {
  return users
    .filter((user) => user.lastFollowupErrorAt || Number(user.followupStage || 0) >= 2)
    .sort((left, right) => Number(Boolean(right.lastFollowupErrorAt)) - Number(Boolean(left.lastFollowupErrorAt)))
    .map((user) => {
      const followup = getFollowupStatus(user);
      return {
        id: `queue-${user.userId}`,
        title: getUserLabel(user),
        subtitle: user.lastFollowupErrorAt ? `Error at ${formatDate(user.lastFollowupErrorAt)}` : `Waiting in ${followup.label}`,
        badges: [
          { tone: followup.tone, label: followup.label },
          { tone: getContactStatus(user).tone, label: getContactStatus(user).label }
        ]
      };
    });
}

function buildSignalItems(users) {
  return users
    .filter((user) => Number(user.marketingSignalCount || 0) > 0)
    .sort((left, right) => Number(right.marketingSignalCount || 0) - Number(left.marketingSignalCount || 0))
    .map((user) => {
      const marketing = getMarketingStatus(user);
      return {
        id: `signal-${user.userId}`,
        title: getUserLabel(user),
        subtitle: `${formatNumber(user.marketingSignalCount)} replies`,
        badges: [
          marketing ? { tone: marketing.tone, label: marketing.label } : { tone: "muted", label: "Signal" },
          { tone: "muted", label: formatDate(user.lastSeenAt) }
        ]
      };
    });
}
function buildFollowupEngagedItems(users) {
  return users.map((user) => {
    const contact = getContactStatus(user);
    const marketing = getMarketingStatus(user);
    const activityLabel = user.createdProposal
      ? "Created"
      : user.startedWork
        ? "Started"
        : "Opened";
    const activityTone = user.createdProposal
      ? "success"
      : user.startedWork
        ? "warning"
        : "info";

    return {
      id: `followup-${user.userId}`,
      title: getUserLabel(user),
      subtitle: `${activityLabel} after follow-up | ${formatDate(user.lastActivityAt || user.lastSeenAt)}`,
      badges: [
        { tone: contact.tone, label: contact.label },
        marketing ? { tone: marketing.tone, label: marketing.label } : { tone: "muted", label: `Stage ${Number(user.followupStage || 0)}` },
        { tone: activityTone, label: activityLabel }
      ]
    };
  });
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
  successRate,
  recentUsers
}) {
  const dueNow = Number(snapshot.overview.followups.dueNow || 0);
  const batchLimit = Number(snapshot.schedules.followups.batchLimit || 25);
  const awaitingContact = Number(snapshot.overview.contact.awaitingContact || 0);
  const interestedUsers = Number(snapshot.overview.marketing.totalInterested || 0);
  const hotLeads = Number(snapshot.overview.marketing.hotLeads || 0);
  const pendingItems = buildPendingContactItems(recentUsers);
  const hotLeadItems = buildHotLeadItems(recentUsers);
  const queueIssueItems = buildQueueIssueItems(recentUsers);
  const actionItems = [
    {
      label: "Queue load",
      value: `${formatNumber(dueNow)}/${formatNumber(batchLimit)}`,
      meta: dueNow > batchLimit ? "Needs extra runs" : "Queue stable",
      hint: dueNow > batchLimit ? "Backlog high" : "On schedule",
      tone: dueNow > batchLimit ? "warning" : "success"
    },
    {
      label: "Contact recovery",
      value: formatNumber(awaitingContact),
      meta: awaitingContact ? "Drafts blocked" : "No blocked drafts",
      hint: awaitingContact ? "Recover users" : "Clear",
      tone: awaitingContact ? "accent" : "muted"
    },
    {
      label: "Hot leads",
      value: formatNumber(hotLeads),
      meta: interestedUsers ? `${formatNumber(interestedUsers)} interested` : "No live signals",
      hint: hotLeads ? "Best to contact" : "Warm up audience",
      tone: hotLeads ? "danger" : "muted"
    },
    {
      label: "Proposal health",
      value: formatPercent(successRate),
      meta: proposalFailures ? `${formatNumber(proposalFailures)} failed` : "Generation stable",
      hint: proposalFailures ? "Check failures" : "Healthy",
      tone: proposalFailures ? "warning" : "success"
    }
  ];

  return (
    <>
      <section className="hero-grid">
        <HeroPanel
          eyebrow="Live snapshot"
          title="System pulse"
          value={formatNumber(totalUsers)}
          meta="Known users in the bot"
          tone="accent"
        >
          <div className="hero-fact-grid">
            <HeroFact label="Requests" value={formatNumber(proposalRequests)} />
            <HeroFact label="Due now" value={formatNumber(dueNow)} />
            <HeroFact label="Hot leads" value={formatNumber(hotLeads)} />
          </div>
        </HeroPanel>

        <div className="ring-grid">
          <RingMeter
            label="Contact"
            value={contactCoverage}
            note={`${formatNumber(fullContact)} full profiles`}
            tone="success"
            decimals={1}
          />
          <RingMeter
            label="Success"
            value={successRate}
            note={`${formatNumber(proposalSuccesses)} successful`}
            tone="accent"
            decimals={1}
          />
          <RingMeter
            label="Weekly active"
            value={getPercent(stats.activeUsers.last7Days, totalUsers)}
            note={`${formatNumber(stats.activeUsers.last7Days)} active in 7d`}
            tone="info"
            decimals={1}
          />
        </div>
      </section>

      <section className="action-grid">
        {actionItems.map((item) => (
          <ActionCard key={item.label} {...item} />
        ))}
      </section>

      <section className="content-grid content-grid-main">
        <section className="panel panel-large">
          <PanelHeader title="Activity" action={<TonePill tone="muted">30d window</TonePill>} />
          <div className="visual-bar-stack">
            {activityBars.map((item) => (
              <VisualBar
                key={item.label}
                label={item.label}
                value={item.value}
                total={Math.max(totalUsers, 1)}
                tone={item.tone}
              />
            ))}
          </div>
          <div className="mini-stat-grid">
            <MiniStat label="Messages" value={formatNumber(totalMessages)} />
            <MiniStat label="Commands" value={formatNumber(totalCommands)} />
            <MiniStat label="Success" value={formatPercent(successRate)} />
            <MiniStat label="Failures" value={formatNumber(proposalFailures)} />
          </div>
        </section>

        <section className="panel">
          <PanelHeader title="Pipeline" />
          <div className="compact-stack">
            <VisualBar label="Active in 7d" value={stats.activeUsers.last7Days} total={Math.max(totalUsers, 1)} tone="accent" />
            <VisualBar label="Interested" value={interestedUsers} total={Math.max(totalUsers, 1)} tone="info" />
            <VisualBar label="Full contact" value={fullContact} total={Math.max(totalUsers, 1)} tone="success" />
            <VisualBar label="Awaiting contact" value={awaitingContact} total={Math.max(totalUsers, 1)} tone="warning" />
          </div>
        </section>
      </section>

      <section className="content-grid">
        <FocusPanel title="Pending contact" items={pendingItems} emptyLabel="No stalled proposal users" tone="warning" />
        <FocusPanel title="Hot leads" items={hotLeadItems} emptyLabel="No hot leads in recent users" tone="danger" />
      </section>

      <section className="content-grid">
        <FocusPanel title="Queue issues" items={queueIssueItems} emptyLabel="No visible queue problems" tone="accent" />
        <section className="panel">
          <PanelHeader title="Top users" action={<TonePill tone="muted">{stats.topUsers.length}</TonePill>} />
          <div className="rank-grid">
            {stats.topUsers.length ? (
              stats.topUsers.slice(0, 4).map((user, index) => (
                <TopUserCard key={`${user.userId || index}-${index}`} user={user} index={index} />
              ))
            ) : (
              <EmptyState label="No user data" />
            )}
          </div>
        </section>
      </section>
    </>
  );
}

function AudienceView({
  snapshot,
  stats,
  totalUsers,
  fullContact,
  contactCoverage,
  contactRows,
  marketingTracks,
  recentUsers
}) {
  const signalItems = buildSignalItems(recentUsers);
  const engagedUsers = Number(snapshot.overview.marketing.totalInterested || 0);
  const hotLeads = Number(snapshot.overview.marketing.hotLeads || 0);

  return (
    <>
      <section className="hero-grid">
        <HeroPanel
          eyebrow="Audience"
          title="People pulse"
          value={formatNumber(totalUsers)}
          meta="Known users"
          tone="info"
        >
          <div className="hero-fact-grid">
            <HeroFact label="24h active" value={formatNumber(stats.activeUsers.last24Hours)} />
            <HeroFact label="Interested" value={formatNumber(engagedUsers)} />
            <HeroFact label="Hot leads" value={formatNumber(hotLeads)} />
          </div>
        </HeroPanel>

        <div className="ring-grid">
          <RingMeter
            label="Contact"
            value={contactCoverage}
            note={`${formatNumber(fullContact)} full contacts`}
            tone="success"
            decimals={1}
          />
          <RingMeter
            label="Interested"
            value={getPercent(engagedUsers, totalUsers)}
            note={`${formatNumber(engagedUsers)} replied`}
            tone="info"
            decimals={1}
          />
          <RingMeter
            label="Weekly active"
            value={getPercent(stats.activeUsers.last7Days, totalUsers)}
            note={`${formatNumber(stats.activeUsers.last7Days)} active in 7d`}
            tone="accent"
            decimals={1}
          />
        </div>
      </section>

      <section className="content-grid">
        <section className="panel">
          <PanelHeader title="Contact mix" />
          <div className="compact-stack">
            {contactRows.map((item) => (
              <VisualBar
                key={item.label}
                label={item.label}
                value={item.value}
                total={Math.max(totalUsers, 1)}
                tone={item.tone}
              />
            ))}
          </div>
        </section>

        <section className="panel">
          <PanelHeader title="Interest map" />
          <div className="compact-stack">
            {marketingTracks.length ? (
              marketingTracks.map((item) => (
                <VisualBar
                  key={item.trackKey}
                  label={item.label}
                  value={item.count}
                  total={Math.max(totalUsers, 1)}
                  tone="info"
                />
              ))
            ) : (
              <EmptyState label="No signals yet" />
            )}
          </div>
        </section>
      </section>

      <section className="content-grid">
        <FocusPanel title="Recent signal users" items={signalItems} emptyLabel="No signal activity in recent users" tone="info" />
        <section className="panel">
          <PanelHeader title="Recent users" action={<TonePill tone="muted">{recentUsers.length}</TonePill>} />
          <div className="user-grid">
            {recentUsers.length ? (
              recentUsers.slice(0, 6).map((user) => <UserCard key={user.userId} user={user} />)
            ) : (
              <EmptyState label="No recent users" />
            )}
          </div>
        </section>
      </section>
    </>
  );
}
function FollowupsView({ snapshot, totalUsers, recentUsers }) {
  const dueNow = Number(snapshot.overview.followups.dueNow || 0);
  const stage0 = Number(snapshot.overview.followups.dueByStage.stage0 || 0);
  const stage1 = Number(snapshot.overview.followups.dueByStage.stage1 || 0);
  const stage2 = Number(snapshot.overview.followups.dueByStage.stage2 || 0);
  const errors = Number(snapshot.overview.followups.errors || 0);
  const completedSequence = Number(snapshot.overview.followups.completedSequence || 0);
  const batchLimit = Number(snapshot.schedules.followups.batchLimit || 25);
  const analytics = snapshot.schedules.followups.analytics;
  const sent = Number(analytics.delivery.sent || 0);
  const failed = Number(analytics.delivery.failed || 0);
  const disabled = Number(analytics.delivery.disabled || 0);
  const scheduled = Number(analytics.delivery.scheduled || 0);
  const openedEstimateUsers = Number(analytics.funnel.openedEstimateUsers || 0);
  const startedWorkUsers = Number(analytics.funnel.startedWorkUsers || 0);
  const startedWorkRequests = Number(analytics.funnel.startedWorkRequests || 0);
  const createdProposalUsers = Number(analytics.funnel.createdProposalUsers || 0);
  const createdProposalCount = Number(analytics.funnel.createdProposalCount || 0);
  const openLabel = analytics.openMetricLabel || "Opened (estimated)";
  const queueItems = buildQueueIssueItems(recentUsers);
  const engagedItems = buildFollowupEngagedItems(asArray(analytics.engagedUsers));
  const analyticsTone = analytics.error ? "warning" : sent > 0 ? "success" : "accent";
  const analyticsStatusTone = analytics.error ? "warning" : analytics.available ? "success" : "muted";
  const engagedTotal = Math.max(asArray(analytics.engagedUsers).length, 1);
  const engagedRows = [
    { label: "Full contact", value: Number(analytics.segments.fullContactUsers || 0), tone: "success" },
    { label: "Any contact", value: Number(analytics.segments.withAnyContactUsers || 0), tone: "info" },
    { label: "Warm", value: Number(analytics.segments.warmUsers || 0), tone: "warning" },
    { label: "Hot", value: Number(analytics.segments.hotUsers || 0), tone: "danger" },
    { label: "Had history", value: Number(analytics.segments.hadProposalHistoryUsers || 0), tone: "accent" },
    { label: "Started work", value: Number(analytics.segments.startedAfterFollowupUsers || 0), tone: "success" }
  ];

  return (
    <>
      <section className="hero-grid">
        <HeroPanel
          eyebrow="Follow-up analytics"
          title="Latest sent follow-up"
          value={formatNumber(sent)}
          meta={analytics.isoDate ? `${analytics.isoDate} | ${snapshot.schedules.followups.localTime}` : `Batch ${formatNumber(batchLimit)} at ${snapshot.schedules.followups.localTime}`}
          tone={analyticsTone}
        >
          <div className="hero-fact-grid">
            <HeroFact label="Opened est." value={formatNumber(openedEstimateUsers)} />
            <HeroFact label="Started work" value={formatNumber(startedWorkUsers)} />
            <HeroFact label="Created" value={formatNumber(createdProposalUsers)} />
          </div>
        </HeroPanel>

        <div className="ring-grid">
          <RingMeter
            label={openLabel}
            value={Number(analytics.rates.openedEstimateRate || 0)}
            note={`${formatNumber(openedEstimateUsers)} users`}
            tone="accent"
            decimals={1}
          />
          <RingMeter
            label="Started work"
            value={Number(analytics.rates.startedWorkRate || 0)}
            note={`${formatNumber(startedWorkUsers)} users`}
            tone="warning"
            decimals={1}
          />
          <RingMeter
            label="Created proposal"
            value={Number(analytics.rates.createdProposalRate || 0)}
            note={`${formatNumber(createdProposalUsers)} users`}
            tone="success"
            decimals={1}
          />
        </div>
      </section>

      <section className="content-grid">
        <section className="panel">
          <PanelHeader
            title="Latest follow-up result"
            action={<TonePill tone={analyticsStatusTone}>{analytics.error ? "Check schema" : analytics.available ? "Tracked" : "Waiting"}</TonePill>}
          />
          <div className="mini-stat-grid mini-stat-grid-tight">
            <MiniStat label="Sent" value={formatNumber(sent)} />
            <MiniStat label="Failed" value={formatNumber(failed)} />
            <MiniStat label="Disabled" value={formatNumber(disabled)} />
            <MiniStat label="Scheduled" value={formatNumber(scheduled)} />
          </div>
          <div className="divider" />
          <div className="mini-stat-grid mini-stat-grid-tight">
            <MiniStat label="Day 1" value={formatNumber(analytics.stageMix.stage1)} />
            <MiniStat label="Day 3" value={formatNumber(analytics.stageMix.stage2)} />
            <MiniStat label="Day 7" value={formatNumber(analytics.stageMix.stage3)} />
            <MiniStat label="Requests" value={formatNumber(startedWorkRequests)} />
          </div>
          <div className="divider" />
          <div className="mini-stat-grid mini-stat-grid-tight">
            <MiniStat label="Onboarding" value={formatNumber(analytics.segmentMix.onboarding)} />
            <MiniStat label="Pending" value={formatNumber(analytics.segmentMix.pendingContact)} />
            <MiniStat label="Reactivation" value={formatNumber(analytics.segmentMix.reactivation)} />
            <MiniStat label="Created" value={formatNumber(createdProposalCount)} />
          </div>
          {analytics.note ? <p className="user-subtle">{analytics.note}</p> : null}
          {sent > 0 && analytics.openMetricNote && analytics.openMetricNote !== analytics.note ? <p className="user-subtle">{analytics.openMetricNote}</p> : null}
          {analytics.error ? <p className="user-subtle">{analytics.error}</p> : null}
        </section>

        <section className="panel">
          <PanelHeader title="Queue health" />
          <div className="schedule-grid schedule-grid-single">
            <ScheduleCard
              label="Follow-up"
              time={snapshot.schedules.followups.localTime}
              meta={snapshot.schedules.followups.cron}
              tone="warning"
            />
          </div>
          <div className="divider" />
          <div className="mini-stat-grid mini-stat-grid-tight">
            <MiniStat label="Due" value={formatNumber(dueNow)} />
            <MiniStat label="Batch" value={formatNumber(batchLimit)} />
            <MiniStat label="Errors" value={formatNumber(errors)} />
            <MiniStat label="Done" value={formatNumber(completedSequence)} />
          </div>
          <div className="divider" />
          <div className="compact-stack">
            <VisualBar label="Stage 0 due" value={stage0} total={Math.max(totalUsers, 1)} tone="accent" />
            <VisualBar label="Stage 1 due" value={stage1} total={Math.max(totalUsers, 1)} tone="info" />
            <VisualBar label="Stage 2 due" value={stage2} total={Math.max(totalUsers, 1)} tone="warning" />
            <VisualBar label="Completed" value={completedSequence} total={Math.max(totalUsers, 1)} tone="success" />
          </div>
        </section>
      </section>

      <section className="content-grid">
        <section className="panel">
          <PanelHeader title="Follow-up funnel" />
          {sent > 0 ? (
            <>
              <div className="compact-stack">
                <VisualBar label="Sent" value={sent} total={Math.max(scheduled, sent, 1)} tone="accent" />
                <VisualBar label={openLabel} value={openedEstimateUsers} total={Math.max(sent, 1)} tone="info" />
                <VisualBar label="Started work users" value={startedWorkUsers} total={Math.max(sent, 1)} tone="warning" />
                <VisualBar label="Created proposal users" value={createdProposalUsers} total={Math.max(sent, 1)} tone="success" />
              </div>
              <div className="divider" />
              <div className="mini-stat-grid mini-stat-grid-wide">
                <MiniStat label="Opened est." value={formatNumber(openedEstimateUsers)} />
                <MiniStat label="Started requests" value={formatNumber(startedWorkRequests)} />
                <MiniStat label="Created users" value={formatNumber(createdProposalUsers)} />
                <MiniStat label="Created count" value={formatNumber(createdProposalCount)} />
              </div>
            </>
          ) : (
            <EmptyState label="No sent follow-up result is available yet" />
          )}
        </section>

        <section className="panel">
          <PanelHeader title="Who reacted after follow-up" action={<TonePill tone="info">{formatNumber(asArray(analytics.engagedUsers).length)}</TonePill>} />
          {asArray(analytics.engagedUsers).length ? (
            <>
              <div className="compact-stack">
                {engagedRows.map((item) => (
                  <VisualBar
                    key={item.label}
                    label={item.label}
                    value={item.value}
                    total={engagedTotal}
                    tone={item.tone}
                  />
                ))}
              </div>
              <div className="divider" />
              <div className="mini-stat-grid mini-stat-grid-tight">
                <MiniStat label="No contact" value={formatNumber(analytics.segments.noContactUsers)} />
                <MiniStat label="First time" value={formatNumber(analytics.segments.firstTimeProposalUsers)} />
                <MiniStat label="Warm" value={formatNumber(analytics.segments.warmUsers)} />
                <MiniStat label="Hot" value={formatNumber(analytics.segments.hotUsers)} />
              </div>
            </>
          ) : (
            <EmptyState label="No post follow-up activity yet" />
          )}
        </section>
      </section>

      <section className="content-grid">
        <FocusPanel title="Active after follow-up" items={engagedItems} emptyLabel="No users have interacted after follow-up yet" tone="info" />
        <FocusPanel title="Queue issues" items={queueItems} emptyLabel="No queue issues in recent users" tone="danger" />
      </section>
    </>
  );
}

function BroadcastView({ snapshot, totalUsers }) {
  const schedule = snapshot.schedules.dailyBroadcast;
  const current = schedule.current;
  const analytics = schedule.analytics;
  const interestedUsers = asArray(analytics.interestedUsers);
  const delivered = Number(analytics.delivery.sent || 0);
  const totalRecipients = Number(analytics.delivery.totalRecipients || delivered || totalUsers || 0);
  const failed = Number(analytics.delivery.failed || 0);
  const openedEstimateUsers = Number(analytics.funnel.openedEstimateUsers || 0);
  const ctaReplyUsers = Number(analytics.funnel.ctaReplyUsers || 0);
  const ctaReplyCount = Number(analytics.funnel.ctaReplyCount || 0);
  const proposalUsers = Number(analytics.funnel.proposalUsers || 0);
  const proposalRequests = Number(analytics.funnel.proposalRequests || 0);
  const proposalSuccessUsers = Number(analytics.funnel.proposalSuccessUsers || 0);
  const proposalSuccesses = Number(analytics.funnel.proposalSuccesses || 0);
  const openLabel = analytics.openMetricLabel || "Opened (estimated)";
  const latestTrackLabel = analytics.trackLabel || current.trackLabel || "-";
  const interestedItems = buildInterestedProfileItems(interestedUsers);
  const latestTone = analytics.error ? "warning" : delivered > 0 ? "success" : "accent";
  const latestStatusTone = analytics.error ? "warning" : analytics.available ? "success" : "muted";
  const segmentTotal = Math.max(interestedUsers.length, 1);
  const segmentRows = [
    { label: "Full contact", value: Number(analytics.segments.fullContactUsers || 0), tone: "success" },
    { label: "Any contact", value: Number(analytics.segments.withAnyContactUsers || 0), tone: "info" },
    { label: "Warm", value: Number(analytics.segments.warmUsers || 0), tone: "warning" },
    { label: "Hot", value: Number(analytics.segments.hotUsers || 0), tone: "danger" },
    { label: "Had proposal history", value: Number(analytics.segments.withProposalHistoryUsers || 0), tone: "accent" },
    { label: "Replied and requested", value: Number(analytics.segments.repliedAndRequestedUsers || 0), tone: "success" }
  ];

  return (
    <>
      <section className="hero-grid">
        <HeroPanel
          eyebrow="Broadcast analytics"
          title="Latest sent tip"
          value={formatNumber(delivered)}
          meta={analytics.campaignKey ? `${analytics.campaignKey} | ${formatDate(analytics.startedAt)}` : `${schedule.localTime} send window`}
          tone={latestTone}
        >
          <div className="hero-fact-grid">
            <HeroFact label="Opened est." value={formatNumber(openedEstimateUsers)} />
            <HeroFact label="CTA replies" value={formatNumber(ctaReplyUsers)} />
            <HeroFact label="Proposal users" value={formatNumber(proposalUsers)} />
          </div>
        </HeroPanel>

        <div className="ring-grid">
          <RingMeter
            label={openLabel}
            value={Number(analytics.rates.openedEstimateRate || 0)}
            note={`${formatNumber(openedEstimateUsers)} users`}
            tone="accent"
            decimals={1}
          />
          <RingMeter
            label="CTA replies"
            value={Number(analytics.rates.ctaReplyRate || 0)}
            note={`${formatNumber(ctaReplyUsers)} users`}
            tone="info"
            decimals={1}
          />
          <RingMeter
            label="Proposal users"
            value={Number(analytics.rates.proposalUserRate || 0)}
            note={`${formatNumber(proposalUsers)} users`}
            tone="success"
            decimals={1}
          />
        </div>
      </section>

      <section className="content-grid content-grid-main">
        <section className="panel panel-large">
          <PanelHeader title="Today's tip copy" action={<TonePill tone="muted">{current.key}</TonePill>} />
          <div className="message-preview">{current.text}</div>
          <div className="divider" />
          <div className="mini-stat-grid mini-stat-grid-wide">
            <MiniStat label="Template" value={formatNumber(current.index)} />
            <MiniStat label="Track" value={current.trackLabel || "-"} />
            <MiniStat label="Keyword" value={current.keyword || "-"} />
            <MiniStat label="Audience" value={formatNumber(totalUsers)} />
          </div>
        </section>

        <section className="panel">
          <PanelHeader
            title="Latest campaign result"
            action={<TonePill tone={latestStatusTone}>{analytics.error ? "Check schema" : analytics.available ? "Tracked" : "Waiting"}</TonePill>}
          />
          <div className="mini-stat-grid mini-stat-grid-tight">
            <MiniStat label="Delivered" value={formatNumber(delivered)} />
            <MiniStat label="Failed" value={formatNumber(failed)} />
            <MiniStat label="Reply count" value={formatNumber(ctaReplyCount)} />
            <MiniStat label="Created" value={formatNumber(proposalSuccesses)} />
          </div>
          <div className="divider" />
          <div className="schedule-grid schedule-grid-single">
            <ScheduleCard
              label="Daily send"
              time={schedule.localTime}
              meta={schedule.cron}
              tone="accent"
            />
          </div>
          <div className="divider" />
          <div className="mini-stat-grid mini-stat-grid-tight">
            <MiniStat label="Track" value={latestTrackLabel} />
            <MiniStat label="Keyword" value={analytics.keyword || current.keyword || "-"} />
            <MiniStat label="Template" value={formatNumber(analytics.index || current.index)} />
            <MiniStat label="Started" value={formatDate(analytics.startedAt)} />
          </div>
          {analytics.note ? <p className="user-subtle">{analytics.note}</p> : null}
          {delivered > 0 && analytics.openMetricNote && analytics.openMetricNote !== analytics.note ? <p className="user-subtle">{analytics.openMetricNote}</p> : null}
          {analytics.error ? <p className="user-subtle">{analytics.error}</p> : null}
        </section>
      </section>

      <section className="content-grid">
        <section className="panel">
          <PanelHeader title="Delivery to proposal funnel" />
          {delivered > 0 ? (
            <>
              <div className="compact-stack">
                <VisualBar label="Delivered" value={delivered} total={Math.max(totalRecipients, 1)} tone="accent" />
                <VisualBar label={openLabel} value={openedEstimateUsers} total={Math.max(delivered, 1)} tone="info" />
                <VisualBar label="CTA reply users" value={ctaReplyUsers} total={Math.max(delivered, 1)} tone="warning" />
                <VisualBar label="Proposal users" value={proposalUsers} total={Math.max(delivered, 1)} tone="success" />
                <VisualBar label="Proposal created users" value={proposalSuccessUsers} total={Math.max(delivered, 1)} tone="accent" />
              </div>
              <div className="divider" />
              <div className="mini-stat-grid mini-stat-grid-wide">
                <MiniStat label="Recipients" value={formatNumber(totalRecipients)} />
                <MiniStat label="Reply count" value={formatNumber(ctaReplyCount)} />
                <MiniStat label="Proposal requests" value={formatNumber(proposalRequests)} />
                <MiniStat label="Proposals created" value={formatNumber(proposalSuccesses)} />
              </div>
            </>
          ) : (
            <EmptyState label="No sent daily tip has been tracked yet" />
          )}
        </section>

        <section className="panel">
          <PanelHeader title="Who looks interested" action={<TonePill tone="info">{formatNumber(interestedUsers.length)}</TonePill>} />
          {interestedUsers.length ? (
            <>
              <div className="compact-stack">
                {segmentRows.map((item) => (
                  <VisualBar
                    key={item.label}
                    label={item.label}
                    value={item.value}
                    total={segmentTotal}
                    tone={item.tone}
                  />
                ))}
              </div>
              <div className="divider" />
              <div className="mini-stat-grid mini-stat-grid-tight">
                <MiniStat label="No contact" value={formatNumber(analytics.segments.noContactUsers)} />
                <MiniStat label="New to proposal" value={formatNumber(analytics.segments.newToProposalUsers)} />
                <MiniStat label="Warm" value={formatNumber(analytics.segments.warmUsers)} />
                <MiniStat label="Hot" value={formatNumber(analytics.segments.hotUsers)} />
              </div>
            </>
          ) : (
            <EmptyState label="No CTA replies tracked yet" />
          )}
        </section>
      </section>

      <section className="content-grid">
        <FocusPanel
          title="Interested users"
          items={interestedItems}
          emptyLabel="No interested users yet"
          tone="info"
        />
        <section className="panel">
          <PanelHeader title="Campaign context" />
          <div className="mini-stat-grid mini-stat-grid-tight">
            <MiniStat label="Template pool" value={formatNumber(schedule.templateCount)} />
            <MiniStat label="Current tip" value={formatNumber(current.index)} />
            <MiniStat label="Latest tracked" value={formatNumber(analytics.index || 0)} />
            <MiniStat label="Current track" value={current.trackLabel || "-"} />
          </div>
          <div className="divider" />
          <div className="compact-stack">
            <VisualBar
              label="Template progress"
              value={Number(current.index || 0)}
              total={Math.max(Number(schedule.templateCount || 0), 1)}
              tone="accent"
            />
            <VisualBar
              label="Interested people"
              value={interestedUsers.length}
              total={Math.max(delivered, 1)}
              tone="info"
            />
          </div>
        </section>
      </section>
    </>
  );
}

export default function DashboardClient({ initialSnapshot, apiPath }) {
  const [snapshot, setSnapshot] = useState(() => normalizeSnapshot(initialSnapshot));
  const [error, setError] = useState("");
  const [isPending, startTransition] = useTransition();
  const [activeSection, setActiveSection] = useState("overview");

  const stats = snapshot.overview.stats;
  const recentUsers = snapshot.overview.recentUsers;
  const totalUsers = Number(stats.totals.uniqueUsers || 0);
  const proposalRequests = Number(stats.totals.proposalRequests || 0);
  const proposalSuccesses = Number(stats.totals.proposalSuccesses || 0);
  const proposalFailures = Number(stats.totals.proposalFailures || 0);
  const totalMessages = Number(stats.totals.messages || 0);
  const totalCommands = Number(stats.totals.commands || 0);
  const fullContact = Number(snapshot.overview.contact.withFullContact || 0);
  const withEmail = Number(snapshot.overview.contact.withEmail || 0);
  const withPhone = Number(snapshot.overview.contact.withPhone || 0);
  const awaitingContact = Number(snapshot.overview.contact.awaitingContact || 0);
  const interestedUsers = Number(snapshot.overview.marketing.totalInterested || 0);
  const hotLeads = Number(snapshot.overview.marketing.hotLeads || 0);
  const followupDue = Number(snapshot.overview.followups.dueNow || 0);
  const followupBatchLimit = Number(snapshot.schedules.followups.batchLimit || 25);
  const partialContact = Math.max(withEmail + withPhone - fullContact * 2, 0);
  const noContact = Math.max(totalUsers - fullContact - partialContact, 0);
  const successRate = proposalRequests > 0 ? (proposalSuccesses / proposalRequests) * 100 : 0;
  const contactCoverage = totalUsers > 0 ? (fullContact / totalUsers) * 100 : 0;
  const health = getSystemHealth(snapshot);
  const marketingTracks = snapshot.overview.marketing.trackCounts.filter(
    (item) => Number(item?.count || 0) > 0
  );
  const signalItems = [
    {
      label: "Users",
      value: formatNumber(totalUsers),
      meta: `${formatNumber(stats.activeUsers.last7Days)} active in 7d`,
      tone: "accent"
    },
    {
      label: "Queue",
      value: formatNumber(followupDue),
      meta: `Batch ${formatNumber(followupBatchLimit)}`,
      tone: followupDue > followupBatchLimit ? "warning" : "success"
    },
    {
      label: "Hot leads",
      value: formatNumber(hotLeads),
      meta: interestedUsers ? `${formatNumber(interestedUsers)} interested` : "No active signals",
      tone: hotLeads ? "danger" : "info"
    },
    {
      label: "Success",
      value: formatPercent(successRate),
      meta: proposalFailures ? `${formatNumber(proposalFailures)} failed` : "Generation stable",
      tone: proposalFailures ? "warning" : "success"
    }
  ];

  const activityBars = [
    { label: "24h", value: Number(stats.activeUsers.last24Hours || 0), tone: "accent" },
    { label: "7d", value: Number(stats.activeUsers.last7Days || 0), tone: "info" },
    { label: "30d", value: Number(stats.activeUsers.last30Days || 0), tone: "success" }
  ];

  const contactRows = [
    { label: "Full", value: fullContact, tone: "success" },
    { label: "Partial", value: partialContact, tone: "warning" },
    { label: "Pending", value: awaitingContact, tone: "accent" },
    { label: "None", value: noContact, tone: "muted" }
  ];

  const navCounts = {
    overview: formatNumber(totalUsers),
    audience: formatNumber(recentUsers.length),
    followups: formatNumber(followupDue),
    broadcast: formatNumber(snapshot.schedules.dailyBroadcast.analytics.funnel.ctaReplyUsers || interestedUsers)
  };

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
          contactCoverage={contactCoverage}
          contactRows={contactRows}
          marketingTracks={marketingTracks}
          recentUsers={recentUsers}
        />
      );
    }

    if (activeSection === "followups") {
      return <FollowupsView snapshot={snapshot} totalUsers={totalUsers} recentUsers={recentUsers} />;
    }

    if (activeSection === "broadcast") {
      return (
        <BroadcastView
          snapshot={snapshot}
          totalUsers={totalUsers}
          marketingTracks={marketingTracks}
          stats={stats}
          recentUsers={recentUsers}
        />
      );
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
        successRate={successRate}
        recentUsers={recentUsers}
      />
    );
  }

  return (
    <main className="ops-layout">
      <aside className="sidebar">
        <div className="brand-block">
          <div className="brand-mark">PB</div>
          <div className="brand-text">
            <span className="brand-kicker">Telegram Proposal Bot</span>
            <h1 className="brand-title">Dashboard</h1>
          </div>
        </div>

        <nav className="sidebar-nav" aria-label="Dashboard sections">
          {Object.keys(SECTION_META).map((sectionId) => (
            <SectionButton
              key={sectionId}
              id={sectionId}
              badge={navCounts[sectionId]}
              activeSection={activeSection}
              onSelect={handleSectionChange}
            />
          ))}
        </nav>

        <div className="sidebar-footer">
          <TonePill tone="muted">{snapshot.environment.mode}</TonePill>
          <TonePill tone="muted">{stats.storageMode}</TonePill>
          <TonePill tone={health.tone}>{health.label}</TonePill>
        </div>
      </aside>

      <div className="workspace">
        <header className="topbar">
          <div className="page-head">
            <span className="page-kicker">{SECTION_META[activeSection].note}</span>
            <h1 className="page-title">{SECTION_META[activeSection].title}</h1>
          </div>

          <div className="topbar-actions">
            <TonePill tone="muted">Updated {formatDate(snapshot.generatedAt)}</TonePill>
            <button className="refresh-button" onClick={handleRefresh} type="button">
              {isPending ? "Refreshing" : "Refresh"}
            </button>
          </div>
        </header>

        {error ? <div className="error-banner">{error}</div> : null}

        <section className="signal-strip" aria-label="Live admin signals">
          {signalItems.map((item) => (
            <SignalCard key={item.label} {...item} />
          ))}
        </section>

        {renderSection()}
      </div>
    </main>
  );
}


