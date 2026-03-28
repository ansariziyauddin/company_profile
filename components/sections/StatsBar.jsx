'use client';

import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

function useCountUp(end, duration = 2000) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) setStarted(true);
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    let current = 0;
    const step = end / (duration / 16);
    const timer = setInterval(() => {
      current += step;
      if (current >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [started, end, duration]);

  return { count, ref };
}

const STATS = [
  { value: 14, suffix: '+', label: 'Years Experience' },
  { value: 9, suffix: '+', label: 'Projects Delivered' },
  { value: 4, suffix: '+', label: 'Industries Served' },
];

export function StatsBar({ dark = false }) {
  return (
    <motion.div
      className={`section-padding ${dark ? '' : ''}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6 }}
    >
      <div className="container-main">
        <div
          className={`flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-0
                     rounded-2xl py-10 px-8
                     ${dark
                       ? 'bg-white/5 border border-white/10'
                       : 'glass shadow-glass'
                     }`}
        >
          {STATS.map((stat, i) => {
            const { count, ref } = useCountUp(stat.value);
            return (
              <div key={stat.label} className="flex items-center">
                <div className="text-center px-8 sm:px-12" ref={ref}>
                  <span
                    className={`block text-4xl md:text-5xl font-bold mb-1
                               ${dark ? 'gradient-text' : 'gradient-text'}`}
                  >
                    {count}{stat.suffix}
                  </span>
                  <span
                    className={`text-sm font-medium
                               ${dark ? 'text-white/50' : 'text-text-muted'}`}
                  >
                    {stat.label}
                  </span>
                </div>
                {i < STATS.length - 1 && (
                  <div
                    className={`hidden sm:block w-px h-16
                               ${dark ? 'bg-white/10' : 'bg-accent3/20'}`}
                  />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
}
