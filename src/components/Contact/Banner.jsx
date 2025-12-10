import BackgroundLines from "../../assets/Home/Banner/BackgrounLines.webp"
import BackgroundStars from "../../assets/Home/Banner/BackgroundStars.webp"
import OpenToWork from "../OpenToWork";
import BannerBackground from "../../assets/Home/Banner/BannerBackground.webp"
import ArrowForward from "../../assets/Home/Banner/arrow-forward.svg"
import { Link } from "react-router-dom";
import MobileBackgroundLines from "../../assets/Home/Banner/MobileBackgroundLines.webp"


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
              <h1> You Next Designer <br /> Awaits </h1>
            </div>
            <p>Drop a message your next project ,<br/> starts with a conversation</p>
          </section>
          <Link to="" className="home-case-btn hide"> view case studies <img src={ArrowForward} alt="arrow"/> </Link>
        </div>
      </div>
    </div>
  );
}

export default Banner;
