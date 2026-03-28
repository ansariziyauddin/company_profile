import React, { useState, useEffect } from 'react';
import styles from './Navbar.module.css';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.navContainer}`}>
        <a href="#home" className={styles.logo}>
          <span className={styles.monogram}>IT</span>
          <span className={styles.wordmark}>Inovance Technologies</span>
        </a>
        <div className={styles.links}>
          <a href="#home">Home</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
        <a href="#contact" className={styles.cta}>Let's Build</a>
      </div>
    </nav>
  );
}
