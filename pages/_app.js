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
          <link rel="icon" type="ImageType" href="https://api.nhaccutrangan.com/image/piano.ico" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <script async defer src="https://connect.facebook.net/vi_VN/sdk.js#xfbml=1&version=v11.0&appId=729664794121020&autoLogAppEvents=1" nonce="GVdrlrv5"></script>
          <div id="fb-root"></div>
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
