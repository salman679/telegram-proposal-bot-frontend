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

import { WebsiteHeader } from "@/features/website/components/website-header";
import { TELEGRAM_BOT_URL } from "@/features/website/config/site";

import styles from "./home-page.module.css";

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

const articles = [
  {
    category: "Strategy",
    tone: "primary",
    title: "২০২৪ সালে আপওয়ার্কে জব পাওয়ার সেরা ৫টি কৌশল",
    text: "বর্তমান প্রতিযোগিতামূলক বাজারে আপনার প্রোফাইলটি কিভাবে সাজাবেন এবং proposal positioning কীভাবে উন্নত করবেন।",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAZrzwqE2WdNXRjnFRuEfJJxczkesNzAHLFVDeOQetPrndHwYODXhOtFo-uo9EI2NAHFJkKoxQ3_2N_EB1C1Y6Cp6zGSUmqhYYd9ffKx3QY7l20qwY99MPrqXA54Mg6ZCWEcw94xNrkd7wT9jDiNEjpfOuPFj9bm5FfK1EZMdgomE-ydki1e81CfqxW5UJWZ8ovrOjSowZOmDd9_hjNdCjXcLC9pVfHWuHq00wpSJMLmeoza7vtTqN2AaKQzteck0bb5mtQoncO9jQ"
  },
  {
    category: "AI Tools",
    tone: "secondary",
    title: "কিভাবে AI দিয়ে আপনার প্রপোজালকে আরও পার্সোনালাইজড করবেন",
    text: "শুধু copy-paste নয়, client intent বুঝে proposal personalize করার practical workflow দেখুন।",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBaoITZ04uT-aiHfZ_nKVp1bxLZLVBSgzqjCPd8DJ_Z186ohS_cqr2vnssJCr9pE0pGbRi8ezDecFJz2d3qkF0S4AMChTlQDxtOJpq7b9LNZZsBVd_at4oLxnsiY4nGaQVW1xeZ0diU-cnfp83seZQ96Vela4u5prRt0A4Cfyxsolrm2sbnkJCr5Sg-WgY8kzLgdJm6HeIOi1-T-vr0CXpHNbxnX2qc8Hznc0Lgv_rHhy8OC6xH4A0gTXTT-W7iB6b7YhpMaXWUgXM"
  },
  {
    category: "Community",
    tone: "tertiary",
    title: "বাংলাদেশী ফ্রিল্যান্সারদের সফলতার গল্প: একজন টপ রেটেড সেলারের অভিজ্ঞতা",
    text: "শূন্য থেকে শুরু করে steady pipeline তৈরি করার বাস্তব যাত্রা, mistakes, আর lessons learned।",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDS6P-RhYoWSaUKYdkKsd8NdUGSL60ZijL3ONz1iQ6DK1QEjt1-ZSBp7uu-5HEkNi7anAyn38aKw1sv9lOcHyD188govH8896PcqNCtEwSZbgC9OFqBJcWcxfxIz-dEcPCkd5PQ--DiQkf8l_7ghbacrAwaq8akQbuZ7_ICX7TvCoUPby2gZFFyHh68i5uS3kVSBQn4kgvaAnzJg02b9z-U6nqOdsIBqzXId5doePgRaLAb4K8oCmcOM3kzx5EI48x_83f-RvNtBMc"
  }
];

