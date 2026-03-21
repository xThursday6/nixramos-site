// ─── Add more reviews here as Nika collects them ─────────────────────────────
const testimonials = [
  {
    quote:
      "She made us feel so comfortable — like she wasn't even there. And the photos came out absolutely beautiful.",
    author: "Pre-wedding client",
  },
  {
    quote:
      "I was so nervous in front of the camera but Nika just has this calming energy. I cried when I saw the results.",
    author: "Portrait session",
  },
];

export default function Testimonials() {
  return (
    <section
      id="kind-words"
      className="px-8 md:px-14 py-20 border-t border-ink/10"
    >
      <p className="text-[11px] font-medium tracking-[0.26em] uppercase text-accent mb-3">
        Kind words
      </p>
      <h2 className="font-display text-[clamp(28px,3vw,40px)] font-normal leading-[1.1] text-ink mb-10">
        What clients say
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {testimonials.map((t, i) => (
          <div
            key={i}
            className="border border-ink/10 p-9 flex flex-col gap-5 hover:border-accent/50 transition-colors"
          >
            <span className="text-accent tracking-widest text-sm">★★★★★</span>
            <p className="font-display text-[18px] font-normal italic leading-[1.65] text-ink">
              &ldquo;{t.quote}&rdquo;
            </p>
            <span className="text-[11px] font-medium tracking-[0.16em] uppercase text-muted mt-auto">
              — {t.author}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
