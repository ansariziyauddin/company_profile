import React from 'react';
import styles from './Projects.module.css';
import { ProjectCard } from '../ui/ProjectCard';
import { MobileCard } from '../ui/MobileCard';
import { webProjects, mobileProjects } from '../../data/projects';
import { useScrollReveal } from '../../hooks/useScrollReveal';

export function Projects() {
  const revealRef = useScrollReveal();

  return (
    <section id="projects" className={styles.projectsSection}>
      <div className={`container reveal ${styles.container}`} ref={revealRef}>
        
        <h2 className={styles.sectionTitle}>Our Projects</h2>
        
        {/* Web Applications */}
        <div className={styles.categoryBlock}>
          <h3 className={styles.categoryTitle}>Web Applications</h3>
          <div className={styles.webGrid}>
            {webProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>

        {/* Mobile Applications */}
        <div className={styles.categoryBlock}>
          <h3 className={styles.categoryTitle}>Mobile Applications</h3>
          <div className={styles.mobileGrid}>
            {mobileProjects.map((project) => (
              <MobileCard key={project.id} project={project} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