export function LandingPage() {
  return (
    <main className={styles.page}>
      <div className={styles.bgGlowPrimary} />
      <div className={styles.bgGlowSecondary} />

      <WebsiteHeader benefitsHref="/#benefits" />

      <section className={styles.heroSection}>
        <div className={styles.heroCopy}>
          <div className={styles.eyebrow}>
            <Sparkles size={16} />
            বাংলাদেশী ফ্রিল্যান্সারদের জন্য সেরা AI টুল
          </div>

          <h1 className={styles.heroTitle}>
            Upwork-এ জব জিততে <span>AI প্রপোজাল</span> ব্যবহার করুন
          </h1>

          <p className={styles.heroText}>
            শুধু জব ডেসক্রিপশন দিন, সেকেন্ডেই পান প্রফেশনাল প্রপোজাল যা আপনার
            ক্লায়েন্টের নজর কাড়বে।
          </p>

          <div className={styles.heroActions}>
            <a
              href={TELEGRAM_BOT_URL}
              target="_blank"
              rel="noreferrer"
              className={styles.primaryButton}
            >
              Telegram-এ শুরু করুন
              <Rocket size={18} />
            </a>
            <Link href="/how-it-works" className={styles.secondaryButton}>
              লাইভ ডেমো দেখুন
            </Link>
          </div>

          <div className={styles.socialProof}>
            <div className={styles.avatarGroup}>
              {socialProofAvatars.map((avatar) => (
                <img key={avatar} alt="Freelancer using the bot" src={avatar} />
              ))}
            </div>
            <p>
              <strong>৫০০+</strong> ফ্রিল্যান্সার প্রতিদিন ব্যবহার করছেন
            </p>
          </div>
        </div>

        <div className={styles.heroVisual}>
          <div className={styles.deviceGlow} />
          <div className={styles.previewCard}>
            <div className={styles.previewHeader}>
              <div className={styles.previewAvatar}>
                <Bot size={22} />
              </div>
              <div>
                <strong>Upwork Proposal Bot BD</strong>
                <span>bot is typing...</span>
              </div>
            </div>

            <div className={styles.previewBody}>
              <div className={styles.chatBubble}>
                আসসালামু আলাইকুম! আপনার কাঙ্ক্ষিত জবের ডেসক্রিপশনটি এখানে পেস্ট করুন।
              </div>
              <div className={`${styles.chatBubble} ${styles.chatBubbleReply}`}>
                Looking for a React developer to build a modern dashboard with
                Tailwind CSS...
              </div>
              <div className={styles.chatBubble}>
                <strong>✨ AI Generated Proposal:</strong>
                <p>
                  Hi there! I saw your requirement for a React &amp; Tailwind expert. I
                  have 3+ years of experience in building high-performance dashboards...
                </p>
              </div>
            </div>

            <div className={styles.previewFooter}>
              <span>Type a message...</span>
              <Send size={18} />
            </div>
          </div>
        </div>
      </section>

      <section className={styles.storySection} id="how-it-works">
        <div className={styles.sectionHeading}>
          <h2>সহজ ৩টি ধাপে শুরু করুন</h2>
        </div>

        <div className={styles.storyGrid}>
          {steps.map(({ icon: Icon, title, text }) => (
            <article key={title} className={styles.storyCard}>
              <div className={styles.storyIcon}>
                <Icon size={24} />
              </div>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.showcaseSection} id="benefits">
        <div className={styles.showcaseVisual}>
          <img
            alt="Team collaborating in a bright workspace"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuA-qmToywF159ILJP2uiy4EYVVXyYMmzUqHXZwSM54cItw40ZS37xo3kFtheBIpflTOOemuV9cU9Gokxd837bb3xOsqxGmoJ0qmbVaJwxman_ml17Djv79eI4C3AMpXRCT2NcU7lyrRc6kIepLPG8loH-W9fyhirVJrHunhMR-MbJTMnC9LOc4rawui7h8UGlhlKsD1DYkK4EN1sJEYOmnrlvYcxn79RrnVlyehnkJvwQmhBS_A_Zzk9HIAR6DrkabCDP5jX41Hnes"
          />
          <div className={styles.showcaseBadge}>
            <strong>৯৪%</strong>
            <span>ইউজারদের reply পাওয়ার হার বেড়েছে প্রথম মাসেই</span>
          </div>
        </div>

        <div className={styles.showcaseCopy}>
          <div className={styles.sectionHeadingLeft}>
            <span className={styles.sectionLabel}>Core Benefits</span>
            <h2>কেন আমাদের AI বট ব্যবহার করবেন?</h2>
          </div>

          <div className={styles.benefitGrid}>
            {benefits.map(({ icon: Icon, title, text }) => (
              <article key={title} className={styles.benefitItem}>
                <Icon size={24} />
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.ctaBand}>
        <div className={styles.ctaCopy}>
          <h2>প্রতিদিন Upwork টিপস পান সরাসরি Telegram-এ</h2>
          <p>
            আমরা শুধু বট নই, আমরা আপনার ফ্রিল্যান্সিং ক্যারিয়ারের সঙ্গী। প্রতিদিনের
            আপডেট এবং practical bidding tip মিস করবেন না।
          </p>
        </div>
        <a
          href={TELEGRAM_BOT_URL}
          target="_blank"
          rel="noreferrer"
          className={styles.lightButton}
        >
          Open Telegram Bot
        </a>
      </section>

      <section className={styles.pricingSection} id="pricing">
        <div className={styles.sectionHeading}>
          <span className={styles.sectionLabel}>Pricing</span>
          <h2>সাশ্রয়ী মূল্যে সেরা সার্ভিস</h2>
          <p>
            আপনার ক্যারিয়ারে বড় পরিবর্তন আনতে ছোট একটি বিনিয়োগ। weekly থেকে
            lifetime, সব পরিকল্পনা freelancer-first।
          </p>
        </div>

        <div className={styles.pricingGrid}>
          {pricingPlans.map((plan) => (
            <article
              key={plan.name}
              className={`${styles.pricingCard} ${plan.featured ? styles.pricingFeatured : ""}`}
            >
              {plan.featured ? <div className={styles.pricingBadge}>Most Popular</div> : null}
              <div className={styles.pricingHeader}>
                <h3>{plan.name}</h3>
                <div className={styles.pricingAmount}>
                  <strong>{plan.price}</strong>
                  <span>টাকা</span>
                </div>
              </div>

              <ul className={styles.checkList}>
                {plan.points.map((point) => (
                  <li key={point}>
                    <CheckCircle2 size={18} />
                    {point}
                  </li>
                ))}
              </ul>

              <a
                href={TELEGRAM_BOT_URL}
                target="_blank"
                rel="noreferrer"
                className={plan.featured ? styles.primaryButton : styles.outlineButton}
              >
                {plan.cta}
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.resourcesSection} id="blog">
        <div className={styles.resourcesHeader}>
          <div className={styles.sectionHeadingLeft}>
            <span className={styles.sectionLabel}>Resources</span>
            <h2>ফ্রিল্যান্সিং রিসোর্স ও ব্লগ</h2>
            <p>সাফল্যের টিপস, client psychology, আর AI workflow শিখুন আমাদের থেকে।</p>
          </div>
          <Link href="/blog" className={styles.resourceLink}>
            সবগুলো দেখুন
            <ArrowRight size={18} />
          </Link>
        </div>

        <div className={styles.resourcesGrid}>
          {articles.map((article) => (
            <article key={article.title} className={styles.resourceCard}>
              <img alt={article.title} src={article.image} />
              <div className={styles.resourceBody}>
                <span className={`${styles.resourceTag} ${styles[article.tone]}`}>
                  {article.category}
                </span>
                <h3>{article.title}</h3>
                <p>{article.text}</p>
                <a href="#">পড়ুন →</a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <footer className={styles.footer}>
        <div className={styles.footerGrid}>
          <div className={styles.footerColumn}>
            <div className={styles.footerBrand}>Upwork Proposal Bot BD</div>
            <p>বাংলাদেশী ফ্রিল্যান্সারদের ক্ষমতায়নের লক্ষ্যে তৈরি একটি আধুনিক AI সলিউশন।</p>
            <div className={styles.footerIcons}>
              <Mail size={18} />
              <MessageCircle size={18} />
              <Send size={18} />
            </div>
          </div>

          <div className={styles.footerColumn}>
            <h4>কুইক লিঙ্ক</h4>
            <Link href="/how-it-works">How it Works</Link>
            <a href="#benefits">Benefits</a>
            <Link href="/pricing">Pricing</Link>
            <Link href="/blog">Resources</Link>
          </div>

          <div className={styles.footerColumn}>
            <h4>সাপোর্ট</h4>
            <Link href="/pricing">Plans</Link>
            <Link href="/admin/login">Admin Login</Link>
            <Link href="/blog">FAQs</Link>
            <a href="#benefits">Bangla Interface</a>
          </div>

          <div className={styles.footerColumn}>
            <h4>নিউজলেটার</h4>
            <p>সেরা টিপসগুলো সরাসরি আপনার ইনবক্সে পেতে সাবস্ক্রাইব করুন।</p>
            <div className={styles.newsletter}>
              <input type="email" placeholder="Email" />
              <button type="button" className={styles.primaryButton}>
                Join
              </button>
            </div>
          </div>
        </div>

        <div className={styles.footerLegal}>© 2026 Upwork Proposal Bot BD. All rights reserved.</div>
      </footer>
    </main>
  );
}
