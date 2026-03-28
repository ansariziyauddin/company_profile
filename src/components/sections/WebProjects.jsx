import React from 'react';
import styles from './WebProjects.module.css';
import { ProjectCard } from '../ui/ProjectCard';
import { webProjects } from '../../data/projects';
import { useScrollReveal } from '../../hooks/useScrollReveal';

export function WebProjects() {
  const revealRef = useScrollReveal();

  return (
    <section id="web" className={styles.webProjects}>
      <div className={`container reveal ${styles.container}`} ref={revealRef}>
        <h2 className={styles.title}>Web Experiences</h2>
        <div className={styles.grid}>
          {webProjects.map((project) => (
            <div key={project.id} className={styles.gridItem}>
               <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
