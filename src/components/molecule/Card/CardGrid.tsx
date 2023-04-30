import styles from './Card.module.css';
import GridCard, {GridCardProps} from './Card';

export interface CardGridProps {
  cards:GridCardProps[];
}

const CardGrid = ({cards}:CardGridProps) => {
  return (
    <div className={styles.cardGrid}>
      {
        cards.map((i, k) => {
          return (<GridCard key={`card${k}`} {...i} />);
        })
      }
    </div>
  );
}
export default CardGrid;