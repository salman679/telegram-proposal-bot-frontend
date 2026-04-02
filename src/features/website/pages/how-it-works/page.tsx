import {
  BellRing,
  Bolt,
  CheckCircle2,
  ClipboardPaste,
  Edit3,
  Sparkles,
  Timer,
  TrendingUp,
  Trophy
} from "lucide-react";

import { Button } from "@/features/website/components/button";
import { Header } from "@/features/website/components/header";
import { MinimalFooter } from "@/features/website/components/minimal-footer";
import {
  SITE_CONTAINER_CLASS,
  TELEGRAM_BOT_URL
} from "@/features/website/config/site";

const steps = [
  {
    number: "01.",
    title: "Paste Job",
    description:
      "আপওয়ার্ক থেকে আপনার পছন্দের জবের বিবরণটি কপি করে আমাদের বট বা ড্যাশবোর্ডে পেস্ট করুন। AI স্বয়ংক্রিয়ভাবে সব প্রয়োজনীয় তথ্য বিশ্লেষণ করবে।",
    icon: ClipboardPaste,
    tone: "primary"
  },
  {
    number: "02.",
    title: "Get AI Proposal",
    description:
      "আমাদের অ্যাডভান্সড AI আপনার স্কিল এবং জবের চাহিদার মেলবন্ধনে একটি ইউনিক এবং ইমপ্রেসিভ প্রপোজাল লিখে দেবে।",
    icon: Sparkles,
    tone: "secondary"
  },
  {
    number: "03.",
    title: "Win Jobs",
    description:
      "প্রপোজালটি আপওয়ার্কে সাবমিট করুন। আমাদের অপ্টিমাইজড রাইটিং স্টাইল আপনার ইন্টারভিউ পাওয়ার সম্ভাবনা বহুগুণ বাড়িয়ে দেয়।",
    icon: Trophy,
    tone: "tertiary"
  }
];

const dailyTips = [
  "নতুন আপডেট",
  "বিডিং স্ট্র্যাটেজি",
  "সাকসেস স্টোরি"
];

const siteWidthClass = `relative z-[1] ${SITE_CONTAINER_CLASS}`;
const surfaceCardClass =
  "rounded-[32px] bg-[var(--surface-ink)] shadow-[var(--shadow-light)]";
const toneClasses = {
  primary: "bg-[rgba(74,64,224,0.12)] text-[var(--primary)]",
  secondary: "bg-[rgba(112,42,225,0.12)] text-[var(--secondary)]",
  tertiary: "bg-[rgba(0,98,140,0.12)] text-[var(--tertiary)]"
} as const;

