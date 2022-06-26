import React, { Component } from 'react'
import styles from '../styles/Footer.module.css'
// import styles from '../styles/Footer.module.css'

const Footer = () => {
    //iFarme facebook PAGE
    const html = `<iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FVALUEINFORLIFE&tabs&width=340&height=130&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" width="340" height="130" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>`
    return (
        <div className={styles.main}>
            <div className={styles.topMain}>

                <div className={styles.mainTopChild}>
                    <div className={styles.imageContener}>
                        <img
                            className={styles.imageProducer}
                            src={'https://api.nhaccutrangan.com/image/brand_1.png'} />
                        <img
                            className={styles.imageProducer}
                            src={'https://api.nhaccutrangan.com/image/brand_2.png'} />

                        <img
                            className={styles.imageProducer}
                            src={'https://api.nhaccutrangan.com/image/brand_3.png'} />

                        <img
                            className={styles.imageProducer}
                            src={'https://api.nhaccutrangan.com/image/brand_4.png'} />

                    </div>

                    <div className={styles.support}>
                        <text className={styles.textFooter}>HỖ TRỢ KHÁCH HÀNG</text>
                        <text className={styles.textFooter}>SĐT: 0978756985</text>
                        <text className={styles.textFooter}>Email: Tranganintrument@gmail.com</text>
                        <text className={styles.textFooter}>Thời gian phục vụ: 8h-22h</text>
                    </div>
                </div>

                <div
                    className={styles.htmlViewer}
                    dangerouslySetInnerHTML={{
                        __html: html
                    }}></div>

            </div>
            <div className={styles.bottomMain}>
                <text className={styles.text}>Copyright (C) Nhạc Cụ Tràng An All Rights Reserved</text>
            </div>
        </div>
    )
}

export default Footer
