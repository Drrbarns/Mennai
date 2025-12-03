import type { Metadata } from "next";
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import AboutHero from './AboutHero';
import CompanyHistory from './CompanyHistory';
import MissionVision from './MissionVision';
import SustainabilityPractices from './SustainabilityPractices';

export const metadata: Metadata = {
  title: "About Us - Our Story & Mission",
  description: "Learn about Mennai Farms' journey from humble beginnings in 2009 to becoming a leading pineapple producer in Ghana. Discover our mission, vision, values, and commitment to sustainable farming practices in Marfokrom, Ayensuano District.",
  keywords: [
    "Mennai Farms history",
    "Ghana pineapple farm story",
    "sustainable farming mission",
    "organic farming Ghana",
    "pineapple farm team",
    "agricultural company Ghana"
  ],
  openGraph: {
    title: "About Mennai Farms - Our Story & Mission",
    description: "Discover our journey from 2009 to becoming Ghana's leading pineapple producer. Learn about our sustainable farming practices and commitment to quality.",
    url: "https://mennai-farms.com/about",
  },
  alternates: {
    canonical: "https://mennai-farms.com/about",
  },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <AboutHero />
        <MissionVision />
        <SustainabilityPractices />
        <CompanyHistory />
      </main>
      <Footer />
    </div>
  );
}
