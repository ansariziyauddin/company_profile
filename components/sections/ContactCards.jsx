'use client';

import { motion } from 'framer-motion';
import { MessageCircle, Linkedin, Mail, ArrowUpRight } from 'lucide-react';

const CONTACTS = [
  {
    href: 'https://wa.me/919876543210',
    icon: MessageCircle,
    label: 'Chat with us',
    detail: '+91 98765 43210',
    description: 'Quick questions? We respond fast on WhatsApp.',
    accentColor: 'from-green-500/10 to-emerald-500/10',
    iconBg: 'bg-green-500/10',
    iconColor: 'text-green-600',
    hoverBorder: 'hover:border-green-500/30',
  },
  {
    href: 'https://www.linkedin.com/company/inovance-technologies',
    icon: Linkedin,
    label: 'Connect professionally',
    detail: 'LinkedIn',
    description: 'Follow our journey and connect for opportunities.',
    accentColor: 'from-blue-500/10 to-sky-500/10',
    iconBg: 'bg-blue-500/10',
    iconColor: 'text-blue-600',
    hoverBorder: 'hover:border-blue-500/30',
  },
  {
    href: 'mailto:hello@inovancetech.com',
    icon: Mail,
    label: 'Drop us a line',
    detail: 'hello@inovancetech.com',
    description: 'Detailed inquiries and project discussions.',
    accentColor: 'from-accent1/10 to-accent3/10',
    iconBg: 'bg-accent1/10',
    iconColor: 'text-accent1',
    hoverBorder: 'hover:border-accent1/30',
  },
];

export function ContactCards() {
  return (
    <section className="section-padding">
      <div className="container-main">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.12 } },
          }}
        >
          {CONTACTS.map((contact) => (
            <motion.a
              key={contact.href}
              href={contact.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative p-7 rounded-2xl bg-white/70 backdrop-blur-sm
                         border border-white/50 shadow-card
                         hover:shadow-card-hover hover:-translate-y-2
                         ${contact.hoverBorder}
                         transition-all duration-500 block`}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
              }}
            >
              {/* Hover gradient */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${contact.accentColor}
                              opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

              <div className="relative z-10">
                <div className="flex items-start justify-between mb-5">
                  <div className={`w-13 h-13 p-3 rounded-xl ${contact.iconBg} ${contact.iconColor}
                                 transition-colors duration-300`}>
                    <contact.icon size={24} />
                  </div>
                  <ArrowUpRight
                    size={18}
                    className="text-text-muted opacity-0 group-hover:opacity-100
                              group-hover:translate-x-0.5 group-hover:-translate-y-0.5
                              transition-all duration-300"
                  />
                </div>

                <h3 className="text-lg font-semibold text-text-dark mb-1">
                  {contact.label}
                </h3>
                <p className="text-accent1 font-medium text-sm mb-3">
                  {contact.detail}
                </p>
                <p className="text-text-muted text-sm leading-relaxed">
                  {contact.description}
                </p>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
