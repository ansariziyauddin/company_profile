'use client';

export function ScrollToTopButton() {
  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="self-end mt-6 md:mt-0 w-10 h-10 rounded-xl bg-white/5 border border-white/10
                 flex items-center justify-center
                 hover:bg-accent1/20 hover:border-accent1/30
                 hover:-translate-y-1 transition-all duration-300"
      aria-label="Back to top"
    >
      {/* Arrow up icon — inline SVG avoids a client import just for lucide */}
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white/60">
        <polyline points="18 15 12 9 6 15" />
      </svg>
    </button>
  );
}
