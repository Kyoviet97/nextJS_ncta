import React, { Component, useState, useEffect } from 'react'
import styles from '../../styles/Pages.module.css'
import CategoryPages from '../../component/CategoryPages'
import CreateListProduct from '../../component/CreateListProduct'
import Head from "next/head";

const Piano = ({ dataTotal }) => {
    var listCatergory = ['Tất cả sản phẩm', 'Piano cơ', 'Piano điện', 'Piano Yamaha', 'Piano Casio', 'Piano Kawai', 'Piano Roland']
    const [dataPiano, setPianoData] = useState(dataTotal.data)

    const setOnFilter = (type) => {
        switch (type) {
            case 1:
                return onFilter('piano_co');
            case 2:
                return onFilter('e_piano');
            case 3:
                return onFilter('yamaha');
            case 4:
                return onFilter('casio');
            case 5:
                return onFilter('kawai');
            case 6:
                return onFilter('roland');
            default:
                return onFilter('all');
        }

    }

    const onFilter = (producer) => {
        if (producer == 'all') {
            setPianoData(dataTotal.data)
            return
        }

        if (producer == 'piano_co') {
            var newList = []
            dataTotal.data.map((item) => {
                { item.type == 'piano' && newList.push(item) }
            })
            setPianoData(newList)
            return
        }

        if (producer == 'e_piano') {
            var newList = []
            dataTotal.data.map((item) => {
                { item.type == 'electricpiano' && newList.push(item) }
            })
            setPianoData(newList)
            return
        }

        var newList = []
        dataTotal.data.map((item) => {
            { item.producer == producer && newList.push(item) }
        })
        console.log(" ============================newList: ", newList)
        setPianoData(newList)
    }

    return (
        <div className={styles.rootMain}>
            <Head>
                <title>Nhạc Cụ Tràng An</title>
                <meta name="description" content="Cung cấp Piano cơ, Piano điện... giá cả hợp lý, bảo hành dài lâu"></meta>
                <meta property="og:title" content="Mua đàn Piano giá tốt"></meta>
                <meta property="og:description" content="Cung cấp Piano cơ, Piano điện..."></meta>
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
                    <text className={styles.textHeader}>Đàn Piano</text>
                    {dataPiano.length > 0 ?
                        <CreateListProduct type={'piano'} data={dataPiano} />
                        :
                        <text className={styles.textNotFound}>Không tìm thấy sản phẩm nào!</text>}
                </div>
            </div>
        </div>
    )
}

export async function getServerSideProps(context) {
    var dataTotal = { status: 200, message: 'success', data: [] }

    const resPiano = await fetch(`https://api.nhaccutrangan.com/api/Get_Piano_Category`)
    var dataPiano = await resPiano.json()

    const resEPiano = await fetch(`https://api.nhaccutrangan.com/api/Get_Electric_Piano`)
    var dataEPiano = await resEPiano.json()

    if (dataPiano.status == 200 && dataEPiano.status == 200) {
        var data = [...dataPiano.data, ...dataEPiano.data]
        var dataTotal = { status: 200, message: 'success', data: data }
    }
    return {
        props: { dataPiano, dataTotal },
    }
}

export default Piano