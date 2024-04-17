import React from 'react';
import './nav.css';
import easylogo from "../../images/easy.png";
import { FaCartShopping } from "react-icons/fa6";
import { MdFavoriteBorder } from "react-icons/md";
import { FiUser } from "react-icons/fi";

const Navbar = () => {

  return (
    <div className='container-fluid shadow rounded p-3'>
      <nav className="navbar navbar-expand-lg">
        <div className="container">   
          <a className="navbar-brand" href="#"><img src={easylogo} className="img-fluid logo" alt="" /></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
            <form className="d-flex" role="search">
              <input className="form-control flow-input p-2 border border-0 rounded-pill" type="search" placeholder="Search" aria-label="Search"/>
            </form>
            <ul className="navbar-nav mb-2">
              <li className="nav-item">
                <a className="nav-link fw-bold a fs-25" aria-current="page" href="#"><FiUser color='orange' className='me-2'/>Se Connecter</a>
              </li>
              <li className="nav-item">
                <a className="nav-link fw-bold a fs-25" href="#"><MdFavoriteBorder color='orange' className='me-2' />Mes Favoris</a>
              </li>
              <li className="nav-item">
                <a className="nav-link fw-bold a fs-25" href="#"><FaCartShopping color='orange' className='me-2 text-oramge'/>Panier</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar;
