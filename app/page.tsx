
import Header from '../components/Header';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import WhyChooseUs from '../components/WhyChooseUs';
import AboutSection from '../components/AboutSection';
import ProductShowcase from '../components/ProductShowcase';
import FarmSection from '../components/FarmSection';
import SustainabilitySection from '../components/SustainabilitySection';
import ContactSection from '../components/ContactSection';

export default function Home() {
  return (
    <div className="min-h-screen">
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
