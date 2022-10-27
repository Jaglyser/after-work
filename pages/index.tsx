import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
// @ts-ignore
import ReactRotatingText from 'react-rotating-text'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Secret ninjas afterwork</title>
        <meta name="description" content="secret ninjas afterwork" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          <ReactRotatingText items={['Afterwork', 'Tonight', 'With the Secret Ninjas']} />
        </h1>
      </main>

    </div>
  )
}
