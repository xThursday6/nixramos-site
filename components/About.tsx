import Image from "next/image";

const stats = [
  { num: "52+",   label: "Weekends booked" },
  { num: "100+",  label: "Happy clients"   },
  { num: "★★★★★", label: "Every review"    },
];

export default function About() {
  return (
    <div id="about" className="grid grid-cols-1 md:grid-cols-2 bg-ink text-bg">
      {/* Text */}
      <div className="flex flex-col justify-center gap-6 px-8 md:px-14 py-20 md:py-24">
        <p className="text-[11px] font-medium tracking-[0.26em] uppercase text-accent">
          About nix.
        </p>

        <h2 className="font-display text-[clamp(30px,3.2vw,44px)] font-normal leading-[1.1] text-bg">
          The messy, the magical,
          <br />
          <em className="text-accent">the beautiful.</em>
        </h2>

        <p className="text-sm font-normal text-bg/60 leading-[1.95] max-w-md">
          I&apos;ve always been drawn to the quiet rhythm of everyday life — the
          unplanned moments, the stories that unfold in between. There&apos;s
          something grounding about capturing people as they are, places as they
          feel.
          <br />
          <br />
          <em className="not-italic italic text-bg/85">
            Photography, to me, is part instinct, part emotion.
          </em>{" "}
          Because life isn&apos;t staged... it&apos;s felt. Every photo I take
          is a reminder that your story deserves to be seen.
        </p>

        {/* Stats */}
        <div className="flex gap-10 pt-7 mt-2 border-t border-bg/10">
          {stats.map((s) => (
            <div key={s.label}>
              <div className="font-display text-[32px] font-normal text-bg leading-none">
                {s.num}
              </div>
              <div className="text-[10px] font-medium tracking-[0.16em] uppercase text-accent mt-1.5">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Portrait */}
      <div className="relative bg-[#111008] min-h-[320px]">
        <Image
          src="/images/Nika-portrait.JPG"
          alt="Nika Ramos"
          fill
          className="object-cover object-top"
        />
      </div>
    </div>
  );
}
