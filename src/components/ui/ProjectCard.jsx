import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import styles from './ProjectCard.module.css';
import { Badge } from './Badge';

export function ProjectCard({ project }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  // Use local image if available, else fallback to placeholder
  const imageUrl = project.image || `https://api.microlink.io/?url=${encodeURIComponent(project.link)}&screenshot=true&meta=false&embed=screenshot.url`;

  return (
    <>
      <div className={styles.card}>
        <div className={styles.imageContainer} onClick={openModal}>
          <img src={imageUrl} alt={`${project.title} Preview`} loading="lazy" />
        </div>
        <div className={styles.content}>
          <h3 className={styles.title}>{project.title}</h3>
          <p className={styles.description}>{project.description}</p>
          <div className={styles.tags}>
            {project.tags.map(tag => <Badge key={tag}>{tag}</Badge>)}
          </div>
          <a href={project.link} target="_blank" rel="noopener noreferrer" className={styles.link}>
            View Live &rarr;
          </a>
        </div>
      </div>

      {isModalOpen && createPortal(
        <div className={styles.modalOverlay} onClick={closeModal}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <button className={styles.closeButton} onClick={closeModal}>&times;</button>
            <img src={imageUrl} alt={project.title} className={styles.modalImage} />
          </div>
        </div>,
        document.body
      )}
    </>
  );
}
