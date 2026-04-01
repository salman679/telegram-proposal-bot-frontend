import Link from "next/link";
import { ArrowRight, Mail, MoveRight } from "lucide-react";

import { Footer } from "@/features/website/components/footer";
import { Header } from "@/features/website/components/header";
import { TELEGRAM_BOT_URL } from "@/features/website/config/site";
import {
  getBlogCategories,
  getBlogIndexArticles,
  getFeaturedBlogArticle
} from "@/features/website/pages/blog/data";

import styles from "./page.module.css";

export function BlogPage() {
  const categories = getBlogCategories();
  const articles = getBlogIndexArticles();
  const featuredArticle = getFeaturedBlogArticle();

  return (
    <main className={styles.page}>
      <div className={styles.bgGlowPrimary} />
      <div className={styles.bgGlowSecondary} />

      <Header activePage="blog" benefitsHref="/#benefits" />

      <section className={styles.heroSection}>
        <span className={styles.heroBadge}>Learning Hub</span>
        <div className={styles.heroCopy}>
          <h1 className={styles.heroTitle}>
            Master the Art of <br />
            <span>Freelance Automation</span>
          </h1>
          <p className={styles.heroText}>
            আপওয়ার্ক বট বিডি-র সাথে আপনার ফ্রিল্যান্সিং ক্যারিয়ারকে আরও গতিশীল
            করুন। সঠিক কৌশল এবং এআই টুলস ব্যবহারের মাধ্যমে সফলতার নতুন শিখরে
            পৌঁছান।
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
            <article key={article.slug} className={styles.articleCard}>
              <div className={styles.articleMedia}>
                <img alt={article.imageAlt} src={article.image} />
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
                <Link href={`/blog/${article.slug}`} className={styles.inlineLink}>
                  Read More
                  <ArrowRight size={18} />
                </Link>
              </div>
            </article>
          ))}

          {featuredArticle ? (
            <article className={styles.featuredCard}>
              <div className={styles.featuredImage}>
                <img alt={featuredArticle.imageAlt} src={featuredArticle.image} />
              </div>

              <div className={styles.featuredOverlay} />

              <div className={styles.featuredBody}>
                <span className={styles.masterclassBadge}>
                  {featuredArticle.featured?.badge}
                </span>
                <h2>{featuredArticle.featured?.headline}</h2>
                <p>{featuredArticle.featured?.description}</p>
                <Link
                  href={`/blog/${featuredArticle.slug}`}
                  className={styles.featuredButton}
                >
                  {featuredArticle.featured?.ctaLabel}
                  <MoveRight size={18} />
                </Link>
              </div>
            </article>
          ) : null}
        </div>
      </section>

      <section className={styles.newsletterSection}>
        <div className={styles.newsletterIcon}>
          <Mail size={34} />
        </div>
        <h2>Stay Ahead of the Curve</h2>
        <p>
          Get the latest Upwork tips in your inbox. আপওয়ার্কের লেটেস্ট টিপস এবং
          আমাদের নতুন ফিচার সম্পর্কে আপডেট থাকতে আজই সাবস্ক্রাইব করুন।
        </p>

        <div className={styles.newsletterBox}>
          <input type="email" placeholder="Your email address" aria-label="Your email address" />
          <a href={TELEGRAM_BOT_URL} target="_blank" rel="noreferrer" className={styles.primaryButton}>
            Join Now
          </a>
        </div>

        <div className={styles.newsletterCaption}>No spam. Only high-value content.</div>
      </section>

      <Footer />
    </main>
  );
}
