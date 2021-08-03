import '../styles/globals.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import styles from '../styles/App.module.css'
import Head from "next/head";
import Header from '../component/Header'
import Footer from '../component/Footer'


function MyApp({ Component, pageProps }) {
  return (
    <div className={styles.rootMain}>
      <div className={styles.main}>
        <Head>
          <meta name="theme-color" content="#0084ff" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <Header
          onClick={(data) => alert(data)} />
        <div className={styles.mainContent}>
          <Component {...pageProps} />
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default MyApp
