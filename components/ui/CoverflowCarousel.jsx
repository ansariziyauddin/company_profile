'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

export function CoverflowCarousel({ images, title }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const prevSlide = () => {
    setActiveIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setActiveIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const getTransformParams = (offset) => {
    const absOffset = Math.abs(offset);
    const direction = Math.sign(offset);

    // If there's an active dragging or swipe, this logic would adapt, 
    // but for simple clicks, predefined discrete points are perfect.

    if (absOffset === 0) {
      return { x: '0%', scale: 1, zIndex: 30, opacity: 1, filter: 'blur(0px)' };
    } else if (absOffset === 1) {
      return { x: `${direction * 60}%`, scale: 0.8, zIndex: 20, opacity: 0.8, filter: 'blur(1px)' };
    } else if (absOffset === 2) {
      return { x: `${direction * 110}%`, scale: 0.6, zIndex: 10, opacity: 0.5, filter: 'blur(2px)' };
    } else {
      return { x: `${direction * 150}%`, scale: 0.4, zIndex: 0, opacity: 0, filter: 'blur(4px)' };
    }
  };

  if (!images || images.length === 0) return null;

  return (
    <div className="w-full relative py-10 flex flex-col items-center overflow-hidden overscroll-none px-4 md:px-0">
      
      {/* 3D Gallery Area */}
      <div className="relative w-full max-w-sm md:max-w-xl aspect-[4/3] md:aspect-video flex justify-center items-center perspective-[1000px]">
        <AnimatePresence initial={false}>
          {images.map((src, index) => {
            
            // Calculate offset ensuring correct wrapping for infinite carousel feel
            let offset = index - activeIndex;
            const limit = Math.floor(images.length / 2);
            
            // Normalize offset for continuous infinite loop visually
            if (offset > limit) offset -= images.length;
            if (offset < -limit) offset += images.length;
            
            const { x, scale, zIndex, opacity, filter } = getTransformParams(offset);

            // Do not render items completely out of bound to save perf
            if (Math.abs(offset) > 2 && images.length > 5) return null;

            return (
              <motion.div
                key={index}
                className="absolute w-[75vw] sm:w-[50vw] md:w-[45vw] lg:w-[35vw] aspect-square md:aspect-[4/3] rounded-[1.5rem] md:rounded-[2rem] overflow-hidden cursor-pointer"
                initial={false}
                animate={{
                  x,
                  scale,
                  zIndex,
                  opacity,
                  filter
                }}
                transition={{
                  duration: 0.5,
                  ease: [0.32, 0.72, 0, 1] // Apple-like spring easing
                }}
                onClick={() => {
                  if (offset !== 0) {
                     setActiveIndex(index);
                  }
                }}
                style={{
                  originX: 0.5,
                  originY: 0.5
                }}
              >
                <Image 
                  src={src} 
                  alt={`${title} screen ${index + 1}`}
                  fill
                  className="object-contain pointer-events-none drop-shadow-2xl"
                  sizes="(max-width: 768px) 75vw, 50vw"
                  priority={Math.abs(offset) <= 1}
                />
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      {/* Primary Action Controls */}
      {images.length > 1 && (
        <div className="mt-4 md:mt-6 flex items-center justify-center gap-4 relative z-40">
          <button 
            onClick={prevSlide}
            className="px-6 py-2 rounded-full bg-accent1 text-white font-semibold shadow-md hover:shadow-lg 
                       transition-all active:scale-95 hover:bg-opacity-90 min-w-[100px]"
          >
            Previous
          </button>
          
          <button 
            onClick={nextSlide}
            className="px-6 py-2 rounded-full bg-accent1 text-white font-semibold shadow-md hover:shadow-lg 
                       transition-all active:scale-95 hover:bg-opacity-90 min-w-[100px]"
          >
            Next
          </button>
        </div>
      )}
      
      {/* Dot Indicators */}
      {images.length > 1 && (
        <div className="mt-6 flex gap-2 z-40 relative">
          {images.map((_, i) => (
             <button 
                key={i}
                onClick={() => setActiveIndex(i)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  activeIndex === i ? 'bg-accent1 w-6' : 'bg-gray-400 hover:bg-accent1/50 w-2'
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
          ))}
        </div>
      )}

    </div>
  );
}
