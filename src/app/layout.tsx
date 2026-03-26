import type { Metadata } from "next";
import { Poppins, Outfit } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { siteConfig } from "@/lib/site";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  applicationName: siteConfig.name,
  title: {
    default: "Invest4Kids - Expertenhilfe beim Geld anlegen für Kinder",
    template: "%s | Invest4Kids",
  },
  description: siteConfig.description,
  keywords: [
    "Kinderinvestments",
    "ETF für Kinder",
    "Geldanlage für Kinder",
    "Vermögensaufbau Kinder",
    "Invest4Kids",
  ],
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  category: "Finance",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-video-preview": -1,
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Invest4Kids - Expertenhilfe beim Geld anlegen für Kinder",
    description: siteConfig.description,
    locale: "de_DE",
    siteName: "Invest4Kids",
    type: "website",
    url: siteConfig.url,
    images: [
      {
        url: siteConfig.ogImage,
        alt: "Invest4Kids Team",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Invest4Kids - Expertenhilfe beim Geld anlegen für Kinder",
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: siteConfig.name,
  url: siteConfig.url,
  logo: `${siteConfig.url}${siteConfig.ogImage}`,
  sameAs: siteConfig.socialLinks,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Fabrikstraße 7",
    postalCode: "24103",
    addressLocality: "Kiel",
    addressCountry: "DE",
  },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: siteConfig.name,
  url: siteConfig.url,
  inLanguage: "de-DE",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body className={`${poppins.variable} ${outfit.variable} antialiased`}>
        <Header />
        {children}
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </body>
    </html>
  );
}
