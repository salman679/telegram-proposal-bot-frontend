import {
  CheckCircle2,
  CircleX,
  ShieldCheck,
  Sparkles
} from "lucide-react";

import { Header } from "@/features/website/components/header";
import { MinimalFooter } from "@/features/website/components/minimal-footer";
import { TELEGRAM_BOT_URL } from "@/features/website/config/site";

import styles from "./page.module.css";

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

export function PricingPage() {
  return (
    <main className={styles.page}>
      <div className={styles.bgGlowPrimary} />
      <div className={styles.bgGlowSecondary} />

      <Header activePage="pricing" benefitsHref="/#benefits" />

      <section className={styles.heroSection}>
        <div className={styles.heroBadge}>
          <Sparkles size={16} />
          Bangla-first pricing
        </div>
        <h1 className={styles.heroTitle}>
          সঠিক প্ল্যান বেছে নিন, <span>সফলতা</span> নিশ্চিত করুন
        </h1>
        <p className={styles.heroText}>
          আপনার ফ্রিল্যান্সিং ক্যারিয়ারকে আরও গতিশীল করতে আমাদের প্রিমিয়াম টুলস
          ব্যবহার করুন। কোনো লুকানো চার্জ নেই, যেকোনো সময় বাতিলযোগ্য।
        </p>
      </section>

      <section className={styles.pricingGrid} aria-label="Pricing plans">
        {pricingPlans.map((plan) => (
          <article
            key={plan.name}
            className={`${styles.planCard} ${plan.featured ? styles.planFeatured : ""}`}
          >
            {plan.featured ? <div className={styles.planBadge}>Most Popular</div> : null}

            <div className={styles.planHeader}>
              <h2>{plan.name}</h2>
              <div className={styles.planPrice}>
                <strong>{plan.price}</strong>
                <span>{plan.cadence}</span>
              </div>
              <p>{plan.description}</p>
            </div>

            <ul className={styles.planFeatures}>
              {plan.points.map((point) => {
                const Icon = point.enabled ? CheckCircle2 : CircleX;

                return (
                  <li
                    key={point.label}
                    className={point.enabled ? styles.featureEnabled : styles.featureMuted}
                  >
                    <Icon size={18} />
                    <span>{point.label}</span>
                  </li>
                );
              })}
            </ul>

            <a
              href={TELEGRAM_BOT_URL}
              target="_blank"
              rel="noreferrer"
              className={plan.featured ? styles.primaryButton : styles.secondaryButton}
            >
              {plan.cta}
            </a>
          </article>
        ))}
      </section>

      <section className={styles.trustSection}>
        <article className={styles.trustPanel}>
          <div className={styles.trustCopy}>
            <h2>কেন আমাদের বেছে নেবেন?</h2>
            <p>
              আমাদের বটটি বিশেষভাবে ডিজাইন করা হয়েছে Upwork-এর workflow মাথায়
              রেখে। আপনি পাবেন শক্তিশালী proposal structure, faster output, আর
              client-ready messaging যা real conversations শুরু করতে সাহায্য করে।
            </p>

            <div className={styles.statsRow}>
              {trustStats.map((stat) => (
                <div key={stat.label} className={styles.statBlock}>
                  <strong>{stat.value}</strong>
                  <span>{stat.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.trustVisual}>
            <img
              alt="Team collaborating on software design"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAv-Ka2Fx81FE5T6-SdU4Nj51-peKVgIqWBwd28ufo6M03oIpQ-dJzHtB6_UfXFMyec_9mm_Ka97G4ZCkjn2OE4f07wE04dP5V16lgaVmc-2F_6lGJPXTu3OjGZR9yzFnwDq5KdAqzYwqEpe3K_9hazbTuL6ArBG2yeyF3AGrrg7530Dd51wy7FrgyWKyQt_UyCB4zmrnYVqfZNjz69BzImIq7w0BqiVasQ0eN-38z4x3_TdrUxjuLaa28nqLlNSD8d1lQU6uQtO_c"
            />
          </div>
        </article>

        <article className={styles.securityCard}>
          <ShieldCheck size={46} />
          <h3>নিরাপদ পেমেন্ট</h3>
          <p>
            বিকাশ, নগদ এবং রকেটের মাধ্যমে খুব সহজেই পেমেন্ট সম্পন্ন করতে পারবেন।
            পেমেন্ট পরবর্তী তাৎক্ষণিক access পাওয়া যাবে।
          </p>
        </article>
      </section>

      <MinimalFooter
        links={[
          { href: "/", label: "Home" },
          { href: "/admin/login", label: "Admin Login" },
          { href: TELEGRAM_BOT_URL, label: "Open Telegram Bot", external: true }
        ]}
      />
    </main>
  );
}
