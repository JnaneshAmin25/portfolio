
import BackgroundLines from "../../assets/Home/Banner/BackgrounLines.webp"
import MobileBackgroundLines from "../../assets/Home/Banner/MobileBackgroundLines.webp"
import BackgroundStars from "../../assets/Home/Banner/BackgroundStars.webp"
import OpenToWork from "../OpenToWork";
import BannerBackground from "../../assets/Home/Banner/BannerBackground.webp"
import ArrowForward from "../../assets/Home/Banner/arrow-forward.svg"
import { Link } from "react-router-dom";

function Banner() {

  return (
    <div className="home-banner">
      <img className="home-banner-background-stars" src={BackgroundStars} alt="Background" />
      <img className="home-banner-background desktop" src={BackgroundLines} alt="Background" />
      <img className="home-banner-background-mob mobile" src={MobileBackgroundLines} alt="Background" />
      <img className="blur-background" src={BannerBackground} alt ="Banner Blur Background " />
      <div className="home-banner-container">
        <OpenToWork />
        <div className="home-banner-container-main">
          <section>
            <div className="home-banner-scroll-text">
              <h1> Experience the Impact of <br /> Thoughtful Design. </h1>
            </div>
            <p>Work grounded in insight, guided by process, and elevated <br className="desktop" /> through design.</p>
          </section>
          <Link to="" className="home-case-btn hide"> view case studies <img src={ArrowForward} alt="arrow"/> </Link> 
        </div>
      </div>
    </div>
  );
}

export default Banner;
