import React, { Component } from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Image from 'next/image'

const BannerSlide = (props) => {
    const renderBannerItem = () => {
        var listView = []
        props.data.map((item) => {
            listView.push(
                <div
                    key={item.id}
                    style={{ cursor: 'pointer' }}
                    onClick={() => {
                        props.onClick && props.onClick(item.slug)
                    }} >
                    <img src={item.image} />
                </div>
            )
        })
        return listView
    }

    return (
        <div>
            <Carousel
                autoPlay
                showStatus={false}
                showThumbs={false}
                infiniteLoop
                showDuration={3000}>
                {renderBannerItem()}
            </Carousel>
        </div>
    )
}


export default BannerSlide
