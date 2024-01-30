import React, { useEffect, useState } from "react";
import "./Carousel.css";

const Carousel = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const changeTime = 3; // Delay in seconds for automatic slide change

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Increment the slide index
      setSlideIndex((prevIndex) => (prevIndex + 1) % 12);
    }, changeTime * 1000); // Convert seconds to milliseconds

    // Clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <div className="star">
      <div style= {{position:"absolute", top: '0', left: '0', width: "100%", height: "100%", zIndex: '-3' }}>
      </div>
      <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
          <div  className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0"  className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="4" aria-label="Slide 5"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="5" aria-label="Slide 6"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="6" aria-label="Slide 7"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="7" aria-label="Slide 8"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="8" aria-label="Slide 9"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="9" aria-label="Slide 10"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="10" aria-label="Slide 11"></button>
  </div>
  <div  className="carousel-inner">
    <div  className="carousel-item active">
      <img src="/carouselimg1.jpg"  className="d-block w-100" alt="..."/>
      <div  className="carousel-caption d-none d-md-block">
        <h5>Realization of Rights</h5>
      </div>
    </div>
    <div  className="carousel-item">
      <img src="/carouselimg2.jpg"  className="d-block w-100" alt="..."/>
      <div  className="carousel-caption d-none d-md-block">
        <h5>Right to Education Act:</h5>
      </div>
    </div>
    <div  className="carousel-item">
      <img src="/carouselimg3.jpg"  className="d-block w-100" alt="..."/>
      <div  className="carousel-caption d-none d-md-block">
        <h5>Right to Participation</h5>
      </div>
    </div>
    <div  className="carousel-item">
      <img src="/carouselimg4.jpg"  className="d-block w-100" alt="..."/>
      <div  className="carousel-caption d-none d-md-block">
        <h5>Protection from Child Labour</h5>
      </div>
    </div>
    <div  className="carousel-item">
      <img src="/carouselimg5.jpg"  className="d-block w-100" alt="..."/>
      <div  className="carousel-caption d-none d-md-block">
        <h5>Protection from Exploitation and Trafficking:</h5>
      </div>
    </div>
    <div  className="carousel-item">
      <img src="/carouselimg6.jpg"  className="d-block w-100" alt="..."/>
      <div  className="carousel-caption d-none d-md-block">
        <h5>Right against Discrimination</h5>
      </div>
    </div>
    <div  className="carousel-item">
      <img src="/carouselimg7.jpg"  className="d-block w-100" alt="..."/>
      <div  className="carousel-caption d-none d-md-block">
        <h5>Right to equality</h5>
      </div>
    </div>
    <div  className="carousel-item">
      <img src="/carouselimg8.jpg"  className="d-block w-100" alt="..."/>
      <div  className="carousel-caption d-none d-md-block">
        <h5>Right to Nutrition and Healthcare</h5>
      </div>
    </div>
    <div  className="carousel-item">
      <img src="/carouselimg9.jpg"  className="d-block w-100" alt="..."/>
      <div  className="carousel-caption d-none d-md-block">
        <h5>Respect for the child views</h5>
      </div>
    </div>
    <div  className="carousel-item">
      <img src="/carouselimg10.jpg"  className="d-block w-100" alt="..."/>
      <div  className="carousel-caption d-none d-md-block">
        <h5>Special Provisions for Vulnerable Children</h5>
      </div>
    </div>
    <div  className="carousel-item">
      <img src="/carouselimg11.jpg"  className="d-block w-100" alt="..."/>
      <div  className="carousel-caption d-none d-md-block">
        <h5>Child Marriage Prevention</h5>
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
    </>
    
  );
};

export default Carousel;