import Head from 'next/head'
import styles from '../styles/Home.module.css'
//@ts-ignore
import ReactRotatingText from 'react-rotating-text'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>matilda usterud</title>
        <meta name="description" content="matilda usterud" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          <ReactRotatingText items={['usterud.se', 'coming soon']} />
        </h1>
      </main>

    </div>
  )
}
