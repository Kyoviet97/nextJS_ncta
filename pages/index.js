import React, { Component, useEffect, useState } from 'react'
import styles from '../styles/Home.module.css'
import BannerSlide from '../component/BannerSlide'
import CreateListProduct from '../component/CreateListProduct'
import Head from "next/head";
import Request from "../network/Request"
import Api from "../network/Api"

const Home = ({ dataBanner }) => {
  const request = new Request();
  const [pianoData, setPianoData] = useState(false)
  const [EPianoData, setEPianoData] = useState(false)
  const [organData, setOrganData] = useState(false)
  const [guitarData, setGuitarData] = useState(false)

  //fell full data home
  useEffect(() => {
    getData()
  }, [])

  const getData = async () => {
    // //get list piano
    // var dataPiano = await request.get(Api.GET_PIANO_LIST)
    // setPianoData(dataPiano)

    // //get lisst e_piano
    // var dataEPiano = await request.get(Api.GET_E_PIANO_LIST)
    // setEPianoData(dataEPiano)

    // //get list organ
    // var dataOrgan = await request.get(Api.GET_ORGAN_LIST)
    // setOrganData(dataOrgan)

    // //get list guitar
    // var dataGuitar = await request.get(Api.GET_GUITAR_LIST)
    // setGuitarData(dataGuitar)

    var dataGuitar = await getImageFile("%2Fimage%2FScreenshot_20230830-103140_M%C3%A1y%20%E1%BA%A3nh.png")
    console.log("==================>>>>>dataGuitar ", dataGuitar);

  }

  const getImageFile = async (fileName) => {
    var dataResult = false
    var myHeaders = new Headers();
    myHeaders.append("accept-encoding", "");
    myHeaders.append("connection", "Keep-Alive");
    myHeaders.append("cookie", "ndus=YzJBS6yteHuinp3FLkfAkacnfKDJE9lEGVBTvNCK; STOKEN=dubox; ndut_fmt=6C5145FE8EA3698B176BD75121945C9CB40F22D88ADBEC36B4FB051C3CA76D86");
    myHeaders.append("host", "data.terabox.com");
    myHeaders.append("user-agent", "dubox;3.16.6;Pixel+3;android-android;13;JSbridge1.0.10;jointbridge;1.1.39;");

    var requestOptions = {
        method: 'GET',
        headers: myHeaders
    };

    await fetch(`https://data.terabox.com/rest/2.0/pcs/thumbnail?method=generate&path=${fileName}&quality=80&size=c1080_u1600&app_id=250528&devuid=7B9F7A039523CEAC496565061391F8ED%7CVLNAXOTTZ&uk=4399567897801&md5=aae93c0cbbb72dc1a5dc24c06c48dc18&thumbnail_token=4d38500f57f339b788220104a8a4bd92&firstlaunchtime=1693323758&firstlaunchtime=1693323758&clienttype=1&channel=android_13_Pixel%203_bd-dubox_1024074a&version=3.16.6&logid=MTY5MzM2NjU5MTQ5MSxmZTgwOjoyMTM2OmRmMGI6ZTg2ZjoyZTElcm1uZXRfZGF0YTAsNTc4MjY2&imgtype=small&rand=d7701c18dfe6f5d7af88c1c76de66b75104cab22&time=1693366591&apn_id=1_-1&carrier=45209vn_45202vn&cuid=7B9F7A039523CEAC496565061391F8ED%7CVLNAXOTTZ&network_type=wifi`, requestOptions)
        .then(response => response.json())
        .then(result => dataResult = result)
    return dataResult;
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
        <meta property="og:image" content="https://api.nhaccutrangan.com/image/style_voice.jpg" />
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
            src={'https://pianohouse.vn/image/catalog/products/grand-piano/boston/dan-grand-piano-boston-gp-156-pe-1.jpg'} />
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

//Funtion server get data banner
export async function getServerSideProps() {
  var dataBanner = {};
  try {
    // const resBanner = await fetch(`https://api.nhaccutrangan.com/api/Get_Banner`)
    // dataBanner = await resBanner.json()

    dataBanner = {data: [
        {link_post: "123456", image: "https://piecewisepiano.com/wp-content/uploads/2019/09/Why-Start-With-Piano-Featured-Image-1024x536.png"},
       {link_post: "123456", image: "https://piecewisepiano.com/wp-content/uploads/2019/09/Why-Start-With-Piano-Featured-Image-1024x536.png"}
    ]}
  } catch (error) { }
  return {
    props: { dataBanner },
  }
}

export default Home
