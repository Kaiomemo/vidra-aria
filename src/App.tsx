import { useState } from 'react';
import { AboutSection } from './components/AboutSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { GallerySection } from './components/GallerySection';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { ServicesSection } from './components/ServicesSection';

export default function App() {
  const [selectedService, setSelectedService] = useState<string>('');

  const handleSelectService = (serviceTitle: string) => {
    setSelectedService(serviceTitle);
    const contactEl = document.getElementById('contato');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[hsl(var(--bg-canvas))] text-[hsl(var(--text-primary))]">
      <Header />
      <main>
        <HeroSection />
        <ServicesSection onSelectService={handleSelectService} />
        <GallerySection />
        <AboutSection />
        <ContactSection selectedService={selectedService} />
      </main>
      <Footer />
    </div>
  );
}
