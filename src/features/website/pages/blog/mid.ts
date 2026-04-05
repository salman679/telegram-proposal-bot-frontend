import type { BlogArticle } from "./model";
import { authors, heading, images, paragraph, quote, tipList } from "./shared";

export const midLevelArticles: BlogArticle[] = [
  {
    slug: "opening-line-frameworks-that-get-replies",
    category: "Strategy",
    tone: "primary",
    level: "mid",
    trackKey: "proposal",
    detailLabel: "MID-LEVEL PLAYBOOK",
    readTime: "১১ মিনিট পড়ার সময়",
    publishedAt: "১০ এপ্রিল, ২০২৬",
    title: "Opening line frameworks যা reply বাড়ায়",
    excerpt:
      "first line-এই curiosity, confidence, আর relevance দেখানোর কয়েকটি practical framework যা generic bidder থেকে আপনাকে আলাদা করবে।",
    image: images.analytics,
    imageAlt: "Analytics-style visual used to discuss better proposal performance.",
    author: authors.sabbir,
    content: [
      paragraph(
        "Reply rate বাড়ানোর সবচেয়ে underused জায়গা হলো opening line। Mid-level freelancer-দের problem usually skill না; problem হলো তাদের proposal decent হলেও memorable হয় না। Opening line যদি client-এর attention ধরে, তাহলে বাকি proposal পড়ার chance অনেক বেড়ে যায়।"
      ),
      heading("১. observation-led opener"),
      paragraph(
        "এই opener তখন কাজ করে যখন job post-এ specific issue visible। উদাহরণ: ‘আপনার current homepage-এ messaging strong, কিন্তু CTA flow scattered—এটাই conversion drop-এর বড় কারণ হতে পারে।’ এই line client-কে feel করায় আপনি skim না, observe করেছেন।"
      ),
      tipList("observation-led opener use করুন যখন", [
        "client website visible",
        "brief-এ clear artifact আছে",
        "quick improvement চোখে পড়ে"
      ]),
      heading("২. outcome-led opener"),
      paragraph(
        "কখনও client technical না, result-minded হয়। তখন opening line-এ outcome বলুন। যেমন: ‘আপনার onboarding emails-এ goal যদি activation বাড়ানো হয়, আমি sequence-টাকে shorter, clearer, আর reply-friendly করে দেব।’ এতে client সরাসরি business result-এর সঙ্গে আপনাকে connect করে।"
      ),
      heading("৩. contrast-led opener"),
      paragraph(
        "Client যদি আগেও অনেক wrong attempt দেখে থাকে, contrast useful। উদাহরণ: ‘শুধু redesign করলে হবে না; offer clarity আর page hierarchy না বদলালে conversion একই থাকবে।’ এই approach consultant-like feel দেয়।"
      ),
      quote("Opening line-এর কাজ sales close করা না, client-কে পড়তে বাধ্য করা।"),
      tipList("opening line checklist", [
        "job-specific কি না",
        "এক sentence-এ readable কি না",
        "fear-based না হয়ে useful কি না",
        "promise না দিয়ে direction দিচ্ছে কি না"
      ]),
      paragraph(
        "Framework মানে copy-paste না। Framework মানে একটা thinking lens। আপনি যত বেশি client type বুঝবেন, তত দ্রুত ঠিক opener বাছতে পারবেন—আর reply rate naturally improve হবে।"
      )
    ]
  },
  {
    slug: "problem-solution-proposal-structure",
    category: "Tutorials",
    tone: "secondary",
    level: "mid",
    trackKey: "proposal",
    detailLabel: "MID-LEVEL PLAYBOOK",
    readTime: "১২ মিনিট পড়ার সময়",
    publishedAt: "১১ এপ্রিল, ২০২৬",
    title: "Problem-solution proposal structure যেটা client পড়ে শেষ করে",
    excerpt:
      "proposal-কে এমন flow-এ সাজানোর নিয়ম যেখানে problem, approach, proof, আর next step একে অপরকে naturally support করে।",
    image: images.workspace,
    imageAlt: "Workspace image representing a structured proposal writing process.",
    author: authors.ariful,
    content: [
      paragraph(
        "Mid-level stage-এ এসে অনেক freelancer-এর proposal decent হয়, কিন্তু messy হয়। সব component আছে—problem, proof, CTA—কিন্তু flow নেই। তাই client পড়ে, কিন্তু excite হয় না। Problem-solution structure proposal-কে readable করে এবং client-এর headspace-এর সঙ্গে align করে।"
      ),
      heading("১. problem section-এ client-এর ভাষা ব্যবহার করুন"),
      paragraph(
        "প্রথমে client-এর language mirror করুন। সে যদি speed, clarity, quality control—এই words use করে, আপনিও সেই language adopt করুন। এতে subconscious alignment হয়। শুধু নিজের favourite jargon use করলে distance তৈরি হয়।"
      ),
      tipList("problem section-এ যা রাখবেন", [
        "client-এর exact pain point",
        "pain point না solve হলে কী downside",
        "আপনি কেন এই অংশটা বুঝেছেন তার brief signal"
      ]),
      heading("২. solution section-এ step, not fluff"),
      paragraph(
        "অনেক proposal-এ solution অংশটা vague থাকে: ‘I will deliver high-quality work on time।’ এটা solution না। Solution মানে steps। উদাহরণ: audit, rewrite, review, iteration। Client process বুঝতে পারলে risk কম অনুভব করে।"
      ),
      heading("৩. proof section-এ over-explain না"),
      paragraph(
        "Proof section-এ ১–২টা relevant signal যথেষ্ট। Similar result, similar workflow, similar client type—এই তিনের যেকোনো একটাও enough হতে পারে। Long autobiography দিয়ে proof dilute করবেন না।"
      ),
      quote("Strong proposal-এর flow হলো: আপনি বুঝেছেন → আপনি ভাবছেন → আপনি করতে পারবেন → এখন কী হবে।"),
      paragraph(
        "Proposal structure improve মানে শুধু ভালো লেখা না; client decision friction কমানো। এই mindset নিয়ে লিখলে proposal naturally sharper হয়।"
      )
    ]
  },
  {
    slug: "generic-to-niche-profile-positioning",
    category: "Strategy",
    tone: "primary",
    level: "mid",
    trackKey: "profile",
    detailLabel: "MID-LEVEL PLAYBOOK",
    readTime: "১১ মিনিট পড়ার সময়",
    publishedAt: "১২ এপ্রিল, ২০২৬",
    title: "Generic profile থেকে niche profile-এ যাওয়ার সঠিক উপায়",
    excerpt:
      "সবকিছু করতে পারি impression বাদ দিয়ে কীভাবে niche positioning গড়বেন, without losing flexibility entirely.",
    image: images.ai,
    imageAlt: "AI and positioning visual for niche profile strategy.",
    author: authors.nusrat,
    content: [
      paragraph(
        "একটা generic profile দিয়ে small work পাওয়া যায়, কিন্তু better client পাওয়া কঠিন। কারণ better client usually specialist খোঁজে, general helper না। তবে niche profile মানে সব service কেটে ফেলা না। Niche profile মানে front door narrow করা, back room wide রাখা।"
      ),
      heading("১. niche বাছবেন market pain দিয়ে"),
      paragraph(
        "শুধু skill দিয়ে niche বাছবেন না। ‘I do copywriting’ খুব wide। কিন্তু ‘I write onboarding emails for SaaS products’ specific। এখানে client type, context, আর pain পরিষ্কার। Client instantly ভাবে: ‘এই মানুষটা আমার space বোঝে।’"
      ),
      tipList("niche test করার ৩টা প্রশ্ন", [
        "এই niche-এ repeatable problem আছে কি?",
        "আমি কি outcome language বলতে পারি?",
        "এখানে sample বা proof দেখানো সম্ভব কি?"
      ]),
      heading("২. generic service-কে sub-offer-এ ভাঙুন"),
      paragraph(
        "একটা main niche রাখুন, কিন্তু related sub-offer রাখুন। যেমন আপনি যদি landing page copy niche করেন, related offer হতে পারে email welcome sequence, homepage messaging audit, CTA rewrite। এতে niche sharp থাকে, কিন্তু revenue narrow হয়ে যায় না।"
      ),
      quote("Niche profile আপনাকে ছোট না, memorable বানায়।"),
      paragraph(
        "আপনি যখন niche profile তৈরি করবেন, শুরুতে মনে হতে পারে audience ছোট হয়ে গেল। বাস্তবে quality inquiry বাড়ে। আর quality inquiry-ই long-term freelancing easier করে।"
      )
    ]
  },
  {
    slug: "portfolio-case-study-premium-impression",
    category: "Tutorials",
    tone: "secondary",
    level: "mid",
    trackKey: "portfolio",
    detailLabel: "MID-LEVEL PLAYBOOK",
    readTime: "১১ মিনিট পড়ার সময়",
    publishedAt: "১৩ এপ্রিল, ২০২৬",
    title: "Portfolio case study লিখে premium impression তৈরি করুন",
    excerpt:
      "sample-কে screenshot gallery থেকে mini consulting document-এ পরিণত করলে client কেন premium feel পায়, তার practical structure।",
    image: images.office,
    imageAlt: "Professional office environment suited to premium case-study presentation.",
    author: authors.nusrat,
    content: [
      paragraph(
        "Portfolio screenshot দেখানো আর case study দেখানো এক জিনিস না। Screenshot beauty দেখায়, case study thinking দেখায়। আর premium client সাধারণত thinking-এর জন্য বেশি pay করে। তাই যদি আপনি better budget attract করতে চান, case-study style portfolio অপরিহার্য।"
      ),
      heading("১. before-after না, before-decision-after"),
      paragraph(
        "অনেকে শুধু before/after image দেয়। সেটা useful, কিন্তু incomplete। Premium impression আসে decision explanation থেকে। আপনি কেন hero বদলালেন, কেন CTA নিচে আনলেন, কেন email shorter করলেন—এই thinking দেখালে client বুঝে আপনি শুধু executor না।"
      ),
      tipList("case study structure", [
        "Context",
        "Problem",
        "Decision",
        "Execution",
        "Result or expected business effect"
      ]),
      heading("২. ৩০ সেকেন্ডে skim-able রাখুন"),
      paragraph(
        "Long wall of text case study-কে weak করে। Headline, subhead, short paragraph, bullet insight—এই format ব্যবহার করুন। Client যেন skim করে essence ধরতে পারে, চাইলে detail-এ যেতে পারে।"
      ),
      quote("Case study client-কে আপনার taste না, আপনার judgment দেখায়।"),
      paragraph(
        "Premium impression flashy design থেকে না, disciplined presentation থেকে আসে। আপনার portfolio case study যদি clean, sharp, আর thoughtful হয়, client naturally ধরে নেয় আপনার কাজও তেমন হবে।"
      )
    ]
  },
  {
    slug: "low-budget-client-profitable-deal",
    category: "Strategy",
    tone: "primary",
    level: "mid",
    trackKey: "pricing",
    detailLabel: "MID-LEVEL PLAYBOOK",
    readTime: "১০ মিনিট পড়ার সময়",
    publishedAt: "১৪ এপ্রিল, ২০২৬",
    title: "Low-budget client থেকে profitable deal বের করার কৌশল",
    excerpt:
      "কম বাজেট মানেই reject না; কখন re-scope, কখন phase, আর কখন politely no বলবেন—এই judgement-টাই আসল।",
    image: images.analytics,
    imageAlt: "Dashboard and city lights visualizing strategic deal decisions.",
    author: authors.mahin,
    content: [
      paragraph(
        "Low-budget client নিয়ে black-and-white ভাবা ঠিক না। কিছু low-budget client future repeat work দেয়, কিছু respect দেয়, কিছু clear scope দেয়। আবার কিছু client cheap না, simply confused। Profitable deal বের হয় তখনই, যখন আপনি full scope-এর বদলে right scope অফার করেন।"
      ),
      heading("১. whole project না, highest-value slice identify করুন"),
      paragraph(
        "Client যদি বলে পুরো funnel, পুরো website, পুরো automation চায়, কিন্তু budget কম—তাহলে ask করুন কোন অংশে immediate impact সবচেয়ে বেশি। অনেক সময় একটা homepage rewrite, onboarding audit, বা sales page structure দিয়েই শুরু করা যায়।"
      ),
      tipList("re-scope করার language", [
        "এই budget-এ full scope না, but first phase possible",
        "আমি highest-impact section দিয়ে শুরু করতে পারি",
        "small deliverable দিয়ে risk কমিয়ে নিতে পারেন"
      ]),
      heading("২. profit বাঁচাতে revision ceiling দিন"),
      paragraph(
        "Budget কম হলে unlimited revision suicide। Low-budget কাজ তখনই profitable, যখন boundary clear। কী deliver করবেন, কত round revision, কত দিনে feedback লাগবে—সব upfront লিখুন।"
      ),
      quote("কম বাজেটে লাভ করতে হলে scope design করতে হয়; শুধু discount দিলে লাভ থাকে না।"),
      paragraph(
        "Low-budget deal manage করার skill আপনাকে desperate bidder না, disciplined consultant বানায়। আর disciplined consultant-ই eventually higher-budget work attract করে।"
      )
    ]
  },
  {
    slug: "proposal-pricing-table-three-options",
    category: "Tutorials",
    tone: "secondary",
    level: "mid",
    trackKey: "pricing",
    detailLabel: "MID-LEVEL PLAYBOOK",
    readTime: "১২ মিনিট পড়ার সময়",
    publishedAt: "১৫ এপ্রিল, ২০২৬",
    title: "Proposal-এর ভেতরে 3-option pricing table ব্যবহার করবেন যেভাবে",
    excerpt:
      "single flat quote-এর বদলে anchored option দিলে client decision সহজ হয় এবং budget conversation আপনার control-এ আসে।",
    image: images.workspace,
    imageAlt: "Structured pricing discussion represented on a clean desk setup.",
    author: authors.mahin,
    content: [
      paragraph(
        "একটা single flat price অনেক client-কে decision paralysis-এ ফেলে। সে ভাবে দাম বেশি নাকি কম, scope কী include, alternative আছে কি না। Three-option pricing table এই confusion কমায়। কারণ তখন client ‘buy or not buy’ না ভেবে ‘কোন option better’ সেটা ভাবে।"
      ),
      heading("১. option মানে random package না"),
      paragraph(
        "তিনটা option মানে তিনটা meaningful path। Example: audit only, audit + rewrite, full strategy + implementation. তিনটা option-ই একই problem solve করবে, কিন্তু depth আলাদা হবে। এটা client-কে clarity দেয়।"
      ),
      tipList("৩-option structure", [
        "Option 1: entry or diagnosis",
        "Option 2: recommended core scope",
        "Option 3: higher-touch or faster version"
      ]),
      heading("২. middle option-টাই main anchor"),
      paragraph(
        "সবচেয়ে attractive এবং practical option middle-এ রাখুন। Low option trust build করবে, high option premium anchor দেবে, আর middle option most clients pick করবে। তাই middle option carefully design করুন।"
      ),
      quote("Pricing table-এর goal বেশি option দেওয়া না, smart comparison তৈরি করা।"),
      paragraph(
        "সব client-এর জন্য 3-option দরকার হয় না। কিন্তু যখন budget sensitive deal, unclear scope, বা multiple path possible থাকে, তখন এই structure deal conversation অনেক mature করে।"
      )
    ]
  },
  {
    slug: "no-reply-follow-up-cadence",
    category: "Tutorials",
    tone: "secondary",
    level: "mid",
    trackKey: "close",
    detailLabel: "MID-LEVEL PLAYBOOK",
    readTime: "১০ মিনিট পড়ার সময়",
    publishedAt: "১৬ এপ্রিল, ২০২৬",
    title: "No reply-এর পর follow-up cadence কেমন হবে",
    excerpt:
      "একটা structured cadence থাকলে emotional chasing বাদ যায়, আর proposal pipeline predictable হয়।",
    image: images.success,
    imageAlt: "Professional teamwork visual representing consistent follow-up systems.",
    author: authors.sabbir,
    content: [
      paragraph(
        "No reply মানেই reject—এই assumption mid-level freelancer-দের অনেক growth আটকে দেয়। অনেক client delayed থাকে, decision pending থাকে, internal approval লাগে। কিন্তু follow-up-এর cadence না থাকলে freelancer emotional reaction-এ চলে যায়: কখনও খুব তাড়াতাড়ি message, কখনও আর কোনো message-ই না।"
      ),
      heading("১. cadence লিখে রাখুন, মাথায় রাখবেন না"),
      paragraph(
        "প্রতি proposal-এর জন্য follow-up plan written থাকলে consistency আসে। Spreadsheet, Notion, বা simple tracker—যাই ব্যবহার করুন, date note করুন। এতে random feeling-এর উপর নির্ভর করতে হয় না।"
      ),
      tipList("recommended cadence", [
        "Day 0: original proposal",
        "Day 3: insight-based follow-up",
        "Day 6: concise nudge with one question",
        "Day 9 বা 10: final close-the-loop message"
      ]),
      heading("২. final follow-up-এর পর move on"),
      paragraph(
        "সব opportunity revive হবে না। Too many follow-up আপনার positioning নষ্ট করতে পারে। তাই cadence-এর value শুধু response পাওয়া না; stop point-ও define করা।"
      ),
      quote("Good cadence আপনার energy বাঁচায়, কারণ আপনি জানেন কখন লিখবেন আর কখন ছেড়ে দেবেন।"),
      paragraph(
        "এই tracking habit কয়েক সপ্তাহ চালালেই আপনি দেখতে পাবেন কোন ধরনের proposal বেশি revive হয়, কোন timing best, আর কোন client profile follow-up-worthy না। এখান থেকেই strategy sharpen হয়।"
      )
    ]
  },
  {
    slug: "repeat-work-post-delivery-system",
    category: "Success Stories",
    tone: "tertiary",
    level: "mid",
    trackKey: "close",
    detailLabel: "SUCCESS SYSTEM",
    readTime: "১১ মিনিট পড়ার সময়",
    publishedAt: "১৭ এপ্রিল, ২০২৬",
    title: "এক client থেকে repeat work পাওয়ার post-delivery system",
    excerpt:
      "ভালো delivery দিয়েও কেন repeat work আসে না, আর delivery-পরবর্তী communication system কেমন হলে client আবার ফিরে আসে।",
    image: images.success,
    imageAlt: "Team high-five illustrating long-term client relationship success.",
    author: authors.tanvir,
    content: [
      paragraph(
        "একবার project delivery মানেই relationship শেষ—এভাবে ভাবলে repeat work আসবে না। অনেক freelancer কাজ ভালো করে, কিন্তু post-delivery silence-এর কারণে client অন্য কারও কাছে চলে যায়। Repeat work chance বাড়াতে হলে delivery-এর পর deliberate follow-through দরকার।"
      ),
      heading("১. delivery message-এ recap দিন"),
      paragraph(
        "Final file পাঠিয়ে শুধু ‘Done’ লিখবেন না। কী deliver করলেন, কী improve হয়েছে, আর client এখন কী দেখতে পারে—এই recap দিন। এতে work-এর perceived value বাড়ে।"
      ),
      tipList("delivery recap-এ রাখুন", [
        "কী deliver হলো",
        "সবচেয়ে গুরুত্বপূর্ণ change",
        "কোন metric বা effect monitor করতে পারে",
        "next recommended action"
      ]),
      heading("২. ৫–৭ দিন পরে value follow-up"),
      paragraph(
        "Delivery-পরপর upsell করলে awkward লাগে। কিন্তু কয়েকদিন পরে quick check-in useful। জিজ্ঞেস করুন work live হয়েছে কি না, কোনো friction আছে কি না, বা next phase দরকার কি না।"
      ),
      quote("Repeat work আসে তখনই, যখন client ভাবে আপনি কাজ শেষ না, outcome follow করছেন।"),
      paragraph(
        "Repeat work luck না। এটা relationship design। আপনি যদি delivery-কে conversation-এর শেষ না করে midpoint বানাতে পারেন, client retention অনেক সহজ হয়।"
      )
    ]
  }
];
