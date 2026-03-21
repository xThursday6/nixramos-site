import Image from "next/image";

// ─── Edit this array to update your gallery grid ───────────────────────────
// Each item needs: an image in public/images/, a title, and a link to Pixieset
const works = [
  {
    src: "/images/work-1.jpg",
    alt: "Jun & Momo Pre-wedding",
    label: "Jun & Momo · Pre-wedding",
    href: "https://nixramos.pixieset.com/junandmomo/",
    tall: true, // spans 2 rows — use your best portrait-oriented shot here
  },
  {
    src: "/images/work-2.jpg",
    alt: "Daba Daba Anniversary",
    label: "Daba Daba · Anniversary",
    href: "https://nixramos.pixieset.com/dabadabaanniversaryforacause/",
  },
  {
    src: "/images/work-3.jpg",
    alt: "Heart Alchemy Event",
    label: "Heart Alchemy · Event",
    href: "https://nixramos.pixieset.com",
  },
  {
    src: "/images/work-4.jpg",
    alt: "Collab Corner",
    label: "Collab Corner",
    href: "https://nixramos.pixieset.com",
  },
  {
    src: "/images/work-5.jpg",
    alt: "In the Quiet Corners Japan",
    label: "In the Quiet Corners · Japan",
    href: "https://nixramos.pixieset.com",
  },
];

// Placeholder tile colours (used until real photos are added)
const placeholderBg = [
  "from-[#e4d6bc] to-[#caba9a]",
  "from-[#d2cab6] to-[#beb0a0]",
  "from-[#cac0b0] to-[#b8aea0]",
  "from-[#dcd4c0] to-[#cac0ac]",
  "from-[#d4ccb8] to-[#c4baaa]",
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

      {/* Grid: 3 cols, 2 rows — first item spans both rows */}
      <div
        className="grid gap-1.5"
        style={{
          gridTemplateColumns: "1.5fr 1fr 1fr",
          gridTemplateRows: "280px 200px",
        }}
      >
        {works.map((w, i) => (
          <a
            key={i}
            href={w.href}
            target="_blank"
            rel="noopener noreferrer"
            className="relative overflow-hidden group block"
            style={w.tall ? { gridRow: "span 2" } : {}}
          >
            {/* Real photo — uncomment once images are in public/images/ */}
            {/* <Image src={w.src} alt={w.alt} fill className="object-cover group-hover:scale-105 transition-transform duration-700" /> */}

            {/* Placeholder (remove once real photos added) */}
            <div
              className={`w-full h-full bg-gradient-to-br ${placeholderBg[i]} flex items-center justify-center group-hover:scale-[1.03] transition-transform duration-700`}
            >
              <span className="text-[10px] tracking-[0.16em] uppercase text-ink/20">
                {w.alt}
              </span>
            </div>

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
