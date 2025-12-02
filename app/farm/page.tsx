import type { Metadata } from "next";
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import FarmHero from './FarmHero';
import FarmStory from './FarmStory';
import MissionVisionValues from './MissionVisionValues';
import SustainabilityCommitment from './SustainabilityCommitment';
import FarmTeam from './FarmTeam';
import CommunityImpact from './CommunityImpact';
import PrimeLocation from './PrimeLocation';
import FarmScale from './FarmScale';
import FarmingMethods from './FarmingMethods';
import FarmInfrastructure from './FarmInfrastructure';
import FarmGallery from './FarmGallery';

export const metadata: Metadata = {
  title: "Our Farm - Location, Scale & Operations",
  description: "Explore Mennai Farms' 500+ acre pineapple plantation in Marfokrom, Ayensuano District, Eastern Region, Ghana. Learn about our farming methods, infrastructure, team, and community impact. Discover our sustainable farming practices and modern agricultural techniques.",
  keywords: [
    "pineapple farm location Ghana",
    "Marfokrom farm",
    "Ayensuano District farming",
    "pineapple plantation Ghana",
    "farm infrastructure",
    "sustainable farming methods",
    "agricultural operations Ghana",
    "pineapple farm scale",
    "community farming Ghana"
  ],
  openGraph: {
    title: "Our Farm - Mennai Farms Location & Operations",
    description: "Explore our 500+ acre pineapple plantation in Marfokrom, Ayensuano District. Learn about our sustainable farming methods and operations.",
    url: "https://mennai-farms.com/farm",
  },
  alternates: {
    canonical: "https://mennai-farms.com/farm",
  },
};

export default function FarmPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <FarmHero />
        <PrimeLocation />
        <FarmStory />
        <FarmScale />
        <MissionVisionValues />
        <FarmingMethods />
        <SustainabilityCommitment />
        <FarmInfrastructure />
        <FarmTeam />
        <CommunityImpact />
        <FarmGallery />
      </main>
      <Footer />
    </div>
  );
}
