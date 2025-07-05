import { useEffect, useRef, useState } from "react";
import Portrait from "@/assets/Potrait.png";

const About = () => {
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

  return (
    <section
      ref={sectionRef}
      id="about"
      className="py-20 px-4 bg-gradient-dark"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">
            About <span className="text-gold">Nilam</span>
          </h2>
          <div className="w-24 h-px bg-gold mx-auto" />
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Portrait */}
          <div
            className={`transition-all duration-1000 delay-300 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-10"
            }`}
          >
            <div className="relative group w-full max-w-md lg:max-w-sm mx-auto">
              <div className="absolute inset-0 bg-gradient-gold rounded-lg transform rotate-3 group-hover:rotate-6 transition-luxury" />
              <img
                src={Portrait}
                alt="Nilam Abdul"
                className="relative rounded-lg shadow-luxury transform group-hover:scale-105 transition-luxury w-full h-[500px] lg:h-[600px] object-cover object-center"
              />
            </div>
          </div>

          {/* Text Content */}
          <div
            className={`transition-all duration-1000 delay-500 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-10"
            }`}
          >
            <div className="space-y-6">
              <div className="relative">
                <span className="absolute -left-8 -top-4 text-6xl font-heading text-gold/30">
                  "
                </span>
                <p className="text-lg leading-relaxed text-foreground/90 font-body pl-4">
                  <span className="text-5xl float-left font-heading text-gold leading-none mr-2">
                    W
                  </span>
                  ith a commanding presence and natural charisma, I bring
                  stories to life through the lens. As a professional video
                  vixen and commercial model from Tanzania, I specialize in
                  creating captivating visual narratives that resonate with
                  audiences.
                </p>
              </div>

              <p className="text-lg leading-relaxed text-foreground/80 font-body">
                My journey in the entertainment industry has been marked by
                collaborations with renowned artists and leading brands, where
                I've honed my craft in front of the camera. Every project is an
                opportunity to showcase versatility, professionalism, and
                creative excellence.
              </p>

              <p className="text-lg leading-relaxed text-foreground/80 font-body">
                From high-energy music videos to sophisticated commercial
                campaigns, I bring dedication, creativity, and an unwavering
                commitment to delivering exceptional results that exceed
                expectations.
              </p>

              {/* Signature */}
              <div className="pt-6">
                <div className="font-heading text-2xl text-gold">
                  Nilam Abdul
                </div>
                <div className="text-sm text-foreground/60 tracking-wider">
                  Creative Professional
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
