import Link from "next/link";
import { ArrowRight, Globe, Mail, MoveRight, Sparkles } from "lucide-react";

import { WebsiteHeader } from "@/features/website/components/website-header";
import { TELEGRAM_BOT_URL } from "@/features/website/config/site";

import styles from "./blog-page.module.css";

const categories = ["All Articles", "Strategy", "AI Tools", "Success Stories", "Tutorials"];

const articles = [
  {
    category: "Strategy",
    tone: "primary",
    readTime: "৫ মিনিট পড়ার সময়",
    title: "২০২৪ সালে আপওয়ার্কে কাজ পাওয়ার সেরা কৌশল",
    excerpt:
      "নতুন অ্যালগরিদম অনুযায়ী কিভাবে বিড করলে রেসপন্স পাওয়ার সম্ভাবনা বাড়বে তার বিস্তারিত গাইড।",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuByOQtVIPJduxQgCaBF5MiWuS4S9LYv-clMuzfiThaNO9_UeH9sJXotWDMsDS6CZZ4OmLYVQnCqGnoFO3dCj_smaCihN9L1aYHGywSHvTHYZLFFPFCCsFiwUA195OU_B6xjyA3Lsyw5HPOB-CPNEMgDU2Aub1UEEHVCQoOZEygWmHPjUfSoQcJldm6LcawL-uiqeidze_njYzbab2YQOJoSzxr63tLfqjs2UitRitzZA1RmA2l3qlQRCB9nqfFU3TBwL4OMpxm6C6k"
  },
  {
    category: "AI Tools",
    tone: "secondary",
    readTime: "৮ মিনিট পড়ার সময়",
    title: "এআই টুলস দিয়ে প্রোফাইল অপ্টিমাইজ করার নিয়ম",
    excerpt:
      "কিভাবে চ্যাটজিপিটি এবং অন্যান্য এআই ব্যবহার করে একটি আকর্ষণীয় আপওয়ার্ক প্রোফাইল তৈরি করবেন।",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDdIcvBHfyNGkDxXYVpv3g5aU3R8hI810g64UVveJbNOtbF9LsiRo6gvMjbLdGF_bPpGzGeBPwTwzGbgod68i2snoUoBBSJjVDHeQVoKfSD7eBPtV3Amozg8RIWEvIRbCqpDKeGVUpyStSbkvgx03QUOzIEjdRd3hxLCdNdjCnUo_A1blPepidAHtuELXHSnzNja4FaTo1EWeThedktYzucvv42iZlWfaz4PCprc9651AWIi7XahSPiBfTyPxERxGOwVSXwV_a4EdI"
  },
  {
    category: "Success Stories",
    tone: "tertiary",
    readTime: "১০ মিনিট পড়ার সময়",
    title: "জিরো থেকে হিরো: একজনের ফ্রিল্যান্সিং যাত্রা",
    excerpt:
      "বট বিডি ব্যবহার করে মাত্র ৩ মাসে কিভাবে একজন ফ্রিল্যান্সার তার আয় দ্বিগুণ করলেন।",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBMYyRfgIUoEMYoERQe_sJAvZMIve4c2M0aTG7TREsTbwMwt1yuW5MtkFjE3Jl2Lju4JwbONCMB1aEWLeYYgZ6XFrD2a3eUIOYkxY1-cs_AmzEWSEETc_H1E23xxILDIFruRFpo_tUtvsovF_nENry29aAYtkYjXc8fLrhac1aLjRtrGRB_wTE0eMJIYYNLYGQpapJ6KtXEwahiJnl9iP65VCp2NJMItIgVXtSPqtnr9znQzqKeMzyewnfBX8r1bW9YGGJusEcl0VM"
  },
  {
    category: "Strategy",
    tone: "primary",
    readTime: "৬ মিনিট পড়ার সময়",
    title: "বিডিং এর সময় ক্লায়েন্টের সাইকোলজি বুঝবেন যেভাবে",
    excerpt:
      "ক্লায়েন্ট কোন শব্দগুলো প্রোপোজালে দেখতে চায় তা জেনে আপনার উইন রেট বাড়িয়ে নিন।",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCdcMqdbMyLn9Vl6ZZ6NxkEYkvtfZBTbOOwXI8ImtLhcTGPvj1clSw_roUp3FW2OpkyXPYH9oSzOcy0Ayq2iSd43jJgUP7Wc8apl9jpIesBAqXu4jzMabKBpfFHQPxeW21XF0W_XmaQ9VqEUUG0ER0K6KPhapECdGa945tC3i9-p9Jx14y7wE3vejTrHqQAXf1onUGe8XPrlaXLSr_4yd02XyQSWmi0X2GhFNTG470xhm8x-rkcC5CD9snWsEs1AMHXWPdno3fVOe8"
  }
] as const;

