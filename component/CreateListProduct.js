import React, { Component } from 'react'
import styles from '../styles/Product.module.css'
import CardProduct from './CardProduct'
import Skeleton from 'react-loading-skeleton';

const CreateListProduct = ({ data, type, onClick = null }) => {

    const loading = () => {
        return (
            <div style={{ padding: 10, display: 'flex', width: '100%', flexDirection: 'row', justifyContent: 'space-around' }}>
                <div style={{ width: '48%' }}>
                    <Skeleton count={3} height={40} />
                </div>
                <div style={{ width: '48%' }}>
                    <Skeleton count={3} height={40} />
                </div>

            </div>
        )
    }

    const caeateListView = () => {
        var listView = []
        data.map((item, index) => {
            onClick ? listView.push(
                <CardProduct
                    key={index}
                    onClick={(slug) => onClick(slug)} type={type} data={item} />
            ) : listView.push(
                <CardProduct key={index} type={type} data={item} />
            )
        })
        return listView

    }
    return (
        <div className={styles.listMain}>
            {data ? caeateListView() : loading()}
        </div>
    )
}


export default CreateListProduct
