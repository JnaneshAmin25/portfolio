import { useEffect, useRef, useState } from "react";
import BackgroundStars from "../../assets/Home/Banner/BackgroundStars.webp";
import "./Industrees.css";

const Industries = () => {
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

  const industries = [
    "SaaS Dashboards", "E-Commerce", "Food & Delivery", "Hospitality",
    "E-Learning", "Fitness & Lifestyle", "Health Care", "Waste Management",
    "Finance", "Entertainment", "Travel & Tourism", "Bookings & Payments",
    "Automobiles", "Agriculture & Farm", "Industrial Tools",
  ];

  return (
    <div
      ref={sectionRef}
      className={`industries-wrapper fade-section ${isVisible ? "visible" : ""}`}
    >
      <img className="industries-stars-bg" src={BackgroundStars} alt="Background" />

      <h2 className={`industries-title fade-delay ${isVisible ? "visible" : ""}`}>
        Industries & Projects
      </h2>

      <h2
        className={`industries-title fade-delay ${isVisible ? "visible" : ""}`}
        style={{ marginTop: 4 }}
      >
        I've Shaped
      </h2>

      <p
        className={`industries-subtext fade-delay ${isVisible ? "visible" : ""}`}
      >
        A mix of UX strategy, UI craft, and visual design expertise shaping every
        project.
      </p>

      <div
        className={`industries-list fade-delay ${isVisible ? "visible" : ""}`}
        style={{ transitionDelay: "300ms" }}
      >
        <div className="white-blur">
          <div className="blur-ellips"></div>
        </div>

        {industries.map((item, idx) => (
          <div
            key={idx}
            className={`industry-item fade-delay ${isVisible ? "visible" : ""}`}
            style={{ transitionDelay: `${400 + idx * 40}ms` }}
          >
            <div className="top-orange-blur"></div>
            {item}
            <div className="bottom-purple-blur"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Industries;
