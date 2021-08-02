import React, { Component } from 'react'
import styles from '../styles/Product.module.css'

const CardProduct = ({ data, type, onClick }) => {
    const renderSwitch = (param, image) => {
        switch (param) {
            case 'piano':
                return <img
                    className={styles.imgProductPiano}
                    src={image} />;

            case 'organ':
                return <img
                    className={styles.imgProduct}
                    src={image} />;

            case 'guitar':
                return <img
                    className={styles.imgProductGuitar}
                    src={image} />;

            default:
                return <img
                    className={styles.imgProductPiano}
                    src={image} />;
        }
    }

    return (
        <div
            onClick={() => onClick ? onClick(data.slug_link) : window.location.assign(`/detail/${data.type}-${data.slug_link}`)}
            className={styles.mainItem}>
            {renderSwitch(type, data.image)}
            <text className={styles.titleProduct}>{data.name}</text>
            <text className={styles.textPrice}>Giá cả: {data.price}</text>
        </div>
    )
}

export default CardProduct;
