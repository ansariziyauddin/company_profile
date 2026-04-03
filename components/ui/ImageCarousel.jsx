'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export function ImageCarousel({ images, title }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  if (!images || images.length === 0) return null;

  return (
    <div className="relative w-full max-w-4xl mx-auto aspect-square md:aspect-video rounded-3xl overflow-hidden bg-gray-50/20 group">
      
      <Image 
        src={images[currentIndex]} 
        alt={`${title} screenshot ${currentIndex + 1}`}
        fill
        className="object-contain p-4 md:p-8 transition-opacity duration-300 ease-in-out"
        sizes="(max-width: 1024px) 100vw, 1024px"
        priority
      />

      {images.length > 1 && (
        <>
          <button 
            onClick={prevSlide}
            className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 p-2 md:p-3 rounded-full bg-black/60 text-white backdrop-blur-sm opacity-100 transition-all z-10 hover:bg-black hover:scale-110"
            aria-label="Previous image"
          >
            <ChevronLeft size={24} />
          </button>
          
          <button 
            onClick={nextSlide}
            className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 p-2 md:p-3 rounded-full bg-black/60 text-white backdrop-blur-sm opacity-100 transition-all z-10 hover:bg-black hover:scale-110"
            aria-label="Next image"
          >
            <ChevronRight size={24} />
          </button>

          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10 bg-black/40 backdrop-blur-md px-3 py-2 rounded-full">
            {images.map((_, i) => (
                <button 
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`w-2.5 h-2.5 rounded-full transition-all ${
                  currentIndex === i ? 'bg-white w-6' : 'bg-white/50 hover:bg-white/80'
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
