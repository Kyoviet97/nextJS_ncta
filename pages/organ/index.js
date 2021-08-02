import React, { Component, useState, useEffect } from 'react'
import styles from '../../styles/Pages.module.css'
import CategoryPages from '../../component/CategoryPages'
import CreateListProduct from '../../component/CreateListProduct'
import Head from "next/head";

const Organ = ({ dataTotal }) => {
    var listCatergory = ['Tất cả sản phẩm', 'Organ Yamaha', 'Organ Korg', 'Organ Casio', 'Organ Roland', 'Organ Khác']
    const [dataOrgan, setOrganData] = useState(dataTotal.data)

    const setOnFilter = (type) => {
        switch (type) {
            case 1:
                return onFilter('yamaha');
            case 2:
                return onFilter('korg');
            case 3:
                return onFilter('casio');
            case 4:
                return onFilter('roland');
            case 5:
                return onFilter('other');
            default:
                return onFilter('all');
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
        // console.log(" ============================newList: ", newList)
        setOrganData(newList)
    }

    return (
        <div className={styles.rootMain}>
            <Head>
                <title>Nhạc Cụ Tràng An</title>
                <meta name="description" content="Cung cấp Organ... giá cả hợp lý, bảo hành dài lâu"></meta>
                <meta property="og:title" content="Mua đàn Organ giá tốt tại HN"></meta>
                <meta property="og:description" content="Mua đàn Organ giá tốt tại HN"></meta>
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
                    <text className={styles.textHeader}>Đàn Organ</text>
                    {dataOrgan.length > 0 ?
                        <CreateListProduct type={'organ'} data={dataOrgan} />
                        :
                        <text className={styles.textNotFound}>Không tìm thấy sản phẩm nào!</text>}
                </div>
            </div>
        </div>
    )
}

export async function getServerSideProps() {
    const resPiano = await fetch(`https://api.nhaccutrangan.com/api/Get_Organ_Category`)
    var dataTotal = await resPiano.json()

    return {
        props: { dataTotal },
    }
}

export default Organ