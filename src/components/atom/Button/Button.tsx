import { useCallback } from 'react';
import Link from 'next/link';
import styles from './Button.module.css';

export interface ButtonProps {
  label: string;
  format?: 'Filled'|'Outlined'|'Text'|'Underline'|'Link'|'Icon';
  href?: string;
  onClick?: (e:React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  className?: string;
}

const Button = ({label,format,onClick,disabled,className, href}:ButtonProps) => {
  const click = useCallback((e:React.MouseEvent<HTMLButtonElement>) => onClick(e),[onClick]);

  switch (format) {
    case 'Link':
      return (
        <Link href={href} className={`${styles.button} ${styles.link} ${className || ''}`}>{label}</Link>
      )
    case 'Icon':
      return (
        <button type="button" className={`${styles.button} ${styles[format || 'Filled']} ${className || ''}`} onClick={click} disabled={disabled}>
          <i className={`fas ${label}`}></i>
        </button>
      )
    default:
      return (
        <button type="button" className={`${styles.button} ${styles[format || 'Filled']} ${className || ''}`} onClick={click} disabled={disabled}>{label}</button>
      )
  }
  
}
export default Button;