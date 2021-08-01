import React, { Component } from 'react'
import styles from '../../styles/DetailProduct.module.css'
import Head from "next/head";
import Image from 'next/image'

const Detail = ({ data }) => {
  if (data.status != 200) {
    return (
      <>
        <text>Không tìm thấy sản phẩm</text>
      </>
    )
  }
  return (
    <div className={styles.rootMain}>
      <Head>
        <title>{data.data.name}</title>
        <meta name="description" content={data.data.short_description}></meta>
        <meta property="og:title" content={data.data.name}></meta>
        <meta property="og:description" content={data.data.short_description}></meta>
        <meta property="og:site_name" content="Nhạc Cụ Tràng An"></meta>
        <meta property="og:image" content={data.data.image}></meta>
      </Head>
      <div className={styles.mainInfoTop}>

        <img
          className={styles.imageProduct}
          src={data.data.image}></img>

        <div className={styles.statusProduct}>
          <text className={styles.titleProduct}>{data.data.name}</text>
          <text className={styles.textInfoProduct}>Giá cả: {data.data.price}</text>
          <text className={styles.textInfoProduct}>Tình trạng: {data.data.status}</text>
          <text className={styles.textInfoProduct}>Thông tin: {data.data.long_description}</text>
        </div>

        <div className={styles.otherInfomation}>
          <text className={styles.textOtherInfomation}>GIAO HÀNG TOÀN QUỐC</text>
          <text className={styles.textOtherInfomation}>CAM KẾT CHÍNH HÃNG</text>
          <text className={styles.textOtherInfomation}>AN TÂM BẢO HÀNH</text>
          <text className={styles.textOtherInfomation}>HỖ TRỢ KỸ THUẬT</text>
          <text className={styles.textOtherInfomation}>THANH TOÁN ONLINE</text>

          <div style={{ width: '100%', height: 1, backgroundColor: '#00000033', marginTop: 10, marginBottom: 10 }} />

          <text className={styles.textOtherInfomationCall}>Gọi điện để được tư vấn</text>
          <text className={styles.textOtherInfomationPhone}>0978.756.985</text>
        </div>

      </div>

      <div
        className={styles.htmlViewer}
        dangerouslySetInnerHTML={{
          __html: data.data.post_content
        }}></div>

    </div>
  )
}


export async function getServerSideProps(context) {
  var data = { status: 203 }
  var slug = context.params.slug
  var type = slug.split('-')[0]
  var product = slug.replace(type + '-', '')
  const res = await fetch(`https://api.nhaccutrangan.com/api/Get_Detail_Product?type=${type}&product=${product}`)
  data = await res.json()

  return {
    props: { data },
  }
}

export default Detail
