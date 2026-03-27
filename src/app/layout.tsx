import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "IMMUNEX - Autonomous AI for Drug Repurposing in Innate Immunity",
  description: "Multi-agent AI system that identifies approved drugs for repurposing as innate immune modulators. Five specialized agents. Nine data sources. Evidence-graded hypotheses. Built for the Encode: AI for Science Fellowship (Pillar VC x ARIA).",
  keywords: ["drug repurposing", "innate immunity", "AI", "multi-agent", "NLRP3", "inflammasome", "STING", "TLR", "knowledge graph", "GNN", "Encode Fellowship", "ARIA", "Pillar VC"],
  authors: [{ name: "Harshith Vaddiparthy", url: "https://harshith.com" }],
  openGraph: {
    title: "IMMUNEX - Autonomous AI for Drug Repurposing in Innate Immunity",
    description: "Multi-agent AI system identifying drug repurposing candidates for innate immune modulation",
    url: "https://immunex.vercel.app",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${inter.className} antialiased bg-zinc-950`}>
        {children}
      </body>
    </html>
  );
}
