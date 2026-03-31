import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import AnimationObserver from "@/components/AnimationObserver";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Forge Agency — AI Automation for Modern Enterprises",
  description:
    "Forge Agency builds autonomous AI agent systems that scale enterprise revenue without scaling headcount. Bespoke AI workflows and productized automation, deployed in 72 hours.",
  metadataBase: new URL("https://the-forge-agency.com"),
  openGraph: {
    title: "Forge Agency — AI Automation for Modern Enterprises",
    description:
      "Forge Agency builds autonomous AI agent systems that scale enterprise revenue without scaling headcount. Deployed in 72 hours.",
    url: "https://the-forge-agency.com",
    siteName: "The Forge Agency",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "The Forge Agency — AI Automation Agency",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Forge Agency — AI Automation for Modern Enterprises",
    description:
      "Bespoke AI workflows and autonomous agent systems, deployed in 72 hours.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable} scroll-smooth`}
    >
      <body className="antialiased bg-[#F5F1EA] text-stone-900">
        <AnimationObserver />
        {children}
      </body>
    </html>
  );
}

