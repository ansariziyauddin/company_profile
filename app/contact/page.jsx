import { PageHero } from '@/components/sections/PageHero';
import { ContactCards } from '@/components/sections/ContactCards';
import { ContactForm } from '@/components/sections/ContactForm';

export const metadata = {
  title: 'Contact',
  description:
    'Get in touch with Inovance Technologies. Reach out via WhatsApp, LinkedIn, or email to discuss your next project.',
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Get In Touch"
        subtitle="Have a project in mind? Let's discuss how we can bring your vision to life."
      />
      <ContactCards />
      <ContactForm />
    </>
  );
}
