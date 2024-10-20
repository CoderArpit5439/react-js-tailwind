import React from 'react'
import logo from '../assets/image/logo.png';


const Footer = () => {
  return (
    <footer class="main">
      <section class="newsletter mb-15">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="position-relative newsletter-inner">
                <div class="newsletter-content">
                  <h2 class="mb-20">
                    Explore Our Latest <br></br>
                    Sunglass Collections

                  </h2>
                  <p class="mb-45"> encourages visitors to browse through various sunglasses collections. From Classic Aviators to <span class="text-brand">Trendy Cat-Eyes</span></p>
                </div>
                <img src="assets/imgs/our/sunglass.png" alt="sunglass" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="featured section-padding">
        <div class="container">
          <div class="row">
            <div class="col-lg-1-5 col-md-4 col-12 col-sm-6 mb-md-4 mb-xl-0">
              <div class="banner-left-icon d-flex align-items-center wow fadeIn animated animated" style={{ visibility: "visible" }}>
                <div class="banner-icon">
                  <img src="assets/imgs/theme/icons/icon-1.svg" alt="" />
                </div>
                <div class="banner-text">
                  <h3 class="icon-box-title">Best prices &amp; offers</h3>
                  <p>Orders $50 or more</p>
                </div>
              </div>
            </div>
            <div class="col-lg-1-5 col-md-4 col-12 col-sm-6">
              <div class="banner-left-icon d-flex align-items-center wow fadeIn animated animated" style={{ visibility: "visible" }}>
                <div class="banner-icon">
                  <img src="assets/imgs/theme/icons/icon-2.svg" alt="" />
                </div>
                <div class="banner-text">
                  <h3 class="icon-box-title">Free delivery</h3>
                  <p>24/7 amazing services</p>
                </div>
              </div>
            </div>
            <div class="col-lg-1-5 col-md-4 col-12 col-sm-6">
              <div class="banner-left-icon d-flex align-items-center wow fadeIn animated animated" style={{ visibility: "visible" }}>
                <div class="banner-icon">
                  <img src="assets/imgs/theme/icons/icon-3.svg" alt="" />
                </div>
                <div class="banner-text">
                  <h3 class="icon-box-title">Great daily deal</h3>
                  <p>When your our customer</p>
                </div>
              </div>
            </div>
            <div class="col-lg-1-5 col-md-4 col-12 col-sm-6">
              <div class="banner-left-icon d-flex align-items-center wow fadeIn animated animated" style={{ visibility: "visible" }}>
                <div class="banner-icon">
                  <img src="assets/imgs/theme/icons/icon-4.svg" alt="" />
                </div>
                <div class="banner-text">
                  <h3 class="icon-box-title">Wide assortment</h3>
                  <p>Mega Discounts</p>
                </div>
              </div>
            </div>
            <div class="col-lg-1-5 col-md-4 col-12 col-sm-6">
              <div class="banner-left-icon d-flex align-items-center wow fadeIn animated animated" style={{ visibility: "visible" }}>
                <div class="banner-icon">
                  <img src="assets/imgs/theme/icons/icon-5.svg" alt="" />
                </div>
                <div class="banner-text">
                  <h3 class="icon-box-title">Easy returns</h3>
                  <p>Within 30 days</p>
                </div>
              </div>
            </div>
            <div class="col-lg-1-5 col-md-4 col-12 col-sm-6 d-xl-none">
              <div class="banner-left-icon d-flex align-items-center wow fadeIn animated animated" style={{ visibility: "visible" }}>
                <div class="banner-icon">
                  <img src="assets/imgs/theme/icons/icon-6.svg" alt="" />
                </div>
                <div class="banner-text">
                  <h3 class="icon-box-title">Safe delivery</h3>
                  <p>Within 30 days</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="section-padding footer-mid">
        <div class="container pt-15 pb-20">
          <div class="row text-center">

          <div class="col">
              <div class="widget-about font-md mb-md-3 mb-lg-3 mb-xl-0">
                <div class="logo mb-30">
                  <a href="index.html" class="mb-15"><img src={logo} alt="logo" /></a>
                  <p class="font-lg text-heading">Awesome Eyewear Store </p>
                </div>
               
              </div>
            </div>
            <div class="footer-link-widget col">
              <h4 class="widget-title">Company</h4>
              <ul class="footer-list mb-sm-5 mb-md-0">
                <li><a href="#">About Us</a></li>
                <li><a href="#">Delivery Information</a></li>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Terms &amp; Conditions</a></li>
                <li><a href="#">Contact Us</a></li>
                <li><a href="#">Support Center</a></li>
              </ul>
            </div>
            <div class="footer-link-widget col">
              <h4 class="widget-title">Popular</h4>
              <ul class="footer-list mb-sm-5 mb-md-0">
                <li><a href="#">Cat Eye &amp; Squre Frame</a></li>
                <li><a href="#">Full Frame</a></li>
                <li><a href="#">Half Rim Frame</a></li>
                <li><a href="#">Rimless Frame</a></li>
                <li><a href="#">Men's Frame</a></li>
                <li><a href="#">Women's Frame</a></li>
                <li><a href="#">Kid's Frame</a></li>
              </ul>
            </div>
            <div class="footer-link-widget col">
              <h4 class="widget-title">Contact</h4>
              <ul class="contact-infor">
                  <li><img src="assets/imgs/theme/icons/icon-location.svg" alt="" /><strong>Address: </strong> <span>Sharma Market, Vill. Mundla Dostdar, Kampel Road, Indore, MP</span></li>
                  <li><img src="assets/imgs/theme/icons/icon-contact.svg" alt="" /><strong>Call Us:</strong><span>(+91) - 93000 62750</span></li>
                  <li><img src="assets/imgs/theme/icons/icon-email-2.svg" alt="" /><strong>Email:</strong><span>shreenetramoptical@gmail.com</span></li>
                  <li><img src="assets/imgs/theme/icons/icon-clock.svg" alt="" /><strong>Hours:</strong><span>10:00 AM - 06:00 PM, Mon - Sat</span></li>
                </ul>
                <div class="mobile-social-icon" style={{marginTop:"30px",justifyContent:"center"}}>
              <h6>Follow Us</h6>
              <a href="#"><img src="assets/imgs/theme/icons/icon-facebook-white.svg" alt="" /></a>
              <a href="#"><img src="assets/imgs/theme/icons/icon-twitter-white.svg" alt="" /></a>
              <a href="#"><img src="assets/imgs/theme/icons/icon-instagram-white.svg" alt="" /></a>
              <a href="#"><img src="assets/imgs/theme/icons/icon-pinterest-white.svg" alt="" /></a>
              <a href="#"><img src="assets/imgs/theme/icons/icon-youtube-white.svg" alt="" /></a>
            </div>
            <p class="font-sm">Up to 15% discount on your first subscribe</p>
          </div>
            </div>
          </div>
      </section>
    </footer>
  )
}

export default Footer