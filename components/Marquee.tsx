export default function Marquee() {
  const items = [
    "Your story, caught in its best light",
    "Davao photography",
    "Portraits · Events · Engagement",
    "Every photo is a reminder",
  ];

  // Duplicate for seamless loop
  const all = [...items, ...items];

  return (
    <div className="bg-bg-warm border-y border-ink/10 py-3.5 overflow-hidden whitespace-nowrap">
      <div className="inline-flex animate-marquee">
        {all.map((text, i) => (
          <span key={i} className="inline-flex items-center">
            <span className="font-display text-base italic font-normal text-ink/70 px-10">
              {text}
            </span>
            <span className="text-accent text-lg leading-none">·</span>
          </span>
        ))}
      </div>
    </div>
  );
}
