import React, { Component } from 'react'
import styles from '../styles/Home.module.css'
import BannerSlide from '../component/BannerSlide'
import CreateListProduct from '../component/CreateListProduct'
import Head from "next/head";

const Home = ({ dataBanner, dataPiano, dataEPiano, dataOrgan, dataGuitar }) => {
  console.log("======================>>>>dataEPiano ", dataEPiano);
  const CategoryTitle = (props) => {
    return (
      <div className={styles.mainTitle}>
        <div className={styles.titleMainView}>
          <div style={{ width: '100%', height: 1, backgroundColor: '#B90B0B' }}></div>
          <text className={styles.textTitle}>{props.title}</text>
        </div>
      </div>
    )
  }

  return (
    <div className={styles.rootMain}>
      <Head>
        <title>Nhạc Cụ Tràng An | Giá trị thực cho cuộc sống</title>
        <meta name="description" content="Mua đàn Piano giá tốt, sửa chữa Piano, Organ, Guitar Cung cấp các loại linh kiện cho đàn Piano, Organ và các loại nhạc cụ khác."></meta>
        <meta property="og:title" content="Nhạc cụ tràng an"></meta>
        <meta property="og:description" content="Mua bán, sửa chữa Piano, Organ... Uy tín, chất lượng"></meta>
        <meta property="og:site_name" content="Nhạc Cụ Tràng An"></meta>
        <meta property="og:image" content="https://api.nhaccutrangan.com//image/style_voice.jpg"></meta>
      </Head>

      <div className={styles.main}>
        {dataBanner ?
          <div className={styles.bannerSlide}>
            <BannerSlide
              onClick={(link) => alert(link)}
              data={dataBanner.data} />
          </div> : null}

        <div className={styles.topRight}>

          <img
            width={'90%'}
            style={{ borderRadius: 8, boxShadow: '1px 1px 5px #000000' }}
            src={'https://api.nhaccutrangan.com/image/banner_2.jpg'} />
        </div>

      </div>

      <CategoryTitle title={'Piano Cơ'} />
      <CreateListProduct type={'piano'} data={dataPiano.data} />

      <CategoryTitle title={'Piano Điện'} />
      <CreateListProduct type={'piano'} data={dataEPiano.data} />

      <CategoryTitle title={'Đàn Organ'} />
      <CreateListProduct type={'organ'} data={dataOrgan.data} />

      <CategoryTitle title={'Đàn Guitar'} />
      <CreateListProduct type={'guitar'} data={dataGuitar.data} />

      <div style={{ height: 50 }} />

    </div>
  )
}

export async function getServerSideProps(context) {
  var dataBanner = null;
  var dataPiano = null;
  var dataEPiano = null;
  var dataOrgan = null;
  var dataGuitar = null;
  try {
    const resBanner = await fetch(`https://api.nhaccutrangan.com/api/Get_Banner`)
    dataBanner = await resBanner.json()

    const resPiano = await fetch(`https://api.nhaccutrangan.com/api/Get_Piano_Category/getshort`)
    dataPiano = await resPiano.json()

    const resEPiano = await fetch(`https://api.nhaccutrangan.com/api/Get_Electric_Piano/getshort`)
    dataEPiano = await resEPiano.json()

    const resOrgan = await fetch(`https://api.nhaccutrangan.com/api/Get_Organ_Category/getshort`)
    dataOrgan = await resOrgan.json()

    const resGuitar = await fetch(`https://api.nhaccutrangan.com/api/Get_Guitar_Category/getshort`)
    dataGuitar = await resGuitar.json()
  } catch (error) { }
  return {
    props: { dataBanner, dataPiano, dataEPiano, dataOrgan, dataGuitar },
  }
}

export default Home
