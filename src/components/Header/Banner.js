import React from 'react';
import './Banner.css'
import banner1 from '../../images/slider-1.jpg'
import banner2 from '../../images/slider-2.jpg'
import banner3 from '../../images/slider-3.jpg'
const Banner = () => {
    return (
        <div>
            <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="false">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={banner1} className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h2>Fast &amp; Effecting Teeth Whiting System</h2>
        <p>Creating the healthy smile you want through science and artistry.Because everyone deserves to smile.</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src={banner2} className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h2>Highly skilled and experienced doctors</h2>
        <p>If your smile is not becoming to you, then you should be coming to me! Family dentistry with a woman’s touch.</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src={banner3} className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h2>Providing Proper Treatment from our Clinic</h2>
        <p>We offer a wide range of procedures to help you get the perfect smile. </p>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
        </div>
    );
};

export default Banner;