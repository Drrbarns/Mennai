import type { Metadata } from "next";
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import GalleryHero from './GalleryHero';
import FarmPhotos from './FarmPhotos';

export const metadata: Metadata = {
  title: "Gallery - Farm Photos & Visual Tour",
  description: "Take a visual tour of Mennai Farms through our photo gallery. See our pineapple plantation, farming operations, harvest activities, and beautiful landscapes in Marfokrom, Ayensuano District, Ghana. Experience the beauty of sustainable pineapple farming.",
  keywords: [
    "pineapple farm photos",
    "Ghana farm gallery",
    "pineapple plantation images",
    "farm tour photos",
    "agricultural photography Ghana",
    "pineapple harvest photos",
    "sustainable farming images"
  ],
  openGraph: {
    title: "Farm Gallery - Mennai Farms Visual Tour",
    description: "Explore our pineapple farm through stunning photos. See our plantation, operations, and beautiful landscapes in Ghana.",
    url: "https://mennai-farms.com/gallery",
  },
  alternates: {
    canonical: "https://mennai-farms.com/gallery",
  },
};

export default function GalleryPage() {
  return (
    <main>
      <Header />
      <GalleryHero />
      <FarmPhotos />
      <Footer />
    </main>
  );
}
