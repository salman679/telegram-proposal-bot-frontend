import { createMockDashboardSnapshot } from "@/features/admin/lib/mock-dashboard";

export type DashboardDataSource = "live" | "demo";

export interface StatsSummary {
  storageMode: string;
  statsFilePath?: string;
  createdAt: string | null;
  updatedAt: string | null;
  totals: {
    uniqueUsers: number;
    messages: number;
    commands: number;
    proposalRequests: number;
    proposalSuccesses: number;
    proposalFailures: number;
  };
  activeUsers: {
    last24Hours: number;
    last7Days: number;
    last30Days: number;
  };
  topUsers: Array<{
    userId: string;
    username: string | null;
    firstName: string | null;
    lastName: string | null;
    messageCount: number;
    proposalRequests: number;
    proposalSuccesses: number;
    proposalFailures: number;
    lastSeenAt: string | null;
  }>;
}

export interface RecentUserRecord {
  userId: string;
  username: string | null;
  firstName: string | null;
  lastName: string | null;
  messageCount: number;
  proposalRequests: number;
  lastSeenAt: string | null;
  followupOptOut: boolean;
  followupStage: number;
  lastFollowupErrorAt: string | null;
  marketingTrack: string | null;
  marketingStage: string | null;
  marketingSignalCount: number;
  marketingLastInteractionAt: string | null;
  hasEmail: boolean;
  hasPhoneNumber: boolean;
  pendingProposalText: string | null;
}

export interface TrackCountRow {
  trackKey: string;
  label: string;
  keyword: string;
  count: number;
}

export interface OverviewSnapshot {
  generatedAt: string;
  stats: StatsSummary | null;
  contact: {
    withEmail: number;
    withPhone: number;
    withFullContact: number;
    awaitingContact: number;
  };
  marketing: {
    totalInterested: number;
    warmLeads: number;
    hotLeads: number;
    activeIn7Days: number;
    trackCounts: TrackCountRow[];
  };
  followups: {
    dueNow: number;
    optedOut: number;
    errors: number;
    completedSequence: number;
    dueByStage: {
      stage0: number;
      stage1: number;
      stage2: number;
    };
  };
  recentUsers: RecentUserRecord[];
}

export interface FollowupAnalytics {
  supported: boolean;
  available: boolean;
  isoDate: string | null;
  startedAt: string | null;
  openMetricLabel: string;
  openMetricNote: string;
  note: string;
  error: string | null;
  delivery: {
    sent: number;
    failed: number;
    disabled: number;
    scheduled: number;
  };
  funnel: {
    openedEstimateUsers: number;
    startedWorkUsers: number;
    startedWorkRequests: number;
    createdProposalUsers: number;
    createdProposalCount: number;
  };
  rates: {
    openedEstimateRate: number;
    startedWorkRate: number;
    createdProposalRate: number;
  };
  stageMix: {
    stage1: number;
    stage2: number;
    stage3: number;
  };
  segmentMix: {
    onboarding: number;
    pendingContact: number;
    reactivation: number;
  };
  segments: {
    fullContactUsers: number;
    noContactUsers: number;
    withAnyContactUsers: number;
    warmUsers: number;
    hotUsers: number;
    hadProposalHistoryUsers: number;
    firstTimeProposalUsers: number;
    startedAfterFollowupUsers: number;
  };
  engagedUsers: Array<{
    userId: string;
    username: string | null;
    firstName: string | null;
    lastName: string | null;
    proposalRequests: number;
    hasEmail: boolean;
    hasPhoneNumber: boolean;
    marketingTrack: string | null;
    marketingStage: string | null;
    marketingSignalCount: number;
    lastSeenAt: string | null;
    lastFollowupSentAt: string | null;
    followupStage: number;
    followupType: string | null;
    lastActivityAt: string | null;
    startedWork: boolean;
    createdProposal: boolean;
  }>;
}

export interface BroadcastAnalytics {
  supported: boolean;
  available: boolean;
  campaignKey: string | null;
  startedAt: string | null;
  completedAt: string | null;
  trackKey: string | null;
  trackLabel: string | null;
  keyword: string | null;
  isoDate: string | null;
  slug: string | null;
  index: number;
  note: string;
  error: string | null;
  openMetricLabel: string;
  openMetricNote: string;
  delivery: {
    totalRecipients: number;
    sent: number;
    failed: number;
    sending: number;
  };
  funnel: {
    openedEstimateUsers: number;
    ctaReplyUsers: number;
    ctaReplyCount: number;
    proposalUsers: number;
    proposalRequests: number;
    proposalSuccessUsers: number;
    proposalSuccesses: number;
  };
  rates: {
    openedEstimateRate: number;
    ctaReplyRate: number;
    proposalUserRate: number;
    proposalRequestRate: number;
    proposalSuccessRate: number;
  };
  segments: {
    fullContactUsers: number;
    noContactUsers: number;
    withAnyContactUsers: number;
    warmUsers: number;
    hotUsers: number;
    withProposalHistoryUsers: number;
    newToProposalUsers: number;
    repliedAndRequestedUsers: number;
  };
  interestedUsers: Array<{
    userId: string;
    username: string | null;
    firstName: string | null;
    lastName: string | null;
    proposalRequests: number;
    hasEmail: boolean;
    hasPhoneNumber: boolean;
    marketingTrack: string | null;
    marketingStage: string | null;
    marketingSignalCount: number;
    lastSeenAt: string | null;
    lastSignalAt: string | null;
  }>;
}

export interface DashboardSnapshot {
  generatedAt: string;
  overview: OverviewSnapshot;
  schedules: {
    followups: {
      cron: string;
      localTime: string;
      path: string;
      batchLimit: number;
      analytics: FollowupAnalytics;
    };
    dailyBroadcast: {
      cron: string;
      localTime: string;
      path: string;
      templateCount: number;
      current: {
        key: string;
        index: number;
        isoDate: string;
        slug: string;
        text: string;
        trackKey: string;
        trackLabel: string;
        keyword: string;
      };
      analytics: BroadcastAnalytics;
    };
  };
  environment: {
    mode: string;
    dashboardKeySource: string | null;
    botTokenConfigured: boolean;
  };
}

export interface DashboardPayload {
  source: DashboardDataSource;
  error: string | null;
  snapshot: DashboardSnapshot;
}

function getBackendBaseUrl() {
  return process.env.BACKEND_API_BASE_URL || "http://localhost:3000";
}

export async function getDashboardPayload(): Promise<DashboardPayload> {
  const backendBaseUrl = getBackendBaseUrl();
  const apiKey = process.env.DASHBOARD_API_KEY || "";

  try {
    const response = await fetch(`${backendBaseUrl}/api/admin/overview`, {
      headers: apiKey
        ? {
            "X-Dashboard-Key": apiKey
          }
        : undefined,
      cache: "no-store"
    });

    if (!response.ok) {
      throw new Error(`Backend returned ${response.status}.`);
    }

    const data = (await response.json()) as {
      ok?: boolean;
      snapshot?: DashboardSnapshot;
      error?: string;
    };

    if (!data.ok || !data.snapshot) {
      throw new Error(data.error || "Dashboard snapshot is missing.");
    }

    return {
      source: "live",
      error: null,
      snapshot: data.snapshot
    };
  } catch (error) {
    return {
      source: "demo",
      error: error instanceof Error ? error.message : "Unknown dashboard error.",
      snapshot: createMockDashboardSnapshot()
    };
  }
}
