import Link from "next/link";
import { MoveLeft, Send, TrendingUp } from "lucide-react";

import { Footer } from "@/features/website/components/footer";
import { Header } from "@/features/website/components/header";
import { TELEGRAM_BOT_URL } from "@/features/website/config/site";

import { type BlogArticle, getPopularBlogArticles } from "./data";
import { BlogArticleActions } from "./components/article-actions";
import styles from "./detail.module.css";

interface BlogDetailPageProps {
  article: BlogArticle;
}

function renderContentBlock(article: BlogArticle) {
  return article.content.map((block, index) => {
    const key = `${article.slug}-${block.type}-${index}`;

    if (block.type === "heading") {
      return (
        <h2 key={key} className={styles.contentHeading}>
          {block.content}
        </h2>
      );
    }

    if (block.type === "tipList") {
      return (
        <section key={key} className={styles.tipPanel}>
          <h3>{block.title}</h3>
          <ul>
            {block.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>
      );
    }

    if (block.type === "quote") {
      return (
        <blockquote key={key} className={styles.contentQuote}>
          {block.content}
        </blockquote>
      );
    }

    return (
      <p key={key} className={styles.contentParagraph}>
        {block.content}
      </p>
    );
  });
}

export function BlogDetailPage({ article }: BlogDetailPageProps) {
  const popularArticles = getPopularBlogArticles(article.slug);

  return (
    <main className={styles.page}>
      <div className={styles.bgGlowPrimary} />
      <div className={styles.bgGlowSecondary} />

      <Header activePage="blog" benefitsHref="/#benefits" />

      <div className={styles.layout}>
        <aside className={styles.shareRail}>
          <div className={styles.shareSticky}>
            <BlogArticleActions articleSlug={article.slug} articleTitle={article.title} />
          </div>
        </aside>

        <article className={styles.article}>
          <header className={styles.articleHeader} id="article-top">
            <div className={styles.metaRow}>
              <span className={styles.detailLabel}>{article.detailLabel}</span>
              <span className={styles.readTime}>{article.readTime}</span>
            </div>

            <h1 className={styles.articleTitle}>{article.title}</h1>

            <div className={styles.authorRow}>
              <div className={styles.authorAvatar}>
                <img alt={article.author.imageAlt} src={article.author.image} />
              </div>

              <div className={styles.authorCopy}>
                <strong>{article.author.name}</strong>
                <span>{article.author.role}</span>
              </div>
            </div>
          </header>

          <div className={styles.featureImage}>
            <img alt={article.imageAlt} src={article.image} />
          </div>

          <div className={styles.articleBody}>{renderContentBlock(article)}</div>
        </article>

        <aside className={styles.sidebar}>
          <section className={styles.telegramCard}>
            <div className={styles.telegramContent}>
              <h2>আমাদের টেলিগ্রাম কমিউনিটিতে যুক্ত হন</h2>
              <p>
                প্রতিদিন ফ্রিল্যান্সিং টিপস, নতুন জব আপডেট, আর প্রপোজাল স্ট্র্যাটেজি
                পেতে এখনই জয়েন করুন।
              </p>
              <a
                href={TELEGRAM_BOT_URL}
                target="_blank"
                rel="noreferrer"
                className={styles.telegramButton}
              >
                <Send size={18} />
                টেলিগ্রামে যুক্ত হোন
              </a>
            </div>
          </section>

          <section className={styles.popularSection}>
            <h2>
              <TrendingUp size={20} />
              জনপ্রিয় আর্টিকেল
            </h2>

            <div className={styles.popularList}>
              {popularArticles.map((popularArticle) => (
                <Link
                  key={popularArticle.slug}
                  href={`/blog/${popularArticle.slug}`}
                  className={styles.popularCard}
                >
                  <div className={styles.popularImage}>
                    <img alt={popularArticle.imageAlt} src={popularArticle.image} />
                  </div>
                  <div className={styles.popularCopy}>
                    <h3>{popularArticle.title}</h3>
                    <p>{popularArticle.publishedAt}</p>
                  </div>
                </Link>
              ))}
            </div>
          </section>

          <div className={styles.backLinkWrap}>
            <Link href="/blog" className={styles.backLink}>
              <MoveLeft size={18} />
              সব আর্টিকেলে ফিরে যান
            </Link>
          </div>
        </aside>
      </div>

      <Footer />
    </main>
  );
}
