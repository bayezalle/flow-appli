import React from 'react'
import easylogo from "../../images/easy.png"


const Footer = () => {
  return (
    <div className='bg-dark py-5'>
      <div className="container">
        <a class="navbar-brand" href="#">
            <img src={easylogo} class="img-fluid logo mb-4" alt="" />
        </a>
        <div className="row text-white">
            <div className="col-md-4">
                <h4 className='fw-bold'>Contactez-nous</h4>
                <p>WhatsApp<br/>
                    +221 78 826 77 00
                </p>
                <p>Téléphone <br />
                    +221 78 826 77 00
                </p>
            </div>
            <div className="col-md-4">
                <div className="">
                    <h4 className='fw-bold'>Suivez-nous</h4>
                    <ul>
                        <li>LinkedIn</li>
                        <li>Instagram</li>
                        <li>Facebook</li>
                        <li>Tiktok</li>
                        <li>Communaute Whatsapp</li>
                    </ul>
                </div>
            </div>
            <div className="col-md-4">
                <h4 className='fw-bold'>Liens utiles</h4>
                <ul>
                    <li>La solution</li>
                    <li>Les fonctionnalites</li>
                    <li>Nos tarifs</li>
                    <li>Presentation</li>
                    <li>Contactez-nous</li>
                </ul>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