export function BlogPage() {
  return (
    <main className={styles.page}>
      <div className={styles.bgGlowPrimary} />
      <div className={styles.bgGlowSecondary} />

      <WebsiteHeader activePage="blog" benefitsHref="/#benefits" />

      <section className={styles.heroSection}>
        <span className={styles.heroBadge}>Learning Hub</span>
        <div className={styles.heroCopy}>
          <h1 className={styles.heroTitle}>
            Master the Art of <br />
            <span>Freelance Automation</span>
          </h1>
          <p className={styles.heroText}>
            আপওয়ার্ক বট বিডি-র সাথে আপনার ফ্রিল্যান্সিং ক্যারিয়ারকে আরও গতিশীল করুন। সঠিক
            কৌশল এবং এআই টুলস ব্যবহারের মাধ্যমে সফলতার নতুন শিখরে পৌঁছান।
          </p>
        </div>
      </section>

      <section className={styles.filterSection} aria-label="Article categories">
        <div className={styles.filterScroller}>
          {categories.map((category, index) => (
            <button
              key={category}
              type="button"
              className={index === 0 ? styles.filterActive : styles.filterButton}
            >
              {category}
            </button>
          ))}
        </div>
      </section>

      <section className={styles.articleSection}>
        <div className={styles.articleGrid}>
          {articles.map((article) => (
            <article key={article.title} className={styles.articleCard}>
              <div className={styles.articleMedia}>
                <img alt={article.title} src={article.image} />
              </div>
              <div className={styles.articleBody}>
                <div className={styles.articleMeta}>
                  <span className={`${styles.articleTag} ${styles[article.tone]}`}>
                    {article.category}
                  </span>
                  <span className={styles.metaDot} />
                  <span className={styles.readTime}>{article.readTime}</span>
                </div>
                <h2>{article.title}</h2>
                <p>{article.excerpt}</p>
                <Link href="/how-it-works" className={styles.inlineLink}>
                  Read More
                  <ArrowRight size={18} />
                </Link>
              </div>
            </article>
          ))}

          <article className={styles.featuredCard}>
            <div className={styles.featuredImage}>
              <img
                alt="Modern tech office interior"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBgQEYjymtZGOF8OB6xSimSBu41lj7oCDaM68GW0vVHp5HkmJHel7xBJAtscVY30_1Je0pGCmwUoJzWPmSrWvXfhWoFAOs6qMSXje4NyKTKVCN-bpMpQ31EqGwraF9046b7j777qDpfS-pb2wdscv1RpNwoutlJJwmy2DeFPItkC3oHsOrrtGKM4b5hHPrSEruQ68UwKYnTbeUZvmsuZ3cQiXOmYv1VXFLuxMAvI7IfdfAFK_ZNJ2kKH9EQDKOakgqa7FWjaA43sZU"
              />
            </div>

            <div className={styles.featuredOverlay} />

            <div className={styles.featuredBody}>
              <span className={styles.masterclassBadge}>Masterclass</span>
              <h2>আপওয়ার্ক বট ব্যবহারের চূড়ান্ত গাইড: সময় বাঁচান ১০০% পর্যন্ত</h2>
              <p>
                আমাদের অটোমেশন টুল ব্যবহার করে কিভাবে আপনি সঠিক জবে অটো-বিড করবেন এবং
                আপনার ফ্রিল্যান্সিং লাইফস্টাইল পরিবর্তন করবেন।
              </p>
              <Link href="/how-it-works" className={styles.featuredButton}>
                Watch Tutorial
                <MoveRight size={18} />
              </Link>
            </div>
          </article>
        </div>
      </section>

      <section className={styles.newsletterSection}>
        <div className={styles.newsletterIcon}>
          <Mail size={34} />
        </div>
        <h2>Stay Ahead of the Curve</h2>
        <p>
          Get the latest Upwork tips in your inbox. আপওয়ার্কের লেটেস্ট টিপস এবং আমাদের
          নতুন ফিচার সম্পর্কে আপডেট থাকতে আজই সাবস্ক্রাইব করুন।
        </p>

        <div className={styles.newsletterBox}>
          <input type="email" placeholder="Your email address" aria-label="Your email address" />
          <a href={TELEGRAM_BOT_URL} target="_blank" rel="noreferrer" className={styles.primaryButton}>
            Join Now
          </a>
        </div>

        <div className={styles.newsletterCaption}>No spam. Only high-value content.</div>
      </section>

      <footer className={styles.footer}>
        <div className={styles.footerInner}>
          <div className={styles.footerBrand}>
            <p>© 2026 Upwork Bot BD. All rights reserved.</p>
            <div className={styles.footerIcons}>
              <a href={TELEGRAM_BOT_URL} target="_blank" rel="noreferrer" aria-label="Open Telegram bot">
                <Mail size={18} />
              </a>
              <a href={TELEGRAM_BOT_URL} target="_blank" rel="noreferrer" aria-label="Telegram support">
                <Sparkles size={18} />
              </a>
            </div>
          </div>

          <div className={styles.footerLinks}>
            <Link href="/how-it-works">How it Works</Link>
            <Link href="/pricing">Pricing</Link>
            <Link href="/blog">Blog</Link>
            <a href={TELEGRAM_BOT_URL} target="_blank" rel="noreferrer">
              <Globe size={16} />
              Open Telegram Bot
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
