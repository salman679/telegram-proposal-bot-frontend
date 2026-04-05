import {
  CheckCircle2,
  CircleX,
  ShieldCheck,
  Sparkles
} from "lucide-react";

import { Button } from "@/features/website/components/button";
import { Footer } from "@/features/website/components/footer";
import { Header } from "@/features/website/components/header";
import {
  SITE_CONTAINER_CLASS,
  TELEGRAM_BOT_URL
} from "@/features/website/config/site";

const pricingPlans = [
  {
    name: "Free Plan",
    price: "০ টাকা",
    cadence: "/চিরকাল",
    description: "নতুনদের জন্য যারা আমাদের সার্ভিসটি আগে পরখ করে দেখতে চান।",
    cta: "Start for Free",
    featured: false,
    points: [
      { label: "2 proposals/day", enabled: true },
      { label: "Standard output", enabled: true },
      { label: "No custom tone", enabled: false }
    ]
  },
  {
    name: "Weekly",
    price: "৭৯ টাকা",
    cadence: "/সপ্তাহ",
    description: "ছোট বাজেটে ধারাবাহিকভাবে proposal পাঠাতে চাইলে এই প্ল্যান যথেষ্ট।",
    cta: "Choose Weekly",
    featured: false,
    points: [
      { label: "Unlimited proposals", enabled: true },
      { label: "High-converting output", enabled: true },
      { label: "Custom tone", enabled: true },
      { label: "24/7 Support", enabled: true },
      { label: "Daily Upwork Tips", enabled: true }
    ]
  },
  {
    name: "Monthly",
    price: "১৯৯ টাকা",
    cadence: "/মাস",
    description: "সবচেয়ে ব্যালান্সড প্ল্যান। নিয়মিত bidding, better output, আর full workflow support.",
    cta: "Choose Monthly",
    featured: true,
    points: [
      { label: "Unlimited proposals", enabled: true },
      { label: "High-converting output", enabled: true },
      { label: "Custom tone", enabled: true },
      { label: "24/7 Support", enabled: true },
      { label: "Daily Upwork Tips", enabled: true }
    ]
  },
  {
    name: "Lifetime",
    price: "৫৯৯ টাকা",
    cadence: "/একবার",
    description: "একবার পেমেন্ট করে দীর্ঘমেয়াদে সব premium সুবিধা unlocked রাখুন।",
    cta: "Go Lifetime",
    featured: false,
    points: [
      { label: "Unlimited proposals", enabled: true },
      { label: "High-converting output", enabled: true },
      { label: "Custom tone", enabled: true },
      { label: "Priority 24/7 Support", enabled: true },
      { label: "Daily Upwork Tips", enabled: true }
    ]
  }
];

const trustStats = [
  { value: "৫,০০০+", label: "সফল প্রপোজাল" },
  { value: "৯৮%", label: "সন্তুষ্ট গ্রাহক" }
];

const siteWidthClass = `relative z-[1] ${SITE_CONTAINER_CLASS}`;
const surfaceCardClass =
  "rounded-[32px] bg-[var(--surface-ink)] shadow-[var(--shadow-light)]";

