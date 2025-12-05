import BackgroundStars from "../../assets/Home/Banner/BackgroundStars.webp"
import "./Industrees.css"
const Industries = () => {
  const industries = [
    "SaaS Dashboards",
    "E-Commerce",
    "Food & Delivery",
    "Hospitality",
    "E-Learning",
    "Fitness & Lifestyle",
    "Health Care",
    "Waste Management",
    "Finance",
    "Entertainment",
    "Travel & Tourism",
    "Bookings & Payments",
    "Automobiles",
    "Agriculture & Farm",
    "Industrial Tools",
  ];


  return (
    <div className="industries-wrapper">
      <img className="industries-stars-bg" src={BackgroundStars} alt="Background" />

      <h2 className="industries-title">Industries & Projects</h2>
      <h2 className="industries-title" style={{ marginTop: 4 }}>I've Shaped</h2>

      <p className="industries-subtext">
        A mix of UX strategy, UI craft, and visual design expertise shaping every project.
      </p>

      <div className="industries-list">
        {industries.map((item, idx) => (
          <div key={idx} className="industry-item">{item}</div>
        ))}
      </div>
    </div>
  );
};

export default Industries;
