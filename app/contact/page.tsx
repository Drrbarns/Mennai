import type { Metadata } from "next";
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ContactHero from './ContactHero';
import ContactInfo from './ContactInfo';
import ContactForm from './ContactForm';

export const metadata: Metadata = {
  title: "Contact Us - Get in Touch",
  description: "Contact Mennai Farms for inquiries about our premium pineapples, wholesale orders, partnerships, or farm visits. Located in Marfokrom, Ayensuano District, Eastern Region, Ghana. We're here to help with all your pineapple needs.",
  keywords: [
    "contact pineapple farm Ghana",
    "pineapple wholesale inquiry",
    "Mennai Farms contact",
    "pineapple export inquiry",
    "farm visit Ghana",
    "pineapple supplier contact"
  ],
  openGraph: {
    title: "Contact Mennai Farms - Get in Touch",
    description: "Get in touch with Mennai Farms for wholesale orders, partnerships, or farm visits. Located in Marfokrom, Ayensuano District, Ghana.",
    url: "https://mennai-farms.com/contact",
  },
  alternates: {
    canonical: "https://mennai-farms.com/contact",
  },
};

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
