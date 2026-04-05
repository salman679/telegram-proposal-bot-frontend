import type { BlogArticleAuthor } from "./model";

export const paragraph = (content: string) => ({ type: "paragraph", content } as const);
export const heading = (content: string) => ({ type: "heading", content } as const);
export const tipList = (title: string, items: string[]) =>
  ({ type: "tipList", title, items } as const);
export const quote = (content: string) => ({ type: "quote", content } as const);

export const authors: Record<string, BlogArticleAuthor> = {
  ariful: {
    name: "আরিফুল ইসলাম",
    role: "সিনিয়র ফ্রিল্যান্সিং মেন্টর",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAflKqnMZ7OrapUrozBgt_odKjqRSpywD1LK9s20dwdAe5wWbQXu-zLuFAOLGF_IiOKWQILc4g3LbddB4XW7h-4xi-fk2-RCau8ooavhMBPdkUp3mN1HSGnVr38VzHIHfWmgKsIkcxvm7OOsgS5-qmTMLGgMYDQ_fDIFue2cP7DEMX_xd0HsZSYuTBdtY-28Rl59Hkkq7Yk0WS63OxE4ygYDubvRVp6YyyfzSzdDVghpv2ECtVeHWKxyBcAUXQC0G6uzimrqMR6JdA",
    imageAlt: "Portrait of a freelance mentor in a modern office."
  },
  nusrat: {
    name: "নুসরাত জাহান",
    role: "এআই ও প্রোফাইল স্ট্র্যাটেজি কনসালট্যান্ট",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAs09IgqAWkwP2ngDLtbSLszndAxs95Z6dd7mnFOkhfuw642Qfd9jaXwNe1jay9CKR3_fFwxVZ53fV02vX8Lhrcy2Y9TMGnZ4ywlTR8WD09TX7dlNVGB5Ft_qNATP4xgePauucfzO4D1GMm5CZqQAdJkHZTHNDGb0U5GXZUVM455wPROTkLC_dOHR-4xM_Ja6nIToh0MFWgA5tIRjQ-5V5RfHyFvegj55SjNAvcoZ3zyurgPnIaJgwXijm1F6ayHC4qFABJi55kuU0",
    imageAlt: "Professional strategist working from a bright home office."
  },
  sabbir: {
    name: "সাব্বির রহমান",
    role: "ক্লায়েন্ট কমিউনিকেশন কোচ",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAs09IgqAWkwP2ngDLtbSLszndAxs95Z6dd7mnFOkhfuw642Qfd9jaXwNe1jay9CKR3_fFwxVZ53fV02vX8Lhrcy2Y9TMGnZ4ywlTR8WD09TX7dlNVGB5Ft_qNATP4xgePauucfzO4D1GMm5CZqQAdJkHZTHNDGb0U5GXZUVM455wPROTkLC_dOHR-4xM_Ja6nIToh0MFWgA5tIRjQ-5V5RfHyFvegj55SjNAvcoZ3zyurgPnIaJgwXijm1F6ayHC4qFABJi55kuU0",
    imageAlt: "Coach helping freelancers improve client communication."
  },
  tanvir: {
    name: "তানভীর হাসান",
    role: "কমিউনিটি লিড ও সাকসেস স্টোরি এডিটর",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAflKqnMZ7OrapUrozBgt_odKjqRSpywD1LK9s20dwdAe5wWbQXu-zLuFAOLGF_IiOKWQILc4g3LbddB4XW7h-4xi-fk2-RCau8ooavhMBPdkUp3mN1HSGnVr38VzHIHfWmgKsIkcxvm7OOsgS5-qmTMLGgMYDQ_fDIFue2cP7DEMX_xd0HsZSYuTBdtY-28Rl59Hkkq7Yk0WS63OxE4ygYDubvRVp6YyyfzSzdDVghpv2ECtVeHWKxyBcAUXQC0G6uzimrqMR6JdA",
    imageAlt: "Community editor portrait in a modern office setting."
  },
  mahin: {
    name: "মাহিন চৌধুরী",
    role: "প্রাইসিং ও ডিল স্ট্র্যাটেজি অ্যাডভাইজর",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAflKqnMZ7OrapUrozBgt_odKjqRSpywD1LK9s20dwdAe5wWbQXu-zLuFAOLGF_IiOKWQILc4g3LbddB4XW7h-4xi-fk2-RCau8ooavhMBPdkUp3mN1HSGnVr38VzHIHfWmgKsIkcxvm7OOsgS5-qmTMLGgMYDQ_fDIFue2cP7DEMX_xd0HsZSYuTBdtY-28Rl59Hkkq7Yk0WS63OxE4ygYDubvRVp6YyyfzSzdDVghpv2ECtVeHWKxyBcAUXQC0G6uzimrqMR6JdA",
    imageAlt: "Business advisor portrait."
  },
  sadia: {
    name: "সাদিয়া নওরীন",
    role: "ইন্টারভিউ ও ক্লোজিং স্ট্র্যাটেজিস্ট",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAs09IgqAWkwP2ngDLtbSLszndAxs95Z6dd7mnFOkhfuw642Qfd9jaXwNe1jay9CKR3_fFwxVZ53fV02vX8Lhrcy2Y9TMGnZ4ywlTR8WD09TX7dlNVGB5Ft_qNATP4xgePauucfzO4D1GMm5CZqQAdJkHZTHNDGb0U5GXZUVM455wPROTkLC_dOHR-4xM_Ja6nIToh0MFWgA5tIRjQ-5V5RfHyFvegj55SjNAvcoZ3zyurgPnIaJgwXijm1F6ayHC4qFABJi55kuU0",
    imageAlt: "Interview and sales strategist portrait."
  },
  team: {
    name: "টিম ProposalPro",
    role: "এডিটোরিয়াল ও ওয়ার্কফ্লো টিম",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAflKqnMZ7OrapUrozBgt_odKjqRSpywD1LK9s20dwdAe5wWbQXu-zLuFAOLGF_IiOKWQILc4g3LbddB4XW7h-4xi-fk2-RCau8ooavhMBPdkUp3mN1HSGnVr38VzHIHfWmgKsIkcxvm7OOsgS5-qmTMLGgMYDQ_fDIFue2cP7DEMX_xd0HsZSYuTBdtY-28Rl59Hkkq7Yk0WS63OxE4ygYDubvRVp6YyyfzSzdDVghpv2ECtVeHWKxyBcAUXQC0G6uzimrqMR6JdA",
    imageAlt: "Editorial team profile."
  }
};

