import React, { Component } from 'react'
import styles from '../styles/Footer.module.css'

const Footer = () => {
    const html = `<div class="fb-page" data-href="https://www.facebook.com/VALUEINFORLIFE" data-tabs="" data-width="" data-height="" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true"><blockquote cite="https://www.facebook.com/VALUEINFORLIFE" class="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/VALUEINFORLIFE">Sửa Chữa Mua Bán Piano-Organ Hà Nội</a></blockquote></div>`
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
