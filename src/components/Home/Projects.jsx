import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import DesktopBackground from "../../assets/Home/Projects/Desktop Background.png";
import MobileBackground from "../../assets/Home/Projects/Mobile Background.png";
import SchoolMate from "../../assets/Home/Projects/School Mate.png";
import SchoolMateGlow from "../../assets/Home/Projects/School Mate Background Glow.png";
import QEasy from "../../assets/Home/Projects/Q Easy.png";
import QEasyGlow from "../../assets/Home/Projects/Q Easy Background Glow.png";
import GoogleClassroom from "../../assets/Home/Projects/Google Classroom.png";
import GoogleClassroomBackgroundGlow from "../../assets/Home/Projects/Google Classroom Background Glow.png";
import CanvasCode from "../../assets/Home/Projects/Canvas & Code.png";
import CanvasCodeBackgroundGlow from "../../assets/Home/Projects/Canvas & Code Background Glow.png";
import OlliePets from "../../assets/Home/Projects/Ollie Pets.png";
import OlliePetsBackgroundGlow from "../../assets/Home/Projects/Ollie Pets Background Glow.png";
import AarogyaGuru from "../../assets/Home/Projects/Aarogya Guru.png";
import AarogyaGuruBackgroundGlow from "../../assets/Home/Projects/Aarogya Guru Background Glow.png";
import DesktopBackgrnd from "../../assets/Home/Projects/DesktopBackground.png";
import MobileBackgrnd from "../../assets/Home/Projects/MobileBackground.webp";
import SaveLife from "../../assets/Projects/ProjectsList/Save Life.png";
import SaveLifeBackgroundGlow from "../../assets/Projects/ProjectsList/Save Life Background Glow.png";

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

  // For stagger animation timings
  const delay = (i) => ({ transitionDelay: `${200 + i * 120}ms` });

  const projectData = [
    {
      link: "/projects/save_life",
      img: SaveLife,
      glow: SaveLifeBackgroundGlow,
      title: "Save Life",
      sub: "2025",
      tag: "Mobile Application",
    },
    {
      link: "/projects/school_mate",
      img: SchoolMate,
      glow: SchoolMateGlow,
      title: "School Mate",
      sub: "2025",
      tag: "Mobile Application",
    },
    {
      link: "/projects/q_easy",
      img: QEasy,
      glow: QEasyGlow,
      title: "Q Easy",
      sub: "2025",
      tag: "Mobile Application",
    },
    {
      link: "/projects/google_classroom",
      img: GoogleClassroom,
      glow: GoogleClassroomBackgroundGlow,
      title: "Google Classroom",
      sub: "2023",
      tag: "Mobile Application",
      hideOnMobile: true,
    },
    {
      link: "/projects/canvas_and_code",
      img: CanvasCode,
      glow: CanvasCodeBackgroundGlow,
      title: "Canvas & Code",
      sub: "2023",
      tag: "Website Design",
      hideOnMobile: true,
    },
    {
      link: "/projects/ollie_pets",
      img: OlliePets,
      glow: OlliePetsBackgroundGlow,
      title: "Ollie Pets",
      sub: "2023",
      tag: "Website Design",
      hideOnMobile: true,
    },
    {
      link: "/projects/aarogya_guru",
      img: AarogyaGuru,
      glow: AarogyaGuruBackgroundGlow,
      title: "Aarogya Guru",
      sub: "2023",
      tag: "Mobile Application",
      hideOnMobile: true,
    },
  ];

  return (
    <div ref={sectionRef} className={`projects  ${visible ? "visible" : ""}`}>
      <div className="projects-heading">
        <img className="projects-heading-background desktop" src={DesktopBackgrnd} />
        <img className="projects-heading-background mobile" src={MobileBackgrnd} />
        <div className="projects-heading-text ">
          <h2>Recent <br className="mobile" /> Case Studies</h2>
          <p>
            Creating stunning, user-centric websites <br className="mobile" />{" "}
            that inspire and <br className="desktop" /> engage.
          </p>
        </div>
      </div>

      <div className="projects-container">
        {projectData.map((p, i) => (
          <Link
            key={i}
            to={p.link}
            className={`projects-set fade-item ${visible ? "visible" : ""} ${
              p.hideOnMobile ? "desktop" : ""
            }`}
            style={delay(i)}
          >
            <div className="projects-set-img">
              <img src={p.img} className="main-img" />
              <img src={p.glow} className="glow-img" />
            </div>

            <div className="projects-set-text">
              <p>{p.tag}</p>
              <section>
                <h3>{p.title}</h3>
                <sub>{p.sub}</sub>
              </section>
            </div>
          </Link>
        ))}
      </div>

      <div className={`view-more-wrapper fade-item ${visible ? "visible" : ""}`}
           style={{ transitionDelay: "1200ms" }}>
        <Link to="/projects" className="case-btn">View More</Link>
      </div>
    </div>
  );
}

export default Projects;
