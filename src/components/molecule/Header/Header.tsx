import Image from 'next/image';
import Logo from 'atom/Logo';
import styles from './Header.module.css';
import Button from 'atom/Button';

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Logo />
        </div>
        <div className={styles.right}>
          <Button format="Outlined" label="Login" className={styles.button} />
        </div>
      </div>
    </div>
  )
}
export default Header;