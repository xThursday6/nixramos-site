"use client";
import { useEffect, useState } from "react";

interface Props {
  open: boolean;
  onClose: () => void;
}

const SESSION_TYPES = [
  "Pre-wedding / Engagement",
  "Anniversary",
  "Portraits",
  "Event coverage",
  "Sports & lifestyle",
  "Other",
];

export default function BookingModal({ open, onClose }: Props) {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  // Close on Escape key
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  // Lock body scroll when open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  if (!open) return null;

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    const data = new FormData(e.currentTarget);
    await fetch("https://formspree.io/f/xyknadqy", {
      method: "POST",
      body: data,
      headers: { Accept: "application/json" },
    });

    setLoading(false);
    setSubmitted(true);
  }

  return (
    <div
      className="fixed inset-0 z-[999] flex items-center justify-center bg-[rgba(28,24,18,0.65)] backdrop-blur-sm px-4"
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div className="bg-bg w-full max-w-[520px] max-h-[90vh] overflow-y-auto relative animate-[fadeUp_0.3s_ease_both]">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-muted hover:text-ink transition-colors text-2xl font-light leading-none"
          aria-label="Close"
        >
          ✕
        </button>

        <div className="p-10 md:p-12">
          {!submitted ? (
            <>
              <p className="text-[11px] font-medium tracking-[0.26em] uppercase text-accent mb-3">
                Let&apos;s connect
              </p>
              <h2 className="font-display text-[30px] font-normal text-ink mb-8">
                Book a session
              </h2>

              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="grid grid-cols-2 gap-4">
                  <Field label="First name" name="fname" placeholder="Maria"  required />
                  <Field label="Last name"  name="lname" placeholder="Santos" required />
                </div>

                <Field
                  label="Email"
                  name="email"
                  type="email"
                  placeholder="maria@email.com"
                  required
                />

                <Field
                  label="Mobile (optional)"
                  name="mobile"
                  type="tel"
                  placeholder="+63 9XX XXX XXXX"
                />

                {/* Session type select */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-[11px] font-medium tracking-[0.16em] uppercase text-muted">
                    Type of session
                  </label>
                  <select
                    name="session-type"
                    required
                    defaultValue=""
                    className="w-full px-3.5 py-3 border border-ink/20 bg-bg font-sans text-sm text-ink outline-none focus:border-accent transition-colors appearance-none"
                  >
                    <option value="" disabled>
                      Select a session type
                    </option>
                    {SESSION_TYPES.map((t) => (
                      <option key={t} value={t}>{t}</option>
                    ))}
                  </select>
                </div>

                <Field
                  label="Preferred date"
                  name="preferred-date"
                  type="date"
                />

                {/* Message textarea */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-[11px] font-medium tracking-[0.16em] uppercase text-muted">
                    Tell me a little about your shoot
                  </label>
                  <textarea
                    name="message"
                    rows={3}
                    placeholder="Where, who, what vibe are you going for?"
                    className="w-full px-3.5 py-3 border border-ink/20 bg-bg font-sans text-sm text-ink outline-none focus:border-accent transition-colors resize-y"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="mt-1 text-[11px] font-semibold tracking-[0.22em] uppercase py-4 bg-ink text-bg hover:bg-[#3a3020] disabled:opacity-60 transition-colors"
                >
                  {loading ? "Sending…" : "Send booking request"}
                </button>
              </form>

              <p className="text-xs text-muted text-center mt-5 leading-relaxed">
                Nika will get back to you within 24 hours to confirm availability.
                <br />
                No payment required until your date is confirmed.
              </p>
            </>
          ) : (
            /* Thank-you state */
            <div className="text-center py-6 flex flex-col items-center gap-4">
              <span className="text-accent text-4xl">✦</span>
              <h2 className="font-display text-[28px] font-normal italic text-ink">
                Message sent!
              </h2>
              <p className="text-sm text-muted leading-relaxed max-w-xs">
                Thank you for reaching out. Nika will be in touch within 24 hours
                to confirm your date and share all the details.
              </p>
              <button
                onClick={() => { setSubmitted(false); onClose(); }}
                className="mt-2 text-[11px] font-medium tracking-[0.18em] uppercase text-muted hover:text-ink border-b border-ink/15 pb-0.5 transition-colors"
              >
                Close
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// Small reusable field
function Field({
  label,
  name,
  type = "text",
  placeholder,
  required,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label
        htmlFor={name}
        className="text-[11px] font-medium tracking-[0.16em] uppercase text-muted"
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        className="w-full px-3.5 py-3 border border-ink/20 bg-bg font-sans text-sm text-ink outline-none focus:border-accent transition-colors"
      />
    </div>
  );
}
