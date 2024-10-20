import React, { useEffect } from 'react';
import heroImage1 from '../assets/image/hero-1.jpg'
import heroImage2 from '../assets/image/hero-2.jpg'
import ractangleFrame from '../assets/image/rectangle.png'
import aviator from '../assets/image/aviator.png'
import cateye from '../assets/image/cateye.png'
import clubmaster from '../assets/image/clubmaster.png'
import geometric from '../assets/image/geometric.png'
import hexagonal from '../assets/image/hexagon.png'
import horn from '../assets/image/horn.png'
import oval from '../assets/image/oval.png'
import square from '../assets/image/square.png'
import wayfarer from '../assets/image/wayfarer.png'
import round from '../assets/image/round.png'
import sunglass1 from '../assets/image/sunglass1.png'
import sunglass2 from '../assets/image/sunglass2.png'
import babyframe from '../assets/image/baby1.png'
import card1 from '../assets/image/card-1.png'
import card2 from '../assets/image/card-2.png'
import card3 from '../assets/image/card-3.png'



const Landing = () => {
  return (
    <div>

      <main className="main">
        <section className="home-slider position-relative mb-30">
          <div className="container">
            <div className="home-slide-cover mt-30">
              <div className="hero-slider-1 style-4 dot-style-1 dot-style-1-position-1">
                <div className="single-hero-slider single-animation-wrap" style={{ backgroundImage: `url(${heroImage1})` }}>
                  <div className="slider-content">
                    <h1 className="display-2 mb-40">
                      Don’t miss amazing<br />
                      Eyewear deals
                    </h1>
                    <p className="mb-65">Save up to 20% off on your first order</p>
                    <form className="form-subcriber d-flex">
                      <input type="email" placeholder="Your mobile number" />
                      <button className="btn" type="submit">Enquiry</button>
                    </form>
                  </div>
                </div>
                <div className="single-hero-slider single-animation-wrap" style={{ backgroundImage: `url(${heroImage2})` }}>
                  <div className="slider-content">
                    <h1 className="display-2 mb-40">
                      Get Trendy Sunglasses<br />
                      With big discount
                    </h1>
                    <p className="mb-65">Save up to 20% off on your first order</p>
                    <form className="form-subcriber d-flex">
                      <input type="email" placeholder="Your mobile number" />
                      <button className="btn" type="submit">Enquiry</button>
                    </form>
                  </div>
                </div>
              </div>
              <div className="slider-arrow hero-slider-1-arrow"></div>
            </div>
          </div>
        </section>
        {/* <!--End hero slider--> */}
        <section className="popular-categories section-padding">
          <div className="container wow animate__animated animate__fadeIn">
            <div className="section-title">
              <div className="title">
                <h3>Frame Categories</h3>
              </div>
              <div className="slider-arrow slider-arrow-2 flex-right carausel-10-columns-arrow" id="carausel-10-columns-arrows"></div>
            </div>
            <div className="carausel-10-columns-cover position-relative">
              <div className="carausel-10-columns" id="carausel-10-columns">
                <div className="card-2 bg-9 wow animate__animated animate__fadeInUp" style={{ style: "137px" }} data-wow-delay=".1s">
                  <figure className="img-hover-scale overflow-hidden">
                    <a href="javascript:void(0)"><img src={ractangleFrame} alt="" /></a>
                  </figure>
                  <h6><a href="javascript:void(0)">Rectangle</a></h6>
                  <span>26 items</span>
                </div>
                <div className="card-2 bg-10 wow animate__animated animate__fadeInUp" style={{ style: "137px" }} data-wow-delay=".2s">
                  <figure className="img-hover-scale overflow-hidden">
                    <a href="javascript:void(0)"><img src={round} alt="" /></a>
                  </figure>
                  <h6><a href="javascript:void(0)">Round</a></h6>
                  <span>28 items</span>
                </div>
                <div className="card-2 bg-11 wow animate__animated animate__fadeInUp" style={{ style: "137px" }} data-wow-delay=".3s">
                  <figure className="img-hover-scale overflow-hidden">
                    <a href="javascript:void(0)"><img src={square} alt="" /></a>
                  </figure>
                  <h6><a href="javascript:void(0)">Square</a></h6>
                  <span>14 items</span>
                </div>
                <div className="card-2 bg-12 wow animate__animated animate__fadeInUp" style={{ style: "137px" }} data-wow-delay=".4s">
                  <figure className="img-hover-scale overflow-hidden">
                    <a href="javascript:void(0)"><img src={cateye} alt="" /></a>
                  </figure>
                  <h6><a href="javascript:void(0)">Cat eye</a></h6>
                  <span>54 items</span>
                </div>
                <div className="card-2 bg-13 wow animate__animated animate__fadeInUp" style={{ style: "137px" }} data-wow-delay=".5s">
                  <figure className="img-hover-scale overflow-hidden">
                    <a href="javascript:void(0)"><img src={geometric} alt="" /></a>
                  </figure>
                  <h6><a href="javascript:void(0)">Geometric</a></h6>
                  <span>56 items</span>
                </div>
                <div className="card-2 bg-14 wow animate__animated animate__fadeInUp" style={{ style: "137px" }} data-wow-delay=".6s">
                  <figure className="img-hover-scale overflow-hidden">
                    <a href="javascript:void(0)"><img src={aviator} alt="" /></a>
                  </figure>
                  <h6><a href="javascript:void(0)">Aviator</a></h6>
                  <span>72 items</span>
                </div>
                <div className="card-2 bg-15 wow animate__animated animate__fadeInUp" style={{ style: "137px" }} data-wow-delay=".7s">
                  <figure className="img-hover-scale overflow-hidden">
                    <a href="javascript:void(0)"><img src={wayfarer} alt="" /></a>
                  </figure>
                  <h6><a href="javascript:void(0)">Wayfarer</a></h6>
                  <span>36 items</span>
                </div>
                <div className="card-2 bg-12 wow animate__animated animate__fadeInUp" style={{ style: "137px" }} data-wow-delay=".8s">
                  <figure className="img-hover-scale overflow-hidden">
                    <a href="javascript:void(0)"><img src={hexagonal} alt="" /></a>
                  </figure>
                  <h6><a href="javascript:void(0)">Hexagonal</a></h6>
                  <span>123 items</span>
                </div>
                <div className="card-2 bg-10 wow animate__animated animate__fadeInUp" style={{ style: "137px" }} data-wow-delay=".9s">
                  <figure className="img-hover-scale overflow-hidden">
                    <a href="javascript:void(0)"><img src={oval} alt="" /></a>
                  </figure>
                  <h6><a href="javascript:void(0)">Oval</a></h6>
                  <span>34 items</span>
                </div>
                <div className="card-2 bg-12 wow animate__animated animate__fadeInUp" style={{ style: "137px" }} data-wow-delay="1s">
                  <figure className="img-hover-scale overflow-hidden">
                    <a href="javascript:void(0)"><img src={clubmaster} alt="" /></a>
                  </figure>
                  <h6><a href="javascript:void(0)">Clubmaster</a></h6>
                  <span>89 items</span>
                </div>
                <div className="card-2 bg-11 wow animate__animated animate__fadeInUp" style={{ style: "137px" }} data-wow-delay="0s">
                  <figure className="img-hover-scale overflow-hidden">
                    <a href="javascript:void(0)"><img src={horn} alt="" /></a>
                  </figure>
                  <h6><a href="javascript:void(0)">Horn</a></h6>
                  <span>87 items</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!--End category slider--> */}
        <section className="banners mb-25">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-6">
                <div className="banner-img wow animate__animated animate__fadeInUp" data-wow-delay="0">
                  <img src={card3} alt="" />
                  <div className="banner-text">
                    <h4>
                      Everyday Fresh & <br />Clean with Our<br />
                      Products
                    </h4>
                    <a href="shop-grid-right.html" className="btn btn-xs">Shop Now <i className="fi-rs-arrow-small-right"></i></a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="banner-img wow animate__animated animate__fadeInUp" data-wow-delay=".2s">
                  <img src={card1} alt="" />
                  <div className="banner-text">
                    <h4>
                      Make your Breakfast<br />
                      Healthy and Easy
                    </h4>
                    <a href="shop-grid-right.html" className="btn btn-xs">Shop Now <i className="fi-rs-arrow-small-right"></i></a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 d-md-none d-lg-flex">
                <div className="banner-img mb-sm-0 wow animate__animated animate__fadeInUp" data-wow-delay=".4s">
                  <img src={card2} alt="" />
                  <div className="banner-text">
                    <h4>The best Organic <br />Products Online</h4>
                    <a href="shop-grid-right.html" className="btn btn-xs">Shop Now <i className="fi-rs-arrow-small-right"></i></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default Landing