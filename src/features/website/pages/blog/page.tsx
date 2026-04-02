import Link from "next/link";
import { ArrowRight, Mail, MoveRight } from "lucide-react";

import { Footer } from "@/features/website/components/footer";
import { Header } from "@/features/website/components/header";
import {
  SITE_CONTAINER_CLASS,
  TELEGRAM_BOT_URL
} from "@/features/website/config/site";
import {
  getBlogCategories,
  getBlogIndexArticles,
  getFeaturedBlogArticle
} from "@/features/website/pages/blog/data";

const siteWidthClass = `relative z-[1] ${SITE_CONTAINER_CLASS}`;
const toneClasses = {
  primary: "text-[var(--primary)]",
  secondary: "text-[var(--secondary)]",
  tertiary: "text-[var(--tertiary)]"
} as const;
const primaryButtonClass =
  "inline-flex min-h-[52px] items-center justify-center gap-2.5 rounded-full [background:var(--gradient-primary)] px-6 py-[14px] font-bold text-[#f4f1ff] shadow-[0_16px_36px_rgba(74,64,224,0.18)] transition duration-200 hover:-translate-y-0.5";

export function BlogPage() {
  const categories = getBlogCategories();
  const articles = getBlogIndexArticles();
  const featuredArticle = getFeaturedBlogArticle();

  return (
    <main className="relative min-h-screen overflow-x-clip px-[clamp(18px,3vw,36px)] pb-28 pt-6">
      <div
        className="pointer-events-none absolute right-[-120px] top-[-140px] h-[420px] w-[420px] rounded-full blur-[32px]"
        style={{
          background: "radial-gradient(circle, rgba(74, 64, 224, 0.1), transparent 70%)"
        }}
      />
      <div
        className="pointer-events-none absolute left-[-120px] top-[420px] h-[360px] w-[360px] rounded-full blur-[32px]"
        style={{
          background: "radial-gradient(circle, rgba(112, 42, 225, 0.08), transparent 70%)"
        }}
      />

      <Header activePage="blog" benefitsHref="/#benefits" />

      <section className={`${siteWidthClass} pb-11 pt-[108px] max-[720px]:pt-[72px]`}>
        <span className="inline-flex w-fit rounded-full bg-[rgba(74,64,224,0.1)] px-[14px] py-2 text-[0.76rem] font-extrabold uppercase tracking-[0.16em] text-[var(--primary)]">
          Learning Hub
        </span>
        <div className="mt-[22px] max-w-[720px]">
          <h1 className="text-[clamp(3rem,6vw,5.6rem)] leading-[0.98] tracking-[-0.05em]">
            Master the Art of <br />
            <span className="bg-[linear-gradient(135deg,var(--primary),var(--secondary))] bg-clip-text text-transparent">
              Freelance Automation
            </span>
          </h1>
          <p className="mt-[22px] max-w-[58ch] text-[1.08rem] leading-[1.8] text-[var(--muted)]">
            আপওয়ার্ক বট বিডি-র সাথে আপনার ফ্রিল্যান্সিং ক্যারিয়ারকে আরও গতিশীল
            করুন। সঠিক কৌশল এবং এআই টুলস ব্যবহারের মাধ্যমে সফলতার নতুন শিখরে
            পৌঁছান।
          </p>
        </div>
      </section>

      <section
        className={`${siteWidthClass} sticky top-[94px] z-[45] py-[14px] pb-[18px] max-[900px]:top-[152px] max-[720px]:static max-[720px]:py-2`}
        aria-label="Article categories"
      >
        <div className="flex gap-3 overflow-x-auto px-0.5 py-1.5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {categories.map((category, index) => (
            <button
              key={category}
              type="button"
              className={
                index === 0
                  ? "min-h-[46px] shrink-0 rounded-full bg-[var(--primary)] px-[22px] py-3 font-bold text-[#f4f1ff] shadow-[var(--shadow-light)]"
                  : "min-h-[46px] shrink-0 rounded-full bg-[rgba(255,255,255,0.9)] px-[22px] py-3 font-bold text-[var(--muted)] shadow-[var(--shadow-light)]"
              }
            >
              {category}
            </button>
          ))}
        </div>
      </section>

      <section className={`${siteWidthClass} pt-[18px]`}>
        <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
          {articles.map((article) => (
            <article
              key={article.slug}
              className="group overflow-hidden rounded-[32px] bg-[var(--surface-ink)] shadow-[var(--shadow-light)]"
            >
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.06]"
                  alt={article.imageAlt}
                  src={article.image}
                />
              </div>
              <div className="grid gap-[14px] p-7">
                <div className="flex flex-wrap items-center gap-2.5">
                  <span
                    className={`inline-flex items-center justify-center py-1 text-[0.74rem] font-extrabold uppercase tracking-[0.14em] ${
                      toneClasses[article.tone as keyof typeof toneClasses]
                    }`}
                  >
                    {article.category}
                  </span>
                  <span className="h-1 w-1 rounded-full bg-[rgba(171,173,175,0.7)]" />
                  <span className="text-[0.84rem] text-[var(--muted)]">
                    {article.readTime}
                  </span>
                </div>
                <h2 className="text-[1.8rem] leading-[1.08] tracking-[-0.04em]">
                  {article.title}
                </h2>
                <p className="leading-[1.8] text-[var(--muted)]">{article.excerpt}</p>
                <Link
                  href={`/blog/${article.slug}`}
                  className="inline-flex w-fit items-center gap-2.5 font-extrabold text-[var(--primary)] transition duration-200 hover:-translate-y-0.5"
                >
                  Read More
                  <ArrowRight size={18} />
                </Link>
              </div>
            </article>
          ))}

          {featuredArticle ? (
            <article className="group relative min-h-[420px] overflow-hidden rounded-[32px] bg-[linear-gradient(135deg,var(--primary),var(--secondary))] shadow-[var(--shadow-light)] lg:col-span-2 max-[720px]:min-h-[360px] xl:col-span-2">
              <div className="absolute inset-0">
                <img
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.06]"
                  alt={featuredArticle.imageAlt}
                  src={featuredArticle.image}
                />
              </div>

              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(44,47,49,0.04),rgba(44,47,49,0.58)),linear-gradient(135deg,rgba(74,64,224,0.28),rgba(112,42,225,0.2))]" />

              <div className="relative z-[1] grid h-full max-w-[620px] content-end gap-4 p-[38px] text-white">
                <span className="inline-flex w-fit rounded-full bg-[rgba(255,255,255,0.18)] px-3 py-2 text-[0.72rem] font-extrabold uppercase tracking-[0.16em] backdrop-blur-[14px]">
                  {featuredArticle.featured?.badge}
                </span>
                <h2 className="text-[clamp(1.8rem,3vw,2.7rem)] leading-[1.08] tracking-[-0.04em]">
                  {featuredArticle.featured?.headline}
                </h2>
                <p className="leading-[1.8] text-[rgba(255,255,255,0.84)]">
                  {featuredArticle.featured?.description}
                </p>
                <Link
                  href={`/blog/${featuredArticle.slug}`}
                  className="inline-flex min-h-[52px] w-fit items-center justify-center gap-2.5 rounded-full bg-[rgba(255,255,255,0.94)] px-6 py-[14px] font-bold text-[var(--primary)] transition duration-200 hover:-translate-y-0.5"
                >
                  {featuredArticle.featured?.ctaLabel}
                  <MoveRight size={18} />
                </Link>
              </div>
            </article>
          ) : null}
        </div>
      </section>

      <section className={`${siteWidthClass} mt-24 rounded-[32px] [background:linear-gradient(180deg,rgba(151,149,255,0.07),rgba(255,255,255,0.98)),var(--surface-ink)] px-[clamp(20px,4vw,56px)] py-[54px] text-center shadow-[var(--shadow-light)] max-[720px]:mt-[72px] max-[720px]:px-5 max-[720px]:py-9`}>
        <div className="mx-auto mb-[26px] grid h-20 w-20 place-items-center rounded-[28px] bg-[rgba(74,64,224,0.08)] text-[var(--primary)]">
          <Mail size={34} />
        </div>
        <h2 className="text-[clamp(1.8rem,3vw,2.7rem)] leading-[1.08] tracking-[-0.04em]">
          Stay Ahead of the Curve
        </h2>
        <p className="mx-auto mt-4 max-w-[640px] leading-[1.8] text-[var(--muted)]">
          Get the latest Upwork tips in your inbox. আপওয়ার্কের লেটেস্ট টিপস এবং
          আমাদের নতুন ফিচার সম্পর্কে আপডেট থাকতে আজই সাবস্ক্রাইব করুন।
        </p>

        <div className="mx-auto mt-[30px] flex max-w-[640px] items-center gap-3 rounded-full bg-[rgba(255,255,255,0.94)] p-2.5 shadow-[0_16px_40px_rgba(74,64,224,0.08)] max-[720px]:flex-col max-[720px]:items-stretch max-[720px]:rounded-[26px]">
          <input
            type="email"
            placeholder="Your email address"
            aria-label="Your email address"
            className="min-w-0 flex-1 border-0 bg-transparent px-[18px] text-[var(--ink)] outline-none max-[720px]:min-h-12"
          />
          <a
            href={TELEGRAM_BOT_URL}
            target="_blank"
            rel="noreferrer"
            className={primaryButtonClass}
          >
            Join Now
          </a>
        </div>

        <div className="mt-[18px] text-[0.7rem] font-extrabold uppercase tracking-[0.18em] text-[rgba(116,119,121,0.9)]">
          No spam. Only high-value content.
        </div>
      </section>

      <Footer />
    </main>
  );
}
