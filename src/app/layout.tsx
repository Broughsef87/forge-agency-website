import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

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
  title: "FORGE AGENCY — Documenting the autonomous build.",
  description:
    "The media layer of Forge. YouTube, the Skool community, and the Dad Strength App. Building a $1M/year autonomous business in public.",
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
      <body className="antialiased bg-[#F8F8F6] text-zinc-900">
        {children}
      </body>
    </html>
  );
}

