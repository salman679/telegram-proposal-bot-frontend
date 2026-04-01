import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import {
  Activity,
  ArrowUpRight,
  BellDot,
  Bot,
  ChartColumnIncreasing,
  Clock3,
  Database,
  LayoutDashboard,
  LogOut,
  Send,
  Sparkles,
  Users
} from "lucide-react";

import type {
  DashboardPayload,
  DashboardSnapshot,
  RecentUserRecord,
  TrackCountRow
} from "@/features/admin/lib/dashboard";

import styles from "./dashboard.module.css";

interface AdminDashboardProps {
  payload: DashboardPayload;
}

interface SidebarLink {
  label: string;
  icon: LucideIcon;
  active?: boolean;
}

interface SummaryCard {
  label: string;
  value: number;
  hint: string;
  tone: "violet" | "blue" | "mint" | "amber";
}

const sidebarLinks: SidebarLink[] = [
  { label: "Dashboard", icon: LayoutDashboard, active: true },
  { label: "Users", icon: Users },
  { label: "Bot Activity", icon: Bot },
  { label: "Analytics", icon: ChartColumnIncreasing }
];

function formatBanglaNumber(value: number) {
  return new Intl.NumberFormat("bn-BD").format(Math.round(value));
}

function formatCompact(value: number) {
  return new Intl.NumberFormat("bn-BD", {
    notation: "compact",
    maximumFractionDigits: value >= 1000 ? 1 : 0
  }).format(value);
}

function formatPercent(value: number) {
  return `${new Intl.NumberFormat("bn-BD", {
    maximumFractionDigits: 1
  }).format(value)}%`;
}

function formatDateLabel(value?: string | null) {
  if (!value) {
    return "ডেটা নেই";
  }

  return new Intl.DateTimeFormat("bn-BD", {
    dateStyle: "medium",
    timeStyle: "short"
  }).format(new Date(value));
}

function formatUserName(user: RecentUserRecord) {
  const fullName = [user.firstName, user.lastName].filter(Boolean).join(" ").trim();

  if (fullName) {
    return fullName;
  }

  if (user.username) {
    return `@${user.username}`;
  }

  return `User ${user.userId}`;
}

function getUserStatus(user: RecentUserRecord) {
  if (user.marketingStage === "hot") {
    return "হট";
  }

  if (user.marketingStage === "warm") {
    return "ওয়ার্ম";
  }

  if (user.hasEmail || user.hasPhoneNumber) {
    return "ক্যাপচার্ড";
  }

  return "নতুন";
}

function buildSummaryCards(snapshot: DashboardSnapshot): SummaryCard[] {
  const stats = snapshot.overview.stats;
  const proposalRequests = stats?.totals.proposalRequests || 0;
  const proposalSuccesses = stats?.totals.proposalSuccesses || 0;
  const successRate =
    proposalRequests > 0 ? (proposalSuccesses / proposalRequests) * 100 : 0;

  return [
    {
      label: "সক্রিয় ব্যবহারকারী",
      value: stats?.totals.uniqueUsers || 0,
      hint: `২৪h active ${formatBanglaNumber(stats?.activeUsers.last24Hours || 0)}`,
      tone: "violet"
    },
    {
      label: "প্রপোজাল রিকোয়েস্ট",
      value: proposalRequests,
      hint: `Success rate ${formatPercent(successRate)}`,
      tone: "blue"
    },
    {
      label: "ইন্টারেস্টেড লিড",
      value: snapshot.overview.marketing.totalInterested,
      hint: `Warm ${formatBanglaNumber(snapshot.overview.marketing.warmLeads)} / Hot ${formatBanglaNumber(snapshot.overview.marketing.hotLeads)}`,
      tone: "mint"
    },
    {
      label: "ডিউ ফলো-আপ",
      value: snapshot.overview.followups.dueNow,
      hint: `Errors ${formatBanglaNumber(snapshot.overview.followups.errors)}`,
      tone: "amber"
    }
  ];
}

