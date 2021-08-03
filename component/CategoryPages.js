import React, { Component } from 'react'
import styles from '../styles/Pages.module.css'

const CategoryPages = (props) => {
    const renderCategory = () => {
        var listView = []
        props.listData.map((item, index) => {
            listView.push(
                <div
                    key={index}
                    onClick={() => props.onClick && props.onClick(index)}
                    className={styles.mainCategoryItem}>
                    <text className={styles.txtCategory}>{item}</text>
                    <div style={{ width: '100%', height: 1, backgroundColor: '#00000033' }}></div>
                </div>
            )
        })

        return listView
    }

    return (
        <>
            {renderCategory()}
        </>
    )
}

export default CategoryPages
