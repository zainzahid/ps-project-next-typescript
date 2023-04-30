import { useEffect, useState } from 'react';
import Image from 'next/image';
import styles from './ButtonGrid.module.css';
import Button from 'atom/Button';

export interface IconButtonProps {
  label: string;
  image: string;
  selected?: boolean;
}

export interface ButtonGridProps {
  buttons: IconButtonProps[];
  selectAll?: boolean;
  multiselect?: boolean;
  submitLabel: string;
}

const ButtonGrid = ({
  buttons,
  selectAll   = false,
  multiselect = false,
  submitLabel
}:ButtonGridProps) => {
  const [selected, setSelected] = useState<IconButtonProps[]>(buttons);
  const [needUpdate, setNeedUpdate] = useState<boolean>(false);
  const [selectedAll, setSelectedAll] = useState<boolean>(false);

  useEffect(() => {
    if (needUpdate) {
      setSelected(selected);
      setNeedUpdate(false);
    }
  }, [needUpdate]);

  const toggleSelected = (button:IconButtonProps) => {
    const _items = selected;
    const index = _items.indexOf(button);
    _items[index].selected = !_items[index].selected;
    setSelected(_items);
    setNeedUpdate(true);
  }

  const toggleSelectAll = () => {
    const _items = selected;
    _items.forEach((item) => {
      item.selected = !selectedAll;
    });
    setSelectedAll(!selectedAll);
    setSelected(_items);
    setNeedUpdate(true);
  }

  return (
    <div className={styles.buttonGrid}>
      <div className={styles.gridHeader}>
        {selectAll && <Button format="Outlined" label="Select All" onClick={toggleSelectAll} />}
      </div>
      <div className={styles.grid}>
      {
        selected.map((button) => {
          let selected = button?.selected;
          return (
            <div key={`iconButton-${button.label}`} attr-active={(selected || '')?.toString()} onClick={(e) => {
                toggleSelected(button);
                selected = !selected;
              }} className={styles.button}>
              <div className={styles.image}>
                <Image src={button.image} alt={button.label} width={64} height={64} />
              </div>
              <div className={styles.label}>
                {button.label}
              </div>
            </div>
          )
        })
      }
      </div>
      <div className={styles.gridFooter}>
        <Button format="Filled" label={submitLabel} />
      </div>
    </div>
  )
}
export default ButtonGrid;