function buildPulseSeries(snapshot: DashboardSnapshot) {
  return [
    { label: "24h", value: snapshot.overview.stats?.activeUsers.last24Hours || 0 },
    { label: "7d", value: snapshot.overview.stats?.activeUsers.last7Days || 0 },
    { label: "Email", value: snapshot.overview.contact.withEmail },
    { label: "Warm", value: snapshot.overview.marketing.warmLeads },
    { label: "Hot", value: snapshot.overview.marketing.hotLeads },
    { label: "Due", value: snapshot.overview.followups.dueNow },
    { label: "Sent", value: snapshot.schedules.dailyBroadcast.analytics.delivery.sent }
  ];
}

function buildConversionSteps(snapshot: DashboardSnapshot) {
  return [
    {
      label: "Interest signals",
      value: snapshot.overview.marketing.totalInterested,
      note: `${formatBanglaNumber(snapshot.overview.marketing.activeIn7Days)} active in 7d`
    },
    {
      label: "Broadcast CTA replies",
      value: snapshot.schedules.dailyBroadcast.analytics.funnel.ctaReplyUsers,
      note: formatPercent(snapshot.schedules.dailyBroadcast.analytics.rates.ctaReplyRate)
    },
    {
      label: "Started work",
      value: snapshot.schedules.followups.analytics.funnel.startedWorkUsers,
      note: formatPercent(snapshot.schedules.followups.analytics.rates.startedWorkRate)
    },
    {
      label: "Proposal successes",
      value: snapshot.overview.stats?.totals.proposalSuccesses || 0,
      note: `${formatBanglaNumber(snapshot.schedules.followups.analytics.funnel.createdProposalCount)} from follow-up`
    }
  ];
}

function buildActivityFeed(
  snapshot: DashboardSnapshot,
  source: DashboardPayload["source"]
) {
  return [
    {
      label: "চলমান ডেইলি ব্রডকাস্ট",
      value: snapshot.schedules.dailyBroadcast.current.trackLabel,
      meta: `Keyword ${snapshot.schedules.dailyBroadcast.current.keyword}`
    },
    {
      label: "ফলো-আপ ব্যাচ",
      value: snapshot.schedules.followups.localTime,
      meta: `${formatBanglaNumber(snapshot.schedules.followups.batchLimit)} users per batch`
    },
    {
      label: "স্টোরেজ মোড",
      value: snapshot.overview.stats?.storageMode || "unknown",
      meta: `Backend ${snapshot.environment.mode}`
    },
    {
      label: "রেন্ডার সোর্স",
      value: source === "live" ? "Live backend" : "Demo fallback",
      meta: formatDateLabel(snapshot.generatedAt)
    }
  ];
}

function sortTracks(trackCounts: TrackCountRow[]) {
  return [...trackCounts].sort((left, right) => right.count - left.count).slice(0, 4);
}

