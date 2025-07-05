import { useEffect, useRef, useState } from 'react';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import crdbCommercial from '@/assets/crdb-commercial.jpg';
import musicVideo from '@/assets/music-video.jpg';
import gallery1 from '@/assets/gallery-1.jpg';

const FeaturedWork = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      title: "CRDB Bank Commercial",
      year: "2024",
      role: "Lead Model",
      description: "Premium financial services campaign",
      image: crdbCommercial,
      delay: 0
    },
    {
      title: "Forever - Bando MC ft. Roma & Maua Sama",
      year: "2025",
      role: "Video Vixen",
      description: "High-energy music video collaboration",
      image: musicVideo,
      delay: 200
    },
    {
      title: "Jay Melody Music Video",
      year: "2024",
      role: "Featured Artist",
      description: "Creative visual storytelling",
      image: gallery1,
      delay: 400
    }
  ];

  return (
    <section 
      ref={sectionRef}
      id="work" 
      className="py-20 px-4 bg-background"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="text-gold">Appearances</span>
          </h2>
          <div className="w-24 h-px bg-gold mx-auto mb-6" />
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Selected highlights from recent collaborations with leading artists and brands
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
              }`}
              style={{ transitionDelay: `${project.delay}ms` }}
            >
              <Card className="group bg-card border-border hover:border-gold transition-luxury hover-lift overflow-hidden">
                <div className="relative overflow-hidden aspect-[4/3]">
                  <img 
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-center group-hover:scale-110 transition-luxury"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-luxury" />
                  <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-luxury transform translate-y-4 group-hover:translate-y-0">
                    <div className="text-gold font-semibold">{project.role}</div>
                    <div className="text-foreground/90 text-sm">{project.description}</div>
                  </div>
                </div>
                <CardHeader className="pb-2">
                  <h3 className="font-heading text-xl font-semibold group-hover:text-gold transition-luxury">
                    {project.title}
                  </h3>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center">
                    <span className="text-foreground/60 text-sm">{project.year}</span>
                    <div className="w-8 h-px bg-gold/50" />
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedWork;