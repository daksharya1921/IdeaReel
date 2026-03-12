import React from 'react';
import styles from './Card.module.css';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  description?: string;
  glass?: boolean;
  hoverable?: boolean;
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className = '', title, description, glass = false, hoverable = false, children, ...props }, ref) => {
    const classNames = [
      styles.card,
      glass ? styles.glassCard : '',
      hoverable ? styles.hoverable : '',
      className
    ].filter(Boolean).join(' ');

    return (
      <div ref={ref} className={classNames} {...props}>
        {title && <h3 className={styles.title}>{title}</h3>}
        {description && <p className={styles.description}>{description}</p>}
        {children}
      </div>
    );
  }
);

Card.displayName = 'Card';
