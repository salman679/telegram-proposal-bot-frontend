import type { BlogArticle } from "./model";
import { authors, heading, images, paragraph, quote, tipList } from "./shared";

export const beginnerArticles: BlogArticle[] = [
  {
    slug: "first-30-days-on-upwork",
    category: "Strategy",
    tone: "primary",
    level: "beginner",
    trackKey: "filter",
    detailLabel: "BEGINNER GUIDE",
    readTime: "৯ মিনিট পড়ার সময়",
    publishedAt: "২ এপ্রিল, ২০২৬",
    title: "আপওয়ার্কে প্রথম ৩০ দিনে কী করবেন",
    excerpt:
      "প্রথম মাসে profile, sample, bidding system আর job filtering কীভাবে সাজাবেন, যেন অকারণে হতাশ না হয়ে steady momentum তৈরি করতে পারেন।",
    image: images.workspace,
    imageAlt: "Clean workspace with a laptop, coffee and notes prepared for freelancing work.",
    author: authors.ariful,
    content: [
      paragraph(
        "আপওয়ার্কে নতুন account খুলে সবচেয়ে বড় ভুলটা অনেকেই করেন প্রথম সপ্তাহেই। তারা ভাবে যত বেশি apply করবে, তত বেশি কাজ আসবে। বাস্তবে হয় উল্টোটা। profile অগোছালো থাকে, sample দুর্বল থাকে, bid generic হয়, তারপর কয়েকদিনের মধ্যেই মনে হয় market খুব খারাপ। আসলে market খারাপ না, প্রথম ৩০ দিনের systemটাই ভুল হয়।"
      ),
      heading("১. প্রথম ৭ দিনে profile শেষ করুন, bid না"),
      paragraph(
        "নতুন freelancer-এর প্রথম priority হওয়া উচিত profile completion। title, overview, skills, portfolio sample, profile photo, niche positioning—সবকিছু অর্ধেক রেখে bid করলে client profile খুলেই আগ্রহ হারায়। তাই শুরুতে profile-কে এমনভাবে লিখুন যেন client ১৫ সেকেন্ডে বুঝে যায় আপনি কাকে help করেন, কী result দেন, আর কেন আপনার সাথে কথা বলা safe।"
      ),
      tipList("প্রথম ৭ দিনের checklist", [
        "এক লাইনের sharp title লিখুন যেখানে role + result থাকবে",
        "overview-তে নিজের history না বলে client problem দিয়ে শুরু করুন",
        "কমপক্ষে ২টা sample যোগ করুন, even if they are self-initiated mock projects",
        "যে skill-এ কাজ নিতে চান তার বাইরে random skill add করবেন না"
      ]),
      heading("২. দ্বিতীয় সপ্তাহে job filter শিখুন"),
      paragraph(
        "সব job আপনার জন্য না। payment verified নেই, job post vague, budget অসম্ভব কম, hiring history নেই—এই ধরনের post-এ bid করলেও reply rate কম থাকবে। নতুন হিসেবে আপনার confidence বাঁচাতে হলে job selection disciplined হতে হবে। ভালো post বাছতে পারলে কম bid দিয়েও better response আসে।"
      ),
      tipList("যে post-এ নতুনদের bid করা ঠিক", [
        "description clear এবং outcome-focused",
        "budget small হলেও কাজের scope বোঝা যাচ্ছে",
        "client আগে hire করেছে বা অন্তত payment verified",
        "একটা narrow problem আছে, giant all-in-one project না"
      ]),
      heading("৩. তৃতীয় ও চতুর্থ সপ্তাহে bid quality scale করুন"),
      paragraph(
        "এই সময়ে গিয়ে আপনি প্রতিদিন ৩–৫টা quality bid দিতে পারেন। প্রতিটা bid-এ client-এর pain point, quick observation, আর একটি clear next step রাখুন। নিজের bio paste করবেন না। profile already সে দেখতে পারবে। proposal-এ দরকার relevance, not autobiography."
      ),
      quote("প্রথম ৩০ দিনে goal কাজ পাওয়া না, কাজ পাওয়ার মতো সিস্টেম বানানো।"),
      paragraph(
        "আপনি যদি প্রথম মাসে profile + job filter + proposal habit এই তিনটা জিনিস সেট করতে পারেন, তাহলে দ্বিতীয় মাসে confidence অনেক বেশি থাকবে। Upwork-এ sustainable growth হয় preparation-এর উপর, luck-এর উপর না।"
      )
    ]
  },
  {
    slug: "first-10-proposals-what-to-write",
    category: "Tutorials",
    tone: "secondary",
    level: "beginner",
    trackKey: "proposal",
    detailLabel: "BEGINNER GUIDE",
    readTime: "১০ মিনিট পড়ার সময়",
    publishedAt: "৩ এপ্রিল, ২০২৬",
    title: "প্রথম ১০টা bid-এ কী লিখবেন",
    excerpt:
      "প্রথম দিকের proposal-এ নিজের experience কম থাকলেও কীভাবে clarity, honesty, আর useful thinking দেখিয়ে reply পাওয়ার chance বাড়াবেন।",
    image: images.office,
    imageAlt: "Professionals discussing a project in a glass-walled office.",
    author: authors.sabbir,
    content: [
      paragraph(
        "নতুন account নিয়ে প্রথম ১০টা bid লেখার সময় অনেকে দুই রকম ভুল করেন। কেউ খুব বেশি কথা লিখে ফেলে, কেউ আবার দুই লাইনে শেষ করে দেয়। দুইটাই problem। প্রথম proposal-গুলোর কাজ হলো client-কে বোঝানো যে আপনি careless নন, generic bidder নন, আর job post পড়ে response দিয়েছেন।"
      ),
      heading("১. opening line-এ job-এর ভাষা ধরুন"),
      paragraph(
        "প্রথম লাইনে ‘Hi, I am a professional…’ লিখলে আপনি ভিড়ের মধ্যেই থাকবেন। তার বদলে client-এর brief থেকে exact problem তুলে ধরুন। যদি সে বলে landing page conversion কম, তাহলে প্রথম লাইনেই conversion friction নিয়ে কথা বলুন। যদি বলে ongoing VA দরকার, তাহলে reliability আর response time নিয়ে কথা বলুন।"
      ),
      tipList("একটা simple proposal formula", [
        "প্রথমে problem বা observation",
        "তারপর short proof বা relevant experience signal",
        "সবশেষে একটি clear next step"
      ]),
      heading("২. experience কম হলে honesty ব্যবহার করুন"),
      paragraph(
        "Experience কম থাকলে bluff করবেন না। বরং বলুন আপনি small-scope থেকে শুরু করতে রাজি, quick sample দিতে পারবেন, বা first pass audit share করতে পারবেন। Client অনেক সময় senior freelancer-এর polished pitch-এর চেয়ে honest, thoughtful reply-কে বেশি পছন্দ করে, especially ছোট project-এ।"
      ),
      quote("Client আপনাকে সুযোগ দেবে তখনই, যখন তার মনে হবে আপনি তার কাজ নিয়ে ভেবেছেন।"),
      heading("৩. close-এ reply trigger রাখুন"),
      paragraph(
        "শেষ লাইনে এমন কিছু লিখুন যাতে client উত্তর দিতে বাধ্য হয়। উদাহরণ: ‘চাইলে আমি এখনই hero section-এর top 3 issue লিখে দিতে পারি’ বা ‘আপনার current workflow জানালে আমি faster suggestion দিতে পারব।’ এতে conversation শুরু হয়।"
      ),
      tipList("যে ভুলগুলো করবেন না", [
        "copy-paste bio proposal-এ বসাবেন না",
        "অতিরিক্ত emoji বা dramatic promise দেবেন না",
        "client-এর বাজেট না দেখে huge scope promise করবেন না",
        "proof ছাড়া ‘best’, ‘expert’, ‘top-rated style’ টাইপ claim করবেন না"
      ]),
      paragraph(
        "প্রথম ১০টা bid perfect হওয়ার দরকার নেই। দরকার হলো pattern ধরতে শেখা। কোন opening line-এ reply আসে, কোন tone কাজ করে, কোন close-এ conversation শুরু হয়—এই feedback loop-টাই আপনার আসল asset।"
      )
    ]
  },
  {
    slug: "jobs-beginners-should-avoid",
    category: "Strategy",
    tone: "primary",
    level: "beginner",
    trackKey: "filter",
    detailLabel: "BEGINNER GUIDE",
    readTime: "৮ মিনিট পড়ার সময়",
    publishedAt: "৪ এপ্রিল, ২০২৬",
    title: "যে job post-এ নতুনদের bid করা উচিত না",
    excerpt:
      "সব post-এ bid না করে red flag চিনতে শিখলে time, connect, আর confidence—তিনটাই বাঁচবে।",
    image: images.analytics,
    imageAlt: "Analytics dashboard reflecting decision-making and job evaluation.",
    author: authors.ariful,
    content: [
      paragraph(
        "নতুন freelancer-এর বড় ক্ষতি হয় low-quality job post-এ bid করতে করতে। reply আসে না, connect নষ্ট হয়, তারপর মনে হয় নিজের skill-এই সমস্যা। কিন্তু অনেক job post আছে যেগুলো experienced freelancer-ও avoid করে। আপনার goal হওয়া উচিত reject করা শিখা, শুধু apply করা না।"
      ),
      heading("১. vague job post মানেই vague client"),
      paragraph(
        "যদি description-এ স্পষ্ট deliverable না থাকে, success criteria না থাকে, আর শুধু ‘need expert urgently’ টাইপ কথা থাকে, বুঝে নিন client নিজেও জানে না কী চায়। এই ধরনের project-এ scope পরে বাড়ে, price চাপ আসে, এবং communication messy হয়। নতুন হিসেবে এই chaos handle করা কঠিন।"
      ),
      tipList("red flag signals", [
        "‘Need all-rounder’ কিন্তু budget খুব কম",
        "timeline unrealistic",
        "job description-এ outcome নেই, শুধু random task list",
        "previous hires almost নেই বা hiring rate খুব low"
      ]),
      heading("২. unpaid sample বা suspicious test project থেকে দূরে থাকুন"),
      paragraph(
        "Client যদি বলে full mockup, full audit, full sample আগে করে দেখান—এটা সাধারণত respect problem। ছোট paid discovery acceptable, কিন্তু free labour acceptable না। আপনি যদি শুরুতেই boundary না দেন, পরে scope creep almost নিশ্চিত।"
      ),
      quote("ভালো job filter করা মানে কম bid দিয়ে better opportunity-তে মন দেওয়া।"),
      heading("৩. low-budget সবসময় bad না, but wrong expectation bad"),
      paragraph(
        "কিছু client-এর budget ছোট হলেও expectation realistic হয়। তারা ছোট scope চায়, quick delivery চায়, clear feedback দেয়। এই ধরনের project beginner-এর জন্য useful হতে পারে। কিন্তু যদি $20 budget-এ full funnel, design, copy, dev—সব চায়, সেখানে না বলাই smarter move।"
      ),
      tipList("যখন bid করতে পারেন", [
        "scope narrow",
        "client-এর brief clear",
        "communication respectful",
        "আপনি ছোট এক deliverable দিয়ে value show করতে পারবেন"
      ]),
      paragraph(
        "আপনার win rate বাড়ানোর shortcut কখনো proposal magic না। বেশিরভাগ সময় shortcut হলো better job selection। ভুল project reject করতে পারলে সঠিক project-এ আপনার energy বেশি থাকে।"
      )
    ]
  },
  {
    slug: "upwork-profile-title-overview-formula",
    category: "Tutorials",
    tone: "secondary",
    level: "beginner",
    trackKey: "profile",
    detailLabel: "BEGINNER GUIDE",
    readTime: "১০ মিনিট পড়ার সময়",
    publishedAt: "৫ এপ্রিল, ২০২৬",
    title: "নতুনদের জন্য Upwork profile title আর overview formula",
    excerpt:
      "generic title বাদ দিয়ে কীভাবে role, result, niche, আর proof ব্যবহার করে এমন profile copy লিখবেন যা client-কে থামায়।",
    image: images.workspace,
    imageAlt: "Laptop and notes laid out for writing a professional profile.",
    author: authors.nusrat,
    content: [
      paragraph(
        "অনেক profile কেন weak লাগে জানেন? কারণ title আর overview-তে reader-এর জন্য কোনো shortcut থাকে না। Client profile খুলে বোঝতেই পারে না আপনি কাকে help করেন, কী outcome দেন, আর আপনাকে shortlist করার reason কী। এই জায়গাতেই formula helpful।"
      ),
      heading("১. title-এ শুধু role না, result-ও দিন"),
      paragraph(
        "‘Graphic Designer’, ‘Web Developer’, ‘VA’—এই title-গুলো problem না, কিন্তু incomplete। Title-এ niche বা result যোগ করলে instantly clarity আসে। উদাহরণ: ‘Landing Page Designer for SaaS and Coaches’ বা ‘Virtual Assistant for Client Communication and Scheduling’।"
      ),
      tipList("ভালো title formula", [
        "Role + niche",
        "Role + result",
        "Role + market + result"
      ]),
      heading("২. overview-এর প্রথম ৪ লাইনই আসল"),
      paragraph(
        "Overview শুরু করবেন না ‘Hello, my name is...’ দিয়ে। তার বদলে client-এর pain point দিয়ে শুরু করুন। তারপর বলুন আপনি কীভাবে সেটা solve করেন। তারপর short proof দিন। সবশেষে simple CTA দিন। এই flow-টা client-friendly, কারণ সে নিজের perspective-এ content পড়ে।"
      ),
      quote("Overview biography না, sales conversation-এর প্রথম ২০ সেকেন্ড।"),
      heading("৩. template ব্যবহার করুন, কিন্তু নিজের voice রাখুন"),
      paragraph(
        "AI বা formula use করা মানে robotic হওয়া না। Structure borrowed হতে পারে, কিন্তু examples আর wording আপনার নিজের হওয়া দরকার। যে ধরনের কাজ আপনি করতে চান, সেই language naturally profile-এ ঢুকতে হবে।"
      ),
      tipList("overview-এর ৪-part structure", [
        "Problem: কোন ধরনের client problem আপনি tackle করেন",
        "Approach: কীভাবে কাজ করেন",
        "Proof: sample result, past work, বা process maturity",
        "CTA: ছোট next step"
      ]),
      paragraph(
        "Profile copy একবার লিখে রেখে দেবেন না। ১০–১৫টা bid দেওয়ার পর দেখুন client কোন line-এ response দিচ্ছে, কোন service বেশি interest তৈরি করছে। তারপর profile refine করুন। Strong profile static না, living asset।"
      )
    ]
  },
  {
    slug: "first-portfolio-samples-for-beginners",
    category: "Tutorials",
    tone: "secondary",
    level: "beginner",
    trackKey: "portfolio",
    detailLabel: "BEGINNER GUIDE",
    readTime: "৯ মিনিট পড়ার সময়",
    publishedAt: "৬ এপ্রিল, ২০২৬",
    title: "প্রথম portfolio বানাতে কোন sample আগে দেখাবেন",
    excerpt:
      "real client work না থাকলেও কীভাবে believable sample বানাবেন এবং কোন order-এ portfolio সাজালে trust দ্রুত তৈরি হয়।",
    image: images.office,
    imageAlt: "Modern office scene suitable for portfolio and case study presentation.",
    author: authors.nusrat,
    content: [
      paragraph(
        "নতুন freelancer-এর সবচেয়ে common প্রশ্ন: ‘real client work না থাকলে portfolio কী দেখাব?’ উত্তর খুব simple—client outcome চিন্তা করে sample বানান, নিজের skill list না। Portfolio-র কাজ impress করা না, convince করা।"
      ),
      heading("১. sample-এর order strategic হওয়া উচিত"),
      paragraph(
        "সবচেয়ে best কাজটা সবসময় প্রথমে রাখুন। তারপর এমন sample রাখুন যেটা different angle cover করে। উদাহরণ: প্রথম sample landing page redesign, দ্বিতীয় sample email sequence, তৃতীয় sample dashboard cleanup। এতে client বুঝে আপনি এক pattern না, practical range handle করতে পারেন।"
      ),
      tipList("প্রথম ৩ sample-এ যা থাকা ভালো", [
        "একটা result-focused sample",
        "একটা process-focused sample",
        "একটা niche-specific sample"
      ]),
      heading("২. fake corporate look-এর চেয়ে simple real thinking better"),
      paragraph(
        "অনেক beginner over-design করে ফেলে। অতিরিক্ত mockup, huge presentation, fancy language—এসবের চেয়ে clear problem-solution format বেশি useful। লিখুন: brief কী ছিল, আপনি কী change করেছেন, expected improvement কী।"
      ),
      quote("Portfolio তখনই কাজ করে, যখন client নিজের project-এর প্রতিফলন sample-এ দেখতে পায়।"),
      heading("৩. sample বানানোর তিনটা safe source"),
      paragraph(
        "Existing brand redesign, imaginary brief, বা নিজের previous job-এর transferable work—এই তিন source beginner-এর জন্য safe। শুধু ensure করুন আপনি কোথাও misleading claim দিচ্ছেন না। যদি mock project হয়, সেটা mock project হিসেবেই লিখুন।"
      ),
      tipList("portfolio caption checklist", [
        "problem or brief",
        "আপনার decision",
        "result বা expected effect",
        "কোন ধরনের client-এর জন্য relevant"
      ]),
      paragraph(
        "আপনার প্রথম portfolio perfect হওয়ার দরকার নেই। দরকার হলো এটাকে এমনভাবে সাজানো যাতে client ভাবে: ‘এই মানুষটা আমার কাজও বুঝে করতে পারবে।’"
      )
    ]
  },
  {
    slug: "hourly-vs-fixed-price-for-beginners",
    category: "Strategy",
    tone: "primary",
    level: "beginner",
    trackKey: "pricing",
    detailLabel: "BEGINNER GUIDE",
    readTime: "৮ মিনিট পড়ার সময়",
    publishedAt: "৭ এপ্রিল, ২০২৬",
    title: "Fixed-price না hourly: নতুন freelancer-এর জন্য সঠিক বাছাই",
    excerpt:
      "কখন hourly safer, কখন fixed-price smarter, আর scope unclear থাকলে কীভাবে decision নেবেন—এই guide সেখানেই সাহায্য করবে।",
    image: images.analytics,
    imageAlt: "Data charts representing pricing decisions and project estimation.",
    author: authors.mahin,
    content: [
      paragraph(
        "নতুন freelancer হিসেবে fixed-price আর hourly-এর মধ্যে confusion থাকা normal। অনেকে ভাবে fixed-price দিলে client বেশি পছন্দ করবে। আবার কেউ ভাবে hourly না হলে নিজের সময়ের value পাওয়া যাবে না। আসলে answer depends on scope clarity, experience level, আর revision risk-এর উপর।"
      ),
      heading("১. scope clear না হলে hourly safer"),
      paragraph(
        "যদি কাজটা ongoing, exploratory, বা client নিজেও পুরো deliverable clear না করে, hourly model safer। এতে আপনি every hidden revision absorb করতে বাধ্য থাকেন না। বিশেষ করে VA, support, research, iterative design বা consultation-এ hourly অনেক সময় cleaner fit।"
      ),
      tipList("hourly model ভালো যখন", [
        "brief evolving",
        "client বারবার direction change করতে পারে",
        "আপনার discovery time আলাদা করে লাগে",
        "work repeatable but variable"
      ]),
      heading("২. fixed-price ভালো যখন outcome narrow"),
      paragraph(
        "একটা landing page audit, ৫টা social caption, ১টা onboarding email sequence—এমন narrow deliverable-এ fixed-price smart। Client budget predict করতে পারে, আপনি scope define করতে পারেন, আর deal faster close হয়।"
      ),
      quote("Pricing model বাছার আগে deliverable define করুন। Model তখনই স্পষ্ট হয়ে যাবে।"),
      heading("৩. নতুনদের জন্য hybrid চিন্তাও useful"),
      paragraph(
        "আপনি চাইলে প্রথম phase fixed-price, পরে support hourly—এই মডেলও use করতে পারেন। এতে client entry barrier কম পায়, আর আপনি later-stage changes-এর জন্য protected থাকেন।"
      ),
      tipList("decision করার আগে ৪টা প্রশ্ন", [
        "scope measurable কি না",
        "revision limit define করা গেছে কি না",
        "client decision-maker clear কি না",
        "আপনার own speed estimate reliable কি না"
      ]),
      paragraph(
        "Pricing model choose করার সময় ego না, risk management দিয়ে ভাবুন। নতুন হিসেবে overcommit না করে safe model বাছলে আপনার client experience-ও ভালো হবে, margin-ও বাঁচবে।"
      )
    ]
  },
  {
    slug: "client-reply-follow-up-system",
    category: "Tutorials",
    tone: "secondary",
    level: "beginner",
    trackKey: "close",
    detailLabel: "BEGINNER GUIDE",
    readTime: "৯ মিনিট পড়ার সময়",
    publishedAt: "৮ এপ্রিল, ২০২৬",
    title: "Client reply পাওয়ার জন্য simple follow-up system",
    excerpt:
      "reply না এলে desperation না দেখিয়ে কোন rhythm-এ follow-up করলে conversation revive হওয়ার chance বাড়ে, সেটার practical system।",
    image: images.success,
    imageAlt: "Friendly collaboration scene that reflects communication and follow-up success.",
    author: authors.sabbir,
    content: [
      paragraph(
        "Follow-up অনেক freelancer-এর কাছেই uncomfortable। মনে হয় বারবার message দিলে annoying লাগবে। কিন্তু problem follow-up না, problem হলো wrong follow-up। যদি আপনার message client-এর decision সহজ করে, তাহলে follow-up helpful। আর যদি শুধু ‘just checking in’ হয়, তাহলে useless।"
      ),
      heading("১. follow-up-এর timing random রাখবেন না"),
      paragraph(
        "Proposal পাঠিয়ে ৬ ঘণ্টা পর follow-up দিলে সেটা insecure লাগে। আবার ১০ দিন পর দিলে context ঠান্ডা হয়ে যায়। Simple cadence রাখুন: first follow-up ২–৩ দিন পরে, second follow-up ৫–৬ দিন পরে, তারপর stop। এতে আপনি pushy না হয়ে present থাকেন।"
      ),
      tipList("follow-up cadence", [
        "Day 0: original proposal",
        "Day 2 বা 3: value-based reminder",
        "Day 5 বা 6: short final note with clear next step"
      ]),
      heading("২. follow-up-এ নতুন value দিন"),
      paragraph(
        "একই কথা repeat করবেন না। নতুন angle দিন। যেমন একটা tiny audit, short recommendation, বা realistic question। এতে client বুঝে আপনি এখনও thoughtless template mode-এ নেই।"
      ),
      quote("ভালো follow-up client-কে chase করে না, decision easier করে।"),
      heading("৩. final note-এ dignity রাখুন"),
      paragraph(
        "Last follow-up-এ desperate tone দেবেন না। Short, calm, respectful note দিন। লিখতে পারেন: ‘যদি project এখনও open থাকে, আমি ৩টা targeted suggestion share করতে পারি। না হলে future-এর জন্য open থাকলাম।’ এই tone professional।"
      ),
      tipList("যে ভাষা avoid করবেন", [
        "I am waiting for your reply",
        "Please respond urgently",
        "I really need this job",
        "Kindly check my proposal again"
      ]),
      paragraph(
        "আপনি যদি clear follow-up habit রাখেন, তাহলে reply rate শুধু বাড়বে না, নিজের confidence-ও বাড়বে। কারণ আপনি জানবেন proposal পাঠানোর পরও আপনার হাতে একটা intentional next step আছে।"
      )
    ]
  },
  {
    slug: "interview-call-15-minute-checklist",
    category: "Tutorials",
    tone: "secondary",
    level: "beginner",
    trackKey: "interview",
    detailLabel: "BEGINNER GUIDE",
    readTime: "৮ মিনিট পড়ার সময়",
    publishedAt: "৯ এপ্রিল, ২০২৬",
    title: "Interview call-এর আগে ১৫ মিনিটের checklist",
    excerpt:
      "call-এর আগে ছোট preparation করলেই confidence, clarity, আর close chance—তিনটাই noticeably improve হয়।",
    image: images.success,
    imageAlt: "Team discussion that reflects preparation before a client interview.",
    author: authors.sadia,
    content: [
      paragraph(
        "অনেক freelancer call-এ fail করেন skill-এর কারণে না, preparation-এর কারণে। তারা brief আবার পড়ে না, প্রশ্ন সাজায় না, নিজের offer পরিষ্কার করে না। ফল হলো call-এ কথোপকথন loosely চলে, আর client আপনাকে memorable হিসেবে না দেখে ‘one of many’ হিসেবে দেখে।"
      ),
      heading("১. call-এর আগে brief একবার না, দুইবার পড়ুন"),
      paragraph(
        "প্রথমবার পড়বেন problem বোঝার জন্য। দ্বিতীয়বার পড়বেন gaps ধরার জন্য। কোথায় ambiguity আছে, কোথায় client result বলেছে কিন্তু path বলেনি, কোথায় priority unclear—এই জায়গাগুলোই আপনার smart question source।"
      ),
      tipList("১৫ মিনিটের prep list", [
        "job post re-read",
        "client-এর website বা profile quick scan",
        "৩টা question লিখে রাখা",
        "১টা suggested approach mentally prepare করা"
      ]),
      heading("২. নিজের offer এক লাইনে বলতে পারুন"),
      paragraph(
        "Call-এ client যদি জিজ্ঞেস করে ‘so how would you handle this?’ তখন ৫ মিনিট ধরে ভেসে কথা বলবেন না। এক লাইনে frame দিন, তারপর detail-এ যান। উদাহরণ: ‘আমি first week-এ audit + priorities lock করব, তারপর phase-wise execution দেব।’"
      ),
      quote("Interview call জেতা মানে বেশি কথা বলা না, structure দিয়ে কথা বলা।"),
      heading("৩. call-এর শেষে next step secure করুন"),
      paragraph(
        "অনেকে call শেষে শুধু thanks বলে রেখে দেয়। এটা miss। শেষেই বলুন next step কী হতে পারে: proposal revision, short audit, milestone plan, বা kickoff date। এতে client decision inertia কমে।"
      ),
      tipList("শেষে যে ৩টা line useful", [
        "চাইলে আমি আজকেই brief recap পাঠাতে পারি",
        "আমি phase-wise scope লিখে দিতে পারি",
        "আপনি confirm করলে আমি প্রথম milestone structure share করব"
      ]),
      paragraph(
        "১৫ মিনিটের prep boring মনে হতে পারে, কিন্তু এই boring discipline-ই interview-কে polished করে। আর polished impression অনেক সময় raw talent-এর চেয়েও দ্রুত contract জিতিয়ে দেয়।"
      )
    ]
  }
];
