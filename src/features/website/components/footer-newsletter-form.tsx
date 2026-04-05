"use client";

import { useState, type FormEvent } from "react";

import { Button } from "@/features/website/components/button";
import { CONTACT_EMAIL } from "@/features/website/config/site";

export function FooterNewsletterForm() {
  const [email, setEmail] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const normalizedEmail = email.trim();

    if (!normalizedEmail) {
      return;
    }

    const subject = encodeURIComponent("ProposalPro newsletter signup");
    const body = encodeURIComponent(
      `Please add this email to the ProposalPro newsletter:\n\n${normalizedEmail}`
    );

    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
  }

  return (
    <form className="flex gap-2.5 max-[780px]:flex-col" onSubmit={handleSubmit}>
      <input
        type="email"
        name="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        placeholder="Email"
        required
        className="w-full rounded-2xl border border-transparent bg-[var(--surface-highest)] px-4 py-[14px] text-[var(--ink)] outline-none focus:border-[rgba(74,64,224,0.4)] focus:shadow-[0_0_0_6px_rgba(136,133,255,0.18)]"
      />
      <Button type="submit" variant="primary">
        Join
      </Button>
    </form>
  );
}
