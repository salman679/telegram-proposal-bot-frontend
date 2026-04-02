"use client";

import { useEffect, useState } from "react";
import { Bookmark, Check, Heart, Share2 } from "lucide-react";

const SAVED_KEY = "upwork-bot-bd:saved-articles";
const LIKED_KEY = "upwork-bot-bd:liked-articles";

interface BlogArticleActionsProps {
  articleSlug: string;
  articleTitle: string;
}

function readStoredSlugs(storageKey: string) {
  if (typeof window === "undefined") {
    return new Set<string>();
  }

  try {
    const rawValue = window.localStorage.getItem(storageKey);

    if (!rawValue) {
      return new Set<string>();
    }

    const parsedValue = JSON.parse(rawValue);

    return Array.isArray(parsedValue)
      ? new Set(parsedValue.filter((value): value is string => typeof value === "string"))
      : new Set<string>();
  } catch {
    return new Set<string>();
  }
}

function writeStoredSlugs(storageKey: string, values: Set<string>) {
  if (typeof window === "undefined") {
    return;
  }

  window.localStorage.setItem(storageKey, JSON.stringify([...values]));
}

export function BlogArticleActions({
  articleSlug,
  articleTitle
}: BlogArticleActionsProps) {
  const [saved, setSaved] = useState(false);
  const [liked, setLiked] = useState(false);
  const [shared, setShared] = useState(false);

  useEffect(() => {
    setSaved(readStoredSlugs(SAVED_KEY).has(articleSlug));
    setLiked(readStoredSlugs(LIKED_KEY).has(articleSlug));
  }, [articleSlug]);

  async function handleShare() {
    const shareUrl = window.location.href;

    try {
      if (navigator.share) {
        await navigator.share({
          title: articleTitle,
          url: shareUrl
        });
      } else if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(shareUrl);
      }

      setShared(true);
      window.setTimeout(() => setShared(false), 1800);
    } catch {
      // Ignore cancelled share sheets and clipboard failures.
    }
  }

  function toggleSaved() {
    const nextValues = readStoredSlugs(SAVED_KEY);

    if (nextValues.has(articleSlug)) {
      nextValues.delete(articleSlug);
      setSaved(false);
    } else {
      nextValues.add(articleSlug);
      setSaved(true);
    }

    writeStoredSlugs(SAVED_KEY, nextValues);
  }

  function toggleLiked() {
    const nextValues = readStoredSlugs(LIKED_KEY);

    if (nextValues.has(articleSlug)) {
      nextValues.delete(articleSlug);
      setLiked(false);
    } else {
      nextValues.add(articleSlug);
      setLiked(true);
    }

    writeStoredSlugs(LIKED_KEY, nextValues);
  }

  const actionButtonClass =
    "inline-flex h-12 w-12 items-center justify-center rounded-full border-0 bg-[var(--button-inverted-bg)] text-[var(--button-inverted-ink)] shadow-[0_12px_24px_rgba(74,64,224,0.08)] transition duration-200 hover:-translate-y-0.5 hover:bg-[var(--button-inverted-hover)] hover:shadow-[0_18px_34px_rgba(74,64,224,0.12)]";
  const activeActionButtonClass =
    "bg-[var(--gradient-primary)] text-[var(--button-on-primary)] [&_svg]:text-[var(--button-on-primary)]";

  return (
    <div className="flex flex-col items-center gap-4">
      <button
        type="button"
        className={`${actionButtonClass} ${shared ? activeActionButtonClass : ""}`}
        onClick={handleShare}
        aria-label={shared ? "Article link copied" : "Share article"}
        title={shared ? "Link copied" : "Share article"}
      >
        {shared ? <Check size={18} /> : <Share2 size={18} />}
      </button>
      <button
        type="button"
        className={`${actionButtonClass} ${saved ? activeActionButtonClass : ""}`}
        onClick={toggleSaved}
        aria-label={saved ? "Remove bookmark" : "Save article"}
        title={saved ? "Saved" : "Save article"}
      >
        <Bookmark size={18} />
      </button>
      <button
        type="button"
        className={`${actionButtonClass} ${liked ? activeActionButtonClass : ""}`}
        onClick={toggleLiked}
        aria-label={liked ? "Unlike article" : "Like article"}
        title={liked ? "Liked" : "Like article"}
      >
        <Heart size={18} />
      </button>
    </div>
  );
}
