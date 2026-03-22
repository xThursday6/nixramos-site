"use client";
import { useState } from "react";
import Image from "next/image";
import BookingModal from "./BookingModal";

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="sticky top-0 z-50 flex items-center justify-between px-8 md:px-14 h-16 bg-bg border-b border-ink/10 backdrop-blur-sm">
        {/* Left links */}
        <ul className="flex-1 hidden md:flex gap-9">
          {["Work", "About", "Kind words"].map((label) => (
            <li key={label}>
              <a
                href={`#${label.toLowerCase().replace(" ", "-")}`}
                className="text-[11px] font-medium tracking-[0.18em] uppercase text-muted hover:text-ink transition-colors"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* Centred logo */}
        <a
          href="https://www.instagram.com/nix_portraits?igsh=MXQ5ODQzaHNwcmd2dw=="
          target="_blank"
          rel="noopener noreferrer"
          className="absolute left-1/2 -translate-x-1/2"
        >
          <Image
            src="/images/Logo.png"
            alt="Nix Ramos"
            width={72}
            height={32}
            className="object-contain"
            priority
          />
        </a>

        {/* CTA */}
        <div className="flex-1 flex justify-end">
          <button
            onClick={() => setOpen(true)}
            className="text-[11px] font-semibold tracking-[0.2em] uppercase px-5 py-2.5 bg-ink text-bg hover:bg-[#3a3020] transition-colors"
          >
            Book a session
          </button>
        </div>
      </nav>

      <BookingModal open={open} onClose={() => setOpen(false)} />
    </>
  );
}
