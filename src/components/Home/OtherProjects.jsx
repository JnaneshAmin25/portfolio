import DesktopBackgrnd from "../../assets/Home/Projects/DesktopBackground.png"
import MobileBackground from "../../assets/Home/Projects/Mobile Background.png";
import OtherProjectsBackground from "../../assets/Home/OtherProjects/OtherProjectHeaderBackground.webp";
import SchoolMate from "../../assets/Home/Projects/School Mate.png";
import SchoolMateGlow from "../../assets/Home/Projects/School Mate Background Glow.png";
import { Link } from "react-router-dom";
import QEasy from "../../assets/Home/Projects/Q Easy.png";
import QEasyGlow from "../../assets/Home/Projects/Q Easy Background Glow.png";
import GoogleClassroom from "../../assets/Home/Projects/Google Classroom.png";
import GoogleClassroomBackgroundGlow from "../../assets/Home/Projects/Google Classroom Background Glow.png";
import CanvasCode from "../../assets/Home/Projects/Canvas & Code.png";
import CanvasCodeBackgroundGlow from "../../assets/Home/Projects/Canvas & Code Background Glow.png";
import OlliePets from "../../assets/Home/Projects/Ollie Pets.png";
import OlliePetsBackgroundGlow from "../../assets/Home/Projects/Ollie Pets Background Glow.png";
import SkillStarBackground from "../../assets/Home/Skills/SkillsStarBackground.webp"
import OtherProjectsMobileBackground from "../../assets/Home/OtherProjects/OtherProjectsobileBackground.webp"
import ArrowFwd from "../../assets/Home/OtherProjects/arrow_forward.png"
import ArrowBwd from "../../assets/Home/OtherProjects/arrow_backward.png"
const OtherProjects = () => {

  const scroll = (amount) => {
    const el = document.getElementById("carousel");
    el.scrollBy({ left: amount, behavior: "smooth" });
  };

  return (
    <div className="other-projects">
      <img className="home-banner-background-stars" src={SkillStarBackground} alt="Background" />
      <div className="projects-heading">
        <img
          className="other-projects-heading-background desktop"
          src={OtherProjectsBackground}
        />
        <img
          className="other-projects-heading-background mobile"
          src={OtherProjectsMobileBackground}
        />
        <div className="other-projects-heading-text">
          <h2>Other Projects</h2>
          <p>
            Additional work highlighting my range across <br className="mobile" /> UX, UI, and visual design.
          </p>
        </div>
      </div>
      <div className="showcase-carousel-wrapper">
        <button className="carousel-btn prev" onClick={() => scroll(-400)}>
          <img src={ArrowBwd} alt="Previous" />
        </button>

        <button className="carousel-btn next" onClick={() => scroll(400)}>
          <img src={ArrowFwd} alt="Next" />
        </button>
        <div className="showcase-carousel" id="carousel">
          <div style={{ minWidth: "400px" }}></div>
          <Link className="showcase-card" to="/projects/school_mate">
            <div className="showcase-img">
              <img src={SchoolMate} className="main-img" />
              <img src={SchoolMateGlow} className="glow-img" />
            </div>
            <div className="showcase-info">
              <p>Mobile Application</p>
              <section>
                <h3>School Mate</h3>
                <sub>2025</sub>
              </section>
            </div>
          </Link>

          <Link className="showcase-card" to="/projects/q_easy">
            <div className="showcase-img">
              <img src={QEasy} className="main-img" />
              <img src={QEasyGlow} className="glow-img" />
            </div>
            <div className="showcase-info">
              <p>Mobile Application</p>
              <section>
                <h3>Q Easy</h3>
                <sub>2025</sub>
              </section>
            </div>
          </Link>

          <Link className="showcase-card" to="/projects/google_classroom">
            <div className="showcase-img">
              <img src={GoogleClassroom} className="main-img" />
              <img src={GoogleClassroomBackgroundGlow} className="glow-img" />
            </div>
            <div className="showcase-info">
              <p>Mobile Application</p>
              <section>
                <h3>Google Classroom</h3>
                <sub>2023</sub>
              </section>
            </div>
          </Link>

          <Link className="showcase-card" to="/projects/canvas_and_code">
            <div className="showcase-img">
              <img src={CanvasCode} className="main-img" />
              <img src={CanvasCodeBackgroundGlow} className="glow-img" />
            </div>
            <div className="showcase-info">
              <p>Website Design</p>
              <section>
                <h3>Canvas & Code</h3>
                <sub>2023</sub>
              </section>
            </div>
          </Link>

          <Link className="showcase-card" to="/projects/ollie_pets">
            <div className="showcase-img">
              <img src={OlliePets} className="main-img" />
              <img src={OlliePetsBackgroundGlow} className="glow-img" />
            </div>
            <div className="showcase-info">
              <p>Website Design</p>
              <section>
                <h3>Ollie Pets</h3>
                <sub>2023</sub>
              </section>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default OtherProjects
