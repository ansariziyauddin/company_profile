'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/#projects', label: 'Our Work' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeHash, setActiveHash] = useState('');
  const pathname = usePathname();

  const isLinkActive = (href) => {
    if (href === '/') return pathname === '/' && activeHash === '';
    if (href.includes('#')) return pathname === '/' && activeHash === '#' + href.split('#')[1];
    return pathname === href;
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setMenuOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  // Close mobile menu on route change
  useEffect(() => {
    setMenuOpen(false);
    setActiveHash(window.location.hash);
  }, [pathname]);

  useEffect(() => {
    const handleHash = () => setActiveHash(window.location.hash);
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white/95 backdrop-blur-md border-b ${
          scrolled ? 'border-gray-200 shadow-sm py-0' : 'border-transparent py-1'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <div className="container-main h-20 flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-3 group"
            id="nav-logo"
          >
            <span
              className="w-10 h-10 rounded-xl bg-accent1 flex items-center justify-center text-white font-bold text-sm transition-transform duration-300 group-hover:scale-105"
            >
              IT
            </span>
            <span className="font-semibold text-base hidden sm:block transition-colors duration-300 text-text-dark group-hover:text-accent1">
              Innovance Tech AI
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                id={`nav-${link.label.toLowerCase()}`}
                className={`relative px-4 py-2 text-sm font-medium rounded-lg
                           transition-all duration-300 ${
                  isLinkActive(link.href)
                    ? 'text-accent1 bg-accent1/5'
                    : 'text-text-muted hover:text-text-dark hover:bg-gray-50'
                }`}
                onClick={() => {
                  if (link.href.includes('#')) {
                    setActiveHash('#' + link.href.split('#')[1]);
                  } else {
                    setActiveHash('');
                  }
                }}
              >
                {link.label}
                {isLinkActive(link.href) && (
                  <motion.div
                    className="absolute bottom-0 left-3 right-3 h-0.5 rounded-full bg-accent1"
                    layoutId="activeNav"
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                )}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <Link
            href="/contact"
            id="nav-cta"
            className="hidden md:inline-flex items-center px-5 py-2.5 text-sm font-semibold rounded-xl
                       transition-all duration-300 text-white bg-accent1 hover:bg-accent2 shadow-sm hover:shadow-md"
          >
            Let&apos;s Build
          </Link>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden relative w-10 h-10 flex items-center justify-center
                       rounded-xl transition-colors hover:bg-gray-100 text-text-dark"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
            id="nav-hamburger"
          >
            {menuOpen ? (
              <X size={22} />
            ) : (
              <Menu size={22} />
            )}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Overlay */}
            <motion.div
              className="fixed inset-0 bg-base/20 backdrop-blur-sm z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setMenuOpen(false)}
            />

            {/* Panel */}
            <motion.div
              className="fixed right-0 top-0 h-full w-72 bg-white/95 backdrop-blur-xl
                         shadow-2xl z-50 flex flex-col"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 280 }}
            >
              {/* Close button */}
              <div className="flex justify-end p-5">
                <button
                  className="w-10 h-10 rounded-xl flex items-center justify-center
                             hover:bg-gray-100 transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  <X size={22} className="text-text-dark" />
                </button>
              </div>

              {/* Mobile links */}
              <nav className="flex flex-col px-4 gap-1 mt-4">
                {NAV_LINKS.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + i * 0.08 }}
                  >
                    <Link
                      href={link.href}
                      className={`block px-4 py-3.5 rounded-xl text-base font-medium
                                 transition-all duration-200 ${
                        isLinkActive(link.href)
                          ? 'text-accent1 bg-accent1/8 font-semibold'
                          : 'text-text-dark hover:bg-gray-50 hover:text-accent1'
                      }`}
                      onClick={() => {
                        if (link.href.includes('#')) {
                          setActiveHash('#' + link.href.split('#')[1]);
                        } else {
                          setActiveHash('');
                        }
                      }}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>

              {/* Mobile CTA */}
              <motion.div
                className="px-6 mt-8"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <Link
                  href="/contact"
                  className="flex items-center justify-center w-full px-6 py-3.5
                             text-sm font-semibold text-white
                             bg-gradient-to-r from-accent1 to-accent2 rounded-xl
                             shadow-accent hover:shadow-accent-lg transition-all"
                  onClick={() => setMenuOpen(false)}
                >
                  Let&apos;s Build Together
                </Link>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
