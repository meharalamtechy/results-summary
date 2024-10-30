import Head from 'next/head';
import ResultCard from '../components/ResultCard';
import styles from '../styles/ResultsCard.module.css';

export default function Home() {
  return (
    <div className={styles.containerMain}>
     
      <main >
      <Head>
        <title>Test Results</title>
      </Head>
        <ResultCard />
      </main>
    </div>
  );
}
