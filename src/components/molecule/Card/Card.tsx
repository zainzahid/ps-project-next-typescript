import Image from 'next/image';
import styles from './Card.module.css';

export interface GridCardProps {
  imageUrl:string;
  title:string;
  callouts:string[];
  className?:string;
}

const GridCard = ({imageUrl,title,callouts,className}:GridCardProps) => {
  return (
    <div className={styles.card}>
      <h2>{title}</h2>
      <div className={styles.cardBody}>
        <ul>
          {
            callouts.map((i, k) => {
              return (<li key={`cardCo${title}${k}`}>{i}</li>);
            })
          }
        </ul>
        <Image src={imageUrl} alt={title} width={130} height={130} />
      </div>
    </div>
  );
}
export default GridCard;