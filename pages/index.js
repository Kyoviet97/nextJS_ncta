import React, { Component, useEffect, useState } from 'react'
import styles from '../styles/Home.module.css'
import BannerSlide from '../component/BannerSlide'
import CreateListProduct from '../component/CreateListProduct'
import Head from "next/head";
import Request from "../network/Request"

const Home = ({ dataBanner }) => {
  const request = new Request();
  const [pianoData, setPianoData] = useState(false)
  const [EPianoData, setEPianoData] = useState(false)
  const [organData, setOrganData] = useState(false)
  const [guitarData, setGuitarData] = useState(false)

  useEffect(() => {
    getData()
  }, [])

  const getData = async () => {
    var dataPiano = await request.get('https://api.nhaccutrangan.com/api/Get_Piano_Category/getshort')
    setPianoData(dataPiano)

    var dataEPiano = await request.get('https://api.nhaccutrangan.com/api/Get_Electric_Piano/getshort')
    setEPianoData(dataEPiano)

    var dataOrgan = await request.get('https://api.nhaccutrangan.com/api/Get_Organ_Category/getshort')
    setOrganData(dataOrgan)

    var dataGuitar = await request.get('https://api.nhaccutrangan.com/api/Get_Guitar_Category/getshort')
    setGuitarData(dataGuitar)

  }


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
        <meta name="description" content="Mua đàn Piano giá tốt, sửa chữa Piano, Organ, Guitar Cung cấp các loại linh kiện cho đàn Piano, Organ và các loại nhạc cụ khác" />
        <meta property="og:title" content="Nhạc cụ tràng an" />
        <meta property="og:description" content="Mua bán, sửa chữa Piano, Organ... Uy tín, chất lượng" />
        <meta property="og:site_name" content="Nhạc Cụ Tràng An" />
        <meta property="og:image" content="https://api.nhaccutrangan.com//image/style_voice.jpg" />
      </Head>

      <div className={styles.main}>
        {dataBanner ?
          <div className={styles.bannerSlide}>
            <BannerSlide
              onClick={(link) => null}
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
      <CreateListProduct type={'piano'} data={pianoData.data} />

      <CategoryTitle title={'Piano Điện'} />
      <CreateListProduct type={'piano'} data={EPianoData.data} />

      <CategoryTitle title={'Đàn Organ'} />
      <CreateListProduct type={'organ'} data={organData.data} />

      <CategoryTitle title={'Đàn Guitar'} />
      <CreateListProduct type={'guitar'} data={guitarData.data} />

      <div style={{ height: 50 }} />

    </div>
  )
}

export async function getServerSideProps() {
  var dataBanner = {};
  try {
    const resBanner = await fetch(`https://api.nhaccutrangan.com/api/Get_Banner`)
    dataBanner = await resBanner.json()
  } catch (error) { }
  return {
    props: { dataBanner },
  }
}

export default Home
