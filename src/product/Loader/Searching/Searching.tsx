import Image from 'next/image';
import Magnifier from 'atom/Magnifier/Magnifier';
import styles from './Searching.module.css';

export interface SearchingProps {
  target:string;
}

const Searching = ({target}:SearchingProps) => {
  return (
    <div className={styles.searching}>
      <h1>Searching millions of records for <span className={styles.red}>{target}</span></h1>
      <div className={styles.searchingIndicatorRow}>
        <div className={styles.magnifierContainer}>
          <Magnifier backgroundImage="/img/animation/loader-faces-color.gif" className={styles.magnifier} />
        </div>
        <div className={styles.searchingIndicator}>
          <Image src="/img/icons/User.svg" height={80} width={80} alt="Searching..." />
        </div>
        <div className={styles.searchingIndicator}>
          <Image src="/img/icons/User.svg" height={80} width={80} alt="Searching..." />
        </div>
        <div className={styles.searchingIndicator}>
          <Image src="/img/icons/User.svg" height={80} width={80} alt="Searching..." />
        </div>
        <div className={styles.searchingIndicator}>
          <Image src="/img/icons/User.svg" height={80} width={80} alt="Searching..." />
        </div>
        <div className={styles.searchingIndicator}>
          <Image src="/img/icons/User.svg" height={80} width={80} alt="Searching..." />
        </div>
        <div className={styles.searchingIndicator}>
          <Image src="/img/icons/User.svg" height={80} width={80} alt="Searching..." />
        </div>
        <div className={styles.searchingIndicator}>
          <Image src="/img/icons/User.svg" height={80} width={80} alt="Searching..." />
        </div>
      </div>
      <h2>Please do not close the page or click the back button as you may lose your search progress</h2>
    </div>
  )
}
export default Searching;