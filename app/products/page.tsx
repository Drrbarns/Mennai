import type { Metadata } from "next";
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ProductsHero from './ProductsHero';
import PremiumVarieties from './PremiumVarieties';

export const metadata: Metadata = {
  title: "Our Products - Premium Pineapple Varieties",
  description: "Explore Mennai Farms' premium pineapple varieties. We offer the finest quality pineapples including MD2, Smooth Cayenne, and other premium varieties. Perfect for export, retail, and processing. Contact us for wholesale inquiries.",
  keywords: [
    "premium pineapples",
    "MD2 pineapple",
    "Smooth Cayenne pineapple",
    "pineapple varieties Ghana",
    "wholesale pineapples",
    "export quality pineapples",
    "fresh pineapples Ghana",
    "pineapple supplier"
  ],
  openGraph: {
    title: "Premium Pineapple Varieties - Mennai Farms",
    description: "Discover our premium pineapple varieties including MD2 and Smooth Cayenne. Export quality pineapples from Ghana.",
    url: "https://mennai-farms.com/products",
  },
  alternates: {
    canonical: "https://mennai-farms.com/products",
  },
};

export default function ProductsPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <ProductsHero />
        <PremiumVarieties />
      </main>
      <Footer />
    </div>
  );
}
