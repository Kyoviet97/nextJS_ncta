import React, { Component } from 'react'
import styles from '../styles/Product.module.css'
import CardProduct from './CardProduct'

const CreateListProduct = ({ data, type, onClick = null }) => {

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
            {caeateListView()}
        </div>
    )
}


export default CreateListProduct
