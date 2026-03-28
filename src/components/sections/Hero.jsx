import React from 'react';
import styles from './Hero.module.css';
import { Button } from '../ui/Button';

export function Hero() {
  return (
    <section id="home" className={styles.hero}>
      <div className={styles.blob1}></div>
      <div className={styles.blob2}></div>
      <div className={styles.blob3}></div>
      
      <div className={`container ${styles.content}`}>
        <h1 className={styles.headline}>Engineering Scalable Digital Systems</h1>
        <p className={styles.subhead}>
          We build high-performance mobile and web architectures for startups and growing businesses. Systems that scale.
        </p>
        <div className={styles.actions}>
          <Button href="#projects">View Our Work</Button>
          <Button href="#contact" variant="outline">Get In Touch</Button>
        </div>
      </div>
    </section>
  );
}
