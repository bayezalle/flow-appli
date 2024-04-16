import React, { Component } from "react";
import Slider from "react-slick";
import ad1 from '../../images/legg.jpg'
import ad2 from '../../images/ad2.png'
import ad3 from '../../images/ad3.png'

function Banner() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    const imageStyle = {
        width: "100%",
        maxHeight: "360px"
    };

    return (
        <div className="container">
            <div className="slider-container">
                <Slider {...settings}>
                    <div>
                        <img src={ad1} style={imageStyle} alt="" />
                    </div>
                    <div>
                        <img src={ad3} style={imageStyle} alt="" />
                    </div>
                    <div>
                        <img src={ad2} style={imageStyle} alt="" />
                    </div>
                </Slider>
            </div>
        </div>
    );
}

export default Banner;
