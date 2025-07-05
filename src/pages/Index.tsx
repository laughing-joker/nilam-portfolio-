import { useEffect } from 'react';
import Hero from '@/components/Hero';
import About from '@/components/About';
import FeaturedWork from '@/components/FeaturedWork';
import Skills from '@/components/Skills';
import Gallery from '@/components/Gallery';
import Contact from '@/components/Contact';
import Navigation from '@/components/Navigation';

const Index = () => {
  useEffect(() => {
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';
    
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <div className="relative">
      {/* Navigation */}
      <Navigation />
      
      {/* Hero Section */}
      <div id="hero">
        <Hero />
      </div>
      
      {/* About Section */}
      <About />
      
      {/* Featured Work Section */}
      <FeaturedWork />
      
      {/* Skills Section */}
      <Skills />
      
      {/* Gallery Section */}
      <Gallery />
      
      {/* Contact Section */}
      <Contact />
      
      {/* Footer */}
      <footer className="bg-background border-t border-border/50 py-8 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="font-heading text-2xl font-bold text-gold mb-2">Nilam Abdul</div>
          <p className="text-foreground/60 text-sm">
            Professional Video Vixen & Commercial Model
          </p>
          <div className="mt-4 text-xs text-foreground/40">
            © 2024 Nilam Abdul. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;