import { useState } from 'react';
import styles from './RichTileButton.module.css';

export interface RichTileItem {
  value:string;
  selected?:boolean;
  children:React.ReactNode;
}
export interface RichTileButtonProps {
  items:RichTileItem[];
  onChange?: (items:RichTileItem) => void;
}
const RichTileButton = ({items, onChange}) => {
  const [tiles, setTiles] = useState(items);

  return (
    <div className={styles.richTileButtonList}>
      {items.map((item, index) => {
        const css = `${styles.richTileButton} ${item.selected ? styles.selected : ''}`;
        return (
          <div key={`richTileButton${index}`} className={css}>
            {item.children}
          </div>
        )
      })}
    </div>
  )
}
export default RichTileButton;