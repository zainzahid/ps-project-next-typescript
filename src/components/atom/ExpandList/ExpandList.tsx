import { useState } from 'react';
import Button from 'atom/Button';
import styles from './ExpandList.module.css';

export interface ExpandListProps {
  items:string[];
  display:number;
}
const ExpandList = ({items, display = 2}:ExpandListProps) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className={styles.expandList}>
      <div className={styles.items}>
        {items.slice(0, expanded ? items.length : display).map((item, i) => (
          <div key={`expandListItem${item}`} className={styles.item}>{item}</div>
        ))}
      </div>
      {items.length > display && (
        <div className={styles.toggle}>
          <Button format="Text" label={expanded ? 'View Less' : 'View More'} onClick={() => setExpanded(!expanded)} />
        </div>
      )}
    </div>
  )
}
export default ExpandList;