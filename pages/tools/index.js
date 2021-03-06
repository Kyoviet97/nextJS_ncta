import React, { Component, useState, useEffect } from 'react'
import styles from '../../styles/Pages.module.css'
import CategoryPages from '../../component/CategoryPages'
import CreateListProduct from '../../component/CreateListProduct'
import Head from "next/head";


const Tools = ({ dataTotal }) => {
    var listCatergory = ['Tất cả sản phẩm']
    const [dataOrgan, setOrganData] = useState(dataTotal.data)

    const setOnFilter = (type) => {
        switch (type) {
        }

    }

    const onFilter = (producer) => {
        if (producer == 'all') {
            setOrganData(dataTotal.data)
            return
        }

        var newList = []
        dataTotal.data.map((item) => {
            { item.producer == producer && newList.push(item) }
        })
        setOrganData(newList)
    }

    return (
        <div className={styles.rootMain}>
            <Head>
                <title>Nhạc Cụ Tràng An</title>
                <meta name="description" content="Lnh kiện, phụ kiện giá tốt"></meta>
                <meta property="og:title" content="Cung cấp linh kiện, phụ kiện"></meta>
                <meta property="og:description" content="Tự hào là đơn vị cung cấp linh kiện, phụ kiện cho các dòng đàn"></meta>
                <meta property="og:site_name" content="Nhạc Cụ Tràng An"></meta>
                <meta property="og:image" content="https://api.nhaccutrangan.com/image/banner_2.jpg"></meta>
            </Head>
            <div className={styles.main}>
                <div className={styles.mainLeft}>
                    <text className={styles.textHeader}>Danh mục</text>
                    <CategoryPages
                        onClick={(index) => setOnFilter(index)}
                        listData={listCatergory} />
                </div>
                <div className={styles.mainRight}>
                    <text className={styles.textHeader}>Linh - Phụ kiện</text>
                    {dataOrgan.length > 0 ?
                        <CreateListProduct type={'tools'} data={dataOrgan} />
                        :
                        <text className={styles.textNotFound}>Không tìm thấy sản phẩm nào!</text>}
                </div>
            </div>
        </div>
    )
}

export async function getServerSideProps() {
    const resPiano = await fetch(`https://api.nhaccutrangan.com/api/Get_Tools_Category`)
    var dataTotal = await resPiano.json()

    return {
        props: { dataTotal },
    }
}

export default Tools