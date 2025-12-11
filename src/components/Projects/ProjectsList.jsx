/* eslint-disable no-unused-vars */

import { Link } from "react-router-dom";
import SchoolMate from "../../assets/Projects/ProjectsList/School Mate.png";
import SchoolMateGlow from "../../assets/Projects/ProjectsList/School Mate Background Glow.png";
import QEasy from "../../assets/Projects/ProjectsList/Q Easy.png";
import QEasyGlow from "../../assets/Projects/ProjectsList/Q Easy Background Glow.png";
import GoogleClassroom from "../../assets/Projects/ProjectsList/Google Classroom.png";
import GoogleClassroomBackgroundGlow from "../../assets/Projects/ProjectsList/Google Classroom Background Glow.png";
import RentMyRide from "../../assets/Projects/ProjectsList/Rent My Ride.png";
import RentMyRideBackgroundGlow from "../../assets/Projects/ProjectsList/Rent My Ride Background Glow.png";
import KITE from "../../assets/Projects/ProjectsList/KITE.png";
import KITEBackgroundGlow from "../../assets/Projects/ProjectsList/KITE Background Glow.png";
import CanvasCode from "../../assets/Projects/ProjectsList/Canvas & Code.png";
import CanvasCodeBackgroundGlow from "../../assets/Projects/ProjectsList/Canvas & Code Background Glow.png";
import OlliePets from "../../assets/Projects/ProjectsList/Ollie Pets.png";
import OlliePetsBackgroundGlow from "../../assets/Projects/ProjectsList/Ollie Pets Background Glow.png";
import AarogyaGuru from "../../assets/Projects/ProjectsList/Aarogya Guru.png";
import AarogyaGuruBackgroundGlow from "../../assets/Projects/ProjectsList/Aarogya Guru Background Glow.png";
import WhatsApp from "../../assets/Projects/ProjectsList/WhatsApp.png";
import WhatsAppBackgroundGlow from "../../assets/Projects/ProjectsList/WhatsApp Background Glow.png";
import YouTube from "../../assets/Projects/ProjectsList/YouTube.png";
import YouTubeBackgroundGlow from "../../assets/Projects/ProjectsList/YouTube Background Glow.png";
import UrbanMonkey from "../../assets/Projects/ProjectsList/Urban Monkey.png";
import UrbanMonkeyBackgroundGlow from "../../assets/Projects/ProjectsList/Urban Monkey Background Glow.png";
import Coolzee from "../../assets/Projects/ProjectsList/Coolzee.png";
import CoolzeeBackgroundGlow from "../../assets/Projects/ProjectsList/Coolzee Background Glow.png";
import SaveLife from "../../assets/Projects/ProjectsList/Save Life.png";
import SaveLifeBackgroundGlow from "../../assets/Projects/ProjectsList/Save Life Background Glow.png";
import DesktopProjectFade from "../../assets/Home/Projects/DesktopProjectFade.webp"
import DesktopProjectVector from "../../assets/Home/Projects/DesktopProjectVector.webp"
import MobileProjectVector from "../../assets/Home/Projects/MobileProjectVector.webp"
import MobileProjectBlur from "../../assets/Home/Projects/MobileProjectBlur.webp"
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
function Projects() {
  const sectionRef = useRef(null);
    const [visible, setVisible] = useState(false);
  
    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target);
          }
        },
        { threshold: 0.2 }
      );
  
      if (sectionRef.current) observer.observe(sectionRef.current);
  
      return () => observer.disconnect();
    }, []);
  
    const delay = (i) => ({ transitionDelay: `${200 + i * 120}ms` });
  return (
    <div ref={sectionRef} className={`projects  ${visible ? "visible" : ""}`}>
          <div className="projects-heading">
      {/* Background & Vectors */}
      <img className="projects-heading-blur desktop" src={DesktopProjectFade} />
      <img className="projects-heading-vector desktop" src={DesktopProjectVector} />
      <img className="mobile-projects-heading-blur mobile" src={MobileProjectBlur} />
      <img className="mobile-projects-heading-vector mobile" src={MobileProjectVector} />
    
      {/* --- DESKTOP SVG ANIMATION --- */}
      <motion.svg
        className="top-line desktop"
        width="517"
        height="517"
        viewBox="0 0 517 517"
        fill="none"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <motion.circle
          cx="258.5"
          cy="258.5"
          r="258"
          stroke="url(#paint0_linear_539_4408)"
          strokeOpacity="0.55"
          strokeWidth="1"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          transition={{ duration: 1.4, ease: "easeOut" }}
        />
        <defs>
          <linearGradient id="paint0_linear_539_4408" x1="258.5" y1="0" x2="258.5" y2="517"
            gradientUnits="userSpaceOnUse">
            <stop stopColor="#CCCCCC" />
            <stop offset="0.62" stopColor="#272727" stopOpacity="0" />
          </linearGradient>
        </defs>
      </motion.svg>
    
      <motion.svg
        className="bottom-line desktop"
        width="322"
        height="322"
        viewBox="0 0 322 322"
        fill="none"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <motion.circle
          cx="161"
          cy="161"
          r="160.5"
          stroke="url(#paint0_linear_539_4409)"
          strokeOpacity="0.55"
          strokeWidth="1"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          transition={{ duration: 1.3, ease: "easeOut", delay: 0.2 }}
        />
        <defs>
          <linearGradient id="paint0_linear_539_4409" x1="161" y1="0" x2="161" y2="264.5"
            gradientUnits="userSpaceOnUse">
            <stop stopColor="#CCCCCC" />
            <stop offset="0.62" stopColor="#272727" stopOpacity="0" />
          </linearGradient>
        </defs>
      </motion.svg>
    
      {/* --- MOBILE SVG ANIMATION --- */}
      <motion.svg
        className="mobile-top-line mobile"
        width="316"
        height="316"
        viewBox="0 0 316 316"
        fill="none"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <motion.circle
          cx="158"
          cy="158"
          r="157.5"
          stroke="url(#paint0_linear_733_6435)"
          strokeOpacity="0.55"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          transition={{ duration: 1.4, ease: "easeOut" }}
        />
        <defs>
          <linearGradient id="paint0_linear_733_6435" x1="158" y1="0" x2="158" y2="316"
            gradientUnits="userSpaceOnUse">
            <stop stopColor="#8D8D8D" />
            <stop offset="0.62" stopColor="#272727" stopOpacity="0" />
          </linearGradient>
        </defs>
      </motion.svg>
    
      <motion.svg
        className="mobile-bottom-line mobile"
        width="197"
        height="196"
        viewBox="0 0 197 196"
        fill="none"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <motion.path
          d="M98.5 0.5C152.626 0.5 196.5 44.1546 196.5 98C196.5 151.845 152.626 195.5 98.5 195.5C44.3737 195.5 0.5 151.845 0.5 98C0.5 44.1546 44.3737 0.5 98.5 0.5Z"
          stroke="url(#paint0_linear_733_6436)"
          strokeOpacity="0.55"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          transition={{ duration: 1.4, ease: "easeOut", delay: 0.2 }}
        />
        <defs>
          <linearGradient id="paint0_linear_733_6436" x1="98.5" y1="0" x2="98.5" y2="196"
            gradientUnits="userSpaceOnUse">
            <stop stopColor="#8D8D8D" />
            <stop offset="0.62" stopColor="#272727" stopOpacity="0" />
          </linearGradient>
        </defs>
      </motion.svg>
    
      {/* --- HEADING TEXT --- */}
      <div className="projects-heading-text">
        <motion.h2
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Recent <br className="mobile" /> Case Studies
        </motion.h2>
    
        <motion.p
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
          viewport={{ once: true }}
        >
          Creating stunning, user-centric websites <br className="mobile" /> that
          inspire and <br className="desktop" /> engage.
        </motion.p>
      </div>
    </div>
      <div className="projects-container">
        <Link className="projects-set" to="/projects/save_life">
          <div className="projects-set-img">
            <img src={SaveLife} className="main-img" />
            <img src={SaveLifeBackgroundGlow} className="glow-img" />
          </div>
          <div className="projects-set-text">
            <p>Mobile Application</p>
            <section>
              <h3>Save Life</h3>
              <sub>2025</sub>
            </section>
          </div>
        </Link>
        <Link className="projects-set" to="/projects/school_mate">
          <div className="projects-set-img">
            <img src={SchoolMate} className="main-img" />
            <img src={SchoolMateGlow} className="glow-img" />
          </div>
          <div className="projects-set-text">
            <p>Mobile Application</p>
            <section>
              <h3>School Mate</h3>
              <sub>2025</sub>
            </section>
          </div>
        </Link>
        <Link className="projects-set" to="/projects/q_easy">
          <div className="projects-set-img">
            <img src={QEasy} className="main-img" />
            <img src={QEasyGlow} className="glow-img" />
          </div>
          <div className="projects-set-text">
            <p>Mobile Application</p>
            <section>
              <h3>Q Easy</h3>
              <sub>2025</sub>
            </section>
          </div>
        </Link>
        <Link className="projects-set" to="/projects/google_classroom">
          <div className="projects-set-img">
            <img src={GoogleClassroom} className="main-img" />
            <img src={GoogleClassroomBackgroundGlow} className="glow-img" />
          </div>
          <div className="projects-set-text">
            <p>Mobile Application</p>
            <section>
              <h3>Google Classroom</h3>
              <sub>2023</sub>
            </section>
          </div>
        </Link>
        <Link className="projects-set" to="/projects/rent_my_ride">
          <div className="projects-set-img">
            <img src={RentMyRide} className="main-img" />
            <img src={RentMyRideBackgroundGlow} className="glow-img" />
          </div>
          <div className="projects-set-text">
            <p>Mobile Application</p>
            <section>
              <h3>Rent My Ride</h3>
              <sub>2023</sub>
            </section>
          </div>
        </Link>
        <Link className="projects-set" to="/projects/kite_by_zerodha">
          <div className="projects-set-img">
            <img src={KITE} className="main-img" />
            <img src={KITEBackgroundGlow} className="glow-img" />
          </div>
          <div className="projects-set-text">
            <p>Mobile Application</p>
            <section>
              <h3>Kite by Zerodha</h3>
              <sub>2023</sub>
            </section>
          </div>
        </Link>
        <Link className="projects-set" to="/projects/canvas_and_code">
          <div className="projects-set-img">
            <img src={CanvasCode} className="main-img" />
            <img src={CanvasCodeBackgroundGlow} className="glow-img" />
          </div>
          <div className="projects-set-text">
            <p>Website Design</p>
            <section>
              <h3>Canvas & Code</h3>
              <sub>2023</sub>
            </section>
          </div>
        </Link>
        <Link className="projects-set" to="/projects/ollie_pets">
          <div className="projects-set-img">
            <img src={OlliePets} className="main-img" />
            <img src={OlliePetsBackgroundGlow} className="glow-img" />
          </div>
          <div className="projects-set-text">
            <p>Website Design</p>
            <section>
              <h3>Ollie Pets</h3>
              <sub>2023</sub>
            </section>
          </div>
        </Link>
        <Link className="projects-set" to="/projects/aarogya_guru">
          <div className="projects-set-img">
            <img src={AarogyaGuru} className="main-img" />
            <img src={AarogyaGuruBackgroundGlow} className="glow-img" />
          </div>
          <div className="projects-set-text">
            <p>Mobile Application</p>
            <section>
              <h3>Aarogya Guru</h3>
              <sub>2023</sub>
            </section>
          </div>
        </Link>
        <Link className="projects-set" to="/projects/whatsApp">
          <div className="projects-set-img">
            <img src={WhatsApp} className="main-img" />
            <img src={WhatsAppBackgroundGlow} className="glow-img" />
          </div>
          <div className="projects-set-text">
            <p>Mobile Application</p>
            <section>
              <h3>WhatsApp</h3>
              <sub>2023</sub>
            </section>
          </div>
        </Link>
        <Link className="projects-set" to="/projects/youtube">
          <div className="projects-set-img">
            <img src={YouTube} className="main-img" />
            <img src={YouTubeBackgroundGlow} className="glow-img" />
          </div>
          <div className="projects-set-text">
            <p>Mobile Application</p>
            <section>
              <h3>YouTube</h3>
              <sub>2023</sub>
            </section>
          </div>
        </Link>
        <Link className="projects-set" to="/projects/urban_monkey">
          <div className="projects-set-img">
            <img src={UrbanMonkey} className="main-img" />
            <img src={UrbanMonkeyBackgroundGlow} className="glow-img" />
          </div>
          <div className="projects-set-text">
            <p>Website Design</p>
            <section>
              <h3>Urban Monkey</h3>
              <sub>2023</sub>
            </section>
          </div>
        </Link>
        <Link className="projects-set" to="/projects/coolzee">
          <div className="projects-set-img">
            <img src={Coolzee} className="main-img" />
            <img src={CoolzeeBackgroundGlow} className="glow-img" />
          </div>
          <div className="projects-set-text">
            <p>Mobile Application</p>
            <section>
              <h3>Coolzee</h3>
              <sub>2023</sub>
            </section>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Projects;
