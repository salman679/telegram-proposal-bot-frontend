export const blogCategories = [
  "All Articles",
  "Strategy",
  "AI Tools",
  "Success Stories",
  "Tutorials"
] as const;

export type BlogArticleTone = "primary" | "secondary" | "tertiary";

type BlogArticleContentBlock =
  | {
      type: "paragraph";
      content: string;
    }
  | {
      type: "heading";
      content: string;
    }
  | {
      type: "tipList";
      title: string;
      items: string[];
    }
  | {
      type: "quote";
      content: string;
    };

interface BlogArticleAuthor {
  name: string;
  role: string;
  image: string;
  imageAlt: string;
}

export interface BlogArticle {
  slug: string;
  category: string;
  tone: BlogArticleTone;
  detailLabel: string;
  readTime: string;
  publishedAt: string;
  title: string;
  excerpt: string;
  image: string;
  imageAlt: string;
  author: BlogArticleAuthor;
  content: BlogArticleContentBlock[];
  featured?: {
    badge: string;
    headline: string;
    description: string;
    ctaLabel: string;
  };
}

const blogArticles: BlogArticle[] = [
  {
    slug: "upwork-job-winning-strategy-2024",
    category: "Strategy",
    tone: "primary",
    detailLabel: "TUTORIAL",
    readTime: "১০ মিনিট পড়ার সময়",
    publishedAt: "৫ মে, ২০২৪",
    title: "২০২৪ সালে আপওয়ার্কে কাজ পাওয়ার সেরা কৌশল",
    excerpt:
      "নতুন অ্যালগরিদম অনুযায়ী কিভাবে বিড করলে রেসপন্স পাওয়ার সম্ভাবনা বাড়বে, তার একটি বাস্তবধর্মী গাইড।",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCW4XZTsdTutSa8eo2v8OcUmBweq8r8Fnt_ssylF6aUsMQk5dF7fWbRbBQB9qKM-rhDuk3WxECVZyDochX6KDKPOim8JxtWdmRsIu_riN4aPgkAmAwTet0OWKPU3cG1QtswlKuu2iTUr2NPXUTDHLE4rFoPuZ1TuXsa3giX2122xnIfD7Q0iYT2SmcnoPZbsmKRuQYEgbxfPhZ7Lm3KcDItJAUXaorY2Zq5p4r58bybbXsAEPvScC4TDfrEn_UtUmS8GxRZz9ZOYN0",
    imageAlt:
      "Modern minimalist workspace with a laptop showing Upwork, a notepad, and coffee on a clean desk.",
    author: {
      name: "আরিফুল ইসলাম",
      role: "সিনিয়র ফ্রিল্যান্সিং মেন্টর",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAflKqnMZ7OrapUrozBgt_odKjqRSpywD1LK9s20dwdAe5wWbQXu-zLuFAOLGF_IiOKWQILc4g3LbddB4XW7h-4xi-fk2-RCau8ooavhMBPdkUp3mN1HSGnVr38VzHIHfWmgKsIkcxvm7OOsgS5-qmTMLGgMYDQ_fDIFue2cP7DEMX_xd0HsZSYuTBdtY-28Rl59Hkkq7Yk0WS63OxE4ygYDubvRVp6YyyfzSzdDVghpv2ECtVeHWKxyBcAUXQC0G6uzimrqMR6JdA",
      imageAlt:
        "Portrait of a professional mentor with glasses in a softly lit office."
    },
    content: [
      {
        type: "paragraph",
        content:
          "২০২৪ সালে ফ্রিল্যান্সিং মার্কেটপ্লেসগুলোতে প্রতিযোগিতা আগের যেকোনো সময়ের চেয়ে অনেক বেশি। বিশেষ করে আপওয়ার্কের মতো প্ল্যাটফর্মে নিজেকে টিকিয়ে রাখতে হলে প্রথাগত পদ্ধতির বাইরে গিয়ে নতুন কৌশল অবলম্বন করা জরুরি। আজকের এই ব্লগে আমরা আলোচনা করবো কীভাবে আপনি আপনার প্রোফাইল অপ্টিমাইজ করবেন এবং এআই টুল ব্যবহার করে কার্যকর প্রপোজাল লিখবেন।"
      },
      {
        type: "heading",
        content: "১. প্রোফাইল অপ্টিমাইজেশন: প্রথম ধাপ"
      },
      {
        type: "paragraph",
        content:
          "আপনার প্রোফাইল হলো আপনার ডিজিটাল স্টোরফ্রন্ট। ক্লায়েন্ট আপনার প্রপোজাল দেখার পর প্রথম যে কাজটি করেন তা হলো আপনার প্রোফাইল ভিজিট করা। ২০২৪ সালে শুধু কাজের অভিজ্ঞতা শেয়ার করলেই হবে না, বরং আপনি ক্লায়েন্টের কোন সমস্যার সমাধান করতে পারেন, তা স্পষ্টভাবে ফুটিয়ে তুলতে হবে।"
      },
      {
        type: "tipList",
        title: "টিপস:",
        items: [
          "ভিডিও ইন্ট্রোডাকশন যোগ করুন, কারণ এটি দ্রুত ট্রাস্ট তৈরি করে।",
          "নিশভিত্তিক স্পেশালাইজড প্রোফাইল তৈরি করুন।",
          "পোর্টফোলিওতে শুধু ছবি নয়, ছোট কেস স্টাডি যুক্ত করুন।"
        ]
      },
      {
        type: "heading",
        content: "২. এআই প্রপোজাল রাইটিং: সঠিকভাবে ব্যবহার করুন"
      },
      {
        type: "paragraph",
        content:
          "অনেকেই চ্যাটজিপিটি বা অন্য টুল দিয়ে সরাসরি প্রপোজাল কপি-পেস্ট করেন, যা ক্লায়েন্টরা খুব সহজেই ধরে ফেলেন। আপনাকে এআই ব্যবহার করতে হবে কাঠামো, রিসার্চ এবং টোন উন্নত করার জন্য। ব্যক্তিগত স্পর্শ ছাড়া কোনো প্রপোজালই এখন আর কাজ করে না।"
      },
      {
        type: "quote",
        content:
          "মনে রাখবেন, আপওয়ার্কে আপনি কোনো রোবটের সাথে নয়, বরং একজন মানুষের সাথে যোগাযোগ করছেন। তাই আপনার কথায় যেন আবেগ এবং আন্তরিকতা থাকে।"
      },
      {
        type: "paragraph",
        content:
          "আপনার প্রপোজালের প্রথম দুই লাইন সবচেয়ে গুরুত্বপূর্ণ। এখানে সরাসরি প্রজেক্টের সমস্যার সমাধান নিয়ে কথা বলুন। নিজের পরিচয় দিয়ে সময় নষ্ট না করে ক্লায়েন্টের পেন-পয়েন্ট তুলে ধরুন এবং কেন আপনি সেই সমস্যার জন্য প্রস্তুত, তা দেখান।"
      }
    ]
  },
  {
    slug: "ai-tools-profile-optimization",
    category: "AI Tools",
    tone: "secondary",
    detailLabel: "AI TOOLS",
    readTime: "৮ মিনিট পড়ার সময়",
    publishedAt: "১২ মে, ২০২৪",
    title: "এআই টুলস দিয়ে প্রোফাইল অপ্টিমাইজ করার নিয়ম",
    excerpt:
      "চ্যাটজিপিটি, ক্লদ, এবং অন্যান্য টুল ব্যবহার করে কীভাবে আরও পরিষ্কার, বিশ্বাসযোগ্য এবং ক্লায়েন্ট-কেন্দ্রিক প্রোফাইল বানাবেন।",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDdIcvBHfyNGkDxXYVpv3g5aU3R8hI810g64UVveJbNOtbF9LsiRo6gvMjbLdGF_bPpGzGeBPwTwzGbgod68i2snoUoBBSJjVDHeQVoKfSD7eBPtV3Amozg8RIWEvIRbCqpDKeGVUpyStSbkvgx03QUOzIEjdRd3hxLCdNdjCnUo_A1blPepidAHtuELXHSnzNja4FaTo1EWeThedktYzucvv42iZlWfaz4PCprc9651AWIi7XahSPiBfTyPxERxGOwVSXwV_a4EdI",
    imageAlt:
      "Abstract representation of artificial intelligence neural networks in indigo and violet tones.",
    author: {
      name: "নুসরাত জাহান",
      role: "এআই ও প্রোফাইল স্ট্র্যাটেজি কনসালট্যান্ট",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAs09IgqAWkwP2ngDLtbSLszndAxs95Z6dd7mnFOkhfuw642Qfd9jaXwNe1jay9CKR3_fFwxVZ53fV02vX8Lhrcy2Y9TMGnZ4ywlTR8WD09TX7dlNVGB5Ft_qNATP4xgePauucfzO4D1GMm5CZqQAdJkHZTHNDGb0U5GXZUVM455wPROTkLC_dOHR-4xM_Ja6nIToh0MFWgA5tIRjQ-5V5RfHyFvegj55SjNAvcoZ3zyurgPnIaJgwXijm1F6ayHC4qFABJi55kuU0",
      imageAlt:
        "Professional woman working from a bright home office while wearing a headset."
    },
    content: [
      {
        type: "paragraph",
        content:
          "এআই টুলস আপনার হয়ে কাজ করবে না, কিন্তু আপনার চিন্তাকে পরিষ্কার করে দেবে। Upwork প্রোফাইল লেখার সময় সবচেয়ে বড় সমস্যা হয় নিজের মূল্যকে সঠিক ভাষায় প্রকাশ করা। এআই সেই ভাষা খুঁজে পেতে সাহায্য করতে পারে।"
      },
      {
        type: "heading",
        content: "১. নিজের পজিশনিং আগে ঠিক করুন"
      },
      {
        type: "paragraph",
        content:
          "প্রথমে টুলকে বলবেন না, ‘আমার জন্য প্রোফাইল লিখে দাও’। বরং আপনার সার্ভিস, অভিজ্ঞতা, কাঙ্ক্ষিত ক্লায়েন্ট, আর বড় সমস্যা কী সমাধান করেন তা লিখে দিন। তবেই এআই কার্যকর কপি দিতে পারবে।"
      },
      {
        type: "tipList",
        title: "প্রম্পট চেকলিস্ট:",
        items: [
          "আমি কোন ধরনের ক্লায়েন্টদের জন্য কাজ করি",
          "আমার মূল ফলাফল বা আউটকাম কী",
          "আমার টোন কেমন হবে: confident, helpful, না consultant-style"
        ]
      },
      {
        type: "heading",
        content: "২. এআই আউটপুট এডিট না করলে লাভ নেই"
      },
      {
        type: "paragraph",
        content:
          "AI-generated summary, overview, বা portfolio description সবসময় নিজের ভাষায় পরিমার্জন করুন। একই ধরনের বাক্য অনেক ফ্রিল্যান্সারই ব্যবহার করেন। আপনার আলাদা ভয়েস তৈরি না করলে প্রোফাইলটি generic দেখাবে।"
      }
    ]
  },
  {
    slug: "zero-to-hero-freelancing-journey",
    category: "Success Stories",
    tone: "tertiary",
    detailLabel: "SUCCESS STORY",
    readTime: "১০ মিনিট পড়ার সময়",
    publishedAt: "১৯ মে, ২০২৪",
    title: "জিরো থেকে হিরো: একজনের ফ্রিল্যান্সিং যাত্রা",
    excerpt:
      "কীভাবে একটি নিয়মিত প্রপোজাল সিস্টেম, টেমপ্লেট অপ্টিমাইজেশন, এবং এআই সহায়তায় তিন মাসে আয় দ্বিগুণ হলো।",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBMYyRfgIUoEMYoERQe_sJAvZMIve4c2M0aTG7TREsTbwMwt1yuW5MtkFjE3Jl2Lju4JwbONCMB1aEWLeYYgZ6XFrD2a3eUIOYkxY1-cs_AmzEWSEETc_H1E23xxILDIFruRFpo_tUtvsovF_nENry29aAYtkYjXc8fLrhac1aLjRtrGRB_wTE0eMJIYYNLYGQpapJ6KtXEwahiJnl9iP65VCp2NJMItIgVXtSPqtnr9znQzqKeMzyewnfBX8r1bW9YGGJusEcl0VM",
    imageAlt:
      "Happy professionals high-fiving in a bright and collaborative co-working space.",
    author: {
      name: "তানভীর হাসান",
      role: "কমিউনিটি লিড ও সাকসেস স্টোরি এডিটর",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAflKqnMZ7OrapUrozBgt_odKjqRSpywD1LK9s20dwdAe5wWbQXu-zLuFAOLGF_IiOKWQILc4g3LbddB4XW7h-4xi-fk2-RCau8ooavhMBPdkUp3mN1HSGnVr38VzHIHfWmgKsIkcxvm7OOsgS5-qmTMLGgMYDQ_fDIFue2cP7DEMX_xd0HsZSYuTBdtY-28Rl59Hkkq7Yk0WS63OxE4ygYDubvRVp6YyyfzSzdDVghpv2ECtVeHWKxyBcAUXQC0G6uzimrqMR6JdA",
      imageAlt:
        "Mentor portrait in a modern office setting."
    },
    content: [
      {
        type: "paragraph",
        content:
          "সাফল্যের গল্পগুলো দেখতে সহজ লাগে, কিন্তু প্রায় সবগুলোর পেছনেই থাকে একটি পুনরাবৃত্তিযোগ্য সিস্টেম। এই গল্পের মূল শিক্ষা হলো consistency beats inspiration. প্রতিদিন অল্প কিছু উন্নতি, দীর্ঘমেয়াদে বড় ফল দেয়।"
      },
      {
        type: "heading",
        content: "১. প্রপোজাল টেমপ্লেটকে সিস্টেমে রূপ দিন"
      },
      {
        type: "paragraph",
        content:
          "একজন সফল ফ্রিল্যান্সার শুরুতেই দশটি ভিন্ন টেমপ্লেট তৈরি করেননি। তিনি শুধু তিনটি মূল ফ্রেমওয়ার্ক বানিয়েছিলেন: short audit, problem-solution, এবং outcome-first. পরে প্রতিটি জবের জন্য সেগুলো কাস্টমাইজ করেছেন।"
      },
      {
        type: "quote",
        content:
          "যখন আমি প্রতিটি প্রপোজালে নতুন করে শুরু করা বন্ধ করলাম, তখনই আসল পরিবর্তন শুরু হলো।"
      },
      {
        type: "paragraph",
        content:
          "AI এখানে তার কাজকে দ্রুত করেছে, কিন্তু strategy এসেছে বাস্তব ক্লায়েন্ট কথোপকথন থেকে। এই দুইয়ের সংমিশ্রণই তার ফলাফল বদলে দিয়েছে।"
      }
    ]
  },
  {
    slug: "client-psychology-bidding",
    category: "Strategy",
    tone: "primary",
    detailLabel: "STRATEGY",
    readTime: "৬ মিনিট পড়ার সময়",
    publishedAt: "২৬ মে, ২০২৪",
    title: "বিডিংয়ের সময় ক্লায়েন্টের সাইকোলজি বুঝবেন যেভাবে",
    excerpt:
      "ক্লায়েন্ট কোন শব্দ, কোন গঠন, আর কী ধরনের টোনে দ্রুত সাড়া দেয় তা বুঝে নিজের উইন রেট বাড়ান।",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCdcMqdbMyLn9Vl6ZZ6NxkEYkvtfZBTbOOwXI8ImtLhcTGPvj1clSw_roUp3FW2OpkyXPYH9oSzOcy0Ayq2iSd43jJgUP7Wc8apl9jpIesBAqXu4jzMabKBpfFHQPxeW21XF0W_XmaQ9VqEUUG0ER0K6KPhapECdGa945tC3i9-p9Jx14y7wE3vejTrHqQAXf1onUGe8XPrlaXLSr_4yd02XyQSWmi0X2GhFNTG470xhm8x-rkcC5CD9snWsEs1AMHXWPdno3fVOe8",
    imageAlt:
      "Analytics dashboard with colorful data charts against a blurred night-time city background.",
    author: {
      name: "সাব্বির রহমান",
      role: "ক্লায়েন্ট কমিউনিকেশন কোচ",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAs09IgqAWkwP2ngDLtbSLszndAxs95Z6dd7mnFOkhfuw642Qfd9jaXwNe1jay9CKR3_fFwxVZ53fV02vX8Lhrcy2Y9TMGnZ4ywlTR8WD09TX7dlNVGB5Ft_qNATP4xgePauucfzO4D1GMm5CZqQAdJkHZTHNDGb0U5GXZUVM455wPROTkLC_dOHR-4xM_Ja6nIToh0MFWgA5tIRjQ-5V5RfHyFvegj55SjNAvcoZ3zyurgPnIaJgwXijm1F6ayHC4qFABJi55kuU0",
      imageAlt:
        "Professional woman smiling while working remotely."
    },
    content: [
      {
        type: "paragraph",
        content:
          "বেশিরভাগ ক্লায়েন্ট দীর্ঘ প্রপোজাল পড়ে না। তারা প্রথমে খোঁজে clarity, তারপর confidence, এরপর relevance. তাই বিডিংয়ের সময় ভাষা যত কম জটিল হবে, তত দ্রুত সিদ্ধান্ত নেওয়া সম্ভব হবে।"
      },
      {
        type: "heading",
        content: "১. প্রথম লাইনে অডিট বা পর্যবেক্ষণ দিন"
      },
      {
        type: "paragraph",
        content:
          "ক্লায়েন্ট যেন বুঝতে পারে আপনি জব পোস্টটি আসলেই পড়েছেন। একটি ছোট observation, missing angle, বা quick audit যুক্ত করলে বিশ্বাসযোগ্যতা অনেক বাড়ে।"
      },
      {
        type: "tipList",
        title: "যে জিনিসগুলো ক্লায়েন্ট দ্রুত লক্ষ্য করে:",
        items: [
          "আপনি কি তার নির্দিষ্ট সমস্যাটি নাম ধরে উল্লেখ করেছেন",
          "আপনার কথার টোন consultant-এর মতো, না generic freelancer-এর মতো",
          "আপনি কি ঝুঁকি ও next step পরিষ্কার করেছেন"
        ]
      },
      {
        type: "paragraph",
        content:
          "মানুষ সিদ্ধান্ত নেয় আবেগ আর নিশ্চয়তার সমন্বয়ে। আপনার প্রপোজালেও এই দুই উপাদান থাকতে হবে।"
      }
    ]
  },
  {
    slug: "upwork-bot-automation-masterclass",
    category: "Tutorials",
    tone: "primary",
    detailLabel: "MASTERCLASS",
    readTime: "১২ মিনিট পড়ার সময়",
    publishedAt: "৩০ মে, ২০২৪",
    title: "আপওয়ার্ক বট ব্যবহারের চূড়ান্ত গাইড: সময় বাঁচান ১০০% পর্যন্ত",
    excerpt:
      "অটোমেশন, টেমপ্লেট লাইব্রেরি, এবং দৈনিক রিভিউ রুটিন ব্যবহার করে কীভাবে বিডিংকে একটি পুনরাবৃত্তিযোগ্য সিস্টেমে বদলাবেন।",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBgQEYjymtZGOF8OB6xSimSBu41lj7oCDaM68GW0vVHp5HkmJHel7xBJAtscVY30_1Je0pGCmwUoJzWPmSrWvXfhWoFAOs6qMSXje4NyKTKVCN-bpMpQ31EqGwraF9046b7j777qDpfS-pb2wdscv1RpNwoutlJJwmy2DeFPItkC3oHsOrrtGKM4b5hHPrSEruQ68UwKYnTbeUZvmsuZ3cQiXOmYv1VXFLuxMAvI7IfdfAFK_ZNJ2kKH9EQDKOakgqa7FWjaA43sZU",
    imageAlt:
      "Modern tech office interior with glass walls and people collaborating in the background.",
    author: {
      name: "টিম আপওয়ার্ক বট বিডি",
      role: "অটোমেশন ওয়ার্কফ্লো টিম",
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAflKqnMZ7OrapUrozBgt_odKjqRSpywD1LK9s20dwdAe5wWbQXu-zLuFAOLGF_IiOKWQILc4g3LbddB4XW7h-4xi-fk2-RCau8ooavhMBPdkUp3mN1HSGnVr38VzHIHfWmgKsIkcxvm7OOsgS5-qmTMLGgMYDQ_fDIFue2cP7DEMX_xd0HsZSYuTBdtY-28Rl59Hkkq7Yk0WS63OxE4ygYDubvRVp6YyyfzSzdDVghpv2ECtVeHWKxyBcAUXQC0G6uzimrqMR6JdA",
      imageAlt:
        "Professional portrait used for the Upwork Bot BD team."
    },
    content: [
      {
        type: "paragraph",
        content:
          "Freelancing automation মানে অটোপাইলটে সবকিছু ছেড়ে দেওয়া নয়। এর মানে হলো repetitive কাজগুলোকে সিস্টেমে আনা, যাতে আপনি কৌশল, যোগাযোগ এবং ডেলিভারিতে বেশি সময় দিতে পারেন।"
      },
      {
        type: "heading",
        content: "১. একটি বিডিং অপারেটিং সিস্টেম তৈরি করুন"
      },
      {
        type: "paragraph",
        content:
          "জব খোঁজা, shortlist করা, proposal draft করা, আর follow-up—এই চারটি ধাপ আলাদা করে ফেলুন। প্রতিটি ধাপের জন্য template, checklist এবং review criteria থাকলে workflow অনেক দ্রুত হয়।"
      },
      {
        type: "tipList",
        title: "আপনার সিস্টেমে যা থাকা উচিত:",
        items: [
          "নিশভিত্তিক prompt library",
          "best-performing opening lines",
          "দৈনিক review window যেখানে আপনি AI output final-edit করবেন"
        ]
      },
      {
        type: "paragraph",
        content:
          "এভাবে automation আপনাকে robot বানায় না; বরং আপনার judgment-কে আরও মূল্যবান করে তোলে।"
      }
    ],
    featured: {
      badge: "Masterclass",
      headline: "আপওয়ার্ক বট ব্যবহারের চূড়ান্ত গাইড: সময় বাঁচান ১০০% পর্যন্ত",
      description:
        "আমাদের অটোমেশন টুল ব্যবহার করে কীভাবে সঠিক জবে দ্রুত বিড করবেন এবং নিজের ফ্রিল্যান্সিং লাইফস্টাইলকে আরও সংগঠিত করবেন।",
      ctaLabel: "Read Masterclass"
    }
  }
];

export function getBlogCategories() {
  return blogCategories;
}

export function getBlogIndexArticles() {
  return blogArticles.filter((article) => !article.featured);
}

export function getFeaturedBlogArticle() {
  return blogArticles.find((article) => article.featured);
}

export function getBlogArticleBySlug(slug: string) {
  return blogArticles.find((article) => article.slug === slug);
}

export function getBlogArticleSlugs() {
  return blogArticles.map((article) => article.slug);
}

export function getPopularBlogArticles(currentSlug: string, count = 2) {
  return blogArticles.filter((article) => article.slug !== currentSlug).slice(0, count);
}
