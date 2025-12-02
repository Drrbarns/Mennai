
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ProductsHero from './ProductsHero';
import PremiumVarieties from './PremiumVarieties';

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
