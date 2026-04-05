import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  Bot,
  Brain,
  CheckCircle2,
  CircleCheckBig,
  Clock3,
  Mail,
  MessageCircle,
  Rocket,
  Send,
  Sparkles,
  Target,
  Zap
} from "lucide-react";

import { Button } from "@/features/website/components/button";
import { Header } from "@/features/website/components/header";
import { getHomepageBlogArticles } from "@/features/website/pages/blog/data";
import {
  SITE_CONTAINER_CLASS,
  TELEGRAM_BOT_URL
} from "@/features/website/config/site";

const socialProofAvatars = [
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBhiDwVbgXBL9VH-6pYT3skk1vk1MOGb9OyV-B5ggtBnUJx23stk5fAIB_VuQhCNtgUt8YwRYlr_lsmfKm977T4kluMUUg-tFZgmzc_MS8wxHz_HZ96PtI7F1NzgHqQAX0sY_4KDGQrcEe1af9PujsgSMqbwK_TUXkgm7_S0ooUiqunKXgIZdWmXDsZZIjNc0w7gzxETlH0SdD7krpOfyWERRSOEXAE8vIkmCoVMv7BML9o0tbDz6XpuzpdOmoIUMn8WcecqC2te9g",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCc8SPOvnEAa_L9ZgkGOFkE_D8E3r8dkjcZcDKTh1uAFG3q5zEOA0RKaltAgfHbH4EgpdmOHmIBt0E-LPzBNb2VGQUoaSuFg9F0qAUnkRfEnab_m6tjxxsgjNtbT4l5S2oRCu95fknVVqpUXo_4wafTJFpatye9EFgSKY6eScHI-BuYd29OHijNn4Ejzbw0WhY3CbVDU3Pfv2drzdC3_4efNlGlSIvRyuEPgQPPKNcNcNAHYkIctINp8F_Kc8QDzx8BH-4SK8ms7kY",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDWOV72BGzVYVb8tulJ_g-PN3HcORQaCa4PBE8llNAjlR6Hw8cHUde9vv6Pzduj8TkTJe8CtKcYQdA_2FI1XU7tTKHrXl2BbAICnb534WyQlZ7PFGqRHKpMlJCiJkbYeFe77W7ATvwsgbxA-C7HwrlEyOkdpoypLWgocQQENHMRxFoKyX_KFCqAUZ_DqBoqv0KVs9hEEYt0b-FYKGqDvcIgG9-Y9IH9pMSZdEpA5hIgen8d0qprxoUPybVi_2E_sp0UqqEZOu9ew_U"
];

interface SectionCard {
  icon: LucideIcon;
  title: string;
  text: string;
}

const steps: SectionCard[] = [
  {
    icon: MessageCircle,
    title: "ধাপ ১: জব ডেসক্রিপশন পাঠান",
    text: "Upwork থেকে জবের বিস্তারিত কপি করে আমাদের টেলিগ্রাম বটে পেস্ট করুন।"
  },
  {
    icon: Sparkles,
    title: "ধাপ ২: AI প্রপোজাল পান",
    text: "কয়েক সেকেন্ডের মধ্যেই AI আপনার জন্য একটি কাস্টম প্রপোজাল লিখে দিবে।"
  },
  {
    icon: CircleCheckBig,
    title: "ধাপ ৩: Apply করুন → জব জিতুন",
    text: "প্রপোজালটি কপি করে আপওয়ার্কে সাবমিট করুন এবং ইন্টারভিউ কল পান।"
  }
];

const benefits: SectionCard[] = [
  {
    icon: Zap,
    title: "দ্রুত প্রপোজাল",
    text: "কন্ট্রাক্টরদের মধ্যে প্রথম কয়েকজনের মধ্যে থাকার গতি এনে দেয়।"
  },
  {
    icon: Target,
    title: "বেশি reply সম্ভাবনা",
    text: "ক্লায়েন্টের প্রয়োজন বুঝে hook, proof, আর CTA অপ্টিমাইজ করা হয়।"
  },
  {
    icon: Brain,
    title: "AI-optimized writing",
    text: "ভুলমুক্ত, পরিষ্কার, এবং প্রফেশনাল ল্যাঙ্গুয়েজে প্রপোজাল তৈরি হয়।"
  },
  {
    icon: Clock3,
    title: "সময় বাঁচান",
    text: "টাইপিংয়ে সময় নষ্ট না করে bidding strategy আর client selection-এ মন দিন।"
  }
];

