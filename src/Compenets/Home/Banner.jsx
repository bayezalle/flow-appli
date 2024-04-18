import React from "react";
import './Banner.css'
import Slider from "react-slick";
import ad1 from '../../images/banner1.jpg'
import ad2 from '../../images/banner2.jpeg'
import ad3 from '../../images/legg.jpg'
import { IoIosArrowDropdownCircle } from "react-icons/io";

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
        maxHeight: "400px"
    };

    return (
        <div className="container">
            <div className="row">
            <div className="col-md-2">
               <div className="card shadow p-3">
                <h4 className='fw-bold py-3 text-start'>Liens utiles</h4>
                <ul className="navbar-nav ">
                    <li className="nav-item">
                        <a className="nav-link a-flow" href="">La solution 
                            <IoIosArrowDropdownCircle className="mx-3"/>
                        </a>
                    </li> 
                    <li className="nav-item">
                        <a className="nav-link a-flow" href="">La solution 
                            <IoIosArrowDropdownCircle className="mx-3"/>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link a-flow" href="">La solution 
                            <IoIosArrowDropdownCircle className="mx-3"/>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link a-flow" href="">La solution 
                            <IoIosArrowDropdownCircle className="mx-3"/>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link a-flow" href="">La solution 
                            <IoIosArrowDropdownCircle className="mx-3"/>
                        </a>
                    </li>                   
                </ul>
               </div>
            </div>
            <div className="col-md-8">
                <div className="slider-container">
                    <Slider {...settings}>
                        <div>
                            <img src={ad1} height={500} style={imageStyle} alt="" />
                        </div>
                        <div>
                            <img src={ad3} style={imageStyle} alt="" />
                        </div>
                        <div>
                            <img src={ad2} height={500} style={imageStyle} alt="" />
                        </div>
                    </Slider>
                </div>
            </div>
            <div className="col-md-2">
            <div className="card shadow p-3">
                <h4 className='fw-bold py-3 text-start'>Liens utiles</h4>
                <ul className="navbar-nav ">
                    <li className="nav-item">
                        <a className="nav-link a-flow" href="">La solution 
                            <IoIosArrowDropdownCircle className="mx-3"/>
                        </a>
                    </li> 
                    <li className="nav-item">
                        <a className="nav-link a-flow" href="">La solution 
                            <IoIosArrowDropdownCircle className="mx-3"/>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link a-flow" href="">La solution 
                            <IoIosArrowDropdownCircle className="mx-3"/>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link a-flow" href="">La solution 
                            <IoIosArrowDropdownCircle className="mx-3"/>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link a-flow" href="">La solution 
                            <IoIosArrowDropdownCircle className="mx-3"/>
                        </a>
                    </li>                   
                </ul>
               </div>
            </div>
            </div>
        </div>
    );
}

export default Banner;