export function HowItWorksPage() {
  return (
    <main className="relative min-h-screen overflow-x-clip px-[clamp(18px,3vw,36px)] pb-24 pt-6">
      <div
        className="pointer-events-none absolute -left-[100px] -top-[120px] h-[420px] w-[420px] rounded-full blur-[28px]"
        style={{
          background: "radial-gradient(circle, rgba(74, 64, 224, 0.08), transparent 70%)"
        }}
      />
      <div
        className="pointer-events-none absolute right-[-120px] top-[300px] h-[380px] w-[380px] rounded-full blur-[28px]"
        style={{
          background: "radial-gradient(circle, rgba(112, 42, 225, 0.1), transparent 70%)"
        }}
      />

      <Header activePage="how-it-works" benefitsHref="/#benefits" />

      <section className={`${siteWidthClass} flex flex-col items-center pb-8 pt-28 text-center max-[780px]:pt-[84px]`}>
        <span className="inline-block rounded-full bg-[rgba(220,201,255,0.7)] px-[14px] py-2 text-[0.76rem] font-extrabold uppercase tracking-[0.14em] text-[var(--primary)]">
          The Future of Bidding
        </span>
        <h1 className="mx-auto mt-6 text-[clamp(3rem,6vw,5.8rem)] leading-[1.05] tracking-[-0.05em] max-[520px]:text-[clamp(2.4rem,11vw,3.6rem)]">
          সহজ ৩টি ধাপে <br />
          <span className="text-[var(--primary)]">বিজয়ী প্রপোজাল</span> লিখুন
        </h1>
        <p className="mx-auto mt-5 max-w-[660px] text-center text-[1.05rem] leading-[1.8] text-[var(--muted)]">
          আপওয়ার্ক বিড বিডি-র শক্তিশালী AI ব্যবহার করে কয়েক সেকেন্ডের মধ্যে
          প্রফেশনাল প্রপোজাল তৈরি করুন এবং আপনার ফ্রিল্যান্সিং ক্যারিয়ারকে নিয়ে
          যান নতুন উচ্চতায়।
        </p>
      </section>

      <section className={`${siteWidthClass} grid gap-6 pt-7 lg:grid-cols-3`}>
        {steps.map(({ number, title, description, icon: Icon, tone }) => (
          <article key={number} className={`${surfaceCardClass} p-[30px]`}>
            <div
              className={`grid h-16 w-16 place-items-center rounded-[20px] ${
                toneClasses[tone as keyof typeof toneClasses]
              }`}
            >
              <Icon size={30} />
            </div>
            <div className="mt-[22px] text-[2.5rem] font-black text-[var(--surface-highest)]">
              {number}
            </div>
            <h2 className="mt-2 text-[1.8rem]">{title}</h2>
            <p className="mt-[14px] leading-[1.8] text-[var(--muted)]">
              {description}
            </p>
          </article>
        ))}
      </section>

      <section className={`${siteWidthClass} mt-24 rounded-[40px] bg-[var(--surface-low)] px-[clamp(18px,3vw,36px)] py-24 max-[780px]:px-[22px] max-[780px]:py-8`}>
        <div className="mb-[38px]">
          <h2 className="text-[clamp(2rem,4vw,3.3rem)] leading-[1.08]">
            কেন আমাদের ব্যবহার করবেন?
          </h2>
          <p className="mt-2.5 text-[var(--muted)]">
            প্রফেশনাল ফ্রিল্যান্সারদের জন্য সেরা টুলস
          </p>
        </div>

        <div className="grid gap-6 xl:grid-cols-12">
          <article
            className={`${surfaceCardClass} grid gap-[26px] p-[30px] xl:col-span-8 xl:grid-cols-[minmax(0,1fr)_220px] xl:items-center`}
          >
            <div className="grid gap-[14px]">
              <TrendingUp size={46} />
              <h3 className="text-[1.8rem] leading-[1.1]">High Success Rate</h3>
              <p className="leading-[1.8] text-[var(--muted)]">
                আমাদের AI generated proposals বিশেষ করে Upwork অ্যালগরিদম এবং
                client psychology বুঝে লেখা হয়, যা আপনার hire হওয়ার সুযোগ বাড়ায়।
              </p>
            </div>
            <div className="min-h-[200px] overflow-hidden rounded-3xl bg-[rgba(74,64,224,0.05)]">
              <img
                className="h-full w-full object-cover"
                alt="Success data visualization"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuANkMrq7vxQvfoEPvh5YgVsgOW_66UznB1i3GZEnt9bpMFLdJwP--OfTJRYTZA-CckaatZG6uHioQbplXR1PkW6zUd98J2YAKOrBekq4NWaVOIky6Ehl61rgW3xx78yzPA9u87062OBKjcmlZMafliyc-nbDywuVrfQp2OZRfmiewWR2TAPX5K88BCs76Vl0TCNFKCMrlYP2Yt_oOlxPqBYHU8SJoYke-dDQ-nuqtLsNrT3l-zBCeMvy4EfUn0MCN-0J6aq38cOxq4"
              />
            </div>
          </article>

          <article className="grid gap-[18px] rounded-[32px] bg-[linear-gradient(135deg,var(--primary),var(--secondary))] p-[30px] text-[#f4f1ff] shadow-[var(--shadow-light)] xl:col-span-4">
            <Bolt size={52} />
            <div className="grid gap-[14px]">
              <h3 className="text-[1.8rem] leading-[1.1]">Fast Generation</h3>
              <p className="leading-[1.8] text-[rgba(244,241,255,0.84)]">
                মাত্র ৫ সেকেন্ডের মধ্যে সম্পূর্ণ প্রপোজাল তৈরি।
              </p>
            </div>
          </article>

          <article className={`${surfaceCardClass} grid gap-[14px] p-[30px] xl:col-span-4`}>
            <Edit3 size={38} />
            <h3 className="text-[1.8rem] leading-[1.1]">AI-Optimized Writing</h3>
            <p className="leading-[1.8] text-[var(--muted)]">
              ব্যাকরণগত নির্ভুলতা এবং প্রফেশনাল টোন নিশ্চিত করে আমাদের উন্নত ভাষা
              মডেল।
            </p>
          </article>

          <article
            className={`${surfaceCardClass} flex flex-col gap-7 p-[30px] xl:col-span-8 xl:flex-row xl:items-center`}
          >
            <div className="grid h-[160px] w-[160px] shrink-0 place-items-center rounded-full bg-[rgba(112,42,225,0.1)] text-[var(--secondary)] max-[780px]:h-[120px] max-[780px]:w-[120px]">
              <Timer size={58} />
            </div>
            <div>
              <h3 className="text-[1.8rem] leading-[1.1]">Time Saving</h3>
              <p className="mt-[14px] leading-[1.8] text-[var(--muted)]">
                প্রতিদিন বিডিং করার পেছনে ঘণ্টার পর ঘণ্টা সময় নষ্ট না করে মাত্র
                কয়েক মিনিটে কাজ শেষ করুন। বাকি সময়টি আপনার প্রোজেক্ট ডেলিভারিতে
                ব্যয় করুন।
              </p>
            </div>
          </article>
        </div>
      </section>

      <section className={`${siteWidthClass} relative mt-24 overflow-hidden rounded-[48px] bg-[linear-gradient(135deg,#1f2553_0%,#0b1020_100%)] p-14 text-white max-[780px]:p-[32px]`}>
        <div
          className="pointer-events-none absolute right-[-90px] top-[-120px] h-[320px] w-[320px] rounded-full blur-[90px]"
          style={{ background: "rgba(74, 64, 224, 0.22)" }}
        />
        <div
          className="pointer-events-none absolute bottom-[-120px] left-[-120px] h-[260px] w-[260px] rounded-full blur-[80px]"
          style={{ background: "rgba(112, 42, 225, 0.22)" }}
        />

        <div className="relative z-[1] grid gap-8 xl:grid-cols-[minmax(0,1.5fr)_minmax(260px,0.85fr)] xl:items-center">
          <div>
            <div className="inline-flex items-center gap-2.5 rounded-full bg-[rgba(255,255,255,0.1)] px-[14px] py-2.5 text-[0.86rem] font-extrabold uppercase tracking-[0.08em] backdrop-blur-[12px]">
              <BellRing size={18} />
              <span>প্রতিদিন রাত ৯টা</span>
            </div>
            <h2 className="mt-6 text-[clamp(2.2rem,4vw,4.8rem)] leading-[1.05]">
              Daily Upwork Tips <br />
              সরাসরি আপনার ফোনে
            </h2>
            <p className="mt-[18px] max-w-[680px] text-[1.04rem] leading-[1.85] text-[rgba(237,240,255,0.74)]">
              আমরা শুধুমাত্র বিডিং টুলই নই, আমরা আপনার ফ্রিল্যান্সিং মেন্টর।
              প্রতিদিন রাত ৯টায় আমরা শেয়ার করি এক্সক্লুসিভ আপওয়ার্ক টিপস যা আপনাকে
              মার্কেটপ্লেসে টিকে থাকতে সাহায্য করবে।
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-4">
              {dailyTips.map((tip) => (
                <span
                  key={tip}
                  className="inline-flex items-center gap-2 text-[0.92rem] text-[rgba(255,255,255,0.92)]"
                >
                  <CheckCircle2 size={16} />
                  {tip}
                </span>
              ))}
            </div>
          </div>

          <div className="relative z-[1] grid gap-[18px] rounded-[40px] border border-[rgba(255,255,255,0.1)] bg-[rgba(255,255,255,0.08)] p-8 text-center backdrop-blur-[20px]">
            <strong className="text-[4rem] leading-none max-[520px]:text-[3rem]">
              21:00
            </strong>
            <div className="mx-auto h-px w-20 bg-[rgba(255,255,255,0.18)]" />
            <p className="font-bold text-[rgba(237,240,255,0.82)]">
              আজকের টিপস মিস করবেন না!
            </p>
            <Button
              href={TELEGRAM_BOT_URL}
              external
              variant="inverted"
              fullWidth
              className="min-h-[58px] text-[1rem]"
              aria-label="নোটিফিকেশন অন করুন"
            >
              নোটিফিকেশন অন করুন
            </Button>
          </div>
        </div>
      </section>

      <section className={`${siteWidthClass} mt-20`}>
        <div className={`${surfaceCardClass} [background:linear-gradient(180deg,rgba(217,221,224,0.25),rgba(255,255,255,0.96)),var(--surface-ink)] px-10 py-[52px] text-center max-[780px]:px-[22px] max-[780px]:py-[32px]`}>
          <h2 className="text-[clamp(2rem,4vw,3rem)] leading-[1.12]">
            আপনি কি প্রস্তুত আপনার ফ্রিল্যান্সিং সফর শুরু করতে?
          </h2>
          <div className="mt-7 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              href={TELEGRAM_BOT_URL}
              external
              variant="primary"
              className="min-w-[220px] max-[640px]:w-full"
            >
              এখনই শুরু করুন - ফ্রি
            </Button>
            <Button
              href="/admin/login"
              variant="secondary"
              className="min-w-[220px] max-[640px]:w-full"
            >
              Bangla Support
            </Button>
          </div>
        </div>
      </section>

      <MinimalFooter
        links={[
          { href: "/pricing", label: "Pricing" },
          { href: "/admin/login", label: "Admin Login" },
          { href: TELEGRAM_BOT_URL, label: "Open Telegram Bot", external: true }
        ]}
      />
    </main>
  );
}
