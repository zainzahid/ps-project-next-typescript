import Image from 'next/image';
import styles from './Magnifier.module.css';

export interface MagnifierProps {
  backgroundImage:string;
  className?:string;
}

const Magnifier = ({backgroundImage, className}:MagnifierProps) => {
  const classes = [styles.magnifier, className || ''].join(' ');
  return (
    <Image src="/img/magnifier.webp" className={classes} priority alt="Searching..." width={250} height={250} style={{backgroundImage:`url('${backgroundImage}')`}} />
  )
}
export default Magnifier;