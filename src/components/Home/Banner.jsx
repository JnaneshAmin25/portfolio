import { Link } from "react-router-dom";
import BackgroundLines from "../../assets/Home/Banner/BackgrounLines.webp"
import BackgroundStars from "../../assets/Home/Banner/BackgroundStars.webp"
import OpenToWork from "../OpenToWork";
import ArrowForward from "../../assets/Home/Banner/arrow-forward.svg"

function Banner() {
  return (
    <div className="home-banner">
      <img className="home-banner-background-stars" src={BackgroundStars} alt="Background" />
      <img className="home-banner-background desktop" src={BackgroundLines} alt="Background" />
      <img className="home-banner-background mobile" src={BackgroundLines} alt="Background" />
      <div className="home-banner-background blur-background"></div>
      <div className="home-banner-container">
        <OpenToWork />
        <div className="home-banner-container-main">
          <section>
            <div className="home-banner-scroll-text">
              <h1> Where Research & Design <br /> Create Impact. </h1>
            </div>
            <p>UX/UI & Visual Designer focused on turning complex challenges into simple, impactful experiences.</p>
          </section>
          <Link to="projects" className="case-btn"> view case studies <img src={ArrowForward} alt="arrow"/> </Link>
        </div>
      </div>
    </div>
  );
}

export default Banner;
