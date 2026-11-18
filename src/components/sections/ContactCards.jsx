// Server Component — animation via ScrollReveal client wrapper
import { MessageCircle, Linkedin, Mail, ArrowUpRight } from 'lucide-react';
import { siteConfig } from '@/config/site';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

const CONTACTS = [
  {
    href: `https://wa.me/${siteConfig.contact.whatsapp}`,
    Icon: MessageCircle,
    label: 'Chat with us',
    detail: siteConfig.contact.whatsappDisplay,
    description: 'Quick questions? We respond fast on WhatsApp.',
    accentColor: 'from-green-500/10 to-emerald-500/10',
    iconBg: 'bg-green-500/10',
    iconColor: 'text-green-600',
    hoverBorder: 'hover:border-green-500/30',
  },
  {
    href: siteConfig.social.linkedinPersonal,
    Icon: Linkedin,
    label: 'Connect professionally',
    detail: 'Ziyauddin Ansari',
    description: 'Follow our journey and connect for opportunities.',
    accentColor: 'from-blue-500/10 to-sky-500/10',
    iconBg: 'bg-blue-500/10',
    iconColor: 'text-blue-600',
    hoverBorder: 'hover:border-blue-500/30',
  },
  {
    href: `mailto:${siteConfig.contact.email}`,
    Icon: Mail,
    label: 'Drop an email',
    detail: siteConfig.contact.email,
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
        <ScrollReveal stagger className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {CONTACTS.map((contact) => (
            <a
              key={contact.href}
              href={contact.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative p-7 rounded-2xl bg-white/70 backdrop-blur-sm
                         border border-white/50 shadow-card
                         hover:shadow-card-hover hover:-translate-y-2
                         ${contact.hoverBorder}
                         transition-all duration-500 block`}
            >
              {/* Hover gradient */}
              <div
                className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${contact.accentColor}
                            opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              />

              <div className="relative z-10">
                <div className="flex items-start justify-between mb-5">
                  <div className={`p-3 rounded-xl ${contact.iconBg} ${contact.iconColor} transition-colors duration-300`}>
                    <contact.Icon size={24} />
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
                <p className="text-accent1 font-medium text-sm mb-3">{contact.detail}</p>
                <p className="text-text-muted text-sm leading-relaxed">{contact.description}</p>
              </div>
            </a>
          ))}
        </ScrollReveal>
      </div>
    </section>
  );
}
