import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import heroBg from '@/assets/hero-bg.jpg';

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Hero Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: `url(${heroBg})`,
          transform: `translateY(${scrollY * 0.5}px)`
        }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-hero" />
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="space-y-6 animate-fade-in">
          {/* Name */}
          <h1 className="font-heading text-6xl md:text-8xl font-bold tracking-wider">
            <span className="hero-title">NILAM</span>
            <br />
            <span className="hero-title">ABDUL</span>
          </h1>
          
          {/* Subtitle */}
          <div className="space-y-2 animate-fade-up" style={{ animationDelay: '0.3s' }}>
            <p className="text-xl md:text-2xl text-foreground/90 font-light tracking-wide">
              Video Vixen
            </p>
            <div className="w-24 h-px bg-gold mx-auto" />
            <p className="text-xl md:text-2xl text-foreground/90 font-light tracking-wide">
              Commercial Model
            </p>
            <div className="w-24 h-px bg-gold mx-auto" />
            <p className="text-xl md:text-2xl text-foreground/90 font-light tracking-wide">
              Creative Talent
            </p>
          </div>
          
          {/* CTA Button */}
          <div className="pt-8 animate-fade-up" style={{ animationDelay: '0.6s' }}>
            <Button 
              onClick={scrollToContact}
              variant="outline"
              size="lg"
              className="border-gold text-gold hover:bg-gold hover:text-background transition-luxury text-lg px-8 py-6 rounded-none font-semibold tracking-wide animate-glow-pulse"
            >
              Let's Work Together
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float">
        <div className="w-6 h-10 border-2 border-gold rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gold rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;