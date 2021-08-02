import React, { Component } from 'react'
import styles from '../styles/Product.module.css'
import CardProduct from './CardProduct'

const CreateListProduct = ({ data, type, onClick = null }) => {

    const caeateListView = () => {
        var listView = []
        data.map((item) => {
            onClick ? listView.push(
                <CardProduct onClick={(slug) => onClick(slug)} type={type} data={item} />
            ) : listView.push(
                <CardProduct type={type} data={item} />
            )
        })
        return listView

    }
    return (
        <div className={styles.listMain}>
            {caeateListView()}
        </div>
    )
}


export default CreateListProduct
