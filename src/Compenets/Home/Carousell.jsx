import React from "react";
import Slider from "react-slick";
import { CiStar } from "react-icons/ci";
import { FaStarHalfAlt } from "react-icons/fa";
import img1 from '../../images/products/img-2.jpg'
import img2 from '../../images/products/img-3.jpg'
import img3 from '../../images/products/img-4.jpg'
import img4 from '../../images/products/img-5.jpg'
import img5 from '../../images/products/img-6.jpg'
import img6 from '../../images/products/img-7.jpg'
import img7 from '../../images/products/img-8.jpg'
import img8 from '../../images/products/img-9.jpg'
import img9 from '../../images/products/img-11.jpg'

function Carousell() {
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
  return (
    <div className="slider-container py-5">
      <Slider {...settings}>
        <div className="p-2 text-center">
            <div class="p-4 card">
				<span class="wish-icon"><i class="fa fa-heart-o"></i></span>
				<div class="img-box">
					<img src={img1} class="img-fluid" alt=""/>									
				</div>
				<div class="thumb-content">
					<h4>Fraises</h4>									
					<div class="star-rating">
						<ul class="list-inline">
							<li class="list-inline-item"><FaStarHalfAlt color="warning"/></li>
							<li class="list-inline-item"><FaStarHalfAlt /></li>
							<li class="list-inline-item"><FaStarHalfAlt /></li>
							<li class="list-inline-item"><FaStarHalfAlt /></li>
							<li class="list-inline-item"><CiStar color=""/></li>
					    </ul>
					</div>
					<p class="item-price"><strike>$400.00</strike> <b>$369.00</b></p>
					<a href="#" class="btn btn-yelow rounded">Add to Cart</a>
				</div>						
			</div>
        </div>
        <div className="p-2 text-center">
        <div class="card p-4">
			<span class="wish-icon"><i class="fa fa-heart-o"></i></span>
			<div class="img-box">
				<img src={img2} class="img-fluid" alt="Headphone"/>
			</div>
			<div class="thumb-content">
				<h4> Headphone</h4>									
				<div class="star-rating">
				    <ul class="list-inline">
						<li class="list-inline-item"><FaStarHalfAlt /></li>
						<li class="list-inline-item"><FaStarHalfAlt /></li>
						<li class="list-inline-item"><FaStarHalfAlt /></li>
						<li class="list-inline-item"><FaStarHalfAlt /></li>
						<li class="list-inline-item"><CiStar /></li>
					</ul>
				</div>
				<p class="item-price"><strike>$25.00</strike> <b>$23.99</b></p>
				<a href="#" class="btn btn-primary">Add to Cart</a>
			</div>						
		</div>
        </div>
        <div className="p-2 text-center">
        <div class="card p-4">
								<span class="wish-icon"><i class="fa fa-heart-o"></i></span>
								<div class="img-box">
									<img src={img3} class="img-fluid" alt="Macbook"/>
								</div>
								<div class="thumb-content">
									<h4>Carotte</h4>									
									<div class="star-rating">
										<ul class="list-inline">
											<li class="list-inline-item"><FaStarHalfAlt /></li>
											<li class="list-inline-item"><FaStarHalfAlt /></li>
											<li class="list-inline-item"><FaStarHalfAlt /></li>
											<li class="list-inline-item"><FaStarHalfAlt /></li>
											<li class="list-inline-item"><CiStar /></li>
										</ul>
									</div>
									<p class="item-price"><strike>$899.00</strike> <b>$649.00</b></p>
									<a href="#" class="btn btn-primary">Add to Cart</a>
								</div>						
							</div>
        </div>
        <div className="p-2 text-center">
        <div class="card p-4">
								<span class="wish-icon"><i class="fa fa-heart-o"></i></span>
								<div class="img-box">
									<img src={img4} class="img-fluid" alt="Macbook"/>
								</div>
								<div class="thumb-content">
									<h4>Carotte</h4>									
									<div class="star-rating">
										<ul class="list-inline">
											<li class="list-inline-item"><FaStarHalfAlt /></li>
											<li class="list-inline-item"><FaStarHalfAlt /></li>
											<li class="list-inline-item"><FaStarHalfAlt /></li>
											<li class="list-inline-item"><FaStarHalfAlt /></li>
											<li class="list-inline-item"><CiStar /></li>
										</ul>
									</div>
									<p class="item-price"><strike>$899.00</strike> <b>$649.00</b></p>
									<a href="#" class="btn btn-primary">Add to Cart</a>
								</div>						
							</div>
        </div>
        <div className="p-2 text-cenetr">
        <div class="card p-4">
								<span class="wish-icon"><i class="fa fa-heart-o"></i></span>
								<div class="img-box">
									<img src={img5} class="img-fluid" alt="Macbook"/>
								</div>
								<div class="thumb-content">
									<h4>Carotte</h4>									
									<div class="star-rating">
										<ul class="list-inline">
											<li class="list-inline-item"><FaStarHalfAlt /></li>
											<li class="list-inline-item"><FaStarHalfAlt /></li>
											<li class="list-inline-item"><FaStarHalfAlt /></li>
											<li class="list-inline-item"><FaStarHalfAlt /></li>
											<li class="list-inline-item"><CiStar /></li>
										</ul>
									</div>
									<p class="item-price"><strike>$899.00</strike> <b>$649.00</b></p>
									<a href="#" class="btn btn-primary">Add to Cart</a>
								</div>						
							</div>
        </div>
        <div className="p-2 text-center">
        <div class="card p-4">
								<span class="wish-icon"><i class="fa fa-heart-o"></i></span>
								<div class="img-box">
									<img src={img6} class="img-fluid" alt="Macbook"/>
								</div>
								<div class="thumb-content">
									<h4>Carotte</h4>									
									<div class="star-rating">
										<ul class="list-inline">
											<li class="list-inline-item"><FaStarHalfAlt /></li>
											<li class="list-inline-item"><FaStarHalfAlt /></li>
											<li class="list-inline-item"><FaStarHalfAlt /></li>
											<li class="list-inline-item"><FaStarHalfAlt /></li>
											<li class="list-inline-item"><CiStar /></li>
										</ul>
									</div>
									<p class="item-price"><strike>$899.00</strike> <b>$649.00</b></p>
									<a href="#" class="btn btn-primary">Add to Cart</a>
								</div>						
							</div>
        </div>
        <div className="p-2 text-center">
        <div class="card p-4">
								<span class="wish-icon"><i class="fa fa-heart-o"></i></span>
								<div class="img-box">
									<img src={img7} class="img-fluid" alt="Macbook"/>
								</div>
								<div class="thumb-content">
									<h4>Carotte</h4>									
									<div class="star-rating">
										<ul class="list-inline">
											<li class="list-inline-item"><FaStarHalfAlt /></li>
											<li class="list-inline-item"><FaStarHalfAlt /></li>
											<li class="list-inline-item"><FaStarHalfAlt /></li>
											<li class="list-inline-item"><FaStarHalfAlt /></li>
											<li class="list-inline-item"><CiStar /></li>
										</ul>
									</div>
									<p class="item-price"><strike>$899.00</strike> <b>$649.00</b></p>
									<a href="#" class="btn btn-primary">Add to Cart</a>
								</div>						
							</div>
        </div>
        <div className="p-2 text-center">
        <div class="card p-4">
								<span class="wish-icon"><i class="fa fa-heart-o"></i></span>
								<div class="img-box">
									<img src={img8} class="img-fluid" alt="Macbook"/>
								</div>
								<div class="thumb-content">
									<h4>Carotte</h4>									
									<div class="star-rating">
										<ul class="list-inline">
											<li class="list-inline-item"><FaStarHalfAlt /></li>
											<li class="list-inline-item"><FaStarHalfAlt /></li>
											<li class="list-inline-item"><FaStarHalfAlt /></li>
											<li class="list-inline-item"><FaStarHalfAlt /></li>
											<li class="list-inline-item"><CiStar /></li>
										</ul>
									</div>
									<p class="item-price"><strike>$899.00</strike> <b>$649.00</b></p>
									<a href="#" class="btn btn-primary">Add to Cart</a>
								</div>						
							</div>
        </div>
        <div className="p-2 text-center">
        <div class="card p-4">
								<span class="wish-icon"><i class="fa fa-heart-o"></i></span>
								<div class="img-box">
									<img src={img9} class="img-fluid" alt="Macbook"/>
								</div>
								<div class="thumb-content">
									<h4>Carotte</h4>									
									<div class="star-rating">
										<ul class="list-inline">
											<li class="list-inline-item"><FaStarHalfAlt /></li>
											<li class="list-inline-item"><FaStarHalfAlt /></li>
											<li class="list-inline-item"><FaStarHalfAlt /></li>
											<li class="list-inline-item"><FaStarHalfAlt /></li>
											<li class="list-inline-item"><CiStar /></li>
										</ul>
									</div>
									<p class="item-price"><strike>$899.00</strike> <b>$649.00</b></p>
									<a href="#" class="btn btn-primary">Add to Cart</a>
								</div>						
							</div>
        </div>
      </Slider>
    </div>
  );
}

export default Carousell;
