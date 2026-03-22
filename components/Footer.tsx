// ─── Update these with Nika's real social media links ────────────────────────
const links = [
  { label: "Instagram",        href: "https://www.instagram.com/nix_portraits?igsh=MXQ5ODQzaHNwcmd2dw==" },
  { label: "Client galleries", href: "https://nixramos.pixieset.com" },
];

export default function Footer() {
  return (
    <footer className="bg-ink px-8 md:px-14 py-7 flex flex-col md:flex-row items-center justify-between gap-5">
      <span className="font-sans text-[20px] font-normal tracking-wider text-bg">
        nix.
      </span>

      <ul className="flex gap-7">
        {links.map((l) => (
          <li key={l.label}>
            <a
              href={l.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[11px] font-medium tracking-[0.16em] uppercase text-bg/40 hover:text-bg transition-colors"
            >
              {l.label}
            </a>
          </li>
        ))}
      </ul>

      <span className="text-[11px] tracking-wider text-bg/30">
        © 2025 Nika Ramos · Davao
      </span>
    </footer>
  );
}
