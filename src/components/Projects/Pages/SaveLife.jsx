import React, { useState } from "react";
import icon from "../../../assets/Projects/Page/Save Life/icon.png";
import banner from "../../../assets/Projects/Page/Save Life/banner.png";
import mobilebanner from "../../../assets/Projects/Page/Save Life/mobile banner.png";
import toolused from "../../../assets/Projects/Page/Save Life/tool used.png";
import overviewimg from "../../../assets/Projects/Page/Save Life/overview img.png";
import bento11 from "../../../assets/Projects/Page/Save Life/bento 1.1.png";
import bento12 from "../../../assets/Projects/Page/Save Life/bento 1.2.png";
import bento13 from "../../../assets/Projects/Page/Save Life/bento 1.3.png";
import bento14 from "../../../assets/Projects/Page/Save Life/bento 1.4.png";
import bento15 from "../../../assets/Projects/Page/Save Life/bento 1.5.png";
import bento21 from "../../../assets/Projects/Page/Save Life/bento 2.1.png";
import bento22 from "../../../assets/Projects/Page/Save Life/bento 2.2.png";
import bento23 from "../../../assets/Projects/Page/Save Life/bento 2.3.png";
import bento24 from "../../../assets/Projects/Page/Save Life/bento 2.4.png";
import bento25 from "../../../assets/Projects/Page/Save Life/bento 2.5.png";
import bento26 from "../../../assets/Projects/Page/Save Life/bento 2.6.png";
import BackgroundStars from "../../../assets/Home/Banner/BackgroundStars.webp"

function SaveLife() {
  const [activeTab, setActiveTab] = useState(0);

  const roles = [
    "UX Research",
    "UX Flow",
    "Journey Mapping",
    "Wireframing",
    "Rapid Prototyping",
    "Design Thinking",
    "Design Systems",
    "Problem Solving",
    "components",
    "Interface Design",
    "Visual Design",
  ];


  return (
    <div className="pages-container">
      <img className="home-banner-background-stars" src={BackgroundStars} alt="Background" />
      <div className="about-project">
        <div className="project-header">
          <div className="project-header-text-and-icon">
            <div className="project-header-icon">
              <img
                src={icon}
                style={{
                  boxShadow: "0px 2px 45px 0px #F46161",
                }}
                alt="Save Life Icon"
              />
            </div>
            <div className="project-header-text">
              <h2>Save Life</h2>
              <p>Mobile Application</p>
            </div>
          </div>
          <div className="project-header-banner">
            <img src={banner} className="desktop" alt="Save Life Banner" />
            <img src={mobilebanner} className="mobile" alt="Save Life Banner" />
          </div>
        </div>
        <div className="project-sections-container">
          <div className="project-overview">
            {/* --- TAB NAVIGATION --- */}
            <div className="project-tabs">
              <div className="tab-line"></div>

              {[
                "Overview",
                "Research & Data",
                "Pain Points",
                "Metrics & Outcomes",
                "Roadmap",
                "Takeaways",
              ].map((tab, index) => (
                <div
                  key={index}
                  className={`tab-item ${activeTab === index ? "active" : ""}`}
                  onClick={() => setActiveTab(index)}
                >
                  {activeTab === index && <span className="tab-dot" />}
                  {tab}
                </div>
              ))}
            </div>

            {/* --- SWITCHABLE TAB CONTENT --- */}
            <div className="project-overview-content">
              {activeTab === 0 && (
                <>
                  <div className="overview-content">
                    <div className="project-overview-container">
                      <div className="project-overview-set">
                        <h3>Project Overview</h3>
                        <p>
                          SaveLife is a community-driven blood donation app designed to simplify and accelerate the process of finding blood during emergencies. The platform connects people in urgent need with nearby verified donors, offering real-time availability, distance-based results, and one-tap calling or messaging. Unlike many existing solutions that are outdated, region-limited, or cluttered, SaveLife 
                        </p>
                      </div>
                      <div className="project-overview-set">
                        <h3>My Role</h3>
                        <div className="role-list-container">
                          {roles.map((item, idx) => (
                            <div key={idx} className="industry-item">{item}</div>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="project-overview-container">
                      <div className="project-overview-set">
                        <h3>Tool Used</h3>
                        <div className="tool-used">
                          <img src={toolused} />
                          <section>
                            <h4>Figma</h4>
                            <p>Design Tool</p>
                          </section>
                        </div>
                      </div>
                      <div className="project-overview-set">
                        <h3>Timeline</h3>
                        <h4>October 2025</h4>
                      </div>
                      <div className="project-overview-img">
                        <img src={overviewimg} />
                      </div>
                    </div>
                  </div>
                </>
              )}

              {activeTab === 1 && <h3 className="placeholder">Research & Data Coming Soon</h3>}
              {activeTab === 2 && <h3 className="placeholder">Pain Points Display Here</h3>}
              {activeTab === 3 && <h3 className="placeholder">Metrics & Outcomes</h3>}
              {activeTab === 4 && <h3 className="placeholder">Roadmap</h3>}
              {activeTab === 5 && <h3 className="placeholder">Final Takeaways</h3>}
            </div>
          </div>
        </div>
      </div>
      <div className="project-bento">
        <div className="project-bento-container">
          <img src={bento11} />
          <img src={bento12} />
          <img src={bento13} />
          <img src={bento14} />
          <img src={bento15} />
        </div>
        <div className="project-bento-container">
          <img src={bento21} />
          <img src={bento22} />
          <img src={bento23} />
          <img src={bento24} />
          <img src={bento25} />
          <img src={bento26} />
        </div>
      </div>
      <div className="project-link">
        <h3>More on the Project</h3>
        <a
          href="https://www.behance.net/gallery/236958291/Blood-Donation-App"
          target="_blank"
        >
          Save Life
        </a>
      </div>
    </div>
  );
}

export default SaveLife;
