import Image from "next/image";

// ─── Edit this array to update your gallery grid ───────────────────────────
const works = [
  {
    src: "/images/Jun%20%26%20Momo%20Pre-Wedding.JPG",
    alt: "Jun & Momo Pre-Wedding",
    label: "Jun & Momo · Pre-Wedding",
    href: "https://nixramos.pixieset.com",
    tall: true,
  },
  {
    src: "/images/daba%20daba%20anniversary.png",
    alt: "Daba Daba Anniversary",
    label: "Daba Daba · Anniversary",
    href: "https://nixramos.pixieset.com",
  },
  {
    src: "/images/Wellness%20Retreat.jpg",
    alt: "Wellness Retreat",
    label: "Wellness Retreat",
    href: "https://nixramos.pixieset.com",
  },
  {
    src: "/images/Pickleball.png",
    alt: "Pickleball",
    label: "Pickleball",
    href: "https://nixramos.pixieset.com",
  },
  {
    src: "/images/Daba%20-%20Sunrise%20Yoga%20for%20a%20Cause.png",
    alt: "Daba · Sunrise Yoga for a Cause",
    label: "Daba · Sunrise Yoga for a Cause",
    href: "https://nixramos.pixieset.com",
  },
  {
    src: "/images/Mama%20Joy.png",
    alt: "Mama Joy",
    label: "Mama Joy",
    href: "https://nixramos.pixieset.com",
    wide: true,
  },
];

export default function WorkGrid() {
  return (
    <section id="work" className="px-8 md:px-14 py-20">
      {/* Header */}
      <div className="flex justify-between items-end mb-9">
        <div>
          <p className="text-[11px] font-medium tracking-[0.26em] uppercase text-accent mb-3">
            Recent work
          </p>
          <h2 className="font-display text-[clamp(28px,3vw,40px)] font-normal leading-[1.1] text-ink">
            Stolen glances,
            <br />
            <em className="text-accent">always honest.</em>
          </h2>
        </div>
        <a
          href="https://nixramos.pixieset.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[11px] font-medium tracking-[0.18em] uppercase text-muted hover:text-ink transition-colors flex items-center gap-2 border-b border-ink/15 pb-0.5 group"
        >
          All galleries
          <span className="group-hover:translate-x-1 transition-transform">→</span>
        </a>
      </div>

      {/* Grid: 3 cols — first item spans 2 rows, last item spans full width */}
      <div
        className="grid gap-1.5"
        style={{
          gridTemplateColumns: "1.5fr 1fr 1fr",
          gridTemplateRows: "280px 200px 200px",
        }}
      >
        {works.map((w, i) => (
          <a
            key={i}
            href={w.href}
            target="_blank"
            rel="noopener noreferrer"
            className="relative overflow-hidden group block"
            style={
              w.tall ? { gridRow: "span 2" } :
              w.wide ? { gridColumn: "1 / -1" } :
              {}
            }
          >
            <Image
              src={w.src}
              alt={w.alt}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
            />

            {/* Hover overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[rgba(20,16,10,0.72)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
              <span className="text-[11px] font-medium tracking-[0.1em] uppercase text-bg">
                {w.label}
              </span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
