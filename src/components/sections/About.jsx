import React from 'react';
import styles from './About.module.css';
import { Badge } from '../ui/Badge';
import { useScrollReveal } from '../../hooks/useScrollReveal';

export function About() {
  const revealRef = useScrollReveal();

  return (
    <section id="about" className={styles.about}>
      <div className={`container ${styles.grid} reveal`} ref={revealRef}>
        <div className={styles.left}>
          <h2 className={styles.title}>
            We don't just write code &mdash; we <span className={styles.highlight}>design systems</span> that grow with your business.
          </h2>
          <div className={styles.techStack}>
            <Badge>React</Badge>
            <Badge>Node.js</Badge>
            <Badge>Flutter</Badge>
            <Badge>React Native</Badge>
            <Badge>REST APIs</Badge>
            <Badge>Clean Architecture</Badge>
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.statCard}>
            <h3>4+ Web Projects</h3>
          </div>
          <div className={styles.statCard}>
            <h3>Mobile Apps</h3>
          </div>
          <div className={styles.statCard}>
            <h3>Scalable Architectures</h3>
          </div>
        </div>
      </div>
    </section>
  );
}
