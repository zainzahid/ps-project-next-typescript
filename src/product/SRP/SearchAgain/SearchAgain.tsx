import { useRouter } from "next/router";
import Field from "atom/Field";
import styles from './SearchAgain.module.css';
import CONSTANTS from "src/utils/constants";
import Button from "atom/Button";
import { receiveMessageOnPort } from "worker_threads";

export interface SearchAgainProps {
  title:string;
  byline?:string;
  recommendations?:string[];
}

const SearchAgain = ({title,byline,recommendations}) => {
  const router = useRouter();
  const { firstName, lastName, state } = router.query;

  return (
    <section className={styles.searchAgain}>
      <div className={styles.container}>
        <div className={styles.left}>
          <h1>Didn&apos;t find who you are looking for?</h1>
          {byline && <p>Refine your search using these search tips:</p>}
          <ul>
            {
              recommendations && recommendations.map((recommendation,index) => (
                <li key={`searchAgainRec${index}`}>{recommendation}</li>
              ))
            }
            <li>Double check your spelling</li>
            <li>Try entering their maiden name</li>
            <li>Try entering their middle name</li>
            <li>Narrow your search by adding a city</li>
          </ul>
        </div>
        <div className={styles.right}>
          <div className={styles.fields}>
            <Field type="text" className={styles.field} placeholder="Enter First Name" name="firstName" defaultValue={firstName as string} />
            <Field type="text" className={styles.field} placeholder="Enter Last Name" name="lastName" defaultValue={lastName as string} />
            <Field type="text" className={styles.field} placeholder="Enter Middle Name" name="middleName" />
            <Field type="select" className={styles.field} placeholder="Select Age Range" name="ageRange" options={[]} />
            <Field type="text" className={styles.field} placeholder="Enter City" name="city" />
            <Field type="select" className={styles.field} placeholder={state as string || 'Select State'} name="state" defaultValue={state as string} options={CONSTANTS.STATES} />
            <Field type="phone" className={styles.field} placeholder="Enter Phone Number" name="phone" />
            <Field type="email" className={styles.field} placeholder="Enter Email" name="email" />
          </div>
          <Button format="Filled" label="Search Again" />
        </div>
      </div>
    </section>
  )
}
export default SearchAgain;