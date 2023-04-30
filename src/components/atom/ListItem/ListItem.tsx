import Image from 'next/image';
import styles from './ListItem.module.css';

export interface ListItemProps {
  format?: 'NoBullet'|'Bullet';
  text:string;
  image:string;
  className?:string;
}

const ListItem = ({format = 'NoBullet',text,image,className = ''}:ListItemProps) => {
  const css = `${styles.listItem} ${className} ${styles[format]}`;
  return (
    <li className={css}>
      <Image src={image} alt={text} width={48} height={48} />
      <span>{text}</span>
    </li>
  )
}
export default ListItem;