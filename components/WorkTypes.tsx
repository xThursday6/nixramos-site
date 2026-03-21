import Image from "next/image";

// ─── Edit these to match her categories ──────────────────────────────────────
const types = [
  { label: "Portraits",   src: "/images/type-portraits.jpg",   bg: "from-[#e2d6c0] to-[#c8b898]" },
  { label: "Events",      src: "/images/type-events.jpg",      bg: "from-[#d8e2d4] to-[#bcceb8]" },
  { label: "Engagement",  src: "/images/type-engagement.jpg",  bg: "from-[#d4d8e2] to-[#b8bece]" },
];

export default function WorkTypes() {
  return (
    <section className="px-8 md:px-14 pb-20">
      <p className="text-[11px] font-medium tracking-[0.26em] uppercase text-accent mb-3">
        Specialties
      </p>
      <h2 className="font-display text-[clamp(28px,3vw,40px)] font-normal leading-[1.1] text-ink mb-9">
        Type of work
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-1.5">
        {types.map((t) => (
          <div
            key={t.label}
            className="relative h-[340px] overflow-hidden rounded-t-[10px] group cursor-pointer"
          >
            {/* Real photo — uncomment once images are in public/images/ */}
            {/* <Image src={t.src} alt={t.label} fill className="object-cover group-hover:scale-105 transition-transform duration-700" /> */}

            {/* Placeholder */}
            <div
              className={`w-full h-full bg-gradient-to-br ${t.bg} flex items-center justify-center group-hover:scale-[1.03] transition-transform duration-700`}
            >
              <span className="text-[10px] tracking-[0.16em] uppercase text-ink/20">
                Your photo
              </span>
            </div>

            {/* Dark bottom fade for label readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-[rgba(20,16,10,0.5)] via-transparent to-transparent" />

            <span className="absolute bottom-5 left-1/2 -translate-x-1/2 text-[13px] font-medium tracking-[0.14em] uppercase text-bg whitespace-nowrap drop-shadow-sm">
              {t.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
