import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/image/logo.png';

const Header = () => {
    const navigate = useNavigate();
    const [menuOpen, setMenuOpen] = useState(false);
    const newsItems = [
        '100% Secure delivery without contacting the courier',
        'Super Value Deals - Save more with coupons',
        'Trendy 25silver jewelry, save up 35% off today',
    ];
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prevIndex) => (prevIndex + 1) % newsItems.length);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    const toggleMenu = () => {
        setMenuOpen((prev) => !prev);
    };

    return (
        <div>
            <header className="header-area header-style-1 header-height-2">
                <div className="mobile-promotion">
                    <span>Grand opening, <strong>up to 15%</strong> off all items. Only <strong>3 days</strong> left</span>
                </div>

                <div className="header-middle header-middle-ptb-1 d-none d-lg-block">
                    <div className="container">
                        <div className="header-wrap">
                            <div className="logo logo-width-1">
                                <a onClick={() => navigate("/")}><img src={logo}  alt="logo" /></a>
                            </div>
                            <div className="header-right">
                                <div className="main-menu main-menu-padding-1 main-menu-lh-2 d-none d-lg-block font-heading">
                                    <nav>
                                        <ul>
                                            <li><a onClick={() => navigate("/")}>Home</a></li>
                                            <li><a onClick={() => navigate("/product-list")}>Product</a></li>
                                            <li><a onClick={() => navigate("/about")}>About</a></li>
                                            <li><a onClick={() => navigate('/contact')}>Contact</a></li>
                                        </ul>
                                    </nav>
                                </div>
                                <div className="hotline d-none d-lg-flex">
                                    <img src="assets/imgs/theme/icons/icon-headphone.svg" alt="hotline" />
                                    <p>9300062750<span>24/7 Support team</span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="header-bottom header-bottom-bg-color sticky-bar">
                    <div className="container">
                        <div className="header-wrap header-space-between position-relative">
                            <div className="logo logo-width-1 d-block d-lg-none">
                                <a href="javascript:void(0)"><img src={logo} alt="logo" /></a>
                            </div>

                            <div className="header-action-icon-2 d-block d-lg-none">
                                <div className="burger-icon burger-icon-white" onClick={toggleMenu}>
                                    <span className="burger-icon-top"></span>
                                    <span className="burger-icon-mid"></span>
                                    <span className="burger-icon-bottom"></span>
                                </div>
                            </div>

                            <div className="header-action-right d-block d-lg-none">
                                <div className="header-action-2">
                                    <div className="header-action-icon-2">
                                        <a href="javascript:void(0)">
                                            <img alt="Nest" src="assets/imgs/theme/icons/icon-heart.svg" />
                                        </a>
                                    </div>
                                    {/* <div className="header-action-icon-2">
                                        <a className="mini-cart-icon" href="javascript:void(0)">
                                            <img alt="Nest" src="assets/imgs/theme/icons/icon-cart.svg" />
                                        </a>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <div className={`mobile-header-active mobile-header-wrapper-style ${menuOpen ? 'sidebar-visible' : ''}`}>
                <div className="mobile-header-wrapper-inner">
                    <div className="mobile-header-top">
                        <div className="mobile-header-logo">
                            <a href="javascript:void(0)"><img src={logo} alt="logo" /></a>
                        </div>
                        <div className="mobile-menu-close close-style-wrap close-style-position-inherit" onClick={toggleMenu}>
                            <button className="close-style search-close">
                                <i className="icon-top"></i>
                                <i className="icon-bottom"></i>
                            </button>
                        </div>
                    </div>
                    <div className="mobile-header-content-area">
                        <div className="mobile-menu-wrap mobile-header-border">
                            <nav>
                                <ul className="mobile-menu font-heading">
                                    <li><a onClick={() => { navigate('/'); toggleMenu() }}>Home</a></li>
                                    <li><a onClick={() => { navigate('/product'); toggleMenu() }}>Product</a></li>
                                    <li><a onClick={() => { navigate('/about'); toggleMenu() }}>About</a></li>
                                    <li><a onClick={() => { navigate('/contact'); toggleMenu() }}>Contact</a></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
