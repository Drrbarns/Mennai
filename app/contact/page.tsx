
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ContactHero from './ContactHero';
import ContactInfo from './ContactInfo';
import ContactForm from './ContactForm';

export default function ContactPage() {
  return (
    <main>
      <Header />
      <ContactHero />
      <ContactInfo />
      <ContactForm />
      <Footer />
    </main>
  );
}
