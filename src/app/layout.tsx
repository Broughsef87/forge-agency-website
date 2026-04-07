import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import Script from "next/script";
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
  title: "Forge Agency — B2B AI Automation & Custom AI Agents",
  description:
    "Forge Agency builds bespoke AI automation systems for small and mid-size businesses. Custom AI agents, lead-gen automation, and workflow systems deployed in 72 hours. No Zapier — purpose-built software.",
  keywords: [
    "AI automation agency",
    "B2B AI automation",
    "custom AI agents",
    "business process automation",
    "AI workflow automation",
    "lead generation automation",
    "n8n automation",
    "AI agent development",
  ],
  openGraph: {
    title: "Forge Agency — B2B AI Automation & Custom AI Agents",
    description:
      "Bespoke AI automation systems for small and mid-size businesses. Custom agents deployed in 72 hours.",
    url: "https://www.the-forge-agency.com",
    siteName: "Forge Agency",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Forge Agency — B2B AI Automation",
    description:
      "Bespoke AI automation systems for small and mid-size businesses. Custom agents deployed in 72 hours.",
  },
  icons: {
    icon: [
      { url: '/brand/png/forge-icon@32w.png', sizes: '32x32', type: 'image/png' },
      { url: '/brand/png/forge-icon@64w.png', sizes: '64x64', type: 'image/png' },
      { url: '/brand/png/forge-icon@512w.png', sizes: '512x512', type: 'image/png' },
    ],
    shortcut: '/brand/png/forge-icon@32w.png',
    apple: '/brand/png/forge-icon@512w.png',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://www.the-forge-agency.com",
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

