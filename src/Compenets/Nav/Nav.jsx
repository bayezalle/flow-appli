import React from 'react'
import { BsTelephone } from "react-icons/bs";
import car from '../images/car.svg'
import Navbar from './Navbar';
import './nav.css'

const Nav = () => {
  return (
    <div>
      <div className="container p-4">
        <div className="row d-flex align-content-start flex-wrap justify-content-between">
            <div className="col-md-4 d-flex items-center gap-2">
                <img src={car} alt="Service" class="icon-svg-img"/>
                <span>Service disponible 24h/24</span>
            </div>
            <div className="col-md-4 d-flex justify-content-center items-center gap-2">
                <BsTelephone />
                <span>Livraison en 24h</span>
            </div>
            <div className="col-md-4 d-flex justify-content-end gap-2 items-center">
                <img src={car} alt="Service" class="icon-svg-img"/>
                <span>33 00 000 000</span>
            </div>
        </div>
      </div>
      <Navbar />
    </div>
  )
}

export default Nav
