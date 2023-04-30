import Image from 'next/image';
import styles from './TooManyResults.module.css';

export interface TooManyResultsProps {
  target:string;
}

const TooManyResults = ({target}:TooManyResultsProps) => {
  return (
    <section className={styles.results}>
      <div className={styles.heading}>
        <Image alt="We found something!" src="/img/icons/Warning.svg" height={73} width={80} className={styles.check} />
        <h1>Sorry, your search for <span className={styles.orange}>{target}</span> returned too many results</h1>
      </div>
    </section>
  )
}

export default TooManyResults;