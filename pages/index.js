import React, { Component, useEffect, useState } from 'react'
import styles from '../styles/Home.module.css'
import BannerSlide from '../component/BannerSlide'
import CreateListProduct from '../component/CreateListProduct'
import Head from "next/head";
import Request from "../network/Request"
import Api from "../network/Api"
import big_banner from '../public/images/banner_big_1.png'


const Home = ({ dataBanner, pianoCategory, ePianoCategory, organCategory, guitarCategory}) => {
  const request = new Request();
  const [pianoData, setPianoData] = useState(false)
  const [ePianoData, setePianoData] = useState(false)
  const [organData, setOrganData] = useState(false)
  const [guitarData, setGuitarData] = useState(false)

  //fell full data home
  useEffect(() => {
    // console.log("================>>>>dataBanner ", dataBanner);
    console.log("================>>>>ePianoCategory ", ePianoCategory);
    getData()
  }, [])

  const getData = async () => {
    //get list piano
    setPianoData(pianoCategory.code == 200 ? pianoCategory.data : false)
    setePianoData(ePianoCategory.code == 200 ? ePianoCategory.data : false)
    setOrganData(organCategory.code == 200 ? organCategory.data : false)
    setGuitarData(guitarCategory.code == 200 ? guitarCategory.data : false)
  }



  //set Title category
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
      </Head>

      <div className={styles.main}>
        {dataBanner.code = 200 ?
          <div className={styles.bannerSlide}>
            <BannerSlide
              onClick={(link) => null}
              data={dataBanner.data} />
          </div> : null}
      </div>

      <CategoryTitle title={'Piano Cơ'} />
      <CreateListProduct type={'piano'} data={pianoData} />

      <CategoryTitle title={'Piano Điện'} />
      <CreateListProduct type={'piano'} data={ePianoData} />

      <CategoryTitle title={'Đàn Organ'} />
      <CreateListProduct type={'organ'} data={organData} />

      <CategoryTitle title={'Đàn Guitar'} />
      <CreateListProduct type={'guitar'} data={guitarData} />

      <div style={{ height: 50 }} />

    </div>
  )
}

//Funtion server get data banner
export async function getServerSideProps() {
  var dataBanner = [];
  var pianoCategory = [];
  var ePianoCategory = [];
  var organCategory = [];
  var guitarCategory = [];
  try {
    const resBanner = await fetch(`https://api.nhaccutrangan.com/api/web_api/banner`)
    dataBanner = await resBanner.json()

    const pianoCategoryApi = await fetch(`https://api.nhaccutrangan.com/api/web_api/piano_category`)
    pianoCategory = await pianoCategoryApi.json()

    const ePianoCategoryApi = await fetch(`https://api.nhaccutrangan.com/api/web_api/e_piano_category`)
    ePianoCategory = await ePianoCategoryApi.json()

    const organApiCategory = await fetch(`https://api.nhaccutrangan.com/api/web_api/organ_category`)
    organCategory = await organApiCategory.json()

    const guitarApiCategory = await fetch(`https://api.nhaccutrangan.com/api/web_api/guitar_category`)
    guitarCategory = await guitarApiCategory.json()


  } catch (error) { }
  return {
    props: { dataBanner, pianoCategory, ePianoCategory, organCategory, guitarCategory},
  }
}

export default Home

