import React from 'react';
import styles from './MobileProjects.module.css';
import { MobileCard } from '../ui/MobileCard';
import { mobileProjects } from '../../data/projects';
import { useScrollReveal } from '../../hooks/useScrollReveal';

export function MobileProjects() {
  const revealRef = useScrollReveal();
  
  // Create placeholders if no projects exist
  const displayProjects = mobileProjects.length > 0 
    ? mobileProjects 
    : [
        { id: 'm1', type: 'mobile', title: '', description: '', tags: [] },
        { id: 'm2', type: 'mobile', title: '', description: '', tags: [] },
        { id: 'm3', type: 'mobile', title: '', description: '', tags: [] }
      ];

  return (
    <section id="mobile" className={styles.mobileProjects}>
      <div className={`container reveal ${styles.container}`} ref={revealRef}>
        <h2 className={styles.title}>Mobile Experiences</h2>
        <div className={styles.grid}>
          {displayProjects.map((project) => (
            <MobileCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
