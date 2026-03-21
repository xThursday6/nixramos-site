import type { Metadata } from "next";
import { Raleway, DM_Serif_Display } from "next/font/google";
import "./globals.css";

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-raleway",
  display: "swap",
});

const dmSerif = DM_Serif_Display({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  variable: "--font-dm-serif",
  display: "swap",
});

export const metadata: Metadata = {
  title: "nix. — Nika Ramos Photography · Davao",
  description:
    "Davao-based photographer capturing portraits, engagements, and events. Your story, caught in its best light.",
  openGraph: {
    title: "nix. — Nika Ramos Photography",
    description: "Your story, caught in its best light.",
    url: "https://nixramos.com",
    siteName: "nix.",
    locale: "en_PH",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${raleway.variable} ${dmSerif.variable}`}>
      <body className="font-sans bg-bg text-ink">{children}</body>
    </html>
  );
}
