import React, { Component, useState, useEffect } from 'react'
import styles from '../../styles/Pages.module.css'
import CategoryPages from '../../component/CategoryPages'
import CreateListProduct from '../../component/CreateListProduct'
import Head from "next/head";

const Data = ({ dataTotal }) => {
    var listCatergory = ['Tất cả', 'Sample', 'Style, Voice', 'Sheet nhạc', 'Beat', 'Phần mềm']
    const [dataOrgan, setOrganData] = useState(dataTotal.data)

    const setOnFilter = (type) => {
        switch (type) {
            case 1:
                return onFilter('yamaha');
            case 2:
                return onFilter('korg');
            case 3:
                return onFilter('yamaha');
            case 4:
                return onFilter('casio');
            case 5:
                return onFilter('roland');
            case 6:
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

    const onClickLitener = (slug) => {
        switch (slug) {
            case 'sample':
                return window.location.assign('/chia-se-du-lieu-2')
        }
    }

    return (
        <div className={styles.rootMain}>
            <Head>
                <title>Nhạc Cụ Tràng An</title>
                <meta name="description" content="Chia sẻ dữ liệu làm show cho các dòng đàn"></meta>
                <meta property="og:title" content="Free dữ liệu hay"></meta>
                <meta property="og:description" content="Chia sẻ dữ liệu hay, đầy đủ cho các dòng đàn"></meta>
                <meta property="og:site_name" content="Nhạc Cụ Tràng An"></meta>
                <meta property="og:image" content="https://api.nhaccutrangan.com/image/banner_2.jpg"></meta>
            </Head>
            <div className={styles.main}>
                <div className={styles.mainLeft}>
                    <text className={styles.textHeader}>Danh mục</text>
                    <CategoryPages
                        listData={listCatergory} />
                </div>
                <div className={styles.mainRight}>
                    <text className={styles.textHeader}>Chia sẻ dữ liệu</text>
                    {dataOrgan.length > 0 ?
                        <CreateListProduct
                            onClick={(slug) => onClickLitener(slug)}
                            type={'organ'} data={dataOrgan} />
                        :
                        <text className={styles.textNotFound}>Không tìm thấy sản phẩm nào!</text>}
                </div>
            </div>
        </div>
    )
}

export async function getServerSideProps() {
    var dataTotal = {
        status: 200, data: [
            {
                name: 'Sample',
                price: 'Free',
                type: 'data',
                slug_link: 'sample',
                image: 'https://api.nhaccutrangan.com//image/sample_1.jpg'
            },
            {
                name: 'Style, Voice',
                price: 'Free',
                type: 'data',
                slug_link: 'style',
                image: 'https://api.nhaccutrangan.com//image/style_voice.jpg'
            },
            {
                name: 'Sheet Nhạc',
                price: 'Free',
                slug_link: 'sheet',
                image: 'https://api.nhaccutrangan.com//image/sheet_ic.jpg'
            },
            {
                name: 'Beat',
                price: 'Free',
                slug_link: 'beat',
                image: 'https://api.nhaccutrangan.com//image/beat_ic.jpg'
            },
            {
                name: 'Phần mềm',
                price: 'Free',
                slug_link: 'program',
                image: 'https://api.nhaccutrangan.com//image/program_ic.jpg'
            }
        ]
    }



    return {
        props: { dataTotal },
    }
}

export default Data