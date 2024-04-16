import React from 'react'
// import './home.css'
// import ad1 from '../../images/legg.jpg'
// import ad2 from '../../images/ad2.png'
// import ad3 from '../../images/ad3.png'
import c1 from '../../images/category/c1.jpg'
import c2 from '../../images/category/c2.jpg'
import c3 from '../../images/category/c3.jpg'
import c4 from '../../images/category/c3.jpg'
import c5 from '../../images/category/c5.png'
import c6  from '../../images/category/c6.png'
import main1 from '../../images/Main-about1.svg'
import main2 from '../../images/Main-about2.svg'
import main3 from '../../images/Main-about3.svg'
import organic from '../../images/organic.jpg'
import box from '../../images/box.png'
import test1 from '../../images/testimonial/member-01.jpg'
import test2 from '../../images/testimonial/member-03.jpg'
import test3 from '../../images/testimonial/member-02.jpg'
// import Carousel from './Carousel'
import Carousell from './Carousell'
import Banner from './Banner'  

const Home = () => {
  return (
    <div class="banner pt-4">
        {/* <div class="container">
          <div className="bannier relative">
            <img src={ad1} className='w-100' height={420} alt="" />
            <div className="text-center fs-2 text-orange absolute z-5">
              <h1 className='fw-bold fs-2 py-4'>La Boite à Outils des Vendeurs !</h1>
              <p className='text-white'>Obtenez un site ecommerce à partir de 25 000 FCFA /mois et<br/> un outil de gestion performant.</p>
            </div>
          </div>
        </div> */}
          <Banner />
        <section>
        <div class="container-fluid big-padding pt-5 category">
        <div class="container-xl">
            <div class="row section-title text-center mt-5">
              <h4 class="text-center fs-5 text-primary fw-bolder">CATEGORY</h4>
              <h2>Shop by Category</h2>
            </div>
            <div class="row mt-4">

              <div class="col-xl-2 col-lg-3 col-md-4 col-6 mb-4 text-center">
                <img class="rounded bg-white" src={c1} alt=""/>
                <p class="pt-2">Vegitables - (12)</p>
              </div>
              <div class="col-xl-2 col-lg-3 col-md-4 col-6 mb-4 text-center">
                <img class="rounded bg-white" src={c2} alt=""/>
                <p class="pt-2">Agriculture Items - (12)</p>
              </div>
              <div class="col-xl-2 col-lg-3 col-md-4 col-6 mb-4 text-center">
                <img class="rounded bg-white" src={c3} alt=""/>
                <p class="pt-2">Milk Products - (12)</p>
              </div>
              <div class="col-xl-2 col-lg-3 col-md-4 col-6 mb-4 text-center">
                <img class="rounded bg-white" src={c4} alt=""/>
                <p class="pt-2">Frozen Items - (10)</p>
              </div>
              <div class="col-xl-2 col-lg-3 col-md-4 col-6 mb-4 text-center">
                <img class="rounded bg-white" src={c5} alt=""/>
                <p class="pt-2">Frozen Items - (10)</p>
              </div>
              <div class="col-xl-2 col-lg-3 col-md-4 col-6 mb-4 text-center">
                <img class="rounded bg-white" src={c6} alt=""/>
                <p class="pt-2">Frozen Items - (10)</p>
              </div>
            </div>
        </div>
      </div>
      </section>
     <section className='bg-light'>
     <div className="container">
        <Carousell />
      </div>
     </section>
      <section>
        <div class="container-fluid big-padding bg-light category mt-5">
        <div class="container-xl">
          <div class="row pt-5">
            <div class="col-md-4">
              <h4 class="fs-6 text-success mb-4 fw-bolder">HOW IT WORKS</h4>

              <div class="infos mb-4">
                <div class="titles">
                   <img class="max-90 py-4 w-25" src={main1} alt=""/>
                </div>
                <div class="descriptions">
                  <h6 class="fw-bolder">Pick the Right Box Style for You</h6>
                  <p class="fs-8">Fusce viverra convallis commodo. Aenean iaculis urna ac urna bibendum pharetra. Pellentesque habitant</p>
                </div>
              </div>
              <div class="infos mb-4">
                <div class="titles">
                   <img class="max-90 py-4 w-25" src={main2} alt=""/>
                </div>
                <div class="descriptions">
                  <h6 class="fw-bolder">Customize your Products</h6>
                  <p class="fs-8">Fusce viverra convallis commodo. Aenean iaculis urna ac urna bibendum pharetra. Pellentesque habitant</p>
                </div>
              </div>

              <div class="infos">
                <div class="titles">
                   <img class="max-90 py-4 w-25" src={main3} alt=""/>
                </div>
                <div class="descriptions">
                  <h6 class="fw-bolder">We Deliver on your Door Steps</h6>
                  <p class="fs-8">Fusce viverra convallis commodo. Aenean iaculis urna ac urna bibendum pharetra. Pellentesque habitant</p>
                </div>
              </div>


            </div>
            <div class="col-md-8 align-self-center">
              <div class="row">
                <div class="col-xl-4 d-none d-lg-block pe-0 align-self-center sticky">
                  <div class="card-abs shadow-md bg-white">
                    <h1 class="fw-bolder fs-2 text-primary">10+ Years</h1>
                    <p>We are Growing and Selling <br/> Organic Foods</p>
                  </div>
                </div>
                <div class="col-lg-8 col-md-12">
                   <h2 class="fs-11 fw-bolder mb-4">Organic Produce <br/> Deliver to your Door</h2>
                   <img class="mt-2 bg-white shadow p-1 w-100" src={organic} alt=""/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </section>
      <section>
      <div class="container-fluid big-padding category mt-5">
          <div class="container-xl pt-5">
            <div class="row">
              <div class="col-md-4 sticky">
                <div class="border boxborder border-primary">
                   <img src={box} className='w-100' alt=""/>
                </div>
              </div>
              <div class="col-md-1">
              </div>
              <div class="col-md-7 align-self-center">
                  <h4 class="fs-6 text-success mb-4 fw-bolder">Feature is in the Soil</h4>
                  <h1 class="fw-bolder fs-11 mb-4">How can easily find out the right box for you Need ?</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ligula ante, condimentum vel neque at, porta hendrerit erat. Pellentesque finibus vehicula lorem eget ullamcorper.Ut ipsum augue, bibendum a elementum non, tempus id felis.</p>
                    <div class="row pt-4">
                      <div class="col-md-6">
                        <h4 class="fw-bolder fs-5 mb-4">
                          <i class="bi bi-signpost-split fs-1 text-success"></i> 100% Organic</h4>
                        <p class="fs-8">Proin et sagittis ante. Nulla tempor porta metus, ut consequat ex cursus sit amet. Aenean elementum. In dapibus laoreet tempor. In ut purus et elit molestie volutpat sit amet dignissim augue. </p>
                      </div>
                       <div class="col-md-6 my-4 my-md-0">
                        <h4 class="fw-bolder fs-5 mb-4">
                          <i class="bi bi-award fs-1 text-success"></i> High Quality </h4>
                        <p class="fs-8">Proin et sagittis ante. Nulla, ut consequat ex cursus sit amet. Aenean elementum pretium vehicula. In dapibus laoreet tempor. In ut purus et elit molestie volutpat sit amet dignissim augue. </p>
                      </div>
                  </div>
              </div>
            </div>
          </div>
        </div>
      {/* </section>
      <Carousel />
      <section> */}
      <div id="testimonial" class="service bg-light container-fluid px-4 mt-5 py-5">
            <div class="container">
                <div class="section-title row mb-3">
                    <h2 class="fw-bolder">Testimonial</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ipsum sit nibh amet egestas tellus.</p>
                </div>
                <div class="row mt-5">
                    <div class="col-lg-4 col-md-6 mb-4">
                      <div class="serv-cove shadow-md rounded bg-white p-3">
                          <div class="prf row mb-3">
                              <div class="col-3">
                                  <img class="rounded-pill w-100" src={test1} alt=""/>
                              </div>
                              <div class="col-9 align-self-center">
                                  <h6 class="mb-0 fw-bolder">Vinoth Parkash</h6>
                                  <span>CEO Fabric Nation</span>
                              </div>
                          </div>
                          <div class="det text-center">
                              <p class="fs-8 fw-bolder fst-italic">Sed lectus ante, pharetra in lacus sed, efficitur luctus elit. Suspendisse commodo felis dictum, tempor tortor a, dapibus tellus. Nam ornare felis ut arcu tristique luctus. Curabitur </p>
                          </div>
                      </div>
                    </div>
                    <div class="col-lg-4 col-md-6 mb-4">
                      <div class="serv-cove shadow-md rounded bg-white p-3">
                        <div class="prf row mb-3">
                            <div class="col-3">
                                <img class="rounded-pill w-100" src={test2} alt=""/>
                            </div>
                            <div class="col-9 align-self-center">
                                <h6 class="mb-0 fw-bolder">Jackson Daniel</h6>
                                <span>CEO Notitech</span>
                            </div>
                        </div>
                        <div class="det text-center">
                            <p class="fs-8 fst-italic fw-bolder">Sed lectus ante, pharetra in lacus sed, efficitur luctus elit. Suspendisse commodo felis dictum, tempor tortor a, dapibus tellus. Nam ornare felis ut arcu tristique luctus. Curabitur </p>
                        </div>
                      </div>
                    </div>
                    
                    <div class="col-lg-4 col-md-6 mb-4">
                      <div class="serv-cove shadow-md rounded bg-white p-3">
                        <div class="prf row mb-3">
                            <div class="col-3">
                                <img class="rounded-pill w-100" src={test3} alt=""/>
                            </div>
                            <div class="col-9 align-self-center">
                                <h6 class="mb-0 fw-bolder">Praveen Thaney</h6>
                                <span>Admin Vintech</span>
                            </div>
                        </div>
                        <div class="det text-center">
                            <p class="fs-8 fst-italic fw-bolder">Sed lectus ante, pharetra in lacus sed, efficitur luctus elit. Suspendisse commodo felis dictum, tempor tortor a, dapibus tellus. Nam ornare felis ut arcu tristique luctus. Curabitur </p>
                        </div>
                      </div>
                    </div>

                </div>
             </div>
        </div>
      </section>
    </div>
  )
}

export default Home
