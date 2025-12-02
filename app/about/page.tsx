
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import AboutHero from './AboutHero';
import CompanyHistory from './CompanyHistory';
import MissionVision from './MissionVision';
import SustainabilityPractices from './SustainabilityPractices';
import TeamSection from './TeamSection';

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <AboutHero />
        <MissionVision />
        <TeamSection />
        <SustainabilityPractices />
        <CompanyHistory />
      </main>
      <Footer />
    </div>
  );
}
