import type { BlogArticle } from "./model";
import { authors, heading, images, paragraph, quote, tipList } from "./shared";

export const advancedArticles: BlogArticle[] = [
  {
    slug: "client-psychology-signals-job-win-rate",
    category: "Strategy",
    tone: "primary",
    level: "advanced",
    trackKey: "secret",
    detailLabel: "ADVANCED SECRET",
    readTime: "১৩ মিনিট পড়ার সময়",
    publishedAt: "১৮ এপ্রিল, ২০২৬",
    title: "Client psychology signals যা job win rate বাড়ায়",
    excerpt:
      "কোন signal client-কে নিরাপদ, confident, আর curious feel করায়—এই hidden layer বুঝলে proposal অনেক sharper হয়।",
    image: images.analytics,
    imageAlt: "Charts and signal patterns representing client psychology insights.",
    author: authors.sabbir,
    content: [
      paragraph(
        "Advanced stage-এ proposal writing শুধু structure-এর খেলা না; perception-এর খেলা। Client decision নেয় সবসময় pure logic-এ না। সে risk, ease, certainty, taste—এই সব signal একসাথে পড়ে। আপনি যদি এই signals বুঝতে পারেন, একই skill নিয়েও win rate noticeably improve হবে।"
      ),
      heading("১. certainty signal: chaos কমাও"),
      paragraph(
        "Client যখন brief লেখে, সে usually already overwhelmed থাকে। Proposal যদি তার chaos বাড়ায়, সে skip করবে। তাই আপনার language simple, directional, and low-friction হতে হবে। Short sentence, clear step, bounded promise—এইসব certainty signal।"
      ),
      tipList("certainty signal কীভাবে দেন", [
        "১–২টা concrete next step",
        "bounded scope language",
        "vague superlative avoid",
        "timeline realistic রাখা"
      ]),
      heading("২. taste signal: সব client measurable করে বলতে পারে না"),
      paragraph(
        "বিশেষ করে design, copy, strategy, branding, UX—এখানে client taste পড়ে। আপনি যদি job post-এর tone respect করে উত্তর দেন, যদি solution sharp হয়, যদি examples thoughtful হয়, client ভাবে আপনি ‘gets it’।"
      ),
      heading("৩. emotional relief signal: আপনি কি pressure কমাচ্ছেন?"),
      paragraph(
        "Strong proposal client-কে impress করার পাশাপাশি relieve-ও করে। সে ভাবে—এই person-কে hire করলে কাজটা manageable হবে। এই relief আসে when you simplify path, name key risk, and show calm confidence."
      ),
      quote("Client আপনাকে hire করে শুধু কাজের জন্য না, মাথার চাপ কমানোর জন্যও।"),
      paragraph(
        "Psychology signal বোঝা মানে manipulation না। এর মানে হচ্ছে decision environment বোঝা। আপনি যত বেশি client-এর headspace বুঝবেন, তত কম শব্দে বেশি trust তৈরি করতে পারবেন।"
      )
    ]
  },
  {
    slug: "audit-based-proposal-writing",
    category: "Tutorials",
    tone: "secondary",
    level: "advanced",
    trackKey: "proposal",
    detailLabel: "ADVANCED PLAYBOOK",
    readTime: "১৩ মিনিট পড়ার সময়",
    publishedAt: "১৯ এপ্রিল, ২০২৬",
    title: "Audit-based proposal writing: generic bidder থেকে consultant হওয়া",
    excerpt:
      "proposal-এ micro-audit যোগ করলে কীভাবে আপনার positioning বদলে যায় এবং কেন client তখন আপনাকে vendor না, thinker হিসেবে দেখে।",
    image: images.office,
    imageAlt: "Office consultation scene representing audit-based proposal work.",
    author: authors.ariful,
    content: [
      paragraph(
        "Generic bidder আর consultant-style freelancer-এর পার্থক্য skill-এ না, framing-এ। দুজনই কাজ করতে পারে। কিন্তু consultant-style freelancer problem-টাকে diagnose করে কথা বলে। Audit-based proposal সেই shift আনে।"
      ),
      heading("১. full audit না, micro-audit"),
      paragraph(
        "Proposal-এর মধ্যে full audit লিখবেন না। তাতে effort wasted হবে। Instead, one or two sharp observations দিন। এমন observation, যা obvious না কিন্তু believable। এতে client ভাবে আপনি surface-এর নিচে দেখছেন।"
      ),
      tipList("micro-audit example", [
        "CTA clear কিন্তু section order weak",
        "offer আছে কিন্তু proof thin",
        "design polished, but onboarding path confusing"
      ]),
      heading("২. audit-এর পরে path দেখান"),
      paragraph(
        "Observation দিয়ে থেমে গেলে সেটা criticism লাগে। Observation-এর পরে immediate path দিন। যেমন: ‘এটার first fix হবে headline clarity, তারপর supporting proof block।’ এতে আপনি শুধু flaw ধরেননি, direction-ও দিলেন।"
      ),
      quote("Micro-audit proposal-এ insight inject করে। আর insight-ই premium positioning-এর শুরু।"),
      paragraph(
        "আপনি যদি audit-based proposal সঠিকভাবে ব্যবহার করতে পারেন, client conversation-এর power dynamic বদলে যায়। তখন আপনি শুধু apply করছেন না; আপনি perspective দিচ্ছেন।"
      )
    ]
  },
  {
    slug: "stop-scope-creep-boundary-system",
    category: "Strategy",
    tone: "primary",
    level: "advanced",
    trackKey: "pricing",
    detailLabel: "ADVANCED PLAYBOOK",
    readTime: "১২ মিনিট পড়ার সময়",
    publishedAt: "২০ এপ্রিল, ২০২৬",
    title: "Scope creep ঠেকানোর agreement language ও boundary system",
    excerpt:
      "ভালো client হয়েও project কেন messy হয়ে যায়, আর scope language upfront ঠিক করলে কীভাবে margin ও relationship—দুইটাই বাঁচে।",
    image: images.analytics,
    imageAlt: "Strategic planning visual for boundaries and scope control.",
    author: authors.mahin,
    content: [
      paragraph(
        "Scope creep সবসময় bad client-এর কারণে হয় না। অনেক সময় problem হয় unclear agreement language-এর কারণে। আপনি ভাবছেন এক জিনিস, client ভাবছে আরেক জিনিস। Advanced freelancer-এর বড় strength হলো কাজ শুরুর আগেই expectation architecture বানানো।"
      ),
      heading("১. deliverable noun-এ define করুন"),
      paragraph(
        "‘Website improvements’ vague। ‘Homepage copy rewrite + CTA section restructure + mobile-first review’ clear। Deliverable noun-এ define করলে debate কমে। Client জানে কী পেয়েছে, আপনিও জানেন কী promise করেছেন।"
      ),
      tipList("scope line-এ রাখুন", [
        "deliverable",
        "revision count",
        "feedback window",
        "what is explicitly excluded"
      ]),
      heading("২. add-on path ready রাখুন"),
      paragraph(
        "Boundary মানে no বলা না; boundary মানে path দেখানো। Client যদি extra কিছু চায়, বলুন add-on phase possible। এতে relationship soft থাকে, margin-ও বাঁচে।"
      ),
      quote("Strong boundary client-কে দূরে ঠেলে দেয় না; project-কে stable রাখে।"),
      paragraph(
        "Advanced freelancerরা বেশি আয় করে শুধু skill-এর জন্য না; তারা leakage কমায়। Scope boundary সেই leakage control-এর core part।"
      )
    ]
  },
  {
    slug: "interview-objection-handle-close",
    category: "Tutorials",
    tone: "secondary",
    level: "advanced",
    trackKey: "interview",
    detailLabel: "ADVANCED PLAYBOOK",
    readTime: "১২ মিনিট পড়ার সময়",
    publishedAt: "২১ এপ্রিল, ২০২৬",
    title: "Interview-এ objection handle করে contract close করার উপায়",
    excerpt:
      "budget, timeline, trust, process—এই common objectionগুলোকে কীভাবে defensive না হয়ে close-friendly conversation-এ পরিণত করবেন।",
    image: images.success,
    imageAlt: "Confident team discussion reflecting interview and closing skill.",
    author: authors.sadia,
    content: [
      paragraph(
        "Interview stage-এ objection আসা bad sign না। বেশিরভাগ সময় objection মানে client interested, but uncertain। Problem হয় যখন freelancer objection-কে attack ভাবে। তখন tone defensive হয়ে যায়। Advanced close আসে তখনই, যখন objection-কে clarification point হিসেবে treat করেন।"
      ),
      heading("১. objection repeat করে confirm করুন"),
      paragraph(
        "Client যদি বলে budget high, timeline tight, বা process unclear—সরাসরি justification-এ যাবেন না। আগে repeat করে confirm করুন। উদাহরণ: ‘ঠিক বুঝলে আপনি mainly timeline predictability নিয়ে concern করছেন, তাই তো?’ এতে tension কমে।"
      ),
      tipList("objection handling flow", [
        "acknowledge",
        "clarify",
        "reframe",
        "offer path"
      ]),
      heading("২. justify না, reframe করুন"),
      paragraph(
        "Client যদি বলে budget বেশি, আপনি শুধু cost defend করবেন না। Reframe করুন value, scope, or risk reduction দিয়ে। যেমন: ‘যদি full scope heavy লাগে, আমরা phase 1 smaller করে শুরু করতে পারি।’ এতে discussion alive থাকে।"
      ),
      quote("Objection handle করার goal argument জেতা না; forward movement তৈরি করা।"),
      paragraph(
        "আপনি যখন calm থেকে objection handle করেন, client শুধু উত্তর পায় না—confidence পায়। আর confidence-ই close-এর সবচেয়ে বড় catalyst।"
      )
    ]
  },
  {
    slug: "ai-workflow-custom-proposal-writing",
    category: "AI Tools",
    tone: "secondary",
    level: "advanced",
    trackKey: "proposal",
    detailLabel: "MASTERCLASS",
    readTime: "১৪ মিনিট পড়ার সময়",
    publishedAt: "২২ এপ্রিল, ২০২৬",
    title: "AI workflow দিয়ে fast but customized proposal writing",
    excerpt:
      "AI-কে shortcut না বানিয়ে কীভাবে prompt library, human review, আর client-specific editing দিয়ে high-quality proposal pipeline তৈরি করবেন।",
    image: images.ai,
    imageAlt: "AI workflow visual in blue and purple tones.",
    author: authors.team,
    content: [
      paragraph(
        "AI proposal writing-এর biggest trap হলো speed-এর নেশা। খুব দ্রুত proposal তৈরি হয়, কিন্তু সব proposal একরকম শোনায়। Advanced workflow-এর goal speed না; speed + relevance। আপনি যতক্ষণ পর্যন্ত client-specific editing layer add না করছেন, AI আপনাকে efficient generic bidder-এ নামিয়ে আনবে।"
      ),
      heading("১. prompt library problem-type অনুযায়ী সাজান"),
      paragraph(
        "একটা single mega-prompt দিয়ে সব কাজ করবেন না। Instead, job type অনুযায়ী prompt library বানান—landing page audit, onboarding email, VA operations, UI polish, research support, ইত্যাদি। এতে output more context-aware হয়।"
      ),
      tipList("AI workflow-এর ৪ স্তর", [
        "job post extract",
        "problem-type prompt",
        "human observation layer",
        "final tone and CTA edit"
      ]),
      heading("২. first draft AI, final judgment human"),
      paragraph(
        "AI structure, summary, and speed দিতে পারে। কিন্তু কোন line রাখবেন, কোন line বাদ দেবেন, কোথায় stronger observation দরকার—এই judgment human। Final edit ছাড়া AI output publish করবেন না।"
      ),
      quote("AI-এর কাজ draft তৈরি করা; trust তৈরি করে আপনার edited version।"),
      paragraph(
        "এই workflow use করলে আপনি শুধু faster না, calmer-ও হন। কারণ proposal লেখা আর blank page battle থাকে না। তখন আপনি pure writing-এর বদলে positioning আর judgment-এ শক্তি দিতে পারেন।"
      )
    ],
    featured: {
      badge: "Masterclass",
      headline: "AI workflow দিয়ে fast but customized proposal writing",
      description:
        "Prompt library, human review, আর client-specific editing মিলিয়ে কীভাবে high-quality proposal pipeline বানাবেন, তার practical masterclass।",
      ctaLabel: "Read Masterclass"
    }
  },
  {
    slug: "premium-niche-authority-positioning",
    category: "Strategy",
    tone: "primary",
    level: "advanced",
    trackKey: "profile",
    detailLabel: "ADVANCED PLAYBOOK",
    readTime: "১২ মিনিট পড়ার সময়",
    publishedAt: "২৩ এপ্রিল, ২০২৬",
    title: "Premium niche authority build করে better client attract করবেন যেভাবে",
    excerpt:
      "profile, portfolio, proposal, and language—সব জায়গায় aligned authority signal তৈরি করলে inbound quality কীভাবে বদলে যায়।",
    image: images.office,
    imageAlt: "Professional office image reflecting premium positioning and authority.",
    author: authors.nusrat,
    content: [
      paragraph(
        "Premium client attract করা শুধু price বাড়ানোর ব্যাপার না। এটা authority signal consistency-এর ব্যাপার। Profile-এ এক কথা, proposal-এ আরেক কথা, portfolio-তে আরেক angle—এভাবে authority গড়ে না। Authority build হয় যখন আপনার whole presence একই narrative support করে।"
      ),
      heading("১. one-sentence authority statement তৈরি করুন"),
      paragraph(
        "নিজের জন্য একটা sentence লিখুন যা আপনার whole market positioning define করে। যেমন: ‘আমি SaaS আর digital product brand-এর জন্য clarity-driven onboarding copy লিখি।’ এই statement profile, headline, intro, proposal tone—সবখানে influence করবে।"
      ),
      tipList("authority signal sources", [
        "niche-specific language",
        "curated portfolio order",
        "confident but bounded proposal tone",
        "content that shows perspective"
      ]),
      heading("২. content authority build করে"),
      paragraph(
        "Better client অনেক সময় শুধু Upwork profile দেখে না। তারা আপনার LinkedIn, website, case study, article—এসবও দেখে। তাই content authority একটি leverage point। Useful blog, framework, audit example—এসব আপনাকে price conversation-এর আগেই different করে।"
      ),
      quote("Authority তখনই বিশ্বাসযোগ্য লাগে, যখন সেটা একই সঙ্গে sharp এবং grounded হয়।"),
      paragraph(
        "আপনি better client attract করতে চাইলে শুধু better copy না, better coherence দরকার। Coherence-ই authority-এর backbone।"
      )
    ]
  },
  {
    slug: "weekly-upwork-pipeline-without-burnout",
    category: "Tutorials",
    tone: "secondary",
    level: "advanced",
    trackKey: "filter",
    detailLabel: "ADVANCED PLAYBOOK",
    readTime: "১২ মিনিট পড়ার সময়",
    publishedAt: "২৪ এপ্রিল, ২০২৬",
    title: "Burnout ছাড়াই weekly Upwork pipeline manage করার system",
    excerpt:
      "প্রতিদিন full-time bidding mode-এ না গিয়ে কীভাবে weekly cadence-এ pipeline চালিয়ে energy ও consistency একসাথে বাঁচাবেন।",
    image: images.office,
    imageAlt: "Organized office environment suitable for workflow and pipeline management.",
    author: authors.team,
    content: [
      paragraph(
        "Upwork pipeline manage করতে গিয়ে অনেক freelancer দুই extreme-এ যায়। কখনও প্রতিদিন অকারণে অনেক সময় দেয়, কখনও পুরো সপ্তাহ কিছুই করে না। এই feast-or-famine pattern থেকেই burnout আসে। Sustainable pipeline-এর জন্য weekly operating system দরকার।"
      ),
      heading("১. day-by-day theme দিন"),
      paragraph(
        "সব কাজ প্রতিদিন করবেন না। Monday job review, Tuesday proposal drafting, Wednesday follow-up, Thursday interviews and client reply, Friday portfolio/profile maintenance—এভাবে theme-based week চালালে mental switching cost কমে।"
      ),
      tipList("weekly cadence example", [
        "Mon: job filter + shortlist",
        "Tue: top-priority bids",
        "Wed: follow-up + CRM update",
        "Thu: calls + proposal refinement",
        "Fri: portfolio and profile cleanup"
      ]),
      heading("২. application quota রাখুন"),
      paragraph(
        "Unlimited apply target anxiety বাড়ায়। Fixed quota রাখুন। যেমন ১২ high-quality bid per week। Quota থাকলে আপনি quality track করতে পারেন, not just volume।"
      ),
      quote("Pipeline strong থাকে তখনই, যখন সেটা আপনার energy-এর বিরুদ্ধে না গিয়ে energy-এর সাথে কাজ করে।"),
      paragraph(
        "Weekly pipeline system আপনাকে শুধু productive করে না; emotionally stable রাখে। আর stable operator-ই long game-এ better decisions নেয়।"
      )
    ]
  },
  {
    slug: "top-rated-freelancer-hidden-habits",
    category: "Success Stories",
    tone: "tertiary",
    level: "advanced",
    trackKey: "secret",
    detailLabel: "SUCCESS SYSTEM",
    readTime: "১২ মিনিট পড়ার সময়",
    publishedAt: "২৫ এপ্রিল, ২০২৬",
    title: "Top-rated freelancer-দের hidden habits যা outside থেকে দেখা যায় না",
    excerpt:
      "যে ছোট habitগুলো profile-এ দেখা যায় না কিন্তু ধারাবাহিকভাবে better reply, smoother delivery, আর stronger client retention তৈরি করে।",
    image: images.success,
    imageAlt: "Successful professionals celebrating a milestone together.",
    author: authors.tanvir,
    content: [
      paragraph(
        "Top-rated badge দেখে বাইরে থেকে মনে হয় সবকিছু skill আর luck-এর ফল। বাস্তবে top-rated freelancer-দের বড় edge আসে invisible habits থেকে। তারা হয়তো public-এ এসব বলে না, কিন্তু repeat success এগুলোর উপর দাঁড়িয়ে থাকে।"
      ),
      heading("১. তারা proposal archive রাখে"),
      paragraph(
        "Top-rated freelancer-রা পুরোনো winning proposal save করে। কোন opener কাজ করেছে, কোন CTA reply এনেছে, কোন scope framing contract close করেছে—এসব তারা observe করে। তাই তারা প্রতিবার blank page থেকে শুরু করে না।"
      ),
      tipList("archive-এ যা রাখে", [
        "best opening lines",
        "strong proof blocks",
        "pricing language",
        "client objections and winning replies"
      ]),
      heading("২. তারা client note লেখে"),
      paragraph(
        "প্রতিটি client call, delivery, feedback—এসব থেকে note নেয়। কে fast reply দেয়, কে detail চায়, কে milestone prefer করে—এই patterns later relationship strengthen করে।"
      ),
      quote("Top-rated হওয়া অনেক সময় talent-এর award না; disciplined habit-এর compound effect।"),
      paragraph(
        "ভালো খবর হলো এই habits secret society-এর অংশ না। এগুলো যে কেউ কপি করতে পারে। Problem হলো বেশিরভাগ মানুষ glamorous tactic খোঁজে, boring system না। অথচ boring system-ই long-term result দেয়।"
      )
    ]
  }
];
