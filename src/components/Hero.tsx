import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import heroVideo from "@/assets/heroVideo.mp4";

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      const handleLoadedMetadata = () => {
        if (video.duration > 32) {
          video.currentTime = 30;
        }
        video.play();
      };

      const handleTimeUpdate = () => {
        if (video.currentTime >= 32) {
          video.currentTime = 30;
        }
      };

      video.addEventListener("loadedmetadata", handleLoadedMetadata);
      video.addEventListener("timeupdate", handleTimeUpdate);

      return () => {
        video.removeEventListener("loadedmetadata", handleLoadedMetadata);
        video.removeEventListener("timeupdate", handleTimeUpdate);
      };
    }
  }, []);

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Hero Video Background */}
      <div className="absolute inset-0 overflow-hidden">
        <video
          ref={videoRef}
          src={heroVideo}
          autoPlay
          muted
          playsInline
          className="w-full h-full object-cover object-center"
          style={{ transform: `translateY(${scrollY * 0.5}px)` }}
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-hero" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="space-y-6 animate-fade-in">
          <h1 className="font-heading text-6xl md:text-8xl font-bold tracking-wider">
            <span className="hero-title">NILAM</span>

            <span className="hero-title"> ABDUL</span>
          </h1>

          {/* Subtitle */}
          <div
            className="flex flex-wrap justify-center items-center gap-4 animate-fade-up"
            style={{ animationDelay: "0.3s" }}
          >
            <span className="text-lg md:text-2xl text-gold font-medium tracking-wide px-4 py-2 rounded border border-gold/30 bg-black/20 backdrop-brightness-110 shadow-lg">
              Video Vixen
            </span>

            <span className="text-gold text-2xl">|</span>

            <span className="text-lg md:text-2xl text-gold font-medium tracking-wide px-4 py-2 rounded border border-gold/30 bg-black/20 backdrop-brightness-110 shadow-lg">
              Commercial Model
            </span>

            <span className="text-gold text-2xl">|</span>

            <span className="text-lg md:text-2xl text-gold font-medium tracking-wide px-4 py-2 rounded border border-gold/30 bg-black/20 backdrop-brightness-110 shadow-lg">
              Creative Talent
            </span>
          </div>

          {/* CTA Button */}
          <div
            className="pt-8 animate-fade-up"
            style={{ animationDelay: "0.6s" }}
          >
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
