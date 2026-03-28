import React from 'react';
import styles from './Contact.module.css';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { MessageCircle, Linkedin, Mail } from 'lucide-react';

export function Contact() {
  const revealRef = useScrollReveal();

  return (
    <section id="contact" className={styles.contact}>
      <div className={`container reveal ${styles.container}`} ref={revealRef}>
        <h2 className={styles.title}>Let's Build Something Great</h2>
        <p className={styles.subhead}>
          Have a project in mind? Reach out and let's architect your next big thing.
        </p>

        <div className={styles.cards}>
          <a href="https://wa.me/#" target="_blank" rel="noopener noreferrer" className={`${styles.card} ${styles.whatsapp}`}>
            <MessageCircle className={styles.icon} />
            <span className={styles.label}>Chat with us</span>
          </a>
          
          <a href="#" target="_blank" rel="noopener noreferrer" className={`${styles.card} ${styles.linkedin}`}>
            <Linkedin className={styles.icon} />
            <span className={styles.label}>Connect professionally</span>
          </a>
          
          <a href="mailto:#" className={`${styles.card} ${styles.email}`}>
            <Mail className={styles.icon} />
            <span className={styles.label}>Drop us a line</span>
          </a>
        </div>
      </div>
    </section>
  );
}
