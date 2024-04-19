import React from "react";
import './Banner.css'
import Slider from "react-slick";
import ad1 from '../../images/banner1.jpg'
import ad2 from '../../images/banner2.jpeg'
import ad3 from '../../images/legg.jpg'
import { IoIosArrowDropdownCircle } from "react-icons/io";
import { BsFacebook } from "react-icons/bs";
import { BiLogoInstagramAlt } from "react-icons/bi";
import { BsLinkedin } from "react-icons/bs";
import { IoLogoTiktok } from "react-icons/io5";
import { FaWhatsappSquare } from "react-icons/fa";

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
        maxHeight: "330px"
    };

    return (
        <div className="container">
            <div className="row">
            <div className="col-md-3">
               <div className="card shadow p-3">
                <h4 className='fw-bold py-3 text-start'>Liens utiles</h4>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link a-flow" href="">La solution 
                            <IoIosArrowDropdownCircle className="ms-5"/>
                        </a>
                    </li> 
                    <li className="nav-link">
                        <a className="nav-link a-flow" href="">La solution 
                            <IoIosArrowDropdownCircle className="ms-5"/>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link a-flow" href="">Les fonctionnalites 
                            <IoIosArrowDropdownCircle className="ms-5"/>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link a-flow" href="">La solution 
                            <IoIosArrowDropdownCircle className="ms-5"/>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link a-flow" href="">La solution 
                            <IoIosArrowDropdownCircle className="ms-5"/>
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
            <div className="col-md-1">
            <div className="card text-center shadow p-4">
                {/* <h4 className='fw-bold py-3 text-start'>Liens utiles</h4> */}
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link a-flow" href=""> 
                            <BsFacebook className="text-primary fs-1"/>
                        </a>
                    </li> 
                    <li className="nav-item">
                        <a className="nav-link a-flow" href="">
                            <BiLogoInstagramAlt className="text-danger fs-1"/>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link a-flow" href="">
                            <BsLinkedin className="text-primary fs-1"/>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link a-flow" href="">
                        <IoLogoTiktok className="text-dark fs-1"/>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link a-flow" href="">
                            <FaWhatsappSquare className="text-success fs-1"/>
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
