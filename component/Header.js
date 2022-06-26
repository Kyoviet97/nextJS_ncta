import React, { Component, useState } from 'react'
import styles from '../styles/Header.module.css'
import Image from 'next/image'
import profilePic from '../public/images/logo.png'
import menuIcon from '../public/images/menu.svg'
import searchIcon from '../public/images/icon_search.svg'
import cartIcon from '../public/images/icon_cart.svg'
import { useRouter } from 'next/router'
// import { useRouter } from 'next/router'
// import { useRouter } from 'next/router'

const Header = () => {
    const router = useRouter()
    const [showMenu, setShowMenu] = useState(false)

    const ViewIconMenuLanger = (props) => {
        return (
            <div
                className={showMenu ? styles.menuLanger : styles.menuLangerHide}
                onClick={() => clickMenuMobile(props.lable)}>
                <text className={styles.titleMenuLanger}>{props.title}</text>
            </div>
        )
    }

    const clickMenuMobile = (props) => {
        setShowMenu(false)
        setTimeout(() => {
            window.location.assign(`/${props}`)
        }, 300)
    }

    return (
        <div
            className={styles.main}>

            <div className={styles.imageLogo}>
                <Image
                    src={profilePic} />
            </div>

            <div className={styles.mainMenu}>
                <text onClick={() => window.location.assign('/')} className={styles.titleItemMenu}>TRANG CHỦ</text>
                <text onClick={() => window.location.assign('/piano')} className={styles.titleItemMenu}>ĐÀN PIANO</text>
                <text onClick={() => window.location.assign('/organ')} className={styles.titleItemMenu}>ĐÀN ORGAN</text>
                <text onClick={() => window.location.assign('/tools')} className={styles.titleItemMenu}>LINH KIỆN</text>
                <text onClick={() => window.location.assign('/chia-se-du-lieu')} className={styles.titleItemMenu}>CHIA SẺ DỮ LIỆU</text>
            </div>

            <div className={styles.mainMenuMobie}>
                <div
                    onClick={() => setShowMenu(!showMenu)}
                    style={{ display: 'flex', justifyContent: 'center', paddingTop: 4, marginRight: 16 }}>
                    <Image
                        width={26}
                        height={26}
                        src={menuIcon} />
                </div>
                <div
                    className={styles.searchInput}>
                    <Image
                        width={20}
                        height={14}
                        src={searchIcon} />
                    <text className={styles.titleSearchText}>Bạn đang tìm kiếm gì</text>
                </div>

                <div style={{ display: 'flex', justifyContent: 'center', paddingTop: 4, marginRight: 4 }}>
                    <Image
                        width={26}
                        height={26}
                        src={cartIcon} />
                </div>

            </div>

            <div
                className={!showMenu ? styles.menuMobile : styles.menuMobileOpen}>
                <ViewIconMenuLanger title={'Trang Chủ'} lable={''} />
                <ViewIconMenuLanger title={'Đàn Piano'} lable={'piano'} />
                <ViewIconMenuLanger title={'Đàn Organ'} lable={'organ'} />
                <ViewIconMenuLanger title={'Linh Kiện'} lable={'tools'} />
                <ViewIconMenuLanger title={'Dữ Liệu'} lable={'chia-se-du-lieu'} />
            </div>

        </div>
    )
}

export default Header
