import React, { useEffect, useRef, useState } from "react";
import SkillStarBackground from "../../assets/Home/Skills/SkillsStarBackground.webp";

const uxSkills = [
  "User Research",
  "Journey Mapping",
  "Information Architecture",
  "Wireframing",
  "User Flow Design",
  "Design Thinking",
  "Rapid Prototype",
  "Problem Solving",
];

const uiSkills = [
  "Style Guides",
  "Typography",
  "Components",
  "Visual Design",
  "Design Systems",
  "Responsive & Web Design",
  "Prototype",
  "Micro Animations",
];

const Skills = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={sectionRef}
      className={`skills-section fade-section ${isVisible ? "visible" : ""}`}
    >
      {/* <img
        className="home-banner-background-stars"
        src={SkillStarBackground}
        alt="Background"
      /> */}

      {/* Heading */}
      <div className={`projects-heading fade-delay ${isVisible ? "visible" : ""}`}>
        <h2>Skills That Shape <br /> My Work</h2>
        <p>
          A mix of UX strategy, UI craft, and visual design expertise shaping every
          project.
        </p>
      </div>

      {/* UX Skills */}
      <div className={`skills-block fade-delay ${isVisible ? "visible" : ""}`} style={{ transitionDelay: "200ms" }}>
        <h4 className="skill-category-title">UX SKILLS</h4>

        <div className="industries-list">
          <div className="white-blur">
            <div className="blur-ellips"></div>
          </div>

          {uxSkills.map((item, idx) => (
            <div
              key={idx}
              className={`industry-item fade-delay ${isVisible ? "visible" : ""}`}
              style={{ transitionDelay: `${300 + idx * 80}ms` }}
            >
              <div className="top-orange-blur"></div>
              {item}
              <div className="bottom-purple-blur"></div>
            </div>
          ))}
        </div>
      </div>

      {/* UI Skills */}
      <div className={`skills-block fade-delay ${isVisible ? "visible" : ""}`} style={{ transitionDelay: "300ms" }}>
        <h4 className="skill-category-title">UI SKILLS</h4>

        <div className="industries-list">
          {uiSkills.map((item, idx) => (
            <div
              key={idx}
              className={`industry-item fade-delay ${isVisible ? "visible" : ""}`}
              style={{ transitionDelay: `${400 + idx * 80}ms` }}
            >
              <div className="top-orange-blur"></div>
              {item}
              <div className="bottom-purple-blur"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
