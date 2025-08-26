// app/[locale]/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import { Inter, Noto_Sans } from "next/font/google";
import Script from "next/script";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { hasLocale } from "next-intl";
import { websiteLd, orgLd } from "@/lib/schema";
import { serviceLd } from "@/lib/seo-ld";
import MetaPixel from "@/components/MetaPixel";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const noto = Noto_Sans({ subsets: ["latin"], variable: "--font-noto", display: "swap" });

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const { locale } = await params;
  const base = new URL("https://www.panielix.com");
  const title =
    locale === "es"
      ? "Panielix Solutions — Sitios web que convierten para PYMEs"
      : "Panielix Solutions — Conversion-Focused Websites for SMBs";
  const description =
    locale === "es"
      ? "Creamos sitios web rápidos y optimizados para conversión para PYMEs en EE. UU., Canadá y Reino Unido."
      : "We build fast, high-converting websites for small & medium businesses across the US, Canada, and the UK.";

  return {
    metadataBase: base,
    title,
    description,
    alternates: {
      canonical: locale === "es" ? "/es" : "/",
      languages: { "en-US": "/", "es-ES": "/es" },
    },
    openGraph: {
      type: "website",
      url: base.toString(),
      title,
      description,
      images: [{ url: `/opengraph-image`, width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`/opengraph-image`],
    },
    icons: { icon: [{ url: "/favicon.ico" }] },
    robots: { index: true, follow: true },
  };
}

export default async function RootLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();

  return (
    <html lang={locale} suppressHydrationWarning>
      <head>
        <Script id="gtm-base" strategy="afterInteractive">{`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-T26VVVR9');`}</Script>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <Script id="crisp" strategy="afterInteractive">
          {`
            window.$crisp=[];
            window.CRISP_WEBSITE_ID="73607393-c3ae-4b7d-a2ee-0609f7e1843b";
            (function(){
              var d=document;
              var s=d.createElement("script");
              s.src="https://client.crisp.chat/l.js";
              s.async=1;
              d.getElementsByTagName("head")[0].appendChild(s);
            })();
          `}
        </Script>
      </head>
      <body className={`${inter.variable} ${noto.variable} font-sans bg-[var(--slate-950)] text-white`}>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-T26VVVR9"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <MetaPixel />
        {children}

        <Script src="https://www.googletagmanager.com/gtag/js?id=G-2DSBBD62HF" async />
        <Script id="ga-init">{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config','G-2DSBBD62HF');
        `}</Script>

        <Script id="ld-website" type="application/ld+json">{JSON.stringify(websiteLd)}</Script>
        <Script id="ld-org" type="application/ld+json">{JSON.stringify(orgLd)}</Script>
        <Script id="ld-service" type="application/ld+json">{JSON.stringify(serviceLd)}</Script>
        {/* <Script id="tawkto" strategy="afterInteractive">
          {`
            var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
            (function(){
              var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
              s1.async=true;
              s1.src='https://embed.tawk.to/68ade2d9a8e039192a6ad829/1j3jjs8mc';
              s1.charset='UTF-8';
              s1.setAttribute('crossorigin','*');
              s0.parentNode.insertBefore(s1,s0);
            })();
          `}
        </Script> */}
      </body>
    </html>
  );
}
