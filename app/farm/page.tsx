
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
