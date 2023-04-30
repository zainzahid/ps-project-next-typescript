import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Magnifier from 'atom/Magnifier/Magnifier';
import Image from 'next/image';
import styles from './Animated.module.css';
import CONSTANTS from 'src/utils/constants';
import ProgressBar from 'atom/ProgressBar';

interface AnimatedProps {
  target: string;
  location?:string;
}

const Animated = ({target,location = ''}:AnimatedProps) => {
  const [progress, setProgress] = useState<number>(0);
  const [ticks, setTicks] = useState<number>(0);
  const router = useRouter();
  const timerLength = 45;

  useEffect(() => {
    let interval = null;
    if (progress < 100 || ticks < timerLength) {
      interval = setTimeout(() => {
        setProgress(progress + 1);
        setTicks(ticks + 1);
      }, 1000);
    } else {
      clearInterval(interval);
      router.push({
        pathname: '/search',
        query: { 
          firstName: target.split(' ')[0],
          lastName: target.split(' ')[1],
          state: location,
        }
      })
    }
  }, [progress]);

  const state = CONSTANTS.STATES.find((state) => state.value === location)?.label || 'Florida';
  return (
    <div className={styles.animated}>
      <ProgressBar width={progress} />
      <section>
        <div className={styles.container}>
          <h1>Searching millions of records for <span className={styles.highlight}>{target}</span></h1>
          <div className={styles.marketing}>
            <div className={styles.leftColumn}>
              <div className={`${styles.card} ${styles.searchingFor}`}>
                <h3>Now searching for:</h3>
                <div className={styles.profile}>
                  <div className={styles.profileImage}>
                    <Image src="/img/icons/Profile.svg" height={56} width={56} alt={target} />
                  </div>
                  <div className={styles.profileInfo}>
                    <h1>{target}</h1>
                    {location && <p>Location: {state}</p>}
                  </div>
                </div>
              </div>
              <div className={`${styles.card} ${styles.reviews}`}>
                <div className={styles.stars}>
                  <Image src="/img/stars.png" alt="5 Stars" width={250} height={88} />
                </div>
                <p>Millions have searched. Many have provided outstanding 5-Star reviews!</p>
              </div>
            </div>
            <div className={styles.rightColumn}>
              <div className={`${styles.card} ${styles.searchingFor}`}>
                <h3>Now searching for:</h3>
                <div className={styles.profile}>
                  <div className={styles.profileImage}>
                    <Image src="/img/icons/User.svg" height={16} width={16} alt={target} />
                  </div>
                  <div className={styles.profileInfo}>
                    <h1>{target}</h1>
                    {location && <p>Location: {state}</p>}
                  </div>
                </div>
              </div>
              <div className={`${styles.card} ${styles.checkingFor}`}>
                <h3>Records we may find:</h3>
                <div className={styles.recordsGrid}>
                  <div className={styles.recordsList}>
                    <ul>
                      <li><div className={styles.checkmark} />Current/Past Addresses</li>
                      <li><div className={styles.checkmark} />Email Addresses</li>
                      <li><div className={styles.checkmark} />Online Photos</li>
                      <li><div className={styles.checkmark} />Job History</li>
                      <li><div className={styles.checkmark} />Criminal/Arrest Records</li>
                      <li><div className={styles.checkmark} />Sex Offender Status</li>
                      <li><div className={styles.checkmark} />Phone Numbers</li>
                      <li><div className={styles.checkmark} />Social Media Profiles</li>
                      <li><div className={styles.spin} />Marriage/Divorce Records</li>
                      <li><div className={styles.spin} />Rentals/Owned Properties</li>
                      <li><div className={styles.spin} />Court Records</li>
                      <li><div className={styles.spin} />Mugshots</li>
                    </ul>
                  </div>
                </div>
                <div className={styles.magnifierContainer}>
                    <Magnifier backgroundImage="/img/animation/loader-faces-color.gif" />
                  </div>
              </div>
            </div>
          </div>
          <h3>Please no not close the page or click the back button as you may lose your search progress.</h3>
        </div>
      </section>
    </div>
  )
}
export default Animated;