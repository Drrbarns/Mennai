import type { Metadata } from "next";
import { Geist, Geist_Mono, Pacifico } from "next/font/google";
import "./globals.css";
import StructuredData from "../components/StructuredData";

const pacifico = Pacifico({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-pacifico',
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://mennai-farms.com'), // Update with your actual domain
  title: {
    default: "Mennai Farms - Premium Pineapples from Ghana | Sustainable Farming",
    template: "%s | Mennai Farms"
  },
  description: "Mennai Farms is a leading pineapple producer in Ghana's Eastern Region, specializing in premium quality pineapples through sustainable farming practices. Located in Marfokrom, Ayensuano District, we export globally with a commitment to quality, community, and environmental stewardship.",
  keywords: [
    "pineapple farm Ghana",
    "premium pineapples",
    "sustainable farming Ghana",
    "Ghana pineapple export",
    "Marfokrom pineapple farm",
    "Ayensuano District farming",
    "African pineapple producer",
    "sustainable agriculture",
    "pineapple plantation Ghana"
  ],
  authors: [{ name: "Mennai Farms" }],
  creator: "Mennai Farms",
  publisher: "Mennai Farms",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://mennai-farms.com",
    siteName: "Mennai Farms",
    title: "Mennai Farms - Premium Pineapples from Ghana",
    description: "Leading pineapple producer in Ghana specializing in premium quality through sustainable farming practices. Exporting globally from Marfokrom, Ayensuano District.",
    images: [
      {
        url: "https://mennai-farms.com/og-image.jpg", // Update with actual OG image
        width: 1200,
        height: 630,
        alt: "Mennai Farms - Premium Pineapples from Ghana",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mennai Farms - Premium Pineapples from Ghana",
    description: "Leading pineapple producer in Ghana specializing in premium quality through sustainable farming practices.",
    images: ["https://mennai-farms.com/og-image.jpg"], // Update with actual Twitter image
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Add your verification codes when available
    // google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
    // yahoo: "your-yahoo-verification-code",
  },
  alternates: {
    canonical: "https://mennai-farms.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${pacifico.variable} antialiased`}
      >
        <StructuredData
          data={{
            "@context": "https://schema.org",
            "@type": "AgriculturalBusiness",
            "@id": "https://mennai-farms.com/#organization",
            name: "Mennai Farms",
            alternateName: "Mennai Farms Pineapple Plantation",
            url: "https://mennai-farms.com",
            logo: "https://mennai-farms.com/logo.png",
            description:
              "Leading pineapple producer in Ghana specializing in premium quality through sustainable farming practices.",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Marfokrom",
              addressRegion: "Eastern Region",
              addressCountry: "GH",
            },
            areaServed: "Global",
          foundingDate: "2017",
            knowsAbout: [
              "Pineapple Farming",
              "Sustainable Agriculture",
              "Agricultural Export",
            ],
            sameAs: [
              // Add your social media profiles here when available
              // "https://www.facebook.com/mennaifarms",
              // "https://www.twitter.com/mennaifarms",
              // "https://www.instagram.com/mennaifarms",
            ],
          }}
        />
        {children}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                var script = document.createElement('script');
                script.src = 'https://readdy.ai/api/public/assistant/widget?projectId=0361743c-d6ab-494c-8439-5a780936c064';
                script.setAttribute('mode', 'hybrid');
                script.setAttribute('voice-show-transcript', 'true');
                script.setAttribute('theme', 'light');
                script.setAttribute('size', 'compact');
                script.setAttribute('accent-color', '#16a34a');
                script.setAttribute('button-base-color', '#15803d');
                script.setAttribute('button-accent-color', '#ffffff');
                script.defer = true;
                document.body.appendChild(script);
              })();
            `,
          }}
        />
      </body>
    </html>
  );
}
