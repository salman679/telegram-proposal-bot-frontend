import Link from "next/link";
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

import { WebsiteHeader } from "@/features/website/components/website-header";
import { WebsiteMinimalFooter } from "@/features/website/components/website-minimal-footer";
import { TELEGRAM_BOT_URL } from "@/features/website/config/site";

import styles from "./how-it-works-page.module.css";

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

export function HowItWorksPage() {
  return (
    <main className={styles.page}>
      <div className={styles.bgGlowPrimary} />
      <div className={styles.bgGlowSecondary} />

      <WebsiteHeader activePage="how-it-works" benefitsHref="/#benefits" />

      <section className={styles.heroSection}>
        <span className={styles.heroBadge}>The Future of Bidding</span>
        <h1 className={styles.heroTitle}>
          সহজ ৩টি ধাপে <br />
          <span>বিজয়ী প্রপোজাল</span> লিখুন
        </h1>
        <p className={styles.heroText}>
          আপওয়ার্ক বিড বিডি-র শক্তিশালী AI ব্যবহার করে কয়েক সেকেন্ডের মধ্যে
          প্রফেশনাল প্রপোজাল তৈরি করুন এবং আপনার ফ্রিল্যান্সিং ক্যারিয়ারকে নিয়ে
          যান নতুন উচ্চতায়।
        </p>
      </section>

      <section className={styles.stepsGrid}>
        {steps.map(({ number, title, description, icon: Icon, tone }) => (
          <article key={number} className={styles.stepCard}>
            <div className={`${styles.stepIcon} ${styles[`tone${tone}`]}`}>
              <Icon size={30} />
            </div>
            <div className={styles.stepNumber}>{number}</div>
            <h2>{title}</h2>
            <p>{description}</p>
          </article>
        ))}
      </section>

      <section className={styles.benefitsSection}>
        <div className={styles.sectionHeader}>
          <h2>কেন আমাদের ব্যবহার করবেন?</h2>
          <p>প্রফেশনাল ফ্রিল্যান্সারদের জন্য সেরা টুলস</p>
        </div>

        <div className={styles.bentoGrid}>
          <article className={`${styles.bentoCard} ${styles.bentoWide}`}>
            <div className={styles.bentoCopy}>
              <TrendingUp size={46} />
              <h3>High Success Rate</h3>
              <p>
                আমাদের AI generated proposals বিশেষ করে Upwork অ্যালগরিদম এবং
                client psychology বুঝে লেখা হয়, যা আপনার hire হওয়ার সুযোগ বাড়ায়।
              </p>
            </div>
            <div className={styles.bentoVisual}>
              <img
                alt="Success data visualization"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuANkMrq7vxQvfoEPvh5YgVsgOW_66UznB1i3GZEnt9bpMFLdJwP--OfTJRYTZA-CckaatZG6uHioQbplXR1PkW6zUd98J2YAKOrBekq4NWaVOIky6Ehl61rgW3xx78yzPA9u87062OBKjcmlZMafliyc-nbDywuVrfQp2OZRfmiewWR2TAPX5K88BCs76Vl0TCNFKCMrlYP2Yt_oOlxPqBYHU8SJoYke-dDQ-nuqtLsNrT3l-zBCeMvy4EfUn0MCN-0J6aq38cOxq4"
              />
            </div>
          </article>

          <article className={`${styles.bentoCard} ${styles.bentoPrimary}`}>
            <Bolt size={52} />
            <div>
              <h3>Fast Generation</h3>
              <p>মাত্র ৫ সেকেন্ডের মধ্যে সম্পূর্ণ প্রপোজাল তৈরি।</p>
            </div>
          </article>

          <article className={`${styles.bentoCard} ${styles.bentoHalf}`}>
            <Edit3 size={38} />
            <h3>AI-Optimized Writing</h3>
            <p>
              ব্যাকরণগত নির্ভুলতা এবং প্রফেশনাল টোন নিশ্চিত করে আমাদের উন্নত ভাষা
              মডেল।
            </p>
          </article>

          <article className={`${styles.bentoCard} ${styles.bentoWideAlt}`}>
            <div className={styles.timeBubble}>
              <Timer size={58} />
            </div>
            <div>
              <h3>Time Saving</h3>
              <p>
                প্রতিদিন বিডিং করার পেছনে ঘণ্টার পর ঘণ্টা সময় নষ্ট না করে মাত্র
                কয়েক মিনিটে কাজ শেষ করুন। বাকি সময়টি আপনার প্রোজেক্ট ডেলিভারিতে
                ব্যয় করুন।
              </p>
            </div>
          </article>
        </div>
      </section>

      <section className={styles.tipsSection}>
        <div className={styles.tipsGlowOne} />
        <div className={styles.tipsGlowTwo} />

        <div className={styles.tipsContent}>
          <div className={styles.tipsCopy}>
            <div className={styles.tipsLabel}>
              <BellRing size={18} />
              <span>প্রতিদিন রাত ৯টা</span>
            </div>
            <h2>
              Daily Upwork Tips <br />
              সরাসরি আপনার ফোনে
            </h2>
            <p>
              আমরা শুধুমাত্র বিডিং টুলই নই, আমরা আপনার ফ্রিল্যান্সিং মেন্টর।
              প্রতিদিন রাত ৯টায় আমরা শেয়ার করি এক্সক্লুসিভ আপওয়ার্ক টিপস যা আপনাকে
              মার্কেটপ্লেসে টিকে থাকতে সাহায্য করবে।
            </p>

            <div className={styles.tipsList}>
              {dailyTips.map((tip) => (
                <span key={tip} className={styles.tipItem}>
                  <CheckCircle2 size={16} />
                  {tip}
                </span>
              ))}
            </div>
          </div>

          <div className={styles.tipsCard}>
            <strong>21:00</strong>
            <div className={styles.tipsDivider} />
            <p>আজকের টিপস মিস করবেন না!</p>
            <a
              href={TELEGRAM_BOT_URL}
              target="_blank"
              rel="noreferrer"
              className={styles.lightButton}
            >
              নোটিফিকেশন অন করুন
            </a>
          </div>
        </div>
      </section>

      <section className={styles.ctaSection}>
        <div className={styles.ctaCard}>
          <h2>আপনি কি প্রস্তুত আপনার ফ্রিল্যান্সিং সফর শুরু করতে?</h2>
          <div className={styles.ctaActions}>
            <a
              href={TELEGRAM_BOT_URL}
              target="_blank"
              rel="noreferrer"
              className={styles.primaryButton}
            >
              এখনই শুরু করুন - ফ্রি
            </a>
            <Link href="/admin/login" className={styles.secondaryButton}>
              Bangla Support
            </Link>
          </div>
        </div>
      </section>

      <WebsiteMinimalFooter
        links={[
          { href: "/pricing", label: "Pricing" },
          { href: "/admin/login", label: "Admin Login" },
          { href: TELEGRAM_BOT_URL, label: "Open Telegram Bot", external: true }
        ]}
      />
    </main>
  );
}
