import { useEffect, useRef, useState } from 'react';
import gallery1 from '@/assets/gallery-1.jpg';
import gallery2 from '@/assets/gallery-2.jpg';
import gallery3 from '@/assets/gallery-3.jpg';
import gallery4 from '@/assets/gallery-4.jpg';
import crdbCommercial from '@/assets/crdb-commercial.jpg';
import musicVideo from '@/assets/music-video.jpg';

const Gallery = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
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

  const galleryImages = [
    { src: gallery1, title: "Commercial Shoot", year: "2024" },
    { src: gallery2, title: "Portrait Session", year: "2024" },
    { src: gallery3, title: "Music Video", year: "2024" },
    { src: crdbCommercial, title: "CRDB Campaign", year: "2024" },
    { src: musicVideo, title: "Artist Collaboration", year: "2025" },
    { src: gallery4, title: "Fashion Editorial", year: "2024" }
  ];

  return (
    <section 
      ref={sectionRef}
      id="gallery" 
      className="py-20 px-4 bg-background"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">
            Visual <span className="text-gold">Highlights</span>
          </h2>
          <div className="w-24 h-px bg-gold mx-auto mb-6" />
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            A curated collection showcasing the breadth and versatility of my work
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[250px] sm:auto-rows-[200px]">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-lg cursor-pointer ${
                index === 0 || index === 4 ? 'lg:col-span-2' : 'col-span-1'
              } transition-all duration-1000 ${
                isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
              onClick={() => setSelectedImage(image.src)}
            >
              <img 
                src={image.src}
                alt={image.title}
                className="w-full h-full object-cover object-center group-hover:scale-110 transition-luxury"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-luxury" />
              <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-luxury transform translate-y-4 group-hover:translate-y-0">
                <h3 className="font-heading text-lg font-semibold text-gold mb-1">
                  {image.title}
                </h3>
                <p className="text-foreground/80 text-sm">{image.year}</p>
              </div>
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
          <div className="relative max-w-4xl max-h-full">
            <img 
              src={selectedImage}
              alt="Gallery preview"
              className="max-w-full max-h-full object-contain rounded-lg shadow-luxury"
            />
            <button 
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 w-10 h-10 bg-background/80 backdrop-blur-sm rounded-full flex items-center justify-center text-gold hover:bg-gold hover:text-background transition-luxury"
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