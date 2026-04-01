import type { DashboardSnapshot } from "@/features/admin/lib/dashboard";

function hoursAgo(hours: number) {
  return new Date(Date.now() - hours * 60 * 60 * 1000).toISOString();
}

function daysAgo(days: number) {
  return new Date(Date.now() - days * 24 * 60 * 60 * 1000).toISOString();
}

export function createMockDashboardSnapshot(): DashboardSnapshot {
  return {
    generatedAt: new Date().toISOString(),
    overview: {
      generatedAt: new Date().toISOString(),
      stats: {
        storageMode: "supabase",
        createdAt: daysAgo(120),
        updatedAt: hoursAgo(1),
        totals: {
          uniqueUsers: 4821,
          messages: 18243,
          commands: 7135,
          proposalRequests: 2850,
          proposalSuccesses: 1948,
          proposalFailures: 402
        },
        activeUsers: {
          last24Hours: 521,
          last7Days: 2438,
          last30Days: 4610
        },
        topUsers: [
          {
            userId: "114",
            username: "rakibfreelance",
            firstName: "Rakib",
            lastName: "Hasan",
            messageCount: 612,
            proposalRequests: 122,
            proposalSuccesses: 80,
            proposalFailures: 10,
            lastSeenAt: hoursAgo(3)
          }
        ]
      },
      contact: {
        withEmail: 1720,
        withPhone: 963,
        withFullContact: 714,
        awaitingContact: 148
      },
      marketing: {
        totalInterested: 1280,
        warmLeads: 436,
        hotLeads: 168,
        activeIn7Days: 604,
        trackCounts: [
          {
            trackKey: "proposal-audit",
            label: "Proposal Audit",
            keyword: "audit",
            count: 372
          },
          {
            trackKey: "cover-letter",
            label: "Cover Letter Fix",
            keyword: "cover",
            count: 286
          },
          {
            trackKey: "interview-help",
            label: "Interview Help",
            keyword: "interview",
            count: 231
          },
          {
            trackKey: "pricing-guidance",
            label: "Pricing Guidance",
            keyword: "price",
            count: 191
          }
        ]
      },
      followups: {
        dueNow: 118,
        optedOut: 61,
        errors: 4,
        completedSequence: 382,
        dueByStage: {
          stage0: 34,
          stage1: 47,
          stage2: 37
        }
      },
      recentUsers: [
        {
          userId: "560",
          username: "rakib_h",
          firstName: "Rakib",
          lastName: "Hossain",
          messageCount: 42,
          proposalRequests: 11,
          lastSeenAt: hoursAgo(1),
          followupOptOut: false,
          followupStage: 1,
          lastFollowupErrorAt: null,
          marketingTrack: "proposal-audit",
          marketingStage: "hot",
          marketingSignalCount: 5,
          marketingLastInteractionAt: hoursAgo(2),
          hasEmail: true,
          hasPhoneNumber: true,
          pendingProposalText: null
        },
        {
          userId: "561",
          username: "samiul_ui",
          firstName: "Samiul",
          lastName: "Islam",
          messageCount: 28,
          proposalRequests: 7,
          lastSeenAt: hoursAgo(3),
          followupOptOut: false,
          followupStage: 2,
          lastFollowupErrorAt: null,
          marketingTrack: "cover-letter",
          marketingStage: "warm",
          marketingSignalCount: 3,
          marketingLastInteractionAt: hoursAgo(5),
          hasEmail: true,
          hasPhoneNumber: false,
          pendingProposalText: null
        },
        {
          userId: "562",
          username: null,
          firstName: "Nusrat",
          lastName: "Jahan",
          messageCount: 15,
          proposalRequests: 2,
          lastSeenAt: hoursAgo(8),
          followupOptOut: false,
          followupStage: 0,
          lastFollowupErrorAt: null,
          marketingTrack: "interview-help",
          marketingStage: "engaged",
          marketingSignalCount: 2,
          marketingLastInteractionAt: hoursAgo(10),
          hasEmail: false,
          hasPhoneNumber: true,
          pendingProposalText: "Need fintech profile proposal"
        },
        {
          userId: "563",
          username: "tanvir.dev",
          firstName: "Tanvir",
          lastName: "Ahmed",
          messageCount: 31,
          proposalRequests: 9,
          lastSeenAt: hoursAgo(11),
          followupOptOut: false,
          followupStage: 3,
          lastFollowupErrorAt: null,
          marketingTrack: "pricing-guidance",
          marketingStage: "warm",
          marketingSignalCount: 4,
          marketingLastInteractionAt: hoursAgo(14),
          hasEmail: true,
          hasPhoneNumber: true,
          pendingProposalText: null
        }
      ]
    },
    schedules: {
      followups: {
        cron: "0 12 * * *",
        localTime: "6:00 PM BST",
        path: "/api/cron/followups",
        batchLimit: 25,
        analytics: {
          supported: true,
          available: true,
          isoDate: "2026-03-31",
          startedAt: "2026-03-31T00:00:00+06:00",
          openMetricLabel: "Opened (estimated)",
          openMetricNote:
            "Telegram bots do not expose exact read data. Opened is estimated from users who replied after follow-up.",
          note: "Latest follow-up cohort from the previous Dhaka day.",
          error: null,
          delivery: {
            sent: 318,
            failed: 12,
            disabled: 5,
            scheduled: 335
          },
          funnel: {
            openedEstimateUsers: 164,
            startedWorkUsers: 96,
            startedWorkRequests: 113,
            createdProposalUsers: 58,
            createdProposalCount: 76
          },
          rates: {
            openedEstimateRate: 51.5,
            startedWorkRate: 30.2,
            createdProposalRate: 18.2
          },
          stageMix: {
            stage1: 141,
            stage2: 99,
            stage3: 78
          },
          segmentMix: {
            onboarding: 183,
            pendingContact: 76,
            reactivation: 59
          },
          segments: {
            fullContactUsers: 122,
            noContactUsers: 93,
            withAnyContactUsers: 225,
            warmUsers: 57,
            hotUsers: 18,
            hadProposalHistoryUsers: 91,
            firstTimeProposalUsers: 73,
            startedAfterFollowupUsers: 96
          },
          engagedUsers: []
        }
      },
      dailyBroadcast: {
        cron: "0 15 * * *",
        localTime: "9:00 PM BST",
        path: "/api/cron/broadcasts/upwork-tips",
        templateCount: 30,
        current: {
          key: "upwork-tips-bn-2026-04-01",
          index: 17,
          isoDate: "2026-04-01",
          slug: "write-first-lines-that-get-opened",
          text: "আজকের টিপ: proposal-এর প্রথম দুই লাইনে client-এর job context reflect করুন।",
          trackKey: "proposal-audit",
          trackLabel: "Proposal Audit",
          keyword: "audit"
        },
        analytics: {
          supported: true,
          available: true,
          campaignKey: "upwork-tips-bn-2026-03-31",
          startedAt: daysAgo(1),
          completedAt: hoursAgo(16),
          trackKey: "proposal-audit",
          trackLabel: "Proposal Audit",
          keyword: "audit",
          isoDate: "2026-03-31",
          slug: "hook-the-client-fast",
          index: 16,
          note:
            "Opened is estimated from users who sent any message after delivery.",
          error: null,
          openMetricLabel: "Opened (estimated)",
          openMetricNote:
            "Telegram bots do not expose exact open data. Opened is estimated from post-delivery activity.",
          delivery: {
            totalRecipients: 1450,
            sent: 1402,
            failed: 33,
            sending: 15
          },
          funnel: {
            openedEstimateUsers: 678,
            ctaReplyUsers: 196,
            ctaReplyCount: 233,
            proposalUsers: 121,
            proposalRequests: 177,
            proposalSuccessUsers: 84,
            proposalSuccesses: 126
          },
          rates: {
            openedEstimateRate: 48.4,
            ctaReplyRate: 14.0,
            proposalUserRate: 8.6,
            proposalRequestRate: 12.6,
            proposalSuccessRate: 6.0
          },
          segments: {
            fullContactUsers: 72,
            noContactUsers: 41,
            withAnyContactUsers: 155,
            warmUsers: 62,
            hotUsers: 21,
            withProposalHistoryUsers: 103,
            newToProposalUsers: 93,
            repliedAndRequestedUsers: 121
          },
          interestedUsers: []
        }
      }
    },
    environment: {
      mode: "vercel",
      dashboardKeySource: "DASHBOARD_API_KEY",
      botTokenConfigured: true
    }
  };
}
