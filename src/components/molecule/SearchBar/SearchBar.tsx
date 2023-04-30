import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import styles from './SearchBar.module.css';
import Button from 'atom/Button';
import Field from 'atom/Field';
import CONSTANTS from 'src/utils/constants';

export interface SearchTerms {
  firstName?: string,
  lastName?: string,
  state?: string,
}
export interface SearchBarProps {
  title:string;
  section?:boolean;
  defaults?: SearchTerms;
}

const SearchBar = ({title, section = false, defaults = {}}:SearchBarProps) => {
  const router = useRouter();
  const [searchTerms, setSearchTerms] = useState<SearchTerms>(defaults);
  const [canSearch, setCanSearch] = useState<boolean>(false);
  const [runSearch, setRunSearch] = useState<boolean>(false);

  const checkReady = ():boolean => {
    console.log(searchTerms);
    if (searchTerms?.state?.length > 0 && (searchTerms?.firstName?.length > 2 || searchTerms?.lastName?.length > 2)) {
      return true;
    }
    return false;
  }

  useEffect(() => {
    const _canSearch = (searchTerms?.state?.length > 0 && (searchTerms?.firstName?.length > 2 || searchTerms?.lastName?.length > 2));
    if (_canSearch && runSearch) {
      setRunSearch(false);
      router.push('/searching?firstName=' + searchTerms.firstName + '&lastName=' + searchTerms.lastName + '&state=' + searchTerms.state + '&page=1');
    }
  }, [searchTerms, runSearch, router]);

  const updateSearchTerms = (value:string, property:string) => {
    setSearchTerms({...searchTerms, [property]: value});
    if (checkReady()) {
      setCanSearch(true);
    } else {
      setCanSearch(false);
    }
  }

  return (
    <div className={styles.searchBar}>
      <div className={styles.container}>
        <div className={styles.title}>
          {section && <h1>{title}</h1>}
          {!section && <h3>{title}</h3>}
        </div>
        <div>
          <Field data-testid="search-firstName" type="text" name="firstName" placeholder="Enter Person's First Name" onChange={(e) => updateSearchTerms(e.target.value, 'firstName')} />
          <Field data-testid="search-lastName" type="text" name="lastName" placeholder="Enter Person's Last Name" onChange={(e) => updateSearchTerms(e.target.value, 'lastName')} />
          <Field data-testid="search-state" type="select" name="state" placeholder="Select State" onChange={(e) => updateSearchTerms(e.target.value, 'state')} options={CONSTANTS.STATES} />
          <Button data-testid="search-submit" className={styles.button} disabled={canSearch} label="Free Search" onClick={(e) => setRunSearch(true)} />
        </div>
      </div>
    </div>
  )
}
export default SearchBar;