const pricingPlans = [
  {
    name: "Weekly Plan",
    price: "৭৯",
    cta: "শুরু করুন",
    featured: false,
    points: [
      "৭ দিন আনলিমিটেড প্রপোজাল",
      "২৪/৭ সাপোর্ট",
      "টেলিগ্রাম প্রিমিয়াম এক্সেস"
    ]
  },
  {
    name: "Monthly Plan",
    price: "১৯৯",
    cta: "সাবস্ক্রাইব করুন",
    featured: true,
    points: [
      "৩০ দিন আনলিমিটেড প্রপোজাল",
      "প্রায়োরিটি সাপোর্ট",
      "এক্সক্লুসিভ ফ্রিল্যান্সিং গাইড",
      "নিউ ফিচার আর্লি এক্সেস"
    ]
  },
  {
    name: "Lifetime Plan",
    price: "৫৯৯",
    cta: "লাইফটাইম এক্সেস নিন",
    featured: false,
    points: [
      "আজীবনের জন্য এক্সেস",
      "১-অন-১ কনসালটেশন",
      "সকল ফিউচার আপডেট ফ্রি"
    ]
  }
];

const siteWidthClass = `relative z-[1] ${SITE_CONTAINER_CLASS}`;
const surfaceCardClass =
  "rounded-[32px] bg-[var(--surface-ink)] shadow-[var(--shadow-light)]";
const toneClasses = {
  primary: "bg-[rgba(74,64,224,0.12)] text-[var(--primary)]",
  secondary: "bg-[rgba(112,42,225,0.12)] text-[var(--secondary)]",
  tertiary: "bg-[rgba(0,98,140,0.12)] text-[var(--tertiary)]"
} as const;

