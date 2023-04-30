import Head from 'next/head';
import { Inter } from '@next/font/google';
import styles from '../styles/Home.module.css';
import Header from 'molecule/Header';
import Footer from 'molecule/Footer';
import { CardGrid } from 'molecule/Card';
import Hero from 'molecule/Hero';
import SearchBar from 'molecule/SearchBar';

const inter = Inter({ subsets: ['latin'] })

const cards = [
  { title:'Date Safely', imageUrl:'/img/date-safely.webp', callouts:['Protect yourself from catfishers and scammers', 'Find out if they\'re lying about being divorced', 'Reveal secret social media accounts or criminal records'] },
  { title:'Find Criminal Records', imageUrl:'/img/criminal-lookup.webp', callouts:['Keep your family safe from criminals', 'Discover sex offenders in your life','Reveal if someone you know has a dangerous and violent past']},
  { title:'Neighbor Lookup', imageUrl:'/img/break-in.webp', callouts:['Background check suspicious neighbors','Protect your children from nearby sex offenders','Find out if anyone that lives near you has a history of violence']},
  { title:'Search Yourself', imageUrl:'/img/search-yourself.webp',callouts:['See what information people can find about you on the internet','Can someone easily find out where you live?','Protect yourself and your family from stalkers']}
];

const Home = () => {
  return (
    <>
      <Head>
        <title>Next POC</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className={styles.main}>
        <section>
          <div className={styles.container}>
            <Hero
              title="Find Information on Anyone"
              byline="Millions of satisfied customers have trusted us with their confidential searches"
              image="/img/magnifine-glass.webp"
            />
            <div className={styles.heroSpacer} />
            <SearchBar
              title="Find Criminal Records, Bankruptcies, Social Media Accounts, Online Photos, Contact Info and More!"
            />
          </div>
        </section>
        <section>
          <div className={`${styles.cardSection} ${styles.container}`}>
            <h1 className={styles.title}>About Us</h1>
            <p>WI was founded by an expert team of data scientists and engineers with 30+ years of combined experience delivering public record information via the Internet. Our goal is total customer satisfaction. We search over 12 billion public records from thousands of sources to create accurate, comprehensive reports on almost anyone in the USA. Our specialty is running background checks, searching criminal records, and digging up hidden information on the dark web - all so you know the deep truth about the people in your life. Look up new romances, old class mates, annoying neighbors, strange coworkers, friends, and relatives. Assure the safety of yourself and your loved ones with our 100% guaranteed anonymous searches.</p>
          </div>
        </section>
        <section className={`${styles.shaded}`}>
          <div className={styles.container}>
            <h1 className={styles.title}>Most Popular Uses</h1>
            <CardGrid cards={cards} />
          </div>
        </section>
        <section className={styles.altShaded}>
          <div className={styles.container}>
            <SearchBar section={true} title="Search now for instant results!" />
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
export default Home;