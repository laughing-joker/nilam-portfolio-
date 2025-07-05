import { useEffect, useRef, useState } from "react";
import img1 from "@/assets/1.jpeg";
import img2 from "@/assets/2.jpeg";
import img3 from "@/assets/3.jpeg";
import img4 from "@/assets/4.png";
import img5 from "@/assets/5.jpeg";
import img6 from "@/assets/6.jpeg";

const Gallery = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  const galleryImages = [img1, img2, img3, img4, img5, img6];

  return (
    <section ref={sectionRef} id="gallery" className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">
            Visual <span className="text-gold">Highlights</span>
          </h2>
          <div className="w-24 h-px bg-gold mx-auto mb-6" />
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            A curated collection showcasing the breadth and versatility of my
            work
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[250px] sm:auto-rows-[200px]">
          {galleryImages.map((src, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-lg cursor-pointer ${
                index === 0 || index === 4 ? "lg:col-span-2" : "col-span-1"
              } transition-all duration-1000 ${
                isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
              onClick={() => setSelectedImage(src)}
            >
              <img
                src={src}
                alt={`Gallery image ${index + 1}`}
                className="w-full h-full object-contain object-center group-hover:scale-110 transition-luxury"
                style={{ objectPosition: "center center" }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-background/95 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative w-full h-full max-w-none max-h-none flex items-center justify-center">
            <img
              src={selectedImage}
              alt="Gallery preview"
              className="max-w-full max-h-full object-contain rounded-lg shadow-luxury"
              style={{ maxHeight: "100vh", maxWidth: "100vw" }}
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 w-10 h-10 bg-background/80 backdrop-blur-sm rounded-full flex items-center justify-center text-gold hover:bg-gold hover:text-background transition-luxury"
              aria-label="Close"
            >
              ×
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
