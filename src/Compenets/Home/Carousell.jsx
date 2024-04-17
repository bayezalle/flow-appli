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
		<div className="fw-bolder text-center py-5">
			<h4 className="text-success">OUR SHOP</h4>
			<h2 className="text-dark">Popular Products</h2>
		</div>
      <Slider {...settings}>
        <div className="p-2 text-center">
            <div class="p-4 card">
				<span class="wish-icon"><i class="fa fa-heart-o"></i></span>
				<div class="img-box">
					<img src={img1} class="img-fluid" alt=""/>									
				</div>
				<div class="thumb-content">
					<h4>Fraises</h4>	
					<p>32/kg</p>								
					<div class="star-rating">
						<ul class="list-inline">
							<li class="list-inline-item"><FaStarHalfAlt color="orange"/></li>
							<li class="list-inline-item"><FaStarHalfAlt color="orange"/></li>
							<li class="list-inline-item"><FaStarHalfAlt color="orange"/></li>
							<li class="list-inline-item"><FaStarHalfAlt color="orange"/></li>
							<li class="list-inline-item"><FaStarHalfAlt color="orange"/></li>
					    </ul>
					</div>
					<div className="d-flex justify-content-between  py-3">
						<p class="item-price text-success fw-bold">$369.00</p>
						<a href="#" class="btn btn-outline-success rounded">Add</a>
					</div>
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
				<h4> Purple mangosteen</h4>		
				<p>32/kg</p>							
				<div class="star-rating">
				    <ul class="list-inline">
						<li class="list-inline-item"><FaStarHalfAlt color="orange"/></li>
						<li class="list-inline-item"><FaStarHalfAlt color="orange"/></li>
						<li class="list-inline-item"><FaStarHalfAlt color="orange"/></li>
						<li class="list-inline-item"><FaStarHalfAlt color="orange"/></li>
						<li class="list-inline-item"><FaStarHalfAlt color="orange"/></li>
					</ul>
				</div>
				<div className="d-flex justify-content-between  py-3">
						<p class="item-price text-success fw-bold">$369.00</p>
						<a href="#" class="btn btn-outline-success rounded">Add</a>
					</div>
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
									<h4>Frech Carotte</h4>	
									<p>32/kg</p>								
									<div class="star-rating">
										<ul class="list-inline">
											<li class="list-inline-item"><FaStarHalfAlt color="orange"/></li>
											<li class="list-inline-item"><FaStarHalfAlt color="orange"/></li>
											<li class="list-inline-item"><FaStarHalfAlt color="orange"/></li>
											<li class="list-inline-item"><FaStarHalfAlt color="orange"/></li>
											<li class="list-inline-item"><FaStarHalfAlt color="orange"/></li>
										</ul>
									</div>
									<div className="d-flex justify-content-between  py-3">
									<p class="item-price text-success fw-bold">$369.00</p>
									<a href="#" class="btn btn-outline-success rounded">Add</a>
								</div>
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
									<p>32/kg</p>								
									<div class="star-rating">
										<ul class="list-inline">
											<li class="list-inline-item"><FaStarHalfAlt color="orange"/></li>
											<li class="list-inline-item"><FaStarHalfAlt color="orange"/></li>
											<li class="list-inline-item"><FaStarHalfAlt color="orange"/></li>
											<li class="list-inline-item"><FaStarHalfAlt color="orange"/></li>
											<li class="list-inline-item"><FaStarHalfAlt color="orange"/></li>
										</ul>
									</div>
									<div className="d-flex justify-content-between  py-3">
						<p class="item-price text-success fw-bold">$369.00</p>
						<a href="#" class="btn btn-outline-success rounded">Add</a>
					</div>
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
									<p>32/kg</p>								
									<div class="star-rating">
										<ul class="list-inline">
											<li class="list-inline-item"><FaStarHalfAlt color="orange"/></li>
											<li class="list-inline-item"><FaStarHalfAlt color="orange"/></li>
											<li class="list-inline-item"><FaStarHalfAlt color="orange"/></li>
											<li class="list-inline-item"><FaStarHalfAlt color="orange"/></li>
											<li class="list-inline-item"><FaStarHalfAlt color="orange"/></li>
										</ul>
									</div>
									<div className="d-flex justify-content-between  py-3">
						<p class="item-price text-success fw-bold">$369.00</p>
						<a href="#" class="btn btn-outline-success rounded">Add</a>
					</div>
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
									<p>32/kg</p>								
									<div class="star-rating">
										<ul class="list-inline">
											<li class="list-inline-item"><FaStarHalfAlt color="orange"/></li>
											<li class="list-inline-item"><FaStarHalfAlt color="orange"/></li>
											<li class="list-inline-item"><FaStarHalfAlt color="orange"/></li>
											<li class="list-inline-item"><FaStarHalfAlt color="orange"/></li>
											<li class="list-inline-item"><FaStarHalfAlt color="orange"/></li>
										</ul>
									</div>
									<div className="d-flex justify-content-between  py-3">
						<p class="item-price text-success fw-bold">$369.00</p>
						<a href="#" class="btn btn-outline-success rounded">Add</a>
					</div>
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
									<p>32/kg</p>								
									<div class="star-rating">
										<ul class="list-inline">
											<li class="list-inline-item"><FaStarHalfAlt color="orange"/></li>
											<li class="list-inline-item"><FaStarHalfAlt color="orange"/></li>
											<li class="list-inline-item"><FaStarHalfAlt color="orange"/></li>
											<li class="list-inline-item"><FaStarHalfAlt color="orange"/></li>
											<li class="list-inline-item"><FaStarHalfAlt color="orange"/></li>
										</ul>
									</div>
									<div className="d-flex justify-content-between  py-3">
						<p class="item-price text-success fw-bold">$369.00</p>
						<a href="#" class="btn btn-outline-success rounded">Add</a>
					</div>
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
									<p>32/kg</p>								
									<div class="star-rating">
										<ul class="list-inline">
											<li class="list-inline-item"><FaStarHalfAlt color="orange"/></li>
											<li class="list-inline-item"><FaStarHalfAlt color="orange"/></li>
											<li class="list-inline-item"><FaStarHalfAlt color="orange"/></li>
											<li class="list-inline-item"><FaStarHalfAlt color="orange"/></li>
											<li class="list-inline-item"><FaStarHalfAlt color="orange"/></li>
										</ul>
									</div>
									<div className="d-flex justify-content-between  py-3">
						<p class="item-price text-success fw-bold">$369.00</p>
						<a href="#" class="btn btn-outline-success rounded">Add</a>
					</div>
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
									<p>32/kg</p>							
									<div class="star-rating">
										<ul class="list-inline">
											<li class="list-inline-item"><FaStarHalfAlt color="orange"/></li>
											<li class="list-inline-item"><FaStarHalfAlt color="orange"/></li>
											<li class="list-inline-item"><FaStarHalfAlt color="orange"/></li>
											<li class="list-inline-item"><FaStarHalfAlt color="orange"/></li>
											<li class="list-inline-item"><FaStarHalfAlt color="orange"/></li>
										</ul>
									</div>
									<div className="d-flex justify-content-between  py-3">
						<p class="item-price text-success fw-bold">$369.00</p>
						<a href="#" class="btn btn-outline-success rounded">Add</a>
					</div>
								</div>						
							</div>
        </div>
      </Slider>
    </div>
  );
}

export default Carousell;
