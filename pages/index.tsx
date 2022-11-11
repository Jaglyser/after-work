import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
// @ts-ignore
import ReactRotatingText from 'react-rotating-text'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>UNQUO Hackathon</title>
        <meta name="description" content="UNQUO Hackathon" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          <ReactRotatingText items={['November 25th', 'Hackathon', 'by UNQUO']} />
        </h1>
      </main>

    </div>
  )
}
