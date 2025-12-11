import React from "react";
import DesktopBackground from "../../assets/Home/Experiences/Desktop Background.png";
import MobileBackground from "../../assets/Home/Experiences/Mobile Background.png";

function Experiences() {
  return (
    <div className="experiences">
      <img className="experiences-background desktop" src={DesktopBackground} />
      <img className="experiences-background mobile " src={MobileBackground} />
      <p>
        I’m a hands-on UX/UI designer who turns ideas into clear, functional, and delightful products. Over the years, I’ve worked across diverse industries from SaaS, travel, fintech, e-commerce, AI, healthcare, and more. , <br className="mobile" />Designing for multiple user types, devices, and interactions, including micro-animations.
      </p>
    </div>
  );
}

export default Experiences;
