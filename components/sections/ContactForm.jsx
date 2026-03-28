'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // For now, just show success state
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section className="pb-24 md:pb-32">
      <div className="container-main">
        <motion.div
          className="max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="glass rounded-2xl p-8 md:p-10 shadow-glass">
            <h3 className="text-2xl font-bold text-text-dark mb-2">
              Send us a message
            </h3>
            <p className="text-text-muted text-sm mb-8">
              Have a project in mind? Fill out the form and we&apos;ll get back to you within 24 hours.
            </p>

            {submitted ? (
              <motion.div
                className="flex flex-col items-center justify-center py-12 text-center"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ type: 'spring', stiffness: 200 }}
              >
                <div className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center mb-4">
                  <CheckCircle size={32} className="text-green-500" />
                </div>
                <h4 className="text-xl font-semibold text-text-dark mb-2">
                  Message Sent!
                </h4>
                <p className="text-text-muted text-sm">
                  Thank you for reaching out. We&apos;ll be in touch soon.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block text-sm font-medium text-text-dark mb-2"
                    >
                      Name
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Your name"
                      className="w-full px-4 py-3 rounded-xl bg-white/80 border border-accent3/20
                               text-text-dark placeholder:text-text-muted/50 text-sm
                               focus:outline-none focus:ring-2 focus:ring-accent1/30 focus:border-accent1/40
                               transition-all duration-200"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="contact-email"
                      className="block text-sm font-medium text-text-dark mb-2"
                    >
                      Email
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="you@example.com"
                      className="w-full px-4 py-3 rounded-xl bg-white/80 border border-accent3/20
                               text-text-dark placeholder:text-text-muted/50 text-sm
                               focus:outline-none focus:ring-2 focus:ring-accent1/30 focus:border-accent1/40
                               transition-all duration-200"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="contact-subject"
                    className="block text-sm font-medium text-text-dark mb-2"
                  >
                    Subject
                  </label>
                  <input
                    id="contact-subject"
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="How can we help?"
                    className="w-full px-4 py-3 rounded-xl bg-white/80 border border-accent3/20
                             text-text-dark placeholder:text-text-muted/50 text-sm
                             focus:outline-none focus:ring-2 focus:ring-accent1/30 focus:border-accent1/40
                             transition-all duration-200"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-sm font-medium text-text-dark mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Tell us about your project, goals, and timeline..."
                    className="w-full px-4 py-3 rounded-xl bg-white/80 border border-accent3/20
                             text-text-dark placeholder:text-text-muted/50 text-sm
                             focus:outline-none focus:ring-2 focus:ring-accent1/30 focus:border-accent1/40
                             transition-all duration-200 resize-none"
                  />
                </div>

                <Button type="submit" className="w-full group" size="large">
                  <Send
                    size={16}
                    className="transition-transform duration-300 group-hover:translate-x-0.5
                             group-hover:-translate-y-0.5"
                  />
                  Send Message
                </Button>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
