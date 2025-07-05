import { useEffect, useRef, useState } from 'react';
import { Camera, MessageSquare, Youtube, Phone } from 'lucide-react';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const skills = [
    {
      icon: Camera,
      title: "On-Camera Confidence",
      description: "Natural presence and charisma in front of the lens",
      delay: 0
    },
    {
      icon: Youtube,
      title: "Photogenic Presence",
      description: "Innate ability to capture compelling visuals",
      delay: 100
    },
    {
      icon: MessageSquare,
      title: "Communication & Body Language",
      description: "Expressive storytelling through movement",
      delay: 200
    },
    {
      icon: Camera,
      title: "Takes Direction Well",
      description: "Collaborative approach with creative teams",
      delay: 300
    },
    {
      icon: Youtube,
      title: "Creative & Adaptable",
      description: "Versatile performance across various concepts",
      delay: 400
    },
    {
      icon: Phone,
      title: "Punctual & Professional",
      description: "Reliable and dedicated to every project",
      delay: 500
    }
  ];

  return (
    <section 
      ref={sectionRef}
      id="skills" 
      className="py-20 px-4 bg-gradient-dark"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">
            Skills & <span className="text-gold">Strengths</span>
          </h2>
          <div className="w-24 h-px bg-gold mx-auto mb-6" />
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Core competencies that drive exceptional performance in every collaboration
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => {
            const IconComponent = skill.icon;
            return (
              <div
                key={index}
                className={`group transition-all duration-1000 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
                }`}
                style={{ transitionDelay: `${skill.delay}ms` }}
              >
                <div className="text-center p-8 rounded-lg bg-card/50 backdrop-blur-sm border border-border group-hover:border-gold transition-luxury hover-lift">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gold/10 rounded-full mb-6 group-hover:bg-gold/20 transition-luxury">
                    <IconComponent className="w-8 h-8 text-gold" />
                  </div>
                  <h3 className="font-heading text-xl font-semibold mb-3 group-hover:text-gold transition-luxury">
                    {skill.title}
                  </h3>
                  <p className="text-foreground/70 leading-relaxed">
                    {skill.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;