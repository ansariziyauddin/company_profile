import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import styles from './MobileCard.module.css';
import { Badge } from './Badge';

export function MobileCard({ project }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <div className={styles.card}>
        <div className={styles.phoneFrame} onClick={openModal}>
          {project.image ? (
            <img src={project.image} alt={project.title} loading="lazy" />
          ) : (
            <div className={styles.comingSoon}>Coming Soon</div>
          )}
        </div>
        <div className={styles.content}>
          <h3 className={styles.title}>{project.title || "Next App"}</h3>
          <p className={styles.description}>{project.description || "Currently in development."}</p>
          <div className={styles.tags}>
            {(project.tags || ["Flutter"]).map(tag => <Badge key={tag}>{tag}</Badge>)}
          </div>
        </div>
      </div>

      {isModalOpen && project.image && createPortal(
        <div className={styles.modalOverlay} onClick={closeModal}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <button className={styles.closeButton} onClick={closeModal}>&times;</button>
            <img src={project.image} alt={project.title} className={styles.modalImage} />
          </div>
        </div>,
        document.body
      )}
    </>
  );
}
