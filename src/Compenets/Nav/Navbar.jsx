import React from 'react'
import './nav.css'
import easylogo from "../../images/easy.png"
import { FaCartShopping } from "react-icons/fa6";
import { MdFavoriteBorder } from "react-icons/md";
import { FiUser } from "react-icons/fi";

const Navbar = () => {

  return (
    <div className='container-fluid shadow rounded p-3'>
      <nav class="navbar navbar-expand-lg">
            <div class="container">   
                <a class="navbar-brand" href="#"><img src={easylogo} class="img-fluid logo" alt="" /></a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav  mx-auto mb-2">
                    <form class="" role="search">
                         <input class="form-control flow-input p-2 me-2" type="search" placeholder="Search" aria-label="Search"/>
                    </form>
                        <li class="nav-item">
                            <a class="nav-link active fw-bold fs-25" aria-current="page" href="#"><FiUser className='me-2'/>Se Connecter</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link fw-bold fs-25" href="#"><MdFavoriteBorder className='me-2' />Mes Favoris</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link fw-bold fs-25" href="#"><FaCartShopping className='me-2 text-oramge'/>Panier</a>
                        </li>
                    </ul>
                </div>
            </div>
            </nav>
    </div>
  )
}

export default Navbar
