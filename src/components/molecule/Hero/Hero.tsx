import styles from './Hero.module.css';
import Image from 'next/image';

export interface HeroProps {
  title: string;
  byline:string;
  image: string;
}

const Hero = ({title,byline,image}:HeroProps) => {
  return (
    <div className={styles.hero}>
      <div className={styles.left}>
        <h1>{title}</h1>
        <h3>{byline}</h3>
      </div>
      <div className={styles.right}>
        <Image src={image} width={234} height={176} alt={title} priority />
      </div>
    </div>
  )
};
export default Hero;