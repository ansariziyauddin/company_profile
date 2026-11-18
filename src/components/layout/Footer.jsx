// Server Component — no 'use client' needed
import Link from 'next/link';
import { Heart, Linkedin, Mail } from 'lucide-react';
import { ScrollToTopButton } from '@/components/ui/ScrollToTopButton';
import { siteConfig } from '@/config/site';

const FOOTER_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/projects', label: 'Projects' },
  { href: '/contact', label: 'Contact' },
];

const SOCIAL_LINKS = [
  {
    href: siteConfig.social.linkedinCompany,
    label: 'LinkedIn',
    Icon: Linkedin,
  },
  {
    href: `mailto:${siteConfig.contact.email}`,
    label: 'Email',
    Icon: Mail,
  },
];

export function Footer() {
  return (
    <footer className="relative bg-base text-white overflow-hidden">
      {/* Gradient top border */}
      <div className="h-px bg-gradient-to-r from-transparent via-accent1 to-transparent" />

      {/* Decorative gradient orb */}
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-96 h-64
                     bg-accent1/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container-main relative z-10">
        {/* Main footer content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent1 to-accent3
                             flex items-center justify-center text-white font-bold text-sm">
                IT
              </span>
              <span className="font-semibold text-lg">{siteConfig.name}</span>
            </div>
            <p className="text-white/50 text-sm leading-relaxed max-w-xs">
              Engineering scalable digital systems for startups and growing businesses.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h2 className="text-sm font-semibold text-white/70 uppercase tracking-wider mb-4">
              Navigation
            </h2>
            <ul className="space-y-3">
              {FOOTER_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/50 hover:text-accent3 transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social & Back to top */}
          <div className="flex flex-col justify-between">
            <div>
              <h2 className="text-sm font-semibold text-white/70 uppercase tracking-wider mb-4">
                Connect
              </h2>
              <div className="flex gap-3">
                {SOCIAL_LINKS.map((social) => (
                  <a
                    key={social.href}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-xl bg-white/5 border border-white/10
                             flex items-center justify-center
                             hover:bg-accent1/20 hover:border-accent1/30
                             transition-all duration-300"
                    aria-label={social.label}
                  >
                    <social.Icon size={18} className="text-white/60" />
                  </a>
                ))}
              </div>
            </div>

            {/* Back to top — client leaf */}
            <ScrollToTopButton />
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/[0.08] py-6 flex flex-col sm:flex-row
                       items-center justify-between gap-4">
          <p className="text-xs text-white/30">
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <p className="text-xs text-white/30 flex items-center gap-1">
            Crafted with <Heart size={12} className="text-accent3 fill-accent3" /> and clean code
          </p>
        </div>
      </div>
    </footer>
  );
}
