import React from "react";
import SkillStarBackground from "../../assets/Home/Skills/SkillsStarBackground.webp"

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
  return (
      <div className="skills-section">
          <img className="home-banner-background-stars" src={SkillStarBackground} alt="Background" />
      {/* Heading */}
      <div className="projects-heading">
        <h2>Skills That Shape <br/> My Work</h2>
        <p>
          A mix of UX strategy, UI craft, and visual design expertise shaping every
          project.
        </p>
      </div>

      {/* UX Skills */}
      <div className="skills-block">
        <h4 className="skill-category-title">UX SKILLS</h4>
        <div className="industries-list">
          {uxSkills.map((item, idx) => (
            <div key={idx} className="industry-item">
              {item}
            </div>
          ))}
        </div>
      </div>

      {/* UI Skills */}
      <div className="skills-block">
        <h4 className="skill-category-title">UI SKILLS</h4>
        <div className="industries-list">
          {uiSkills.map((item, idx) => (
            <div key={idx} className="industry-item">
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
