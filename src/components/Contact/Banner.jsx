import BackgroundLines from "../../assets/Home/Banner/BackgrounLines.webp"
import BackgroundStars from "../../assets/Home/Banner/BackgroundStars.webp"
import OpenToWork from "../OpenToWork";
import BannerBackground from "../../assets/Home/Banner/BannerBackground.webp"

function Banner() {
 

  return (
    <div className="home-banner">
      <img className="home-banner-background-stars" src={BackgroundStars} alt="Background" />
      <img className="home-banner-background desktop" src={BackgroundLines} alt="Background" />
      <img className="home-banner-background mobile" src={BackgroundLines} alt="Background" />
      <img className="blur-background" src={BannerBackground} alt ="Banner Blur Background " />
      <div className="home-banner-container">
        <OpenToWork />
        <div className="home-banner-container-main">
          <section>
            <div className="home-banner-scroll-text">
              <h1> You Next Designer <br /> Awaits </h1>
            </div>
            <p>Work grounded in insight, guided by process, and elevated through design.</p>
          </section>
          {/* <Link to="projects" className="case-btn"> view case studies <img src={ArrowForward} alt="arrow"/> </Link> */}
        </div>
      </div>
    </div>
  );
}

export default Banner;
