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
          <Image
            src="/images/Hero.JPG"
            alt="Nika Ramos Photography"
            fill
            className="object-cover"
            priority
          />

        </div>
      </section>

      <BookingModal open={open} onClose={() => setOpen(false)} />
    </>
  );
}
