import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Fraunces } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import AnimationObserver from "@/components/AnimationObserver";
import JsonLd from "@/components/JsonLd";
import { ORGANIZATION, WEBSITE } from "@/lib/schema";

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

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  axes: ["SOFT", "opsz"],
});

// Sitewide defaults only. Per-page title/description/canonical/OG/Twitter are
// built via pageMetadata() (src/lib/seo.ts) on each route — including the
// homepage (src/app/page.tsx) — so canonical is always self-referential and
// never inherited from here. metadataBase = www so relative asset URLs (OG
// image) resolve to the same host the non-www 301 lands on. See FOR-131.
export const metadata: Metadata = {
  metadataBase: new URL("https://www.the-forge-agency.com"),
  title: "The Forge Agency — AI, SEO & GEO for Construction Trades",
  description:
    "AI automation, SEO & GEO for construction and building-products companies — the dashboards, AI agents, and search visibility that win more work.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable} ${fraunces.variable} scroll-smooth`}
    >
      <body className="antialiased bg-[#F5F1EA] text-stone-900">
        <JsonLd data={ORGANIZATION} />
        <JsonLd data={WEBSITE} />
        <AnimationObserver />
        {children}
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-C86WSS08BH" strategy="afterInteractive" />
        <Script id="ga4" strategy="afterInteractive">{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-C86WSS08BH');
        `}</Script>
        <Script id="meta-pixel" strategy="afterInteractive">{`
          !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
          n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}
          (window,document,'script','https://connect.facebook.net/en_US/fbevents.js');
          fbq('init','1591194665492040');fbq('track','PageView');
        `}</Script>
        <noscript>
          <img height="1" width="1" style={{display:'none'}}
            src="https://www.facebook.com/tr?id=1591194665492040&ev=PageView&noscript=1" alt="" />
        </noscript>
      </body>
    </html>
  );
}

