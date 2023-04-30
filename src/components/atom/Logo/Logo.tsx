import { useState } from 'react';
import Image from 'next/image';
import styles from './Logo.module.css';
import { IGlobal } from 'models/Content';
import GetContent from 'src/services/Content';

const Logo = () => {
  const [logoUrl, setLogoUrl] = useState<string>('/img/wi-logo.svg');
  GetContent('globals').then((res:IGlobal) => setLogoUrl(res?.logo || logoUrl));

  return (
    <div className={styles.logo}>
      <Image src={logoUrl} width={140} height={34} alt="WI" />
    </div>
  );
}
export default Logo;