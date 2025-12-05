import type { Metadata } from "next";
import Header from '../components/Header';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import WhyChooseUs from '../components/WhyChooseUs';
import AboutSection from '../components/AboutSection';
import ProductShowcase from '../components/ProductShowcase';
import FarmSection from '../components/FarmSection';
import SustainabilitySection from '../components/SustainabilitySection';
import ContactSection from '../components/ContactSection';
import StructuredData from '../components/StructuredData';

export const metadata: Metadata = {
  title: "Home - Premium Pineapples from Ghana",
  description: "Discover Mennai Farms, Ghana's premier pineapple producer. We cultivate exceptional pineapples through sustainable farming practices in Marfokrom, Ayensuano District. Quality that reaches from our fields to your table.",
  keywords: [
    "Mennai Farms",
    "premium pineapples Ghana",
    "pineapple farm Ghana",
    "sustainable farming Ghana",
    "Ghana pineapple export",
    "MD2 pineapple",
    "Smooth Cayenne pineapple",
    "Sugarloaf pineapple",
    "Marfokrom pineapple farm",
    "Ayensuano District farming",
    "fresh pineapples",
    "wholesale pineapples",
    "pineapple supplier Ghana",
    "African pineapple producer",
    "sustainable agriculture Ghana"
  ],
  authors: [{ name: "Mennai Farms" }],
  openGraph: {
    title: "Mennai Farms - Premium Pineapples from Ghana | Sustainable Farming",
    description: "Discover Ghana's premier pineapple producer. Sustainable farming, premium quality, global reach. Located in Marfokrom, Ayensuano District.",
    url: "https://mennai-farms.com",
    siteName: "Mennai Farms",
    images: [
      {
        url: "https://mennai-farms.com/logo.png",
        width: 1200,
        height: 630,
        alt: "Mennai Farms - Premium Pineapples from Ghana",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mennai Farms - Premium Pineapples from Ghana",
    description: "Ghana's premier pineapple producer. Sustainable farming, premium quality, global reach.",
    images: ["https://mennai-farms.com/logo.png"],
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
  alternates: {
    canonical: "https://mennai-farms.com",
  },
};

export default function Home() {
  return (
    <div className="min-h-screen">
      <StructuredData
        data={{
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "Mennai Farms",
          url: "https://mennai-farms.com",
          potentialAction: {
            "@type": "SearchAction",
            target: "https://mennai-farms.com/search?q={search_term_string}",
            "query-input": "required name=search_term_string",
          },
        }}
      />
      <StructuredData
        data={{
          "@context": "https://schema.org",
          "@type": "Product",
          name: "Premium Pineapples",
          description:
            "Premium quality pineapples grown through sustainable farming practices in Ghana",
          brand: {
            "@type": "Brand",
            name: "Mennai Farms",
          },
          category: "Fresh Produce",
          offers: {
            "@type": "Offer",
            availability: "https://schema.org/InStock",
            priceCurrency: "USD",
          },
        }}
      />
      <Header />
      <main>
        <HeroSection />
        <WhyChooseUs />
        <AboutSection />
        <ProductShowcase />
        <FarmSection />
        <SustainabilitySection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
