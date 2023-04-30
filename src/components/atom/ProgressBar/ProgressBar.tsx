import styles from './ProgressBar.module.css';

export interface ProgressBarProps {
  width: number;
}

export const ProgressBar = ({width = 0}:ProgressBarProps) => {
  return (
    <div className={styles.progressContainer}>
      <div className={styles.progress} style={{width:`${width.toString()}%`}}></div>
    </div>
  )
}
export default ProgressBar;