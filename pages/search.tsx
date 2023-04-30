import Head from 'next/head'
import { useRouter } from 'next/router'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import Header from 'molecule/Header'
import Footer from 'molecule/Footer'
import Results from 'src/product/SRP/Results'
import SearchAgain from 'src/product/SRP/SearchAgain'

const results = [
  {id:0, name: 'John Doe', age: 40, locations: ['New York'], associates: ['Golf', 'Hiking', 'Fishing']},
  {id:1, name: 'Jane Doe', age: 40, locations: ['New York'], associates: ['Golf', 'Hiking', 'Fishing']},
  {id:2, name: 'John Doe', age: 40, locations: ['New York'], associates: ['Golf', 'Hiking', 'Fishing']},
  {id:3, name: 'Jane Doe', age: 40, locations: ['New York'], associates: ['Golf', 'Hiking', 'Fishing']},
  {id:4, name: 'John Doe', age: 40, locations: ['New York'], associates: ['Golf', 'Hiking', 'Fishing']},
  {id:5, name: 'Jane Doe', age: 40, locations: ['New York'], associates: ['Golf', 'Hiking', 'Fishing']},
  {id:6, name: 'John Doe', age: 40, locations: ['New York'], associates: ['Golf', 'Hiking', 'Fishing']},
  {id:7, name: 'Jane Doe', age: 40, locations: ['New York'], associates: ['Golf', 'Hiking', 'Fishing']},
  {id:8, name: 'John Doe', age: 40, locations: ['New York'], associates: ['Golf', 'Hiking', 'Fishing']},
  {id:9, name: 'Jane Doe', age: 40, locations: ['New York'], associates: ['Golf', 'Hiking', 'Fishing']},
]

const Search = () => {
  const { query } = useRouter();
  const { firstName, lastName, state } = query;
  const target = `${firstName || ''} ${lastName || ''}`;

  return (
    <>
      <Head>
        <title>Next POC</title>
      </Head>
      <Header />
      <main className={styles.searchPage}>
        <Results target={target} results={results} />
        <SearchAgain
          title="Didn't find who you are looking for?"
          byline="Refine your search using these search tips:"
          recommendations={[
            "Double check your spelling",
            "Try entering their maiden name",
            "Try entering their middle name",
            "Narrow your search by adding a city"
          ]}
        />
      </main>
      <Footer />
    </>
  )
}
export default Search;