export function HomePage() {
  const articles = getHomepageBlogArticles();

  return (
    <main className="relative overflow-x-clip px-[clamp(18px,3vw,36px)] pb-28 pt-6">
      <div
        className="pointer-events-none absolute -left-20 -top-[120px] h-[420px] w-[420px] rounded-full blur-[22px]"
        style={{
          background: "radial-gradient(circle, rgba(74, 64, 224, 0.08), transparent 68%)"
        }}
      />
      <div
        className="pointer-events-none absolute right-[-120px] top-[280px] h-[380px] w-[380px] rounded-full blur-[22px]"
        style={{
          background: "radial-gradient(circle, rgba(112, 42, 225, 0.1), transparent 68%)"
        }}
      />

      <Header benefitsHref="/#benefits" />

      <section className={`${siteWidthClass} grid gap-[clamp(28px,4vw,48px)] py-[clamp(64px,8vw,96px)] pb-16 lg:grid-cols-[minmax(0,1fr)_minmax(340px,0.92fr)] lg:items-center`}>
        <div>
          <div className="inline-flex w-fit items-center gap-2 rounded-full bg-[rgba(74,64,224,0.08)] px-3 py-2 text-[0.9rem] font-bold text-[var(--primary)]">
            <Sparkles size={16} />
            বাংলাদেশী ফ্রিল্যান্সারদের জন্য সেরা AI টুল
          </div>

          <h1 className="mt-5 text-[clamp(3.2rem,6vw,6rem)] leading-[0.96] tracking-[-0.05em]">
            Upwork-এ জব জিততে{" "}
            <span className="bg-[linear-gradient(135deg,var(--primary),var(--secondary))] bg-clip-text text-transparent">
              AI প্রপোজাল
            </span>{" "}
            ব্যবহার করুন
          </h1>

          <p className="mt-5 max-w-[52ch] text-[1.04rem] leading-[1.8] text-[var(--muted)]">
            শুধু জব ডেসক্রিপশন দিন, সেকেন্ডেই পান প্রফেশনাল প্রপোজাল যা আপনার
            ক্লায়েন্টের নজর কাড়বে।
          </p>

          <div className="mt-7 flex flex-wrap items-center gap-4">
            <Button href={TELEGRAM_BOT_URL} external variant="primary">
              Telegram-এ শুরু করুন
              <Rocket size={18} />
            </Button>
            <Button href="/how-it-works" variant="secondary">
              লাইভ ডেমো দেখুন
            </Button>
          </div>

          <div className="mt-[22px] flex flex-wrap items-center gap-4">
            <div className="flex items-center">
              {socialProofAvatars.map((avatar, index) => (
                <img
                  key={avatar}
                  alt="Freelancer using the bot"
                  src={avatar}
                  className={`h-[42px] w-[42px] rounded-full border-[3px] border-[var(--surface-low)] object-cover ${
                    index === 0 ? "ml-0" : "-ml-[10px]"
                  }`}
                />
              ))}
            </div>
            <p className="text-[var(--muted)]">
              <strong>৫০০+</strong> ফ্রিল্যান্সার প্রতিদিন ব্যবহার করছেন
            </p>
          </div>
        </div>

        <div className="relative">
          <div
            className="pointer-events-none absolute inset-[12%_10%] rounded-full blur-[70px]"
            style={{
              background: "radial-gradient(circle, rgba(112, 42, 225, 0.12), transparent 70%)"
            }}
          />
          <div className="relative overflow-hidden rounded-[34px] bg-[var(--surface-ink)] shadow-[var(--shadow-light)]">
            <div className="flex items-center gap-[14px] bg-[linear-gradient(135deg,var(--primary),#6558ff)] px-[22px] py-[22px] text-[#f4f1ff]">
              <div className="grid h-[46px] w-[46px] place-items-center rounded-full bg-[rgba(255,255,255,0.2)]">
                <Bot size={22} />
              </div>
              <div className="grid gap-0.5">
                <strong>Upwork Proposal Bot BD</strong>
                <span className="text-[0.82rem] opacity-85">bot is typing...</span>
              </div>
            </div>

            <div className="grid min-h-[360px] gap-4 bg-[linear-gradient(180deg,#f8fafc_0%,var(--surface-low)_100%)] p-[26px]">
              <div className="max-w-[86%] rounded-[24px] rounded-tl-[10px] bg-white px-[18px] py-4 shadow-[0_16px_36px_rgba(74,64,224,0.05)]">
                আসসালামু আলাইকুম! আপনার কাঙ্ক্ষিত জবের ডেসক্রিপশনটি এখানে পেস্ট করুন।
              </div>
              <div className="ml-auto max-w-[86%] rounded-[24px] rounded-tr-[10px] bg-[rgba(74,64,224,0.1)] px-[18px] py-4 shadow-[0_16px_36px_rgba(74,64,224,0.05)]">
                Looking for a React developer to build a modern dashboard with
                Tailwind CSS...
              </div>
              <div className="max-w-[86%] rounded-[24px] rounded-tl-[10px] bg-white px-[18px] py-4 shadow-[0_16px_36px_rgba(74,64,224,0.05)]">
                <strong>✨ AI Generated Proposal:</strong>
                <p className="mt-2.5 italic text-[var(--muted)]">
                  Hi there! I saw your requirement for a React &amp; Tailwind expert. I
                  have 3+ years of experience in building high-performance dashboards...
                </p>
              </div>
            </div>

            <div className="flex items-center justify-between gap-3 px-[22px] pb-[22px] pt-[18px] text-[var(--muted)]">
              <span className="flex-1 rounded-full bg-[var(--surface-container)] px-4 py-3">
                Type a message...
              </span>
              <Send size={18} />
            </div>
          </div>
        </div>
      </section>

      <section
        className={`${siteWidthClass} rounded-[40px] bg-[var(--surface-low)] px-[clamp(18px,3vw,36px)] py-[102px] max-[780px]:py-[72px]`}
        id="how-it-works"
      >
        <div className="mx-auto mb-11 grid max-w-[760px] gap-3 text-center">
          <h2 className="text-[clamp(2.2rem,4vw,4rem)] leading-[1.04] tracking-[-0.04em]">
            সহজ ৩টি ধাপে শুরু করুন
          </h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {steps.map(({ icon: Icon, title, text }) => (
            <article key={title} className={`${surfaceCardClass} p-8`}>
              <div className="mb-5 grid h-16 w-16 place-items-center rounded-[20px] bg-[rgba(74,64,224,0.08)] text-[var(--primary)]">
                <Icon size={24} />
              </div>
              <h3 className="text-[1.2rem]">{title}</h3>
              <p className="mt-2.5 leading-[1.8] text-[var(--muted)]">{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={`${siteWidthClass} grid gap-[52px] py-28 lg:grid-cols-2 lg:items-center`} id="benefits">
        <div className="relative min-h-[540px] overflow-hidden rounded-[34px] shadow-[var(--shadow-soft)]">
          <img
            className="h-full w-full object-cover"
            alt="Team collaborating in a bright workspace"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuA-qmToywF159ILJP2uiy4EYVVXyYMmzUqHXZwSM54cItw40ZS37xo3kFtheBIpflTOOemuV9cU9Gokxd837bb3xOsqxGmoJ0qmbVaJwxman_ml17Djv79eI4C3AMpXRCT2NcU7lyrRc6kIepLPG8loH-W9fyhirVJrHunhMR-MbJTMnC9LOc4rawui7h8UGlhlKsD1DYkK4EN1sJEYOmnrlvYcxn79RrnVlyehnkJvwQmhBS_A_Zzk9HIAR6DrkabCDP5jX41Hnes"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_24%,rgba(74,64,224,0.64)_100%)]" />
          <div className="absolute bottom-7 left-7 z-[1] grid max-w-[280px] gap-1.5 rounded-[24px] bg-[rgba(255,255,255,0.14)] p-[22px] text-white backdrop-blur-[20px] shadow-[var(--shadow-light)]">
            <strong className="text-[2rem]">৯৪%</strong>
            <span>ইউজারদের reply পাওয়ার হার বেড়েছে প্রথম মাসেই</span>
          </div>
        </div>

        <div className="grid gap-[26px]">
          <div className="grid gap-3">
            <span className="inline-flex w-fit items-center gap-2 rounded-full bg-[rgba(74,64,224,0.08)] px-3 py-2 text-[0.9rem] font-bold text-[var(--primary)]">
              Core Benefits
            </span>
            <h2 className="text-[clamp(2.2rem,4vw,4rem)] leading-[1.04] tracking-[-0.04em]">
              কেন আমাদের AI বট ব্যবহার করবেন?
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            {benefits.map(({ icon: Icon, title, text }) => (
              <article key={title} className="grid gap-2.5">
                <Icon size={24} className="text-[var(--primary)]" />
                <h3 className="text-[1.2rem]">{title}</h3>
                <p className="leading-[1.8] text-[var(--muted)]">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={`${siteWidthClass} relative mb-7 flex flex-col gap-6 rounded-[46px] bg-[linear-gradient(135deg,var(--secondary)_0%,var(--primary)_100%)] px-12 py-11 text-white shadow-[0_24px_56px_rgba(112,42,225,0.14)] lg:flex-row lg:items-center lg:justify-between`}>
        <div className="pointer-events-none absolute -right-[60px] -top-[100px] h-60 w-60 rounded-full bg-[rgba(255,255,255,0.16)] blur-[14px]" />
        <div className="relative max-w-[680px]">
          <h2 className="text-[clamp(2.2rem,4vw,4rem)] leading-[1.04] tracking-[-0.04em]">
            প্রতিদিন Upwork টিপস পান সরাসরি Telegram-এ
          </h2>
          <p className="mt-3 leading-[1.8] text-[rgba(255,255,255,0.88)]">
            আমরা শুধু বট নই, আমরা আপনার ফ্রিল্যান্সিং ক্যারিয়ারের সঙ্গী। প্রতিদিনের
            আপডেট এবং practical bidding tip মিস করবেন না।
          </p>
        </div>
        <Button href={TELEGRAM_BOT_URL} external variant="inverted">
          Open Telegram Bot
        </Button>
      </section>

      <section
        className={`${siteWidthClass} rounded-[40px] bg-[var(--surface-low)] px-[clamp(18px,3vw,36px)] py-[102px] max-[780px]:py-[72px]`}
        id="pricing"
      >
        <div className="mx-auto mb-11 grid max-w-[760px] gap-3 text-center">
          <span className="mx-auto inline-flex w-fit items-center gap-2 rounded-full bg-[rgba(74,64,224,0.08)] px-3 py-2 text-[0.9rem] font-bold text-[var(--primary)]">
            Pricing
          </span>
          <h2 className="text-[clamp(2.2rem,4vw,4rem)] leading-[1.04] tracking-[-0.04em]">
            সাশ্রয়ী মূল্যে সেরা সার্ভিস
          </h2>
          <p className="leading-[1.8] text-[var(--muted)]">
            আপনার ক্যারিয়ারে বড় পরিবর্তন আনতে ছোট একটি বিনিয়োগ। weekly থেকে
            lifetime, সব পরিকল্পনা freelancer-first।
          </p>
        </div>

        <div className="grid items-end gap-6 lg:grid-cols-3">
          {pricingPlans.map((plan) => (
            <article
              key={plan.name}
              className={`${surfaceCardClass} relative grid gap-[26px] p-8 ${
                plan.featured
                  ? "[background:linear-gradient(180deg,rgba(151,149,255,0.14)_0%,rgba(255,255,255,0.96)_26%),var(--surface-ink)] shadow-[0_28px_64px_rgba(74,64,224,0.08)] lg:-translate-y-3"
                  : ""
              }`}
            >
              {plan.featured ? (
                <div className="absolute left-1/2 top-[-14px] -translate-x-1/2 rounded-full bg-[var(--primary)] px-3 py-2 text-[0.7rem] font-bold text-white">
                  Most Popular
                </div>
              ) : null}
              <div className="grid gap-2.5">
                <h3 className="text-[1.2rem]">{plan.name}</h3>
                <div className="flex items-baseline gap-2.5">
                  <strong className="text-[clamp(2.6rem,4vw,4rem)] tracking-[-0.05em]">
                    {plan.price}
                  </strong>
                  <span className="text-[var(--muted)]">টাকা</span>
                </div>
              </div>

              <ul className="grid gap-3.5 text-[var(--muted)]">
                {plan.points.map((point) => (
                  <li key={point} className="flex items-start gap-2.5">
                    <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-[var(--primary)]" />
                    {point}
                  </li>
                ))}
              </ul>

              <Button
                href={TELEGRAM_BOT_URL}
                external
                variant={plan.featured ? "primary" : "secondary"}
              >
                {plan.cta}
              </Button>
            </article>
          ))}
        </div>
      </section>

      <section className={`${siteWidthClass} pt-[108px]`} id="blog">
        <div className="mb-[42px] flex flex-col gap-6 max-[780px]:items-start lg:flex-row lg:items-end lg:justify-between">
          <div className="grid gap-3">
            <span className="inline-flex w-fit items-center gap-2 rounded-full bg-[rgba(74,64,224,0.08)] px-3 py-2 text-[0.9rem] font-bold text-[var(--primary)]">
              Resources
            </span>
            <h2 className="text-[clamp(2.2rem,4vw,4rem)] leading-[1.04] tracking-[-0.04em]">
              ফ্রিল্যান্সিং রিসোর্স ও ব্লগ
            </h2>
            <p className="leading-[1.8] text-[var(--muted)]">
              সাফল্যের টিপস, client psychology, আর AI workflow শিখুন আমাদের থেকে।
            </p>
          </div>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 font-bold text-[var(--muted)] transition duration-200 hover:text-[var(--primary)]"
          >
            সবগুলো দেখুন
            <ArrowRight size={18} />
          </Link>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {articles.map((article) => (
            <article key={article.slug} className={`${surfaceCardClass} overflow-hidden`}>
              <Link href={`/blog/${article.slug}`} className="block overflow-hidden">
                <img
                  className="h-[220px] w-full object-cover transition duration-500 hover:scale-[1.04]"
                  alt={article.imageAlt}
                  src={article.image}
                />
              </Link>
              <div className="grid gap-[14px] p-6">
                <div className="flex flex-wrap items-center gap-3">
                  <span
                    className={`inline-flex w-fit items-center rounded-full px-3 py-2 text-[0.9rem] font-bold ${
                      toneClasses[article.tone]
                    }`}
                  >
                    {article.category}
                  </span>
                  <span className="text-[0.84rem] text-[var(--muted)]">{article.publishedAt}</span>
                </div>
                <Link
                  href={`/blog/${article.slug}`}
                  className="transition duration-200 hover:text-[var(--primary)]"
                >
                  <h3 className="text-[1.2rem]">{article.title}</h3>
                </Link>
                <p className="leading-[1.8] text-[var(--muted)]">{article.excerpt}</p>
                <Link
                  href={`/blog/${article.slug}`}
                  className="inline-flex w-fit items-center gap-2 font-bold text-[var(--primary)] transition duration-200 hover:gap-3"
                >
                  পড়ুন
                  <ArrowRight size={16} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <footer className={`${siteWidthClass} mt-16 rounded-[40px] bg-[var(--surface-low)] px-7 pb-6 pt-[72px]`}>
        <div className="grid gap-[30px] lg:grid-cols-[1.1fr_0.7fr_0.7fr_1fr]">
          <div className="grid gap-3">
            <div className="text-[1.55rem] font-extrabold tracking-[-0.04em] bg-[linear-gradient(135deg,var(--primary),var(--secondary))] bg-clip-text text-transparent">
              Upwork Proposal Bot BD
            </div>
            <p className="leading-[1.8] text-[var(--muted)]">
              বাংলাদেশী ফ্রিল্যান্সারদের ক্ষমতায়নের লক্ষ্যে তৈরি একটি আধুনিক AI সলিউশন।
            </p>
            <div className="flex items-center gap-4">
              <Mail size={18} />
              <MessageCircle size={18} />
              <Send size={18} />
            </div>
          </div>

          <div className="grid gap-3">
            <h4 className="text-[1.2rem]">কুইক লিঙ্ক</h4>
            <Link href="/how-it-works" className="text-[var(--muted)]">
              How it Works
            </Link>
            <a href="#benefits" className="text-[var(--muted)]">
              Benefits
            </a>
            <Link href="/pricing" className="text-[var(--muted)]">
              Pricing
            </Link>
            <Link href="/blog" className="text-[var(--muted)]">
              Resources
            </Link>
          </div>

          <div className="grid gap-3">
            <h4 className="text-[1.2rem]">সাপোর্ট</h4>
            <Link href="/pricing" className="text-[var(--muted)]">
              Plans
            </Link>
            <Link href="/admin/login" className="text-[var(--muted)]">
              Admin Login
            </Link>
            <Link href="/blog" className="text-[var(--muted)]">
              FAQs
            </Link>
            <a href="#benefits" className="text-[var(--muted)]">
              Bangla Interface
            </a>
          </div>

          <div className="grid gap-3">
            <h4 className="text-[1.2rem]">নিউজলেটার</h4>
            <p className="leading-[1.8] text-[var(--muted)]">
              সেরা টিপসগুলো সরাসরি আপনার ইনবক্সে পেতে সাবস্ক্রাইব করুন।
            </p>
            <div className="flex gap-2.5 max-[780px]:flex-col">
              <input
                type="email"
                placeholder="Email"
                className="w-full rounded-2xl border border-transparent bg-[var(--surface-highest)] px-4 py-[14px] text-[var(--ink)] outline-none focus:border-[rgba(74,64,224,0.4)] focus:shadow-[0_0_0_6px_rgba(136,133,255,0.18)]"
              />
              <Button type="button" variant="primary">
                Join
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-14 text-center text-[0.86rem] text-[var(--muted)]">
          © 2026 Upwork Proposal Bot BD. All rights reserved.
        </div>
      </footer>
    </main>
  );
}
