import styles from './Card.module.css';

export interface CardProps {
  children: React.ReactNode;
  className?: string;
  elevation?: 'Flat'|'Raised';
}

const Card = ({children, className,elevation}:CardProps) => {
  const css = `${styles.card} ${className || ''} ${styles[elevation || 'Raised']}`;

  return (
    <div className={css}>
      {children}
    </div>
  )
}
export default Card;