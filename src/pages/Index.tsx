
import React, { useEffect } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Benefits from '../components/Benefits';
import Founders from '../components/Founders';
import ContactCTA from '../components/ContactCTA';
import Footer from '../components/Footer';

const Index = () => {
  useEffect(() => {
    // Scroll to top when page loads
    window.scrollTo(0, 0);
    
    // Update page title
    document.title = 'M&D Office Services | Mehr Freiraum, mehr Effizienz';
    
    // Handle anchor links when navigating from other pages
    const handleAnchorLinks = () => {
      const hash = window.location.hash;
      if (hash) {
        // Remove the # character
        const id = hash.substring(1);
        const element = document.getElementById(id);
        if (element) {
          // Add a slight delay to ensure everything is loaded
          setTimeout(() => {
            element.scrollIntoView({ behavior: 'smooth' });
          }, 100);
        }
      }
    };
    
    handleAnchorLinks();
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <section id="leistungen">
          <Services />
        </section>
        <section id="vorteile">
          <Benefits />
        </section>
        <section id="ueber-uns">
          <Founders />
        </section>
        <ContactCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
