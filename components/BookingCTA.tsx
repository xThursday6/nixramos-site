"use client";
import { useState } from "react";
import BookingModal from "./BookingModal";

export default function BookingCTA() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <section
        id="book"
        className="bg-bg-warm border-t border-ink/10 px-8 md:px-14 py-24 flex flex-col items-center text-center gap-5"
      >
        <p className="text-[11px] font-medium tracking-[0.26em] uppercase text-accent">
          Let&apos;s work together
        </p>

        <h2 className="font-display text-[clamp(38px,5vw,58px)] font-normal leading-[1.08] text-ink max-w-xl">
          Weekends fill up <em className="text-accent">fast.</em>
        </h2>

        <p className="text-sm font-normal text-muted leading-[1.9] max-w-md">
          Reach out to check availability and secure your date. Every session is
          crafted around you — your story, your people, your moments.
        </p>

        <button
          onClick={() => setOpen(true)}
          className="mt-3 text-[11px] font-semibold tracking-[0.24em] uppercase px-12 py-4 bg-ink text-bg hover:bg-[#3a3020] transition-all hover:-translate-y-0.5 active:translate-y-0"
        >
          Book your session
        </button>

        <p className="text-xs text-muted">
          Usually responds within 24 hours &nbsp;·&nbsp; Based in Davao, PH
        </p>
      </section>

      <BookingModal open={open} onClose={() => setOpen(false)} />
    </>
  );
}
