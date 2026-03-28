import React from 'react';
import styles from './Button.module.css';

export function Button({ children, variant = 'primary', className = '', href, ...props }) {
  const btnClass = `${styles.button} ${styles[variant]} ${className}`;
  
  if (href) {
    return (
      <a href={href} className={btnClass} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button className={btnClass} {...props}>
      {children}
    </button>
  );
}