export function AdminDashboard({ payload }: AdminDashboardProps) {
  const { snapshot, source, error } = payload;
  const summaryCards = buildSummaryCards(snapshot);
  const pulseSeries = buildPulseSeries(snapshot);
  const conversionSteps = buildConversionSteps(snapshot);
  const activityFeed = buildActivityFeed(snapshot, source);
  const trackRows = sortTracks(snapshot.overview.marketing.trackCounts);
  const maxPulse = Math.max(...pulseSeries.map((item) => item.value), 1);
  const maxConversion = Math.max(...conversionSteps.map((item) => item.value), 1);
  const successPulse = snapshot.overview.stats?.totals.proposalSuccesses || 0;

  return (
    <main className={styles.page}>
      <aside className={styles.sidebar}>
        <div>
          <div className={styles.sidebarBrand}>
            <span className={styles.brandMark}>UP</span>
            <div>
              <strong>Admin Panel</strong>
              <span>Bangladesh freelance economy</span>
            </div>
          </div>

          <nav className={styles.sidebarNav}>
            {sidebarLinks.map(({ icon: Icon, label, active }) => (
              <span
                key={label}
                className={`${styles.sidebarLink} ${active ? styles.sidebarLinkActive : ""}`}
              >
                <Icon size={18} />
                {label}
              </span>
            ))}
          </nav>
        </div>

        <div className={styles.sidebarFooter}>
          <Link href="/" className={styles.sidebarAction}>
            <ArrowUpRight size={16} />
            Public site
          </Link>
          <form action="/api/admin/logout" method="post">
            <button type="submit" className={styles.logoutButton}>
              <LogOut size={16} />
              Logout
            </button>
          </form>
        </div>
      </aside>

      <section className={styles.dashboard}>
        <header className={styles.topbar}>
          <div className={styles.topbarCopy}>
            <span className={styles.topbarLabel}>Dashboard overview</span>
            <h1 className={styles.title}>টেলিগ্রাম প্রপোজাল অ্যানালিটিক্স</h1>
            <p className={styles.subtitle}>
              Bangla-first admin surface যেখানে live bot metrics, follow-up health,
              campaign pulse আর lead movement একসাথে দেখা যায়।
            </p>
          </div>

          <div className={styles.topbarMeta}>
            <div className={styles.pulseCard}>
              <span className={styles.pulseKicker}>
                <Sparkles size={14} />
                Earnings Pulse
              </span>
              <strong>{formatCompact(successPulse)}</strong>
              <p>successful proposals as the current growth proxy</p>
            </div>

            <div className={styles.topbarStatus}>
              <span
                className={`${styles.livePill} ${
                  source === "live" ? styles.livePillActive : styles.livePillDemo
                }`}
              >
                <BellDot size={16} />
                {source === "live" ? "Live backend" : "Demo fallback"}
              </span>

              <div className={styles.avatarCluster}>
                <div className={styles.avatarBubble}>R</div>
                <div className={styles.avatarBubble}>A</div>
              </div>
            </div>
          </div>
        </header>

        {error ? (
          <div className={styles.noticeBanner}>
            <Database size={18} />
            <div>
              Backend snapshot পাওয়া যায়নি। Dashboard demo data দিয়ে render হয়েছে।
              <strong> {error}</strong>
            </div>
          </div>
        ) : null}

        <section className={styles.summaryGrid}>
          {summaryCards.map((card) => (
            <article
              key={card.label}
              className={`${styles.summaryCard} ${styles[`tone${card.tone}`]}`}
            >
              <span>{card.label}</span>
              <strong>{formatCompact(card.value)}</strong>
              <p>{card.hint}</p>
            </article>
          ))}
        </section>

        <section className={styles.mainGrid}>
          <article className={styles.chartCard}>
            <div className={styles.cardHeader}>
              <div>
                <span className={styles.cardKicker}>Weekly operations pulse</span>
                <h2>সিস্টেমের গতি</h2>
              </div>
              <span className={styles.cardMeta}>
                Last sync {formatDateLabel(snapshot.generatedAt)}
              </span>
            </div>

            <div className={styles.barChart}>
              {pulseSeries.map((item) => (
                <div key={item.label} className={styles.barColumn}>
                  <span>{formatBanglaNumber(item.value)}</span>
                  <div className={styles.barTrack}>
                    <div
                      className={styles.barFill}
                      style={{
                        height: `${Math.max((item.value / maxPulse) * 100, 16)}%`
                      }}
                    />
                  </div>
                  <small>{item.label}</small>
                </div>
              ))}
            </div>
          </article>

          <article className={styles.insightCard}>
            <div className={styles.cardHeader}>
              <div>
                <span className={styles.cardKicker}>Conversion ladder</span>
                <h2>কোথায় momentum তৈরি হচ্ছে</h2>
              </div>
            </div>

            <div className={styles.progressList}>
              {conversionSteps.map((step) => (
                <div key={step.label} className={styles.progressItem}>
                  <div className={styles.progressText}>
                    <div>
                      <strong>{step.label}</strong>
                      <span>{step.note}</span>
                    </div>
                    <em>{formatBanglaNumber(step.value)}</em>
                  </div>
                  <div className={styles.progressTrack}>
                    <div
                      className={styles.progressFill}
                      style={{
                        width: `${Math.max((step.value / maxConversion) * 100, 12)}%`
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className={styles.insightMeta}>
              <div>
                <span>Broadcast sent</span>
                <strong>
                  {formatBanglaNumber(snapshot.schedules.dailyBroadcast.analytics.delivery.sent)}
                </strong>
              </div>
              <div>
                <span>Follow-up opens</span>
                <strong>
                  {formatBanglaNumber(
                    snapshot.schedules.followups.analytics.funnel.openedEstimateUsers
                  )}
                </strong>
              </div>
            </div>
          </article>

          <article className={styles.tableCard}>
            <div className={styles.cardHeader}>
              <div>
                <span className={styles.cardKicker}>Recent user management</span>
                <h2>সাম্প্রতিক ব্যবহারকারী</h2>
              </div>
              <span className={styles.cardAction}>সব দেখুন</span>
            </div>

            <div className={styles.tableWrap}>
              <table>
                <thead>
                  <tr>
                    <th>User</th>
                    <th>Status</th>
                    <th>Track</th>
                    <th>Last seen</th>
                  </tr>
                </thead>
                <tbody>
                  {snapshot.overview.recentUsers.map((user) => (
                    <tr key={user.userId}>
                      <td>
                        <div className={styles.userCell}>
                          <div className={styles.userAvatar}>
                            {formatUserName(user).slice(0, 1)}
                          </div>
                          <div>
                            <strong>{formatUserName(user)}</strong>
                            <span>{formatBanglaNumber(user.proposalRequests)} proposals</span>
                          </div>
                        </div>
                      </td>
                      <td>
                        <span className={styles.statusPill}>{getUserStatus(user)}</span>
                      </td>
                      <td>{user.marketingTrack || "organic"}</td>
                      <td>{formatDateLabel(user.lastSeenAt)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </article>

          <article className={styles.feedCard}>
            <div className={styles.cardHeader}>
              <div>
                <span className={styles.cardKicker}>Activity stack</span>
                <h2>সিস্টেম নোট</h2>
              </div>
            </div>

            <div className={styles.feedList}>
              {activityFeed.map((item) => (
                <div key={item.label} className={styles.feedItem}>
                  <div className={styles.feedIcon}>
                    {item.label.includes("ব্রডকাস্ট") ? (
                      <Send size={18} />
                    ) : item.label.includes("ব্যাচ") ? (
                      <Clock3 size={18} />
                    ) : item.label.includes("স্টোরেজ") ? (
                      <Database size={18} />
                    ) : (
                      <Activity size={18} />
                    )}
                  </div>
                  <div>
                    <strong>{item.label}</strong>
                    <p>{item.value}</p>
                    <span>{item.meta}</span>
                  </div>
                </div>
              ))}
            </div>
          </article>

          <article className={styles.trackCard}>
            <div className={styles.cardHeader}>
              <div>
                <span className={styles.cardKicker}>Interest mix</span>
                <h2>টপ ডিমান্ড ট্র্যাক</h2>
              </div>
            </div>

            <div className={styles.trackList}>
              {trackRows.map((track) => (
                <div key={track.trackKey} className={styles.trackRow}>
                  <div>
                    <strong>{track.label}</strong>
                    <span>Keyword: {track.keyword}</span>
                  </div>
                  <em>{formatBanglaNumber(track.count)}</em>
                </div>
              ))}
            </div>
          </article>

          <article className={styles.scheduleCard}>
            <div className={styles.cardHeader}>
              <div>
                <span className={styles.cardKicker}>Schedule & environment</span>
                <h2>ব্যাকএন্ড হার্টবিট</h2>
              </div>
            </div>

            <div className={styles.scheduleStack}>
              <div>
                <span>Follow-ups</span>
                <strong>{snapshot.schedules.followups.localTime}</strong>
                <p>{snapshot.schedules.followups.path}</p>
              </div>
              <div>
                <span>Daily tips</span>
                <strong>{snapshot.schedules.dailyBroadcast.localTime}</strong>
                <p>{snapshot.schedules.dailyBroadcast.current.slug}</p>
              </div>
              <div>
                <span>Bot token</span>
                <strong>
                  {snapshot.environment.botTokenConfigured ? "Configured" : "Missing"}
                </strong>
                <p>{snapshot.environment.dashboardKeySource || "No dashboard key source"}</p>
              </div>
            </div>
          </article>
        </section>
      </section>
    </main>
  );
}
