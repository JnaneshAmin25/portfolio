import { Link } from "react-router-dom";
import BackgroundLines from "../../assets/Home/Banner/BackgrounLines.webp"
import BackgroundStars from "../../assets/Home/Banner/BackgroundStars.webp"
import OpenToWork from "../OpenToWork";
import MobileBackgroundLines from "../../assets/Home/Banner/MobileBackgroundLines.webp"
import ArrowForward from "../../assets/Home/Banner/arrow-forward.svg"
import BannerBackground from "../../assets/Home/Banner/BannerBackground.webp"
function Banner() {
  return (
    <div className="home-banner">
      <img className="home-banner-background-stars" src={BackgroundStars} alt="Background" />
      <img className="home-banner-background desktop" src={BackgroundLines} alt="Background" />
      <img className="home-banner-background mobile" src={MobileBackgroundLines} alt="Background" />
      <img className="blur-background" src={BannerBackground} alt ="Banner Blur Background " />
      <div className="home-banner-container">
        <OpenToWork />
        <div className="home-banner-container-main">
          <section>
            <div className="home-banner-scroll-text">
              <h1> Where Research & Design <br /> Create Impact. </h1>
            </div>
            <p>UX/UI & Visual Designer focused on turning complex challenges into simple, impactful experiences.</p>
          </section>
          <Link to="projects" className="home-case-btn"> View Case Studies <img src={ArrowForward} alt="arrow"/> </Link>
        </div>
      </div>
    </div>
  );
}

export default Banner;
