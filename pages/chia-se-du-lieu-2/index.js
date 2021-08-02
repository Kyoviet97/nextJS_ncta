import React, { Component } from 'react'
import styles from '../../styles/Data.module.css'
import Head from "next/head";

const Sample = () => {
    const htmlView = `<p>&nbsp;</p>
    <p>Những Sample n&agrave;y của một số Studio nổi tiếng như MLA, KBN, L&ecirc; Nh&acirc;m, Psm team&hellip; Những Sample n&agrave;y để phục vụ cho những bạn hạn hẹp về kinh tế hoặc d&ugrave;ng thử để cảm nhận. Do chỉ l&agrave; Sample gh&eacute;p, rec n&ecirc;n thường kh&ocirc;ng được sạch.</p>
    <p>Để sử dụng Sample ch&iacute;nh h&atilde;ng, Sample sạch sẽ gi&uacute;p bạn tăng cảm hứng trong mỗi bản nhạc h&atilde;y li&ecirc;n hệ cho ch&uacute;ng t&ocirc;i. Nhạc cụ Tr&agrave;ng An sẽ gi&uacute;p bạn l&agrave;m chủ những bộ Sample ch&iacute;nh gốc, hỗ trợ update cập nhật style, bank&hellip;.Hơn nữa nếu mua đ&agrave;n organ mới tại nhạc cụ Tr&agrave;ng An bạn sẽ được tặng miễn ph&iacute; những bộ Sample hot nhất, mới nhất, hỗ trợ nhiều nhất.</p>
    <p>Link nhanh Google Driver kh&ocirc;ng quảng c&aacute;o, kh&ocirc;ng virut.</p>
    <font color="red" size="5"><p>Sample yep cho 750 &ndash; 950</p></font>
    <p>MLA V7 + KBN V7:&nbsp;<a href="https://drive.google.com/open?id=1jHm_6Ay75i3oMgj9Zy6LDtYskDnSc-mb">Tải về</a></p>
    <p>KBN + MLA:&nbsp;<a href="https://drive.google.com/open?id=1GpR9WrJxkWYVD-YRRi6SIwYLDQjcdf-T">Tải về</a></p>
    <p>MLA V7 + L&ecirc; Nh&acirc;m V2 full voice + style:&nbsp;<a href="https://drive.google.com/open?id=0B7oPf1FTZPQ0T2U5SXdRbmdzeDQ">Tải về</a></p>
    <p>V6 KBN + Tiếng MLA:&nbsp;<a href="https://drive.google.com/open?id=1cBKxI_H7YnQJr5s6TEAOGRZII1saCxeI">Tải về</a></p>
    <p>KBN 6.1 + Style:&nbsp;<a href="https://drive.google.com/open?id=0B7oPf1FTZPQ0TUNoblRuNVIwZ1k">Tải về</a></p>
    <p>KBN 6.1 + MLA V5 + Style full:&nbsp;<a href="https://drive.google.com/open?id=0B7oPf1FTZPQ0cFJVTzVGNTFXTmc">Tải về</a></p>
    <p>L&ecirc; Nh&acirc;m chỉ Sample kh&ocirc;ng Style:&nbsp;<a href="https://drive.google.com/open?id=1j4Zdj_arNBy_9hxRGBTgBNHDde-MSHN0">Tải về</a></p>
    <p>L&ecirc; Nh&acirc;m 2 chỉ Sample kh&ocirc;ng Style:&nbsp;<a href="https://drive.google.com/open?id=0B7oPf1FTZPQ0YWJrT0FsQVJ3R3M">Tải về</a></p>
    <p>Sample PSM + Style:&nbsp;<a href="https://drive.google.com/open?id=1wEiQeS9V7YTGd80_qvj6asjuDDR0_mr9">Tải về</a></p>
    <p>Sample MLA V2 + V3 + V5 Bank +&nbsp; Voice:&nbsp;<a href="https://drive.google.com/open?id=0B7oPf1FTZPQ0ck1KeEF6WlFZaU0">Tải về</a></p>
    <font color="red" size="5"><p>Sample + Style cho 670 &ndash; 770 &ndash; 970</p></font>
    <p>Sample + Style: 770 TN3.1 v&agrave; KBN v7:&nbsp;<a href="https://drive.google.com/open?id=1SFwCM-ZPnQhnuAVs_1GItgJMzC5hoGfT">Tải về</a></p>
    <p>Sample + Style: 970 TN3.1 v&agrave; KBN v7:&nbsp;<a href="https://drive.google.com/open?id=1nHZvt349SytNOTCxsD_AwEmqtAAO7cz-">Tải về</a></p>
    <p>Sample MLA V5 + Style:&nbsp;<a href="https://drive.google.com/open?id=19pBJttJJTbDbRWzVjM-1BgyVH5LnDta6">Tải về</a></p>
    <p>Sample 770 L&ecirc; Nh&acirc;m:&nbsp;<a href="https://drive.google.com/open?id=0B7oPf1FTZPQ0TFFhUjZsaF9ndW8">Tải về</a></p>
    <p>Sample MLA V3 MLA chỉ sample:&nbsp;<a href="https://drive.google.com/open?id=0B7oPf1FTZPQ0MkttcHBpUE96bGs">Tải về</a></p>
    <p>Sample 970 MLA V5 + Style + Bank:&nbsp;<a href="https://drive.google.com/open?id=1_szwmfSTahy6WMLmP3EdIHMdY3WmstUS">Tải về</a></p>
    <font color="red" size="5"><p>Sample + Style cho 775 &ndash; 975</p></font>
    <p>Sample + Style: 775 TN3.1 v&agrave; KBN v7:&nbsp;<a href="https://drive.google.com/file/d/1DWq6Nnp8hbXXbdCzL8rnG1KAHiVNQJXH/view">Tải về</a></p>
    <p>Sample + Style: 975 TN3.1 v&agrave; KBN v7:&nbsp;<a href="https://drive.google.com/file/d/1f2bx3LG2VB6toZFfh_0NS1aPtAB1M5uj/view">Tải về</a></p>
    <font color="red" size="5"><p>File PPF chO 770 &ndash; 970</p></font>
    <p>PPF 770 MLA V5:&nbsp;<a href="https://drive.google.com/open?id=1OovURup8P_SzMj4d8xu47vQ8fwv6HRds">Tải về</a></p>
    <p>PPF 970 MLA V5:&nbsp;<a href="https://drive.google.com/open?id=1V0kwnBxYbKdQzKJ_rbvBnm9K3nRE8Rxc">Tải về</a></p>
    <p>PPF MLA V7:&nbsp;<a href="https://drive.google.com/open?id=14VDFsx7RKis_7p_q7kRC6uQ9PLqD225G">Tải về</a></p>
    <p>Tr&ecirc;n đ&acirc;y l&agrave; những file Sample do ch&uacute;ng t&ocirc;i tổng hợp v&agrave; chia sẻ lại. Mọi đường link đều sạch, kh&ocirc;ng virut, kh&ocirc;ng quảng c&aacute;o, tốc độ download nhanh.&nbsp;</p>
    <p>Nhạc cụ Tr&agrave;ng An th&acirc;n gửi!</p>`

    return (
        <div className={styles.mainShareSample}>
            <Head>
                <title>Nhạc Cụ Tràng An</title>
                <meta name="description" content="Chia sẻ sample cho yamaha s975, s995, s990, s970, s670..."></meta>
                <meta property="og:title" content="Chia sẻ sample cho Yamaha"></meta>
                <meta property="og:description" content="Chia sẻ sample hay cho dòng đàn yamaha"></meta>
                <meta property="og:site_name" content="Nhạc Cụ Tràng An"></meta>
                <meta property="og:image" content="https://api.nhaccutrangan.com/image/banner_2.jpg"></meta>
            </Head>
            <div
                className={styles.htmlViewer}
                dangerouslySetInnerHTML={{
                    __html: htmlView
                }}></div>
        </div>
    )
}

export default Sample
