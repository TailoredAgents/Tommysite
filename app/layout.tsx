import type { Metadata } from "next";
import { Barlow_Condensed, Manrope } from "next/font/google";
import "./globals.css";

const display = Barlow_Condensed({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["900"],
  style: ["normal", "italic"],
});

const body = Manrope({
  variable: "--font-body",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.RENDER_EXTERNAL_URL ?? "http://localhost:3000"),
  title: "Tommy Godfrey | All Heart. Every Game.",
  description: "Meet Tommy Godfrey, a 16-year-old nonverbal autistic multi-sport athlete celebrating competition, joy, and autistic excellence.",
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
  openGraph: {
    title: "Tommy Godfrey | All Heart. Every Game.",
    description: "A superstar, a winner, and a celebration of autistic excellence through sport.",
    type: "website",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Tommy Godfrey — All Heart. Every Game." }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tommy Godfrey | All Heart. Every Game.",
    description: "A superstar, a winner, and a celebration of autistic excellence through sport.",
    images: ["/og.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className={`${display.variable} ${body.variable}`}>{children}</body></html>;
}
