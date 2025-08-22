import "./globals.css";
import type { Metadata } from "next";
import { Inter, Noto_Sans } from "next/font/google";
import Script from "next/script";
import { websiteLd, orgLd } from "@/lib/schema";
import { NextIntlClientProvider, hasLocale } from 'next-intl';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const noto = Noto_Sans({ subsets: ["latin"], variable: "--font-noto", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.panielix.com"),
  title: "Panielix Solutions - Premier Web Development for Small & Medium Businesses",
  description:
    "We offer professional, high-converting websites for small and medium businesses. Get a fast, affordable, and conversion-focused website tailored to your needs.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "https://www.panielix.com/",
    title: "Panielix Solutions - High-Converting Websites for SMBs",
    description:
      "Tired of losing customers to competitors? We build professional, conversion-focused websites. Launch fast, attract more leads, and grow your revenue.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Panielix Solutions - High-Converting Websites for SMBs",
    description:
      "Tired of losing customers to competitors? We build professional, conversion-focused websites. Launch fast, attract more leads, and grow your revenue.",
    images: ["/twitter-image.jpg"],
  },
  icons: { icon: [{ url: "/favicon.ico" }] },
  robots: { index: true, follow: true },
};

export default async function RootLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  // Ensure that the incoming `locale` is valid
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  return (
    <html lang={locale} suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
      </head>
      <body className={`${inter.variable} ${noto.variable} font-sans bg-[var(--slate-950)] text-white`}>
        <NextIntlClientProvider>{children}</NextIntlClientProvider>


        {/* Google Analytics (replace GA_MEASUREMENT_ID) */}
        <Script src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID" async />
        <Script id="ga-init">{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config','GA_MEASUREMENT_ID');
        `}</Script>

        {/* JSON-LD */}
        <Script id="ld-website" type="application/ld+json">{JSON.stringify(websiteLd)}</Script>
        <Script id="ld-org" type="application/ld+json">{JSON.stringify(orgLd)}</Script>
      </body>
    </html>
  );
}
