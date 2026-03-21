"use client";
import { useState } from "react";
import Image from "next/image";
import BookingModal from "./BookingModal";

export default function Hero() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <section className="grid grid-cols-1 md:grid-cols-2 min-h-[calc(100vh-64px)]">
        {/* Text side */}
        <div className="flex flex-col justify-center gap-6 px-8 md:px-14 py-16 md:py-20">
          <p className="fade-up delay-100 text-[11px] font-medium tracking-[0.26em] uppercase text-accent">
            Davao-based photographer
          </p>

          <h1 className="fade-up delay-250 font-display text-[clamp(38px,4.5vw,60px)] font-normal leading-[1.05] text-ink">
            Your story,
            <br />
            caught in its
            <br />
            <em className="text-accent">best light.</em>
          </h1>

          <p className="fade-up delay-400 text-sm font-normal text-muted leading-[1.9] max-w-sm">
            Part instinct, part emotion, and a whole lot of{" "}
            <em className="not-italic italic text-ink font-normal">
              &ldquo;wait, don&rsquo;t move! yes, that&rsquo;s perfect.&rdquo;
            </em>{" "}
            Every photo is a reminder that your story deserves to be seen.
          </p>

          <div className="fade-up delay-550 flex items-center gap-7 mt-2">
            <button
              onClick={() => setOpen(true)}
              className="text-[11px] font-semibold tracking-[0.22em] uppercase px-8 py-3.5 bg-ink text-bg hover:bg-[#3a3020] transition-all hover:-translate-y-px active:translate-y-0"
            >
              Book a session
            </button>
            <a
              href="#work"
              className="text-[11px] font-medium tracking-[0.18em] uppercase text-muted hover:text-ink transition-colors flex items-center gap-2 border-b border-ink/10 pb-0.5 group"
            >
              View work
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </a>
          </div>
        </div>

        {/* Image side */}
        <div className="relative bg-[#e0d4bc] min-h-[360px] md:min-h-0 overflow-hidden order-first md:order-last">
          {/*
            TO ADD YOUR PHOTO:
            1. Save it as: public/images/hero.jpg
            2. Replace the placeholder div below with:

            <Image
              src="/images/hero.jpg"
              alt="Nika Ramos Photography"
              fill
              className="object-cover"
              priority
            />
          */}
          <div className="w-full h-full flex flex-col items-center justify-center gap-3 min-h-[360px] bg-gradient-to-br from-[#ecdfc6] via-[#d4c4a0] to-[#c8b488] text-ink/25">
            <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
              <rect x="4" y="9" width="36" height="28" rx="4" stroke="currentColor" strokeWidth="1.5" />
              <circle cx="22" cy="23" r="8" stroke="currentColor" strokeWidth="1.5" />
              <path d="M15 9l2.5-4h9L29 9" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
            </svg>
            <span className="text-[10px] tracking-[0.2em] uppercase">Add hero.jpg to public/images/</span>
          </div>

          {/* Floating badge */}
          <div className="absolute bottom-8 -left-px bg-bg border border-ink/15 px-5 py-4 z-10">
            <div className="font-display text-[30px] font-normal text-ink leading-none">100+</div>
            <div className="text-[10px] font-medium tracking-[0.16em] uppercase text-muted mt-1.5">
              Happy clients
            </div>
          </div>
        </div>
      </section>

      <BookingModal open={open} onClose={() => setOpen(false)} />
    </>
  );
}
