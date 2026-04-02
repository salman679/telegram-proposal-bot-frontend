import Link from "next/link";
import { MoveLeft, Send, TrendingUp } from "lucide-react";

import { Footer } from "@/features/website/components/footer";
import { Header } from "@/features/website/components/header";
import {
  SITE_CONTAINER_CLASS,
  TELEGRAM_BOT_URL
} from "@/features/website/config/site";

import { type BlogArticle, getPopularBlogArticles } from "./data";
import { BlogArticleActions } from "./components/article-actions";

interface BlogDetailPageProps {
  article: BlogArticle;
}

const siteWidthClass = `relative z-[1] ${SITE_CONTAINER_CLASS}`;
const banglaFontFamily = { fontFamily: "var(--font-bangla), sans-serif" };

function renderContentBlock(article: BlogArticle) {
  return article.content.map((block, index) => {
    const key = `${article.slug}-${block.type}-${index}`;

    if (block.type === "heading") {
      return (
        <h2
          key={key}
          className="pt-1.5 text-[2rem] font-bold leading-[1.24]"
          style={banglaFontFamily}
        >
          {block.content}
        </h2>
      );
    }

    if (block.type === "tipList") {
      return (
        <section
          key={key}
          className="grid gap-[14px] rounded-[28px] bg-[var(--surface-low)] p-7"
        >
          <h3 className="text-[1.25rem]" style={banglaFontFamily}>
            {block.title}
          </h3>
          <ul className="m-0 grid gap-3 pl-5">
            {block.items.map((item) => (
              <li key={item} className="text-[1.12rem] leading-[1.9]">
                {item}
              </li>
            ))}
          </ul>
        </section>
      );
    }

    if (block.type === "quote") {
      return (
        <blockquote
          key={key}
          className="border-l-4 border-[var(--primary)] py-3 pl-[22px] text-[1.12rem] font-semibold italic leading-[1.9] text-[var(--muted)]"
        >
          {block.content}
        </blockquote>
      );
    }

    return (
      <p key={key} className="text-[1.12rem] leading-[1.9]">
        {block.content}
      </p>
    );
  });
}

