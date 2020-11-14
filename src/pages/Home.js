import React, {Component} from 'react';
class Home extends Component {
    render() {
	    return (
<div className="row ">
	<div className="medium-12 columns">


            
   
     <header id="home">
        <div class="header-area">  
    
            <div class="header-top primary-bg">
                <div class="container">
                    <div class="row">
                        <div class="col-xl-6 col-lg-6 col-md-6 col-12">
                            <div class="header-contact-info d-flex">
                                <div class="header-contact header-contact-phone">
                                    <span class="ti-headphone"></span>
                                    <p class="phone-number">+0123456789</p>
                                </div>
                                <div class="header-contact header-contact-email">
                                    <span class="ti-email"></span>
                                    <p class="email-name">support@gmail.com</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                            <div class="header-social-icon-list">
                                <ul>
                                    <li><a href="#"><span class="ti-facebook"></span></a></li>
                                    <li><a href="#"><span class="ti-twitter-alt"></span></a></li>
                                    <li><a href="#"><span class="ti-dribbble"></span></a></li>
                                    <li><a href="#"><span class="ti-google"></span></a></li>
                                    <li><a href="#"><span class="ti-pinterest"></span></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        
            <div class="header-bottom-area header-sticky" style={{transition:'.6s'}}>
                <div class="container">
                    <div class="row align-items-center">
                        <div class="col-xl-2 col-lg-2 col-md-6 col-6">
                            <div class="logo">
                                <a href="index.html">
                                    <img src="img/logo/logo.png" alt=""/>
                                </a>
                            </div>
                        </div>
                        <div class="col-xl-10 col-lg-10 col-md-6 col-6">
                             <div class="header-bottom-icon f-right">
                                <ul>
                                    <li class="toggle-search-icon"><a href="#"><span class="ti-search"></span>
                                            <div class="toggle-search-box">
                                                <form action="#" id="searchbox">
                                                    <input placeholder="Search" type="text"/>
                                                    <button class="button-search"><span class="ti-search"></span></button>
                                                </form>
                                            </div>
                                        </a>

                                    </li>
                                    <li class="shopping-cart"><a href="#"><span class="ti-shopping-cart"></span>
                                            <span class="shopping-counter">0</span>
                                        </a></li>
                                </ul>
                             </div>
                             
                            <div class="main-menu f-right">
                                <nav id="mobile-menu" style={{ display: 'block' }}>
                                    <ul>
                                        <li>
                                            <a href="#home">Home</a>
                                            <ul class="submenu">
                                                <li>
                                                    <a href="index.html">Home style 1</a>
                                                </li>
                                                <li>
                                                    <a href="index_2.html">Home style 2</a>
                                                </li>
                                                <li>
                                                    <a href="index_3.html">Home style 3</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a href="#about">PAGES</a>
                                            <ul class="submenu">
                                                <li>
                                                    <a href="about_us.html">About Us</a>
                                                </li>
                                                <li>
                                                    <a href="advisors.html">Advisors</a>
                                                </li>
                                                <li>
                                                    <a href="advisors_details.html">Advisors Details</a>
                                                </li>
                                                <li>
                                                    <a href="faq.html">FAQ</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a href="#about">ELEMENTS</a>
                                            <ul class="submenu">
                                                <li>
                                                    <a href="events_01.html">Events 01</a>
                                                </li>
                                                <li>
                                                    <a href="events_02.html">Events 02</a>
                                                </li>
                                                <li>
                                                    <a href="event_details.html">Events Details</a>
                                                </li>
                                                <li>
                                                    <a href="shop_pages.html">Shop</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a href="course_01.html">Courses</a>
                                            <ul class="submenu">
                                                <li>
                                                    <a href="course_01.html">Courses 01</a>
                                                </li>
                                                <li>
                                                    <a href="course_02.html">Courses 02</a>
                                                </li>
                                                <li>
                                                    <a href="course_03.html">Courses 03</a>
                                                </li>
                                                <li>
                                                    <a href="course_details.html">Course Details</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a href="events_01.html">NEWS</a>
                                            <ul class="submenu">
                                                <li>
                                                    <a href="grid_news.html">Blog 3 Column</a>
                                                </li>
                                                <li>
                                                    <a href="standard_blog.html">Blog Sidebar</a>
                                                </li>
                                                <li>
                                                    <a href="news_details.html">Blog Details</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a href="contact_us.html">CONTACT</a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                        <div class="col-12">
                            <div class="mobile-menu"></div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
         </header>
         
   
        <div class="slider-area pos-relative">
        <div class="slider-active">
            <div class="single-slider slider-height d-flex align-items-center" style={{ backgroundImage :`url(require("img/slider/slider_bg_001.jpg)")`}}></div>
                <div class="container">
                    <div class="row">
                        <div class="col-xl-9 col-md-12">
                            <div class="slider-content slider-content-2">
                                <h1 class="white-color f-700" data-animation="fadeInUp" data-delay=".2s">No Nation Can Prosper<br/>In Life Without Education</h1>
                                <p data-animation="fadeInUp" data-delay=".4s">Sorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod tempor <br/> incididunt ut labore et dolore magna aliqua enim ad minime.</p>
                                <button class="btn yellow-bg-btn" data-animation="fadeInUp" data-delay=".6s">admit now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="single-slider slider-height d-flex align-items-center"  style={{ backgroundImage :`url(require("img/slider/slider_bg_001.jpg)")`}} >
                <div class="container">
                    <div class="row">
                        <div class="col-xl-9 col-md-12">
                            <div class="slider-content slider-content-2">
                                <h1 class="white-color f-700" data-animation="fadeInUp" data-delay=".2s">No Nation Can Prosper<br/>In Life Without Education</h1>
                                <p data-animation="fadeInUp" data-delay=".4s">Sorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod tempor <br/> incididunt ut labore et dolore magna aliqua enim ad minime.</p>
                                <button class="btn yellow-bg-btn" data-animation="fadeInUp" data-delay=".6s">admit now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="single-slider slider-height d-flex align-items-center" style={{ backgroundImage :`url(require("img/slider/slider_bg_001.jpg)")`}}>
                <div class="container">
                    <div class="row">
                        <div class="col-xl-9 col-md-12">
                            <div class="slider-content slider-content-2">
                                <h1 class="white-color f-700" data-animation="fadeInUp" data-delay=".2s">No Nation Can Prosper<br/>In Life Without Education</h1>
                                <p data-animation="fadeInUp" data-delay=".4s">Sorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod tempor <br/> incididunt ut labore et dolore magna aliqua enim ad minime.</p>
                                <button class="btn yellow-bg-btn" data-animation="fadeInUp" data-delay=".6s">admit now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     </div>
  
     <div id="courses" class="courses-area courses-bg-height pt-95 pb-70">
        <div class="container">
            <div class="row">
                <div class="col-xl-6 offset-xl-3 col-lg-8 offset-lg-2 col-md-10 offset-md-1">
                    <div class="section-title mb-50 text-center">
                        <div class="section-title-heading mb-20">
                            <h1 class="primary-color">Our Latest Courses</h1>
                        </div>
                        <div class="section-title-para">
                            <p class="gray-color">Belis nisl adipiscing sapien sed malesu diame lacus eget erat Cras mollis scelerisqu Nullam arcu liquam here was consequat.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="courses-list">
                <div class="row">
                    <div class="col-xl-3 col-lg-3 col-md-6">
                        <div class="courses-wrapper mb-30">
                            <div class="courses-thumb">
                                <a href="course_details.html"><img src="img/courses/coursesthumb001.jpg" alt=""/></a>
                            </div>
                            <div class="courses-author-2 text-center">
                                <img src="img/courses/coursesauthor1.png" alt=""/>
                            </div>
                            <div class="courses-content courses-content-2 text-center">
                                <div class="courses-heading text-center">
                                    <h1><a href="course_details.html">Complete Full English From Beginner</a></h1>
                                </div>
                                <div class="courses-icon text-center">
                                    <div class="courses-single-icon courses-single-icon-2">
                                        <span class="ti-money"></span>
                                        <span class="price">Price</span>
                                        <span class="user-number">235</span>
                                    </div>
                                    <div class="courses-single-icon courses-single-icon-2">
                                        <span class="ti-user"></span>
                                        <span class="seat">Seat</span>
                                        <span class="user-number">50</span>
                                    </div>
                                </div>
                            </div>
                            <div class="courses-wrapper-bottom courses-wrapper-bottom-2 d-flex justify-content-between">
                                <div class="testimonilas-rating testimonilas-rating-2">
                                    <ul>
                                        <li><span class="ti-star"></span></li>
                                        <li><span class="ti-star"></span></li>
                                        <li><span class="ti-star"></span></li>
                                        <li><span class="ti-star"></span></li>
                                        <li><span class="ti-star"></span></li>
                                    </ul>
                                </div>
                                <div class="courses-button courses-button-2 text-uppercase">
                                    <a href="course_details.html">View Details</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-3 col-lg-3 col-md-6">
                        <div class="courses-wrapper mb-30">
                            <div class="courses-thumb">
                                <a href="course_details.html"><img src="img/courses/coursesthumb002.jpg" alt=""/></a>
                            </div>
                            <div class="courses-author-2 text-center">
                                <img src="img/courses/coursesauthor2.png" alt=""/>
                            </div>
                            <div class="courses-content courses-content-2 text-center">
                                <div class="courses-heading text-center">
                                    <h1><a href="course_details.html">Learn Computer Science &amp; Engineering</a></h1>
                                </div>
                                <div class="courses-icon text-center">
                                    <div class="courses-single-icon courses-single-icon-2">
                                        <span class="ti-money"></span>
                                        <span class="price">Price</span>
                                        <span class="user-number">235</span>
                                    </div>
                                    <div class="courses-single-icon courses-single-icon-2">
                                        <span class="ti-user"></span>
                                        <span class="seat">Seat</span>
                                        <span class="user-number">50</span>
                                    </div>
                                </div>
                            </div>
                            <div class="courses-wrapper-bottom courses-wrapper-bottom-2 d-flex justify-content-between">
                                <div class="testimonilas-rating testimonilas-rating-2">
                                    <ul>
                                        <li><span class="ti-star"></span></li>
                                        <li><span class="ti-star"></span></li>
                                        <li><span class="ti-star"></span></li>
                                        <li><span class="ti-star"></span></li>
                                        <li><span class="ti-star"></span></li>
                                    </ul>
                                </div>
                                <div class="courses-button courses-button-2 text-uppercase">
                                    <a href="course_details.html">View Details</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-3 col-lg-3 col-md-6">
                        <div class="courses-wrapper mb-30">
                            <div class="courses-thumb">
                                <a href="course_details.html"><img src="img/courses/coursesthumb003.jpg" alt=""/></a>
                            </div>
                            <div class="courses-author-2 text-center">
                                <img src="img/courses/coursesauthor3.png" alt=""/>
                            </div>
                            <div class="courses-content courses-content-2 text-center">
                                <div class="courses-heading text-center">
                                    <h1><a href="course_details.html">Complete Full Web Development</a></h1>
                                </div>
                                <div class="courses-icon text-center">
                                    <div class="courses-single-icon courses-single-icon-2">
                                        <span class="ti-money"></span>
                                        <span class="price">Price</span>
                                        <span class="user-number">235</span>
                                    </div>
                                    <div class="courses-single-icon courses-single-icon-2">
                                        <span class="ti-user"></span>
                                        <span class="seat">Seat</span>
                                        <span class="user-number">50</span>
                                    </div>
                                </div>
                            </div>
                            <div class="courses-wrapper-bottom courses-wrapper-bottom-2 d-flex justify-content-between">
                                <div class="testimonilas-rating testimonilas-rating-2">
                                    <ul>
                                        <li><span class="ti-star"></span></li>
                                        <li><span class="ti-star"></span></li>
                                        <li><span class="ti-star"></span></li>
                                        <li><span class="ti-star"></span></li>
                                        <li><span class="ti-star"></span></li>
                                    </ul>
                                </div>
                                <div class="courses-button courses-button-2 text-uppercase">
                                    <a href="course_details.html">View Details</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-3 col-lg-3 col-md-6">
                        <div class="courses-wrapper mb-30">
                            <div class="courses-thumb">
                                <a href="course_details.html"><img src="img/courses/coursesthumb004.jpg" alt=""/></a>
                            </div>
                            <div class="courses-author-2 text-center">
                                <img src="img/courses/coursesauthor1.png" alt=""/>
                            </div>
                            <div class="courses-content courses-content-2 text-center">
                                <div class="courses-heading text-center">
                                    <h1><a href="course_details.html">Studing In Medical Science In Full Course</a></h1>
                                </div>
                                <div class="courses-icon text-center">
                                    <div class="courses-single-icon courses-single-icon-2">
                                        <span class="ti-money"></span>
                                        <span class="price">Price</span>
                                        <span class="user-number">235</span>
                                    </div>
                                    <div class="courses-single-icon courses-single-icon-2">
                                        <span class="ti-user"></span>
                                        <span class="seat">Seat</span>
                                        <span class="user-number">50</span>
                                    </div>
                                </div>
                            </div>
                            <div class="courses-wrapper-bottom courses-wrapper-bottom-2 d-flex justify-content-between">
                                <div class="testimonilas-rating testimonilas-rating-2">
                                    <ul>
                                        <li><span class="ti-star"></span></li>
                                        <li><span class="ti-star"></span></li>
                                        <li><span class="ti-star"></span></li>
                                        <li><span class="ti-star"></span></li>
                                        <li><span class="ti-star"></span></li>
                                    </ul>
                                </div>
                                <div class="courses-button courses-button-2 text-uppercase">
                                    <a href="course_details.html">View Details</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     </div>

     <div id="events" class="events-area events-bg-height pt-100 pb-70" style={{ backgroundImage :`url(require("img/courses/courses_bg.png)")`}}>
        <div class="container">
            <div class="events-list">
                <div class="row">
                    <div class="col-xl-5 col-lg-6 col-md-12">
                        <div class="events-registration-form mb-30">
                            <div class="events-registration-form-wrapper">
                                <div class="events-registration-form-heading d-flex justify-content-between">
                                    <div class="events-registration-form-heading-title">
                                        <h1>Registation Now</h1>
                                        <span>Fillup the form</span>
                                    </div>
                                    <div class="events-registration-form-heading-icon">
                                        <img src="img/events/events-registration-form-icon.png" alt=""/>
                                    </div>
                                </div>
                                <div class="events-registration-main-form">
                                    <form action="#">
                                        <input type="text" placeholder="Your Name:"/>
                                        <input type="email" placeholder="Your Email:"/>
                                        <input type="text" placeholder="Your Phone:"/>
                                        <input type="text" placeholder="Your Subject:"/>
                                    </form>
                                    <button class="btn yellow-bg-btn blue-bg-btn-hover">admit now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-7 col-lg-6 col-md-12">
                        <div class="row">
                            <div class="col-xl-12">
                                <div class="section-title section-title-para-2 mb-40">
                                    <div class="section-title-heading mb-10">
                                        <h1 class="white-color">Latest Events</h1>
                                    </div>
                                    <div class="section-title-para">
                                        <p class="white-color">Belis nisl adipiscing sapien sed malesu diame</p>
                                    </div>
                                </div>
                                <div class="events-button-ara">
                                    <button class="btn white-border-btn">view all</button>
                                </div>
                            </div>
                        </div>
                        <div class="single-events mb-30">
                            <div class="events-wrapper">
                                <div class="events-inner d-flex">
                                    <div class="events-thumb">
                                        <img src="img/events/events_001.png" alt=""/>
                                    </div>
                                    <div class="events-text events-text-2 white-bg">
                                        <div class="event-text-heading d-flex mb-20">
                                            <div class="events-text-title">
                                                <a href="#">
                                                    <h4>Annual Meeting -2018</h4>
                                                </a>
                                                <div class="time-area time-area-2">
                                                    <span class="ti-timer"></span>
                                                    <span class="published-time">8:00 AM - 5:00 PM</span>
                                                </div>
                                                <div class="time-area time-area-2">
                                                    <span class="ti-map-alt"></span>
                                                    <span class="published-time published-location">High street, USA</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="events-para">
                                            <p>I will give you a complete account of the system and expound the actual teachings</p>
                                        </div>
                                        <div class="events-view-btn mt-10">
                                            <a href="event_details.html">View Details</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="single-events mb-30">
                            <div class="events-wrapper">
                                <div class="events-inner d-flex">
                                    <div class="events-thumb">
                                        <img src="img/events/events_002.png" alt=""/>
                                    </div>
                                    <div class="events-text events-text-2 white-bg">
                                        <div class="event-text-heading d-flex mb-20">
                                            <div class="events-text-title">
                                                <a href="#">
                                                    <h4>Science Fair -2018</h4>
                                                </a>
                                                <div class="time-area time-area-2">
                                                    <span class="ti-timer"></span>
                                                    <span class="published-time">8:00 AM - 5:00 PM</span>
                                                </div>
                                                <div class="time-area time-area-2">
                                                    <span class="ti-map-alt"></span>
                                                    <span class="published-time published-location">High street, USA</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="events-para">
                                            <p>I will give you a complete account of the system and expound the actual teachings</p>
                                        </div>
                                        <div class="events-view-btn mt-10">
                                            <a href="event_details.html">View Details</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     </div>
  
     <div class="team-area pt-95 pb-70">
        <div class="container">
            <div class="row">
                <div class="col-xl-6 offset-xl-3 col-lg-8 offset-lg-2 col-md-10 offset-md-1">
                    <div class="section-title mb-50 text-center">
                        <div class="section-title-heading mb-20">
                            <h1 class="primary-color">Our Experience Advisors</h1>
                        </div>
                        <div class="section-title-para">
                            <p class="gray-color">Belis nisl adipiscing sapien sed malesu diame lacus eget erat Cras mollis scelerisqu Nullam arcu liquam here was consequat.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="team-list">
                <div class="row">
                    <div class="col-xl-3 col-lg-3 col-md-6">
                        <div class="team-wrapper team-wrapper-2 mb-30">
                            <div class="team-thumb">
                                <img src="img/team/teamthumb001.jpg" alt=""/>
                            </div>
                            <div class="team-social-info text-center">
                                <div class="team-social-icon-list">
                                    <ul>
                                        <li><a href="#"><span class="ti-facebook"></span></a></li>
                                        <li><a href="#"><span class="ti-twitter-alt"></span></a></li>
                                        <li><a href="#"><span class="ti-google"></span></a></li>
                                        <li><a href="#"><span class="ti-linkedin"></span></a></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="team-teacher-info team-teacher-info-2 text-center">
                                <h1>Chase M. Bynum</h1>
                                <h2>English Teacher</h2>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-3 col-lg-3 col-md-6">
                        <div class="team-wrapper team-wrapper-2 mb-30">
                            <div class="team-thumb">
                                <img src="img/team/teamthumb002.jpg" alt=""/>
                            </div>
                            <div class="team-social-info text-center">
                                <div class="team-social-icon-list">
                                    <ul>
                                        <li><a href="#"><span class="ti-facebook"></span></a></li>
                                        <li><a href="#"><span class="ti-twitter-alt"></span></a></li>
                                        <li><a href="#"><span class="ti-google"></span></a></li>
                                        <li><a href="#"><span class="ti-linkedin"></span></a></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="team-teacher-info team-teacher-info-2 text-center">
                                <h1>Brenda C. Garcia</h1>
                                <h2>CSE Teacher</h2>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-3 col-lg-3 col-md-6">
                        <div class="team-wrapper team-wrapper-2 mb-30">
                            <div class="team-thumb">
                                <img src="img/team/teamthumb003.jpg" alt=""/>
                            </div>
                            <div class="team-social-info text-center">
                                <div class="team-social-icon-list">
                                    <ul>
                                        <li><a href="#"><span class="ti-facebook"></span></a></li>
                                        <li><a href="#"><span class="ti-twitter-alt"></span></a></li>
                                        <li><a href="#"><span class="ti-google"></span></a></li>
                                        <li><a href="#"><span class="ti-linkedin"></span></a></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="team-teacher-info team-teacher-info-2 text-center">
                                <h1>Marc K. Bruhn</h1>
                                <h2>Math Teacher</h2>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-3 col-lg-3 col-md-6">
                        <div class="team-wrapper team-wrapper-2 mb-30">
                            <div class="team-thumb">
                                <img src="img/team/teamthumb004.jpg" alt=""/>
                            </div>
                            <div class="team-social-info text-center">
                                <div class="team-social-icon-list">
                                    <ul>
                                        <li><a href="#"><span class="ti-facebook"></span></a></li>
                                        <li><a href="#"><span class="ti-twitter-alt"></span></a></li>
                                        <li><a href="#"><span class="ti-google"></span></a></li>
                                        <li><a href="#"><span class="ti-linkedin"></span></a></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="team-teacher-info team-teacher-info-2 text-center">
                                <h1>Mary M. Douglas</h1>
                                <h2>English Teacher</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     </div>
    
     <div class="counter-area gray-bg">
        <div class="container pt-90 pb-65">
            <div class="row">
                <div class="col-xl-3 col-lg-3 col-md-3">
                    <div class="couter-wrapper mb-30 text-center">
                        <img src="img/counter/counter_icon1.png" alt=""/>
                        <span class="counter">10532</span>
                        <h3>Satisfied Students</h3>
                    </div>
                </div>
                <div class="col-xl-3 col-lg-3 col-md-3">
                    <div class="couter-wrapper mb-30 text-center">
                        <img src="img/counter/counter_icon2.png" alt=""/>
                        <span class="counter">7985</span>
                        <h3>Courses Complated</h3>
                    </div>
                </div>
                <div class="col-xl-3 col-lg-3 col-md-3">
                    <div class="couter-wrapper mb-30 text-center">
                        <img src="img/counter/counter_icon3.png" alt=""/>
                        <span class="counter">5382</span>
                        <h3>Satisfied Students</h3>
                    </div>
                </div>
                <div class="col-xl-3 col-lg-3 col-md-3">
                    <div class="couter-wrapper mb-30 text-center">
                        <img src="img/counter/counter_icon4.png" alt=""/>
                        <span class="counter">354</span>
                        <h3>Expert Advisors</h3>
                    </div>
                </div>
            </div>
        </div>
     </div>

     <div class="testimonilas-area pt-100 pb-90">
        <div class="container">
            <div class="row">
                <div class="col-xl-6 offset-xl-3 col-lg-8 offset-lg-2 col-md-10 offset-md-1">
                    <div class="section-title mb-50 text-center">
                        <div class="section-title-heading mb-20">
                            <h1 class="primary-color">What Our Students Say</h1>
                        </div>
                        <div class="section-title-para">
                            <p class="gray-color">Belis nisl adipiscing sapien sed malesu diame lacus eget erat Cras mollis scelerisqu Nullam arcu liquam here was consequat.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="testimonilas-list">
                <div class="row testimonilas-active-2">
                    <div class="col-xl-12">
                        <div class="testimonilas-wrapper testimonilas-wrapper-2 mb-110">
                            <div class="testimonilas-para">
                                <p>At vero eos et accusamus et iusto odio dignissimos ducimus blanditiis praes volup tatum deleniti atque corrupti quos dolorest quas molestias excepturi occaecati cupiditate non provident </p>
                            </div>
                            <div class="testimonilas-heading d-flex">
                                <div class="testimonilas-author-thumb">
                                    <img src="img/testimonials/testimonilas_author_thumb1.png" alt=""/>
                                </div>
                                <div class="testimonilas-author-title">
                                    <h1>Lisa McClanahan</h1>
                                    <h2>CSE Student</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-12">
                        <div class="testimonilas-wrapper testimonilas-wrapper-2 mb-110">
                            <div class="testimonilas-para">
                                <p>At vero eos et accusamus et iusto odio dignissimos ducimus blanditiis praes volup tatum deleniti atque corrupti quos dolorest quas molestias excepturi occaecati cupiditate non provident </p>
                            </div>
                            <div class="testimonilas-heading d-flex">
                                <div class="testimonilas-author-thumb">
                                    <img src="img/testimonials/testimonilas_author_thumb1.png" alt=""/>
                                </div>
                                <div class="testimonilas-author-title">
                                    <h1>Lisa McClanahan</h1>
                                    <h2>CSE Student</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-12">
                        <div class="testimonilas-wrapper testimonilas-wrapper-2 mb-110">
                            <div class="testimonilas-para">
                                <p>At vero eos et accusamus et iusto odio dignissimos ducimus blanditiis praes volup tatum deleniti atque corrupti quos dolorest quas molestias excepturi occaecati cupiditate non provident </p>
                            </div>
                            <div class="testimonilas-heading d-flex">
                                <div class="testimonilas-author-thumb">
                                    <img src="img/testimonials/testimonilas_author_thumb1.png" alt=""/>
                                </div>
                                <div class="testimonilas-author-title">
                                    <h1>Lisa McClanahan</h1>
                                    <h2>CSE Student</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-12">
                        <div class="testimonilas-wrapper testimonilas-wrapper-2 mb-110">
                            <div class="testimonilas-para">
                                <p>At vero eos et accusamus et iusto odio dignissimos ducimus blanditiis praes volup tatum deleniti atque corrupti quos dolorest quas molestias excepturi occaecati cupiditate non provident </p>
                            </div>
                            <div class="testimonilas-heading d-flex">
                                <div class="testimonilas-author-thumb">
                                    <img src="img/testimonials/testimonilas_author_thumb1.png" alt=""/>
                                </div>
                                <div class="testimonilas-author-title">
                                    <h1>Lisa McClanahan</h1>
                                    <h2>CSE Student</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     </div>
   
     <div id="shop" class="shop-area pt-100 pb-70" style={{ backgroundImage :`url(require("img/shop/shop_bg.jpg)"))` }}>        <div class="container">
            <div class="row">
                <div class="col-xl-6 offset-xl-3 col-lg-8 offset-lg-2 col-md-10 offset-md-1">
                    <div class="section-title mb-50 text-center">
                        <div class="section-title-heading mb-20">
                            <h1 class="white-color">Our Shop</h1>
                        </div>
                        <div class="section-title-para">
                            <p class="white-color">Belis nisl adipiscing sapien sed malesu diame lacus eget erat Cras mollis scelerisqu Nullam arcu liquam here was consequat.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="shop-list">
                <div class="row shop-active">
                    <div class="col-xl-12">
                        <div class="shop-inner mb-30 white-bg">
                            <div class="shop-thumb">
                                <a href="shop_pages.html"><img src="img/shop/shopthumb001.jpg" alt=""/></a>
                            </div>
                            <div class="book-inner-content">
                                <div class="sohop-heading mb-20">
                                    <h1 class="shop-book-name"><a href="shop_pages.html">Graphics Design Book</a></h1>
                                    <h2 class="book-writter">Writter : <span class="f-700">Robert Cool</span></h2>
                                </div>
                                <div class="shop-inner-details d-flex">
                                    <div class="book-price">
                                        <span class="price">Price</span>
                                        <span class="user-number">49.99</span>
                                    </div>
                                    <div class="book-ratings text-right">
                                        <ul>
                                            <li><span class="ti-star"></span></li>
                                            <li><span class="ti-star"></span></li>
                                            <li><span class="ti-star"></span></li>
                                            <li><span class="ti-star"></span></li>
                                            <li><span class="ti-star"></span></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-12">
                        <div class="shop-inner mb-30 white-bg">
                            <div class="shop-thumb">
                                <a href="shop_pages.html"><img src="img/shop/shopthumb002.jpg" alt=""/></a>
                            </div>
                            <div class="book-inner-content">
                                <div class="sohop-heading mb-20">
                                    <h1 class="shop-book-name"><a href="shop_pages.html">Graphics Design Book</a></h1>
                                    <h2 class="book-writter">Writter : <span class="f-700">Robert Cool</span></h2>
                                </div>
                                <div class="shop-inner-details d-flex">
                                    <div class="book-price">
                                        <span class="price">Price</span>
                                        <span class="user-number">49.99</span>
                                    </div>
                                    <div class="book-ratings text-right">
                                        <ul>
                                            <li><span class="ti-star"></span></li>
                                            <li><span class="ti-star"></span></li>
                                            <li><span class="ti-star"></span></li>
                                            <li><span class="ti-star"></span></li>
                                            <li><span class="ti-star"></span></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-12">
                        <div class="shop-inner mb-30 white-bg">
                            <div class="shop-thumb">
                                <a href="shop_pages.html"><img src="img/shop/shopthumb003.jpg" alt=""/></a>
                            </div>
                            <div class="book-inner-content">
                                <div class="sohop-heading mb-20">
                                    <h1 class="shop-book-name"><a href="shop_pages.html">Web Development Book</a></h1>
                                    <h2 class="book-writter">Writter : <span class="f-700">Robert Cool</span></h2>
                                </div>
                                <div class="shop-inner-details d-flex">
                                    <div class="book-price">
                                        <span class="price">Price</span>
                                        <span class="user-number">49.99</span>
                                    </div>
                                    <div class="book-ratings text-right">
                                        <ul>
                                            <li><span class="ti-star"></span></li>
                                            <li><span class="ti-star"></span></li>
                                            <li><span class="ti-star"></span></li>
                                            <li><span class="ti-star"></span></li>
                                            <li><span class="ti-star"></span></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-12">
                        <div class="shop-inner mb-30 white-bg">
                            <div class="shop-thumb">
                                <a href="shop_pages.html"><img src="img/shop/shopthumb004.jpg" alt=""/></a>
                            </div>
                            <div class="book-inner-content">
                                <div class="sohop-heading mb-20">
                                    <h1 class="shop-book-name"><a href="shop_pages.html">Graphics Design Book</a></h1>
                                    <h2 class="book-writter">Writter : <span class="f-700">Robert Cool</span></h2>
                                </div>
                                <div class="shop-inner-details d-flex">
                                    <div class="book-price">
                                        <span class="price">Price</span>
                                        <span class="user-number">49.99</span>
                                    </div>
                                    <div class="book-ratings text-right">
                                        <ul>
                                            <li><span class="ti-star"></span></li>
                                            <li><span class="ti-star"></span></li>
                                            <li><span class="ti-star"></span></li>
                                            <li><span class="ti-star"></span></li>
                                            <li><span class="ti-star"></span></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-12">
                        <div class="shop-inner mb-30 white-bg">
                            <div class="shop-thumb">
                                <a href="shop_pages.html"><img src="img/shop/shopthumb002.jpg" alt=""/></a>
                            </div>
                            <div class="book-inner-content">
                                <div class="sohop-heading mb-20">
                                    <h1 class="shop-book-name"><a href="shop_pages.html">Web Development Book</a></h1>
                                    <h2 class="book-writter">Writter : <span class="f-700">Robert Cool</span></h2>
                                </div>
                                <div class="shop-inner-details d-flex">
                                    <div class="book-price">
                                        <span class="price">Price</span>
                                        <span class="user-number">49.99</span>
                                    </div>
                                    <div class="book-ratings text-right">
                                        <ul>
                                            <li><span class="ti-star"></span></li>
                                            <li><span class="ti-star"></span></li>
                                            <li><span class="ti-star"></span></li>
                                            <li><span class="ti-star"></span></li>
                                            <li><span class="ti-star"></span></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     </div>
 
     <div id="blog" class="latest_news-area gray-bg pt-100 pb-70">
        <div class="container">
            <div class="row">
                <div class="col-xl-6 offset-xl-3 col-lg-8 offset-lg-2 col-md-10 offset-md-1">
                    <div class="section-title mb-50 text-center">
                        <div class="section-title-heading mb-20">
                            <h1 class="primary-color">Latest News</h1>
                        </div>
                        <div class="section-title-para">
                            <p class="gray-color">Belis nisl adipiscing sapien sed malesu diame lacus eget erat Cras mollis scelerisqu Nullam arcu liquam here was consequat.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-xl-4 col-lg-4 col-md-6">
                    <div class="blog-wrapper mb-30">
                        <div class="blog-thumb mb-25">
                            <a href="news_details.html"><img src="img/blog/blog_thumb_1.jpg" alt=""/></a>
                            <span class="blog-category">news</span>
                        </div>
                        <div class="blog-content">
                            <div class="blog-meta">
                                <span>Auguest 25, 2018</span>
                            </div>
                            <h5><a href="news_details.html">Some say education is the process of gaining information is nation.</a></h5>
                            <p>Belis nisl adipiscing sapien sed malesu diame lacus eget erat Cras mollis scele.</p>
                            <div class="blog-bottom-2 d-flex justify-content-between">
                                <div class="admin-blog-info">
                                    <ul>
                                        <li>By<span class="f-600"> Admin</span></li>
                                        <li class="blog-date-margin">Auguest 25, 2018</li>
                                    </ul>
                                </div>
                                <div class="read-more-btn text-right">
                                    <button>Read more</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-4 col-lg-4 col-md-6">
                    <div class="blog-wrapper mb-30">
                        <div class="blog-thumb mb-25">
                            <a href="news_details.html"><img src="img/blog/blog_thumb_2.jpg" alt=""/></a>
                            <span class="blog-category">news</span>
                        </div>
                        <div class="blog-content">
                            <div class="blog-meta">
                                <span>Auguest 25, 2018</span>
                            </div>
                            <h5><a href="news_details.html">Some say education is the process of gaining information is nation.</a></h5>
                            <p>Belis nisl adipiscing sapien sed malesu diame lacus eget erat Cras mollis scele.</p>
                            <div class="blog-bottom-2 d-flex justify-content-between">
                                <div class="admin-blog-info">
                                    <ul>
                                        <li>By<span class="f-600"> Admin</span></li>
                                        <li class="blog-date-margin">Auguest 25, 2018</li>
                                    </ul>
                                </div>
                                <div class="read-more-btn text-right">
                                    <button>Read more</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-4 col-lg-4 col-md-6">
                    <div class="blog-wrapper mb-30">
                        <div class="blog-thumb mb-25">
                            <a href="news_details.html"><img src="img/blog/blog_thumb_3.jpg" alt=""/></a>
                            <span class="blog-category">news</span>
                        </div>
                        <div class="blog-content">
                            <div class="blog-meta">
                                <span>Auguest 25, 2018</span>
                            </div>
                            <h5><a href="news_details.html">Some say education is the process of gaining information is nation.</a></h5>
                            <p>Belis nisl adipiscing sapien sed malesu diame lacus eget erat Cras mollis scele.</p>
                            <div class="blog-bottom-2 d-flex justify-content-between">
                                <div class="admin-blog-info">
                                    <ul>
                                        <li>By<span class="f-600"> Admin</span></li>
                                        <li class="blog-date-margin">Auguest 25, 2018</li>
                                    </ul>
                                </div>
                                <div class="read-more-btn text-right">
                                    <button>Read more</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     </div>
  
     <div class="brand-area pt-80 pt-80 pb-80">
        <div class="container">
            <div class="row">
                <div class="col-xl-12">
                    <div class="brand-list">
                        <ul>
                            <li><img src="img/brand/brand1.png" alt=""/> </li>
                            <li><img src="img/brand/brand2.png" alt=""/> </li>
                            <li><img src="img/brand/brand3.png" alt=""/></li>
                            <li><img src="img/brand/brand4.png" alt=""/></li>
                            <li><img src="img/brand/brand5.png" alt=""/></li>
                            <li><img src="img/brand/brand6.png" alt=""/></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
     </div>
    
     <div class="subscribe-area">
        <div class="container">
            <div class="subscribe-box">
                <div class="row">
                    <div class="col-xl-10 offset-xl-1 col-lg-10 offset-lg-1 col-md-12">
                        <div class="row">
                            <div class="col-xl-7 col-lg-7 col-md-8">
                                <div class="subscribe-text">
                                    <h1>Subscribe</h1>
                                    <span>Enter your email and get latest updates and offers subscribe us</span>
                                </div>
                            </div>
                            <div class="col-xl-5 col-lg-5 col-md-4">
                                <div class="email-submit-form">
                                    <div class="subscribe-form">
                                        <form action="#">
                                            <input placeholder="Enter your email" type="email"/>
                                            <i class="fas fa-long-arrow-alt-right"></i>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     </div>
   
     <footer id="Contact">
        <div class="footer-area primary-bg pt-150">
            <div class="container">
                <div class="footer-top pb-35">
                    <div class="row">
                        <div class="col-xl-3 col-lg-4 col-md-6">
                            <div class="footer-widget mb-30">
                                <div class="footer-logo">
                                    <img src="img/logo/logo_2.png" alt=""/>
                                </div>
                                <div class="footer-para">
                                    <p>Sorem ipsum dolor sit amet conse ctetur adipiscing elit, sed do eiusmod incididunt ut labore et dolore magna aliqua. Utenim ad minim veniam, quis nostrud exercition ullamco laboris nisi </p>
                                </div>
                                <div class="footer-socila-icon">
                                    <span>Follow Us</span>
                                    <div class="footer-social-icon-list">
                                        <ul>
                                            <li><a href="#"><span class="ti-facebook"></span></a></li>
                                            <li><a href="#"><span class="ti-twitter-alt"></span></a></li>
                                            <li><a href="#"><span class="ti-dribbble"></span></a></li>
                                            <li><a href="#"><span class="ti-google"></span></a></li>
                                            <li><a href="#"><span class="ti-pinterest"></span></a></li>
                                            <li><a href="#"><span class="ti-instagram"></span></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-3 col-lg-4 col-md-6">
                            <div class="footer-widget mb-30">
                                <div class="footer-heading">
                                    <h1>Quick Links</h1>
                                </div>
                                <div class="footer-menu clearfix">
                                    <ul>
                                        <li><a href="#">Privacy Policy</a></li>
                                        <li><a href="#">Condition</a></li>
                                        <li><a href="#">Support</a></li>
                                        <li><a href="#">Consultation</a></li>
                                        <li><a href="#">Team Member</a></li>
                                        <li><a href="#">Our Services</a></li>
                                        <li><a href="#">About Us</a></li>
                                        <li><a href="#">Contact Us</a></li>
                                        <li><a href="#">Who we are</a></li>
                                        <li><a href="#">Get a Quote</a></li>
                                        <li><a href="#">Recent Post</a></li>
                                        <li><a href="#">Who we are</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-3 col-lg-4 d-lg-none d-xl-block col-md-6">
                            <div class="footer-widget mb-30">
                                <div class="footer-heading">
                                    <h1>Recent Post</h1>
                                </div>
                                <div class="recent-post d-flex mb-25">
                                    <div class="recent-post-thumb">
                                        <img src="img/post/recent_post1.jpg" alt=""/>
                                    </div>
                                    <div class="recent-post-text">
                                        <p>Neque porro quisquam est qui dolorem ipsum</p>
                                        <div class="footer-time">
                                            <span class="ti-time"></span>
                                            <span class="footer-published-time">05 May 2018</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="recent-post d-flex">
                                    <div class="recent-post-thumb">
                                        <img src="img/post/recent_post1.jpg" alt=""/>
                                    </div>
                                    <div class="recent-post-text">
                                        <p>Neque porro quisquam est qui dolorem ipsum</p>
                                        <div class="footer-time">
                                            <span class="ti-time"></span>
                                            <span class="footer-published-time">05 May 2018</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-3 col-lg-4  col-md-6">
                            <div class="footer-widget mb-30">
                                <div class="footer-heading">
                                    <h1>Contact Us</h1>
                                </div>
                                <div class="footer-contact-list">
                                    <div class="single-footer-contact-info">
                                        <span class="ti-headphone "></span>
                                        <span class="footer-contact-list-text">+003 (1234) 7894</span>
                                    </div>
                                    <div class="single-footer-contact-info">
                                        <span class="ti-email "></span>
                                        <span class="footer-contact-list-text">youremail@gmail.com</span>
                                    </div>
                                    <div class="single-footer-contact-info">
                                        <span class="ti-location-pin"></span>
                                        <span class="footer-contact-list-text">123 New Street, 6th Floor, New York</span>
                                    </div>
                                </div>
                                <div class="opening-time">
                                    <span>Opening Hour</span>
                                    <span class="opening-date">
                                        Sun - Sat : 10:00 am - 05:00 pm
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="footer-bottom pt-25 pb-25">
                    <div class="container">
                        <div class="row">
                            <div class="col-xl-12">
                                <div class="footer-copyright text-center">
                                    <span><a target="_blank" href="https://www.templateshub.net">Templates Hub</a></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </footer>
        </div>
        
        );
        }
}
export default Home;