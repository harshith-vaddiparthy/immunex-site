import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "IMMUNEX - Autonomous AI for Drug Repurposing in Innate Immunity",
  description: "Multi-agent AI system that systematically identifies approved drugs for repurposing as innate immune modulators. Five specialized agents. Nine data sources. Evidence-graded hypotheses.",
  keywords: ["drug repurposing", "innate immunity", "AI", "multi-agent", "NLRP3", "inflammasome", "STING", "TLR", "knowledge graph", "GNN", "biomedical AI", "computational drug discovery"],
  authors: [{ name: "Harshith Vaddiparthy", url: "https://harshith.com" }],
  openGraph: {
    title: "IMMUNEX - Autonomous AI for Drug Repurposing in Innate Immunity",
    description: "Multi-agent AI system identifying drug repurposing candidates for innate immune modulation",
    url: "https://immunex-site.vercel.app",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} scroll-smooth dark`}>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