export function BlogDetailPage({ article }: BlogDetailPageProps) {
  const popularArticles = getPopularBlogArticles(article.slug);

  return (
    <main className="relative min-h-screen overflow-x-clip px-[clamp(18px,3vw,36px)] pb-28 pt-6">
      <div
        className="pointer-events-none absolute right-[-120px] top-[120px] h-[360px] w-[360px] rounded-full blur-[40px]"
        style={{
          background: "radial-gradient(circle, rgba(74, 64, 224, 0.11), transparent 70%)"
        }}
      />
      <div
        className="pointer-events-none absolute left-[-140px] top-[540px] h-[420px] w-[420px] rounded-full blur-[40px]"
        style={{
          background: "radial-gradient(circle, rgba(112, 42, 225, 0.08), transparent 70%)"
        }}
      />

      <Header activePage="blog" benefitsHref="/#benefits" />

      <div className={`${siteWidthClass} grid gap-7 pt-24 xl:grid-cols-[minmax(0,68px)_minmax(0,1.8fr)_minmax(310px,0.95fr)] max-[1180px]:grid-cols-1 max-[780px]:pt-[72px]`}>
        <aside className="max-[1180px]:hidden">
          <div className="sticky top-[132px] flex justify-center">
            <BlogArticleActions articleSlug={article.slug} articleTitle={article.title} />
          </div>
        </aside>

        <article className="grid gap-8">
          <header className="grid gap-[22px]" id="article-top">
            <div className="flex flex-wrap items-center gap-[14px]">
              <span className="inline-flex items-center rounded-full bg-[rgba(151,149,255,0.22)] px-[14px] py-2 text-[0.9rem] font-extrabold tracking-[0.06em] text-[var(--primary)]">
                {article.detailLabel}
              </span>
              <span className="text-[0.92rem] font-semibold text-[var(--muted)]">
                {article.readTime}
              </span>
            </div>

            <h1
              className="text-[clamp(2.9rem,5vw,4.4rem)] leading-[1.02] tracking-[-0.04em] max-[780px]:text-[clamp(2.3rem,10vw,3.3rem)]"
              style={banglaFontFamily}
            >
              {article.title}
            </h1>

            <div className="flex items-center gap-[14px] border-b border-[var(--line)] pb-5">
              <div className="h-[52px] w-[52px] overflow-hidden rounded-full bg-[var(--surface-strong)]">
                <img
                  className="h-full w-full object-cover"
                  alt={article.author.imageAlt}
                  src={article.author.image}
                />
              </div>

              <div className="grid gap-0.5">
                <strong className="text-base">{article.author.name}</strong>
                <span className="text-[0.92rem] text-[var(--muted)]">
                  {article.author.role}
                </span>
              </div>
            </div>
          </header>

          <div className="aspect-[16/9] overflow-hidden rounded-[28px] shadow-[0_34px_72px_rgba(74,64,224,0.12)] max-[780px]:rounded-[22px]">
            <img
              className="h-full w-full object-cover"
              alt={article.imageAlt}
              src={article.image}
            />
          </div>

          <div className="grid gap-6" style={banglaFontFamily}>
            {renderContentBlock(article)}
          </div>
        </article>

        <aside className="grid content-start gap-7 max-[1180px]:grid-cols-2 max-[780px]:grid-cols-1">
          <section className="sticky top-[120px] overflow-hidden rounded-[30px] bg-[var(--gradient-primary)] shadow-[var(--shadow-light)] max-[1180px]:static">
            <div className="relative z-[1] grid gap-4 p-8 text-[#f4f1ff]">
              <h2 className="text-[1.85rem] leading-[1.2]" style={banglaFontFamily}>
                আমাদের টেলিগ্রাম কমিউনিটিতে যুক্ত হন
              </h2>
              <p className="leading-[1.8] text-[rgba(244,241,255,0.82)]">
                প্রতিদিন ফ্রিল্যান্সিং টিপস, নতুন জব আপডেট, আর প্রপোজাল স্ট্র্যাটেজি
                পেতে এখনই জয়েন করুন।
              </p>
              <a
                href={TELEGRAM_BOT_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-[52px] w-full items-center justify-center gap-2.5 rounded-full bg-[rgba(255,255,255,0.96)] px-[22px] py-[14px] font-bold text-[var(--primary)] transition duration-200 hover:-translate-y-0.5"
              >
                <Send size={18} />
                টেলিগ্রামে যুক্ত হোন
              </a>
            </div>
          </section>

          <section className="grid gap-5 rounded-[30px] bg-[var(--surface-ink)] p-7 shadow-[var(--shadow-light)] max-[780px]:p-[22px]">
            <h2
              className="inline-flex items-center gap-2.5 text-[1.4rem]"
              style={banglaFontFamily}
            >
              <TrendingUp size={20} />
              জনপ্রিয় আর্টিকেল
            </h2>

            <div className="grid gap-[18px]">
              {popularArticles.map((popularArticle) => (
                <Link
                  key={popularArticle.slug}
                  href={`/blog/${popularArticle.slug}`}
                  className="grid gap-3"
                >
                  <div className="h-[170px] overflow-hidden rounded-[20px] bg-[var(--surface-container)]">
                    <img
                      className="h-full w-full object-cover transition duration-300 hover:scale-[1.04]"
                      alt={popularArticle.imageAlt}
                      src={popularArticle.image}
                    />
                  </div>
                  <div className="grid gap-2">
                    <h3 className="text-[1.12rem] leading-[1.45]" style={banglaFontFamily}>
                      {popularArticle.title}
                    </h3>
                    <p className="text-[0.82rem] font-bold uppercase tracking-[0.06em] text-[var(--muted)]">
                      {popularArticle.publishedAt}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </section>

          <div className="flex">
            <Link
              href="/blog"
              className="inline-flex min-h-[52px] items-center justify-center gap-2.5 rounded-full bg-[rgba(255,255,255,0.86)] px-[22px] py-[14px] font-bold text-[var(--muted)] shadow-[0_16px_36px_rgba(74,64,224,0.08)] transition duration-200 hover:-translate-y-0.5"
            >
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
