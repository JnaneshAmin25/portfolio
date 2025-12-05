import React, { useState } from 'react';
import ArrowForward from "../../assets/Home/OtherProjects/arrow_forward.png"
import ArrowBackward from "../../assets/Home/OtherProjects/arrow_backward.png"
import Phone from "../../assets/Home/OtherProjects/phone.webp";
import LoopBackground from "../../assets/Home/Loop/LoopBackground.webp"

const Loop = () => {
  const slides = [
    { title: "Rent My Ride", subtitle: "Mobile Application, 2023", img: Phone },
    { title: "Travel Buddy", subtitle: "Mobile Application, 2024", img: Phone },
    { title: "Foodify", subtitle: "Mobile Application, 2024", img: Phone },
  ];

  const [index, setIndex] = useState(0);

  const nextSlide = () => setIndex((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setIndex((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div className="loop-wrapper">
      <img className="home-banner-background-stars" src={LoopBackground} alt="Background" />
      <div className="top-row">
        <h1 className="loop-heading">
          Where Vision Meets <br />
          Action & Ideas <br />
          Take Shape
        </h1>

        <p className="loop-caption">
          Every project reflects research, creativity, and precision, 
          turning ideas into products that truly make an impact.
        </p>
      </div>

      <div className="carousel-section">

        <p className="scroll-text">
          Keep scrolling.<br />
          You never know what you'll discover next.
        </p>

        <img src={slides[index].img} className="carousel-img" alt="slide" />

        <div className="title-row">
          <button onClick={prevSlide} className="arrow-btn small-btn">
              <img src={ArrowBackward} alt="" />
          </button>

          <div className="title-block">
              <h3 className="slide-title">{slides[index].title}</h3>
              <p className="slide-sub">{slides[index].subtitle}</p>
          </div>

          <button onClick={nextSlide} className="arrow-btn small-btn">
              <img src={ArrowForward} alt="" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Loop;