export function PricingPage() {
  return (
    <main className="relative min-h-screen overflow-x-clip px-[clamp(18px,3vw,36px)] pb-28 pt-6">
      <div
        className="pointer-events-none absolute -left-[100px] -top-[140px] h-[420px] w-[420px] rounded-full blur-[28px]"
        style={{
          background: "radial-gradient(circle, rgba(74, 64, 224, 0.09), transparent 70%)"
        }}
      />
      <div
        className="pointer-events-none absolute right-[-100px] top-[220px] h-[360px] w-[360px] rounded-full blur-[28px]"
        style={{
          background:
            "radial-gradient(circle, rgba(151, 149, 255, 0.12), transparent 70%)"
        }}
      />

      <Header activePage="pricing" benefitsHref="/#benefits" />

      <section className={`${siteWidthClass} pb-9 pt-28 text-center max-[780px]:pt-[84px]`}>
        <div className="inline-flex items-center gap-2 rounded-full bg-[rgba(74,64,224,0.08)] px-3 py-2 text-[0.92rem] font-bold text-[var(--primary)]">
          <Sparkles size={16} />
          Bangla-first pricing
        </div>
        <h1 className="mx-auto mt-6 max-w-[12ch] text-[clamp(3rem,6vw,5.8rem)] leading-[1.04] tracking-[-0.05em] max-[520px]:max-w-none max-[520px]:text-[clamp(2.4rem,11vw,3.5rem)]">
          সঠিক প্ল্যান বেছে নিন,{" "}
          <span className="italic text-[var(--primary)]">সফলতা</span> নিশ্চিত করুন
        </h1>
        <p className="mx-auto mt-[18px] max-w-[760px] text-[1.05rem] leading-[1.8] text-[var(--muted)] max-[520px]:text-[0.96rem]">
          আপনার ফ্রিল্যান্সিং ক্যারিয়ারকে আরও গতিশীল করতে আমাদের প্রিমিয়াম টুলস
          ব্যবহার করুন। কোনো লুকানো চার্জ নেই, যেকোনো সময় বাতিলযোগ্য।
        </p>
      </section>

      <section
        className={`${siteWidthClass} grid gap-6 pt-7 md:grid-cols-2 xl:grid-cols-4`}
        aria-label="Pricing plans"
      >
        {pricingPlans.map((plan) => (
          <article
            key={plan.name}
            className={[
              surfaceCardClass,
              "relative grid content-start gap-6 p-7",
              plan.featured
                ? "[background:linear-gradient(180deg,rgba(151,149,255,0.14),rgba(255,255,255,0.96)_30%),var(--surface-ink)] shadow-[0_26px_60px_rgba(74,64,224,0.08)]"
                : ""
            ].join(" ")}
          >
            {plan.featured ? (
              <div className="absolute right-6 top-[-14px] rounded-full bg-[var(--secondary)] px-3 py-2 text-[0.7rem] font-extrabold uppercase tracking-[0.12em] text-[#f4f1ff]">
                Most Popular
              </div>
            ) : null}

            <div className="grid gap-2.5">
              <h2 className="text-[1.35rem]">{plan.name}</h2>
              <div className="flex items-baseline gap-2">
                <strong className="text-[2.5rem] tracking-[-0.05em]">{plan.price}</strong>
                <span className="text-[var(--muted)]">{plan.cadence}</span>
              </div>
              <p className="leading-[1.75] text-[var(--muted)]">{plan.description}</p>
            </div>

            <ul className="grid gap-3.5">
              {plan.points.map((point) => {
                const Icon = point.enabled ? CheckCircle2 : CircleX;

                return (
                  <li
                    key={point.label}
                    className={`flex items-start gap-2.5 ${
                      point.enabled ? "text-[var(--ink)]" : "text-[var(--muted)]"
                    }`}
                  >
                    <Icon
                      size={18}
                      className={`mt-0.5 shrink-0 ${
                        point.enabled ? "text-[var(--primary)]" : "text-[var(--outline)]"
                      }`}
                    />
                    <span>{point.label}</span>
                  </li>
                );
              })}
            </ul>

            <Button
              href={TELEGRAM_BOT_URL}
              external
              variant={plan.featured ? "primary" : "secondary"}
            >
              <span className={plan.featured ? "!text-white" : undefined}>{plan.cta}</span>
            </Button>
          </article>
        ))}
      </section>

      <section className={`${siteWidthClass} mt-24 grid gap-6 xl:grid-cols-[minmax(0,1.8fr)_minmax(280px,0.9fr)]`}>
        <article
          className={`${surfaceCardClass} grid gap-7 [background:linear-gradient(180deg,rgba(151,149,255,0.08),rgba(255,255,255,0.94)),var(--surface-ink)] p-[34px] xl:grid-cols-[minmax(0,1.15fr)_minmax(220px,320px)]`}
        >
          <div>
            <h2 className="text-[2rem] leading-[1.08]">কেন আমাদের বেছে নেবেন?</h2>
            <p className="mt-4 leading-[1.8] text-[var(--muted)] max-[520px]:text-[0.96rem]">
              আমাদের বটটি বিশেষভাবে ডিজাইন করা হয়েছে Upwork-এর workflow মাথায়
              রেখে। আপনি পাবেন শক্তিশালী proposal structure, faster output, আর
              client-ready messaging যা real conversations শুরু করতে সাহায্য করে।
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-6">
              {trustStats.map((stat) => (
                <div key={stat.label} className="grid gap-1.5">
                  <strong className="text-[2rem] tracking-[-0.05em] text-[var(--primary)]">
                    {stat.value}
                  </strong>
                  <span className="text-[0.78rem] font-extrabold uppercase tracking-[0.08em] text-[var(--muted)]">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="min-h-[280px] overflow-hidden rounded-3xl">
            <img
              className="h-full w-full object-cover"
              alt="Team collaborating on software design"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAv-Ka2Fx81FE5T6-SdU4Nj51-peKVgIqWBwd28ufo6M03oIpQ-dJzHtB6_UfXFMyec_9mm_Ka97G4ZCkjn2OE4f07wE04dP5V16lgaVmc-2F_6lGJPXTu3OjGZR9yzFnwDq5KdAqzYwqEpe3K_9hazbTuL6ArBG2yeyF3AGrrg7530Dd51wy7FrgyWKyQt_UyCB4zmrnYVqfZNjz69BzImIq7w0BqiVasQ0eN-38z4x3_TdrUxjuLaa28nqLlNSD8d1lQU6uQtO_c"
            />
          </div>
        </article>

        <article className="grid content-center gap-4 rounded-[32px] bg-[linear-gradient(135deg,var(--primary),var(--secondary))] p-[34px] text-[#f4f1ff] shadow-[0_24px_56px_rgba(112,42,225,0.18)]">
          <ShieldCheck size={46} />
          <h3 className="text-[2rem] leading-[1.08]">নিরাপদ পেমেন্ট</h3>
          <p className="leading-[1.8] text-[rgba(244,241,255,0.82)] max-[520px]:text-[0.96rem]">
            বিকাশ, নগদ এবং রকেটের মাধ্যমে খুব সহজেই পেমেন্ট সম্পন্ন করতে পারবেন।
            পেমেন্ট পরবর্তী তাৎক্ষণিক access পাওয়া যাবে।
          </p>
        </article>
      </section>

      <Footer />
    </main>
  );
}
