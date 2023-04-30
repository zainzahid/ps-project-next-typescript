import {useState} from 'react';
import Image from 'next/image';
import Field from 'atom/Field';
import styles from './Results.module.css';
import Button from 'atom/Button';
import ExpandList from 'atom/ExpandList';
import { useRouter } from 'next/router';

export interface SearchResult {
  id:string|number;
  name:string;
  age?:number;
  locations?:string[];
  associates?:string[];
}

export interface ResultsProps {
  results:SearchResult[];
  target:string;
}

const Results = ({results,target}:ResultsProps) => {
  const router = useRouter();
  const [page, setPage] = useState(1);
  const pageSize = 10;

  const showMore = () => {
    setPage(page + 1);
  }

  const research = (result:SearchResult) => {
    const segs = result.name.split(' ');
    router.push({
      pathname: '/research',
      query: { firstName: segs[0], lastName: segs[segs.length - 1], location: result?.locations?.[0] || '', age: result?.age || null, id: result.id },
    })
  }

  const signup = (result:SearchResult) => {
    router.push(`/signup?name=${result.name}&id=${result.id}`)
  }

  return (
    <section className={styles.results}>
      <div className={styles.heading}>
        <Image alt="We found something!" src="/img/icons/Checkmark.svg" height={64} width={82} className={styles.check} /><h1>Great News! We found {results.length} results for <span className={styles.orange}>{target}</span></h1>
      </div>
      <div className={styles.sortByContainer}>
        <div className={styles.sortBy}>
          <label htmlFor="sortBy">Sort By:</label>
          <Field type="select" name="sortBy" placeholder="Relevance" className={styles.sortBySelect} options={[
              {value:'relevance',label:'Relevance'},
              {value:'name',label:'Name'},
              {value:'age',label:'Age'},
            ]} 
          />
        </div>
      </div>
      <div className={styles.headers}>
        <div className={styles.header}>Name &amp; Age</div>
        <div className={styles.header}>Locations</div>
        <div className={styles.header}>Possible Relatives</div>
        <div className={styles.header}>View Report</div>
      </div>
      <div className={styles.resultList}>
        {results.map((result, i) => {
          if (i >= (page * pageSize)) return null;
          const hasLocations = result?.locations?.length > 0;
          const hasAssociates = result?.associates?.length > 0;
          
          return (
          <div key={result.id} className={styles.result}>
            <div className={styles.name} onClick={(e) => research(result)}>{result.name}, {result?.age || ''}</div>
            <div className={styles.locations}>
            <Image src="/img/icons/Pin.svg" alt="Locations" height={32} width={24} className={styles.icon} />
              {hasLocations && (<ExpandList items={result.locations} display={2} />)}
              {!hasLocations && (<div>None Available</div>)}
              </div>
            <div className={styles.relatives}>
              <Image src="/img/icons/Relatives.svg" alt="Relatives" height={32} width={32} className={styles.icon} />
              {hasAssociates && (<ExpandList items={result.associates} display={2} />)}
              {!hasAssociates && (<div>None Available</div>)}
              </div>
            <div className={styles.viewReport}>
              <Button format="Filled" label="View Report" onClick={(e) => research(result)} />
            </div>
          </div>)
        })}
      </div>
      <div className={styles.pagination}>
        {results?.length + 1 > (page * pageSize) && (
          <div className={styles.showMore} onClick={showMore}>
            Show More <Image src="/img/icons/arrow-down.svg" alt="Show More" height={16} width={14} />
          </div>
        )}
      </div>
    </section>
  )
}
export default Results;