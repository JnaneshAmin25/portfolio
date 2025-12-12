/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import OtherProjectsBackground from "../../asset/Home/OtherProjects/OtherProjectHeaderBackground.webp";
import SchoolMate from "../../asset/Home/Projects/School Mate.webp";
import SchoolMateGlow from "../../asset/Home/Projects/School Mate Background Glow.webp";
import { Link } from "react-router-dom";
import QEasy from "../../asset/Home/Projects/Q Easy.webp";
import QEasyGlow from "../../asset/Home/Projects/Q Easy Background Glow.webp";
import GoogleClassroom from "../../asset/Home/Projects/Google Classroom.webp";
import GoogleClassroomBackgroundGlow from "../../asset/Home/Projects/Google Classroom Background Glow.webp";
import CanvasCode from "../../asset/Home/Projects/Canvas & Code.webp";
import CanvasCodeBackgroundGlow from "../../asset/Home/Projects/Canvas & Code Background Glow.webp";
import OlliePets from "../../asset/Home/Projects/Ollie Pets.webp";
import OlliePetsBackgroundGlow from "../../asset/Home/Projects/Ollie Pets Background Glow.webp";
import OtherProjectsMobileBackground from "../../asset/Home/OtherProjects/OtherProjectsobileBackground.webp";
import ArrowFwd from "../../asset/Home/OtherProjects/arrow_forward.webp";
import ArrowBwd from "../../asset/Home/OtherProjects/arrow_backward.webp";

const OtherProjects = () => {
  const container = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.25 } } };
  const item = { hidden: { opacity: 0, y: 20, filter: "blur(10px)" }, show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.8, ease: "easeOut" } } };

  const scroll = (amount) => {
    const el = document.getElementById("carousel");
    el.scrollBy({ left: amount, behavior: "smooth" });
  };

  return (
    <div className="other-projects">
      {/* <img className="home-banner-background-stars" src={SkillStarBackground} alt="Background" /> */}

      <div className="projects-heading">
        <img className="other-projects-heading-background desktop" src={OtherProjectsBackground} alt="" />
        <img className="other-projects-heading-background mobile" src={OtherProjectsMobileBackground} alt="" />

        <motion.div className="other-projects-heading-text" variants={container} initial="hidden" whileInView="show" viewport={{ once: false, amount: 0.3 }}>
          <motion.h2 variants={item}>Other Projects</motion.h2>
          <motion.p variants={item}>Additional work highlighting my range across <br className="mobile" /> UX, UI, and visual design.</motion.p>
        </motion.div>
      </div>

      <div className="showcase-carousel-wrapper">
        <button className="carousel-btn prev" onClick={() => scroll(-400)}><img src={ArrowBwd} alt="Previous" /></button>
        <button className="carousel-btn next" onClick={() => scroll(400)}><img src={ArrowFwd} alt="Next" /></button>

        <div className="showcase-carousel" id="carousel">
          <div style={{ minWidth: "400px" }}></div>

          <Link className="showcase-card" to="/projects/school_mate">
            <div className="showcase-img"><img src={SchoolMate} className="main-img" alt="" /><img src={SchoolMateGlow} className="glow-img" alt="" /></div>
            <div className="showcase-info"><p>Mobile Application</p><section><h3>School Mate</h3><sub>2025</sub></section></div>
          </Link>

          <Link className="showcase-card" to="/projects/q_easy">
            <div className="showcase-img"><img src={QEasy} className="main-img" alt="" /><img src={QEasyGlow} className="glow-img" alt="" /></div>
            <div className="showcase-info"><p>Mobile Application</p><section><h3>Q Easy</h3><sub>2025</sub></section></div>
          </Link>

          <Link className="showcase-card" to="/projects/google_classroom">
            <div className="showcase-img"><img src={GoogleClassroom} className="main-img" alt="" /><img src={GoogleClassroomBackgroundGlow} className="glow-img" alt="" /></div>
            <div className="showcase-info"><p>Mobile Application</p><section><h3>Google Classroom</h3><sub>2023</sub></section></div>
          </Link>

          <Link className="showcase-card" to="/projects/canvas_and_code">
            <div className="showcase-img"><img src={CanvasCode} className="main-img" alt="" /><img src={CanvasCodeBackgroundGlow} className="glow-img" alt="" /></div>
            <div className="showcase-info"><p>Website Design</p><section><h3>Canvas & Code</h3><sub>2023</sub></section></div>
          </Link>

          <Link className="showcase-card" to="/projects/ollie_pets">
            <div className="showcase-img"><img src={OlliePets} className="main-img" alt="" /><img src={OlliePetsBackgroundGlow} className="glow-img" alt="" /></div>
            <div className="showcase-info"><p>Website Design</p><section><h3>Ollie Pets</h3><sub>2023</sub></section></div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OtherProjects;
