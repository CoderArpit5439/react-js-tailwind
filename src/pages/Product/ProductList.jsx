import React from 'react'
import { useNavigate } from 'react-router-dom'

const ProductList = () => {

    const navigate = useNavigate();
    return (
        <main class="main" style={{ transform: "none" }}>
            <div class="page-header mt-30 mb-50">
                <div class="container">
                    <div class="archive-header">
                        <div class="row align-items-center">
                            <div class="col-xl-3">
                                <h1 class="mb-15">Eyewear</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container mb-30" style={{ transform: "none" }}>
                <div class="row" style={{ transform: "none" }}>
                    <div class="col-lg-12">
                        <div class="shop-product-fillter">
                            <div class="totall-product">
                                <p>We found <strong class="text-brand">29</strong> items for you!</p>
                            </div>
                        </div>
                        <div class="row product-grid">
                            <div class="col-lg-3 col-md-4 col-12 col-sm-6">
                                <div class="product-cart-wrap mb-30">
                                    <div class="product-img-action-wrap">
                                        <div class="product-img product-img-zoom">
                                            <a onClick={()=>navigate('/view-product/slug')}>
                                                <img class="default-img" src="assets/imgs/shop/product-1-1.jpg" alt="" />
                                                <img class="hover-img" src="assets/imgs/shop/product-1-2.jpg" alt="" />
                                            </a>
                                        </div>
                                        <div class="product-badges product-badges-position product-badges-mrg">
                                            <span class="hot">Hot</span>
                                        </div>
                                    </div>
                                    <div class="product-content-wrap">
                                        <div class="product-category">
                                            <a href="shop-grid-right.html">Snack</a>
                                        </div>
                                        <h2><a onClick={()=>navigate('/view-product/slug')}>Seeds of Change Organic Quinoe</a></h2>
                                        <div class="product-card-bottom">
                                            <div class="product-price">
                                                <span>Rs. 28.85</span>
                                                <span class="old-price">Rs. 32.8</span>
                                            </div>
                                            <div class="add-cart">
                                                <a class="add" href="shop-cart.html"><i class="fi-rs-shopping-cart mr-5"></i>BUY </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-3 col-md-4 col-12 col-sm-6">
                                <div class="product-cart-wrap mb-30">
                                    <div class="product-img-action-wrap">
                                        <div class="product-img product-img-zoom">
                                            <a onClick={()=>navigate('/view-product/slug')}>
                                                <img class="default-img" src="assets/imgs/shop/product-2-1.jpg" alt="" />
                                                <img class="hover-img" src="assets/imgs/shop/product-2-2.jpg" alt="" />
                                            </a>
                                        </div>
                                        <div class="product-badges product-badges-position product-badges-mrg">
                                            <span class="sale">Sale</span>
                                        </div>
                                    </div>
                                    <div class="product-content-wrap">
                                        <div class="product-category">
                                            <a href="shop-grid-right.html">Hodo Foods</a>
                                        </div>
                                        <h2><a onClick={()=>navigate('/view-product/slug')}>All Natural Italian-Style Chicken Meatballs</a></h2>
                                        <div class="product-card-bottom">
                                            <div class="product-price">
                                                <span>Rs. 52.85</span>
                                                <span class="old-price">Rs. 55.8</span>
                                            </div>
                                            <div class="add-cart">
                                                <a class="add" href="shop-cart.html"><i class="fi-rs-shopping-cart mr-5"></i>BUY </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-3 col-md-4 col-12 col-sm-6">
                                <div class="product-cart-wrap mb-30">
                                    <div class="product-img-action-wrap">
                                        <div class="product-img product-img-zoom">
                                            <a onClick={()=>navigate('/view-product/slug')}>
                                                <img class="default-img" src="assets/imgs/shop/product-3-1.jpg" alt="" />
                                                <img class="hover-img" src="assets/imgs/shop/product-3-2.jpg" alt="" />
                                            </a>
                                        </div>
                                        <div class="product-badges product-badges-position product-badges-mrg">
                                            <span class="new">New</span>
                                        </div>
                                    </div>
                                    <div class="product-content-wrap">
                                        <div class="product-category">
                                            <a href="shop-grid-right.html">Snack</a>
                                        </div>
                                        <h2><a onClick={()=>navigate('/view-product/slug')}>Angie’s Boomchickapop Sweet &amp; Salty</a></h2>
                                        <div class="product-card-bottom">
                                            <div class="product-price">
                                                <span>Rs. 48.85</span>
                                                <span class="old-price">Rs. 52.8</span>
                                            </div>
                                            <div class="add-cart">
                                                <a class="add" href="shop-cart.html"><i class="fi-rs-shopping-cart mr-5"></i>BUY </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-3 col-md-4 col-12 col-sm-6">
                                <div class="product-cart-wrap mb-30">
                                    <div class="product-img-action-wrap">
                                        <div class="product-img product-img-zoom">
                                            <a onClick={()=>navigate('/view-product/slug')}>
                                                <img class="default-img" src="assets/imgs/shop/product-4-1.jpg" alt="" />
                                                <img class="hover-img" src="assets/imgs/shop/product-4-2.jpg" alt="" />
                                            </a>
                                        </div>
                                    </div>
                                    <div class="product-content-wrap">
                                        <div class="product-category">
                                            <a href="shop-grid-right.html">Vegetables</a>
                                        </div>
                                        <h2><a onClick={()=>navigate('/view-product/slug')}>Foster Farms Takeout Crispy Classic</a></h2>
                                        <div class="product-card-bottom">
                                            <div class="product-price">
                                                <span>Rs. 17.85</span>
                                                <span class="old-price">Rs. 19.8</span>
                                            </div>
                                            <div class="add-cart">
                                                <a class="add" href="shop-cart.html"><i class="fi-rs-shopping-cart mr-5"></i>BUY </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-3 col-md-4 col-12 col-sm-6">
                                <div class="product-cart-wrap mb-30">
                                    <div class="product-img-action-wrap">
                                        <div class="product-img product-img-zoom">
                                            <a onClick={()=>navigate('/view-product/slug')}>
                                                <img class="default-img" src="assets/imgs/shop/product-5-1.jpg" alt="" />
                                                <img class="hover-img" src="assets/imgs/shop/product-5-2.jpg" alt="" />
                                            </a>
                                        </div>
                                        <div class="product-badges product-badges-position product-badges-mrg">
                                            <span class="best">-14%</span>
                                        </div>
                                    </div>
                                    <div class="product-content-wrap">
                                        <div class="product-category">
                                            <a href="shop-grid-right.html">Pet Foods</a>
                                        </div>
                                        <h2><a onClick={()=>navigate('/view-product/slug')}>Blue Diamond Almonds Lightly</a></h2>
                                        <div class="product-card-bottom">
                                            <div class="product-price">
                                                <span>Rs. 23.85</span>
                                                <span class="old-price">Rs. 25.8</span>
                                            </div>
                                            <div class="add-cart">
                                                <a class="add" href="shop-cart.html"><i class="fi-rs-shopping-cart mr-5"></i>BUY </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-3 col-md-4 col-12 col-sm-6">
                                <div class="product-cart-wrap mb-30">
                                    <div class="product-img-action-wrap">
                                        <div class="product-img product-img-zoom">
                                            <a onClick={()=>navigate('/view-product/slug')}>
                                                <img class="default-img" src="assets/imgs/shop/product-6-1.jpg" alt="" />
                                                <img class="hover-img" src="assets/imgs/shop/product-6-2.jpg" alt="" />
                                            </a>
                                        </div>
                                    </div>
                                    <div class="product-content-wrap">
                                        <div class="product-category">
                                            <a href="shop-grid-right.html">Hodo Foods</a>
                                        </div>
                                        <h2><a onClick={()=>navigate('/view-product/slug')}>Chobani Complete Vanilla Greek</a></h2>
                                        <div class="product-card-bottom">
                                            <div class="product-price">
                                                <span>Rs. 54.85</span>
                                                <span class="old-price">Rs. 55.8</span>
                                            </div>
                                            <div class="add-cart">
                                                <a class="add" href="shop-cart.html"><i class="fi-rs-shopping-cart mr-5"></i>BUY </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-3 col-md-4 col-12 col-sm-6">
                                <div class="product-cart-wrap mb-30">
                                    <div class="product-img-action-wrap">
                                        <div class="product-img product-img-zoom">
                                            <a onClick={()=>navigate('/view-product/slug')}>
                                                <img class="default-img" src="assets/imgs/shop/product-7-1.jpg" alt="" />
                                                <img class="hover-img" src="assets/imgs/shop/product-7-2.jpg" alt="" />
                                            </a>
                                        </div>
                                    </div>
                                    <div class="product-content-wrap">
                                        <div class="product-category">
                                            <a href="shop-grid-right.html">Meats</a>
                                        </div>
                                        <h2><a onClick={()=>navigate('/view-product/slug')}>Canada Dry Ginger Ale – 2 L Bottle</a></h2>
                                        <div class="product-card-bottom">
                                            <div class="product-price">
                                                <span>Rs. 32.85</span>
                                                <span class="old-price">Rs. 33.8</span>
                                            </div>
                                            <div class="add-cart">
                                                <a class="add" href="shop-cart.html"><i class="fi-rs-shopping-cart mr-5"></i>BUY </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-3 col-md-4 col-12 col-sm-6">
                                <div class="product-cart-wrap mb-30">
                                    <div class="product-img-action-wrap">
                                        <div class="product-img product-img-zoom">
                                            <a onClick={()=>navigate('/view-product/slug')}>
                                                <img class="default-img" src="assets/imgs/shop/product-8-1.jpg" alt="" />
                                                <img class="hover-img" src="assets/imgs/shop/product-8-2.jpg" alt="" />
                                            </a>
                                        </div>
                                        <div class="product-badges product-badges-position product-badges-mrg">
                                            <span class="sale">Sale</span>
                                        </div>
                                    </div>
                                    <div class="product-content-wrap">
                                        <div class="product-category">
                                            <a href="shop-grid-right.html">Snack</a>
                                        </div>
                                        <h2><a onClick={()=>navigate('/view-product/slug')}>Encore Seafoods Stuffed Alaskan</a></h2>
                                        <div class="product-card-bottom">
                                            <div class="product-price">
                                                <span>Rs. 35.85</span>
                                                <span class="old-price">Rs. 37.8</span>
                                            </div>
                                            <div class="add-cart">
                                                <a class="add" href="shop-cart.html"><i class="fi-rs-shopping-cart mr-5"></i>BUY </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-3 col-md-4 col-12 col-sm-6">
                                <div class="product-cart-wrap mb-30">
                                    <div class="product-img-action-wrap">
                                        <div class="product-img product-img-zoom">
                                            <a onClick={()=>navigate('/view-product/slug')}>
                                                <img class="default-img" src="assets/imgs/shop/product-9-1.jpg" alt="" />
                                                <img class="hover-img" src="assets/imgs/shop/product-9-2.jpg" alt="" />
                                            </a>
                                        </div>
                                        <div class="product-badges product-badges-position product-badges-mrg">
                                            <span class="hot">Hot</span>
                                        </div>
                                    </div>
                                    <div class="product-content-wrap">
                                        <div class="product-category">
                                            <a href="shop-grid-right.html">Coffes</a>
                                        </div>
                                        <h2><a onClick={()=>navigate('/view-product/slug')}>Gorton’s Beer Battered Fish Fillets</a></h2>
                                        <div class="product-card-bottom">
                                            <div class="product-price">
                                                <span>Rs. 23.85</span>
                                                <span class="old-price">Rs. 25.8</span>
                                            </div>
                                            <div class="add-cart">
                                                <a class="add" href="shop-cart.html"><i class="fi-rs-shopping-cart mr-5"></i>BUY </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-3 col-md-4 col-12 col-sm-6 d-none d-xl-block">
                                <div class="product-cart-wrap mb-30">
                                    <div class="product-img-action-wrap">
                                        <div class="product-img product-img-zoom">
                                            <a onClick={()=>navigate('/view-product/slug')}>
                                                <img class="default-img" src="assets/imgs/shop/product-10-1.jpg" alt="" />
                                                <img class="hover-img" src="assets/imgs/shop/product-10-2.jpg" alt="" />
                                            </a>
                                        </div>
                                    </div>
                                    <div class="product-content-wrap">
                                        <div class="product-category">
                                            <a href="shop-grid-right.html">Cream</a>
                                        </div>
                                        <h2><a onClick={()=>navigate('/view-product/slug')}>Haagen-Dazs Caramel Cone Ice Cream</a></h2>
                                        <div class="product-card-bottom">
                                            <div class="product-price">
                                                <span>Rs. 22.85</span>
                                                <span class="old-price">Rs. 24.8</span>
                                            </div>
                                            <div class="add-cart">
                                                <a class="add" href="shop-cart.html"><i class="fi-rs-shopping-cart mr-5"></i>BUY </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-3 col-md-4 col-12 col-sm-6">
                                <div class="product-cart-wrap mb-30">
                                    <div class="product-img-action-wrap">
                                        <div class="product-img product-img-zoom">
                                            <a onClick={()=>navigate('/view-product/slug')}>
                                                <img class="default-img" src="assets/imgs/shop/product-1-1.jpg" alt="" />
                                                <img class="hover-img" src="assets/imgs/shop/product-1-2.jpg" alt="" />
                                            </a>
                                        </div>
                                        <div class="product-badges product-badges-position product-badges-mrg">
                                            <span class="hot">Hot</span>
                                        </div>
                                    </div>
                                    <div class="product-content-wrap">
                                        <div class="product-category">
                                            <a href="shop-grid-right.html">Snack</a>
                                        </div>
                                        <h2><a onClick={()=>navigate('/view-product/slug')}>Seeds of Change Organic Quinoe</a></h2>
                                        <div class="product-card-bottom">
                                            <div class="product-price">
                                                <span>Rs. 28.85</span>
                                                <span class="old-price">Rs. 32.8</span>
                                            </div>
                                            <div class="add-cart">
                                                <a class="add" href="shop-cart.html"><i class="fi-rs-shopping-cart mr-5"></i>BUY </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-3 col-md-4 col-12 col-sm-6">
                                <div class="product-cart-wrap mb-30">
                                    <div class="product-img-action-wrap">
                                        <div class="product-img product-img-zoom">
                                            <a onClick={()=>navigate('/view-product/slug')}>
                                                <img class="default-img" src="assets/imgs/shop/product-2-1.jpg" alt="" />
                                                <img class="hover-img" src="assets/imgs/shop/product-2-2.jpg" alt="" />
                                            </a>
                                        </div>
                                        <div class="product-badges product-badges-position product-badges-mrg">
                                            <span class="sale">Sale</span>
                                        </div>
                                    </div>
                                    <div class="product-content-wrap">
                                        <div class="product-category">
                                            <a href="shop-grid-right.html">Hodo Foods</a>
                                        </div>
                                        <h2><a onClick={()=>navigate('/view-product/slug')}>All Natural Italian-Style Chicken Meatballs</a></h2>
                                        <div class="product-card-bottom">
                                            <div class="product-price">
                                                <span>Rs. 52.85</span>
                                                <span class="old-price">Rs. 55.8</span>
                                            </div>
                                            <div class="add-cart">
                                                <a class="add" href="shop-cart.html"><i class="fi-rs-shopping-cart mr-5"></i>BUY </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-3 col-md-4 col-12 col-sm-6">
                                <div class="product-cart-wrap mb-30">
                                    <div class="product-img-action-wrap">
                                        <div class="product-img product-img-zoom">
                                            <a onClick={()=>navigate('/view-product/slug')}>
                                                <img class="default-img" src="assets/imgs/shop/product-3-1.jpg" alt="" />
                                                <img class="hover-img" src="assets/imgs/shop/product-3-2.jpg" alt="" />
                                            </a>
                                        </div>
                                        <div class="product-badges product-badges-position product-badges-mrg">
                                            <span class="new">New</span>
                                        </div>
                                    </div>
                                    <div class="product-content-wrap">
                                        <div class="product-category">
                                            <a href="shop-grid-right.html">Snack</a>
                                        </div>
                                        <h2><a onClick={()=>navigate('/view-product/slug')}>Angie’s Boomchickapop Sweet &amp; Salty</a></h2>
                                        <div class="product-card-bottom">
                                            <div class="product-price">
                                                <span>Rs. 48.85</span>
                                                <span class="old-price">Rs. 52.8</span>
                                            </div>
                                            <div class="add-cart">
                                                <a class="add" href="shop-cart.html"><i class="fi-rs-shopping-cart mr-5"></i>BUY </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-3 col-md-4 col-12 col-sm-6">
                                <div class="product-cart-wrap mb-30">
                                    <div class="product-img-action-wrap">
                                        <div class="product-img product-img-zoom">
                                            <a onClick={()=>navigate('/view-product/slug')}>
                                                <img class="default-img" src="assets/imgs/shop/product-4-1.jpg" alt="" />
                                                <img class="hover-img" src="assets/imgs/shop/product-4-2.jpg" alt="" />
                                            </a>
                                        </div>
                                    </div>
                                    <div class="product-content-wrap">
                                        <div class="product-category">
                                            <a href="shop-grid-right.html">Vegetables</a>
                                        </div>
                                        <h2><a onClick={()=>navigate('/view-product/slug')}>Foster Farms Takeout Crispy Classic</a></h2>
                                        <div class="product-card-bottom">
                                            <div class="product-price">
                                                <span>Rs. 17.85</span>
                                                <span class="old-price">Rs. 19.8</span>
                                            </div>
                                            <div class="add-cart">
                                                <a class="add" href="shop-cart.html"><i class="fi-rs-shopping-cart mr-5"></i>BUY </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-3 col-md-4 col-12 col-sm-6">
                                <div class="product-cart-wrap mb-30">
                                    <div class="product-img-action-wrap">
                                        <div class="product-img product-img-zoom">
                                            <a onClick={()=>navigate('/view-product/slug')}>
                                                <img class="default-img" src="assets/imgs/shop/product-5-1.jpg" alt="" />
                                                <img class="hover-img" src="assets/imgs/shop/product-5-2.jpg" alt="" />
                                            </a>
                                        </div>
                                        <div class="product-badges product-badges-position product-badges-mrg">
                                            <span class="best">-14%</span>
                                        </div>
                                    </div>
                                    <div class="product-content-wrap">
                                        <div class="product-category">
                                            <a href="shop-grid-right.html">Pet Foods</a>
                                        </div>
                                        <h2><a onClick={()=>navigate('/view-product/slug')}>Blue Diamond Almonds Lightly</a></h2>
                                        <div class="product-card-bottom">
                                            <div class="product-price">
                                                <span>Rs. 23.85</span>
                                                <span class="old-price">Rs. 25.8</span>
                                            </div>
                                            <div class="add-cart">
                                                <a class="add" href="shop-cart.html"><i class="fi-rs-shopping-cart mr-5"></i>BUY </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-3 col-md-4 col-12 col-sm-6">
                                <div class="product-cart-wrap mb-30">
                                    <div class="product-img-action-wrap">
                                        <div class="product-img product-img-zoom">
                                            <a onClick={()=>navigate('/view-product/slug')}>
                                                <img class="default-img" src="assets/imgs/shop/product-6-1.jpg" alt="" />
                                                <img class="hover-img" src="assets/imgs/shop/product-6-2.jpg" alt="" />
                                            </a>
                                        </div>
                                    </div>
                                    <div class="product-content-wrap">
                                        <div class="product-category">
                                            <a href="shop-grid-right.html">Hodo Foods</a>
                                        </div>
                                        <h2><a onClick={()=>navigate('/view-product/slug')}>Chobani Complete Vanilla Greek</a></h2>
                                        <div class="product-card-bottom">
                                            <div class="product-price">
                                                <span>Rs. 54.85</span>
                                                <span class="old-price">Rs. 55.8</span>
                                            </div>
                                            <div class="add-cart">
                                                <a class="add" href="shop-cart.html"><i class="fi-rs-shopping-cart mr-5"></i>BUY </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-3 col-md-4 col-12 col-sm-6">
                                <div class="product-cart-wrap mb-30">
                                    <div class="product-img-action-wrap">
                                        <div class="product-img product-img-zoom">
                                            <a onClick={()=>navigate('/view-product/slug')}>
                                                <img class="default-img" src="assets/imgs/shop/product-7-1.jpg" alt="" />
                                                <img class="hover-img" src="assets/imgs/shop/product-7-2.jpg" alt="" />
                                            </a>
                                        </div>
                                    </div>
                                    <div class="product-content-wrap">
                                        <div class="product-category">
                                            <a href="shop-grid-right.html">Meats</a>
                                        </div>
                                        <h2><a onClick={()=>navigate('/view-product/slug')}>Canada Dry Ginger Ale – 2 L Bottle</a></h2>
                                        <div class="product-card-bottom">
                                            <div class="product-price">
                                                <span>Rs. 32.85</span>
                                                <span class="old-price">Rs. 33.8</span>
                                            </div>
                                            <div class="add-cart">
                                                <a class="add" href="shop-cart.html"><i class="fi-rs-shopping-cart mr-5"></i>BUY </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-3 col-md-4 col-12 col-sm-6">
                                <div class="product-cart-wrap mb-30">
                                    <div class="product-img-action-wrap">
                                        <div class="product-img product-img-zoom">
                                            <a onClick={()=>navigate('/view-product/slug')}>
                                                <img class="default-img" src="assets/imgs/shop/product-8-1.jpg" alt="" />
                                                <img class="hover-img" src="assets/imgs/shop/product-8-2.jpg" alt="" />
                                            </a>
                                        </div>
                                        <div class="product-badges product-badges-position product-badges-mrg">
                                            <span class="sale">Sale</span>
                                        </div>
                                    </div>
                                    <div class="product-content-wrap">
                                        <div class="product-category">
                                            <a href="shop-grid-right.html">Snack</a>
                                        </div>
                                        <h2><a onClick={()=>navigate('/view-product/slug')}>Encore Seafoods Stuffed Alaskan</a></h2>
                                        <div class="product-card-bottom">
                                            <div class="product-price">
                                                <span>Rs. 35.85</span>
                                                <span class="old-price">Rs. 37.8</span>
                                            </div>
                                            <div class="add-cart">
                                                <a class="add" href="shop-cart.html"><i class="fi-rs-shopping-cart mr-5"></i>BUY </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-3 col-md-4 col-12 col-sm-6">
                                <div class="product-cart-wrap mb-30">
                                    <div class="product-img-action-wrap">
                                        <div class="product-img product-img-zoom">
                                            <a onClick={()=>navigate('/view-product/slug')}>
                                                <img class="default-img" src="assets/imgs/shop/product-9-1.jpg" alt="" />
                                                <img class="hover-img" src="assets/imgs/shop/product-9-2.jpg" alt="" />
                                            </a>
                                        </div>
                                        <div class="product-badges product-badges-position product-badges-mrg">
                                            <span class="hot">Hot</span>
                                        </div>
                                    </div>
                                    <div class="product-content-wrap">
                                        <div class="product-category">
                                            <a href="shop-grid-right.html">Coffes</a>
                                        </div>
                                        <h2><a onClick={()=>navigate('/view-product/slug')}>Gorton’s Beer Battered Fish Fillets</a></h2>
                                        <div class="product-card-bottom">
                                            <div class="product-price">
                                                <span>Rs. 23.85</span>
                                                <span class="old-price">Rs. 25.8</span>
                                            </div>
                                            <div class="add-cart">
                                                <a class="add" href="shop-cart.html"><i class="fi-rs-shopping-cart mr-5"></i>BUY </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-3 col-md-4 col-12 col-sm-6 d-none d-xl-block">
                                <div class="product-cart-wrap">
                                    <div class="product-img-action-wrap">
                                        <div class="product-img product-img-zoom">
                                            <a onClick={()=>navigate('/view-product/slug')}>
                                                <img class="default-img" src="assets/imgs/shop/product-10-1.jpg" alt="" />
                                                <img class="hover-img" src="assets/imgs/shop/product-10-2.jpg" alt="" />
                                            </a>
                                        </div>
                                    </div>
                                    <div class="product-content-wrap">
                                        <div class="product-category">
                                            <a href="shop-grid-right.html">Cream</a>
                                        </div>
                                        <h2><a onClick={()=>navigate('/view-product/slug')}>Haagen-Dazs Caramel Cone Ice Cream</a></h2>
                                        <div class="product-card-bottom">
                                            <div class="product-price">
                                                <span>Rs. 22.85</span>
                                                <span class="old-price">Rs. 24.8</span>
                                            </div>
                                            <div class="add-cart">
                                                <a class="add" href="shop-cart.html"><i class="fi-rs-shopping-cart mr-5"></i>BUY </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* PAGINATION */}
                        {/* <div class="pagination-area mt-20 mb-20">
                            <nav aria-label="Page navigation example">
                                <ul class="pagination justify-content-start">
                                    <li class="page-item">
                                        <a class="page-link" href="#"><i class="fi-rs-arrow-small-left"></i></a>
                                    </li>
                                    <li class="page-item"><a class="page-link" href="#">1</a></li>
                                    <li class="page-item active"><a class="page-link" href="#">2</a></li>
                                    <li class="page-item"><a class="page-link" href="#">3</a></li>
                                    <li class="page-item"><a class="page-link dot" href="#">...</a></li>
                                    <li class="page-item"><a class="page-link" href="#">6</a></li>
                                    <li class="page-item">
                                        <a class="page-link" href="#"><i class="fi-rs-arrow-small-right"></i></a>
                                    </li>
                                </ul>
                            </nav>
                        </div> */}

                    </div>
                </div>
            </div>
        </main>
    )
}

export default ProductList