export const images = {
  workspace:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuCW4XZTsdTutSa8eo2v8OcUmBweq8r8Fnt_ssylF6aUsMQk5dF7fWbRbBQB9qKM-rhDuk3WxECVZyDochX6KDKPOim8JxtWdmRsIu_riN4aPgkAmAwTet0OWKPU3cG1QtswlKuu2iTUr2NPXUTDHLE4rFoPuZ1TuXsa3giX2122xnIfD7Q0iYT2SmcnoPZbsmKRuQYEgbxfPhZ7Lm3KcDItJAUXaorY2Zq5p4r58bybbXsAEPvScC4TDfrEn_UtUmS8GxRZz9ZOYN0",
  ai:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuDdIcvBHfyNGkDxXYVpv3g5aU3R8hI810g64UVveJbNOtbF9LsiRo6gvMjbLdGF_bPpGzGeBPwTwzGbgod68i2snoUoBBSJjVDHeQVoKfSD7eBPtV3Amozg8RIWEvIRbCqpDKeGVUpyStSbkvgx03QUOzIEjdRd3hxLCdNdjCnUo_A1blPepidAHtuELXHSnzNja4FaTo1EWeThedktYzucvv42iZlWfaz4PCprc9651AWIi7XahSPiBfTyPxERxGOwVSXwV_a4EdI",
  success:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuBMYyRfgIUoEMYoERQe_sJAvZMIve4c2M0aTG7TREsTbwMwt1yuW5MtkFjE3Jl2Lju4JwbONCMB1aEWLeYYgZ6XFrD2a3eUIOYkxY1-cs_AmzEWSEETc_H1E23xxILDIFruRFpo_tUtvsovF_nENry29aAYtkYjXc8fLrhac1aLjRtrGRB_wTE0eMJIYYNLYGQpapJ6KtXEwahiJnl9iP65VCp2NJMItIgVXtSPqtnr9znQzqKeMzyewnfBX8r1bW9YGGJusEcl0VM",
  analytics:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuCdcMqdbMyLn9Vl6ZZ6NxkEYkvtfZBTbOOwXI8ImtLhcTGPvj1clSw_roUp3FW2OpkyXPYH9oSzOcy0Ayq2iSd43jJgUP7Wc8apl9jpIesBAqXu4jzMabKBpfFHQPxeW21XF0W_XmaQ9VqEUUG0ER0K6KPhapECdGa945tC3i9-p9Jx14y7wE3vejTrHqQAXf1onUGe8XPrlaXLSr_4yd02XyQSWmi0X2GhFNTG470xhm8x-rkcC5CD9snWsEs1AMHXWPdno3fVOe8",
  office:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuBgQEYjymtZGOF8OB6xSimSBu41lj7oCDaM68GW0vVHp5HkmJHel7xBJAtscVY30_1Je0pGCmwUoJzWPmSrWvXfhWoFAOs6qMSXje4NyKTKVCN-bpMpQ31EqGwraF9046b7j777qDpfS-pb2wdscv1RpNwoutlJJwmy2DeFPItkC3oHsOrrtGKM4b5hHPrSEruQ68UwKYnTbeUZvmsuZ3cQiXOmYv1VXFLuxMAvI7IfdfAFK_ZNJ2kKH9EQDKOakgqa7FWjaA43sZU"
} as const;
