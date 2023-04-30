import { useCallback } from 'react';
import Button from 'atom/Button';
import { useRouter } from 'next/router';
import styles from './Confirm.module.css';
import CONSTANTS from 'src/utils/constants';

export interface ConfirmProps {
  route?:string;
  onClick?:() => void;
}

const Confirm = ({route = null, onClick = null}) => {
  const router = useRouter();

  const click = useCallback((e:React.MouseEvent<HTMLButtonElement>) => {
    if (route) {
      router.push(route);
    }
    if (onClick) onClick();
  }, [route, onClick, router]);

  return (
    <div className={styles.container}>
      <h1>Please confirm to continue</h1>
      <div className={styles.card}>
        <p><span className={styles.bold}>This website contains <span className={styles.red}>real public records and criminal records</span>, including arrest records, felonies, sex offenses, Mugshots, DUI’s, and much more.</span>  It also reveals hiddens social media profiles, address information, phone numbers, court documents, employment information, and much more. The information you find here could be shocking and possibly disturbing.</p>
        <Button format='Filled' label="Continue" onClick={click} />
      </div>
      <p className={styles.disclaimer}>
      {CONSTANTS.BRAND_NAME} does not provide consumer reports and is not a “Consumer Reporting Agency” as defined by the Fair Credit Reporting Act. By clicking the “Continue” button, you are agreeing not to use this website to make decisions about consumer credit, employment, insurance, tenancy, educational opportunities, etc.
      </p>
    </div>
  );
};
export default Confirm;