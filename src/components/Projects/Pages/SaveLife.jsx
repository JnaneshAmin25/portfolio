import React, { useState } from "react";
import icon from "../../../assets/Projects/Page/Save Life/icon.png";
import banner from "../../../assets/Projects/Page/Save Life/banner.png";
import mobilebanner from "../../../assets/Projects/Page/Save Life/mobile banner.png";
import toolused from "../../../assets/Projects/Page/Save Life/tool used.png";
import overviewimg from "../../../assets/Projects/Page/Save Life/overview img.png";
import secondbanner from "../../../assets/Projects/Page/Save Life/second banner.png";
import mobilesecondbanner from "../../../assets/Projects/Page/Save Life/mobile second banner.png";
import thirdbanner1 from "../../../assets/Projects/Page/Save Life/third banner 1.png";
import thirdbanner2 from "../../../assets/Projects/Page/Save Life/third banner 2.png";
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

function SaveLife() {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore((prev) => !prev);
  };

  return (
    <div className="pages-container">
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
            <div className="project-overview-container">
              <div className="project-overview-set">
                <h3>Project Overview</h3>
                <p>
                  SaveLife is a community-driven blood donation app designed to
                  simplify and accelerate the process of finding blood during
                  emergencies. The platform connects people in urgent need with
                  nearby verified donors, offering real-time availability,
                  distance-based results, and one-tap calling or messaging.
                  Unlike many existing solutions that are outdated,
                  region-limited, or cluttered, SaveLife focuses on speed,
                  clarity, and human connection—ensuring that no time is wasted
                  when every minute matters.
                </p>
              </div>
              <div className="project-overview-set" style={{ height: "100%" }}>
                <h3>Key Takeaways</h3>
                <p>
                  Through this project, I learned that designing for emergencies
                  demands extreme clarity, speed, and minimal friction.
                  Real-time accuracy and verified information proved essential
                  for building user trust. I also realized that simplicity
                  outperforms feature-heavy complexity during stressful
                  situations. Ultimately, SaveLife showed me how thoughtful UX
                  can make a direct and meaningful impact on real human lives.
                </p>
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
          <div className="project-second-banner">
            <img src={secondbanner} className="desktop" />
            <img src={mobilesecondbanner} className="mobile" />
          </div>
          <div className="project-points-container">
            <h3>Problem Statement</h3>
            <ul className="project-points-div desktop">
              <li className="project-points">
                People struggle to find verified blood donors quickly because
                most existing sources are outdated and unreliable.
              </li>
              <li className="project-points">
                Users have no real-time visibility into which donors are
                currently available, leading to wasted time and failed attempts.
              </li>
              <li className="project-points">
                Emergency situations become slower and more stressful because
                existing apps require too many steps to reach a donor.
              </li>
              <li className="project-points">
                People are forced to call multiple donors manually since
                communication channels are scattered and unorganized.
              </li>
              <li className="project-points">
                Users often contact donors who are too far away because there is
                no clear indication of distance or proximity.
              </li>
              <li className="project-points">
                Cluttered and confusing interfaces increase panic during
                emergencies instead of guiding users calmly toward help.
              </li>
            </ul>
            <ul className="project-points-div mobile">
              <li className="project-points">
                People struggle to find verified blood donors quickly because
                most existing sources are outdated and unreliable.
              </li>
              <li className="project-points">
                Users have no real-time visibility into which donors are
                currently available, leading to wasted time and failed attempts.
              </li>
              <li className="project-points">
                Emergency situations become slower and more stressful because
                existing apps require too many steps to reach a donor.
              </li>

              {!showMore && (
                <button className="primary-button" onClick={toggleShowMore}>
                  See More
                </button>
              )}

              {showMore && (
                <>
                  <li className="project-points">
                    People are forced to call multiple donors manually since
                    communication channels are scattered and unorganized.
                  </li>
                  <li className="project-points">
                    Users often contact donors who are too far away because
                    there is no clear indication of distance or proximity.
                  </li>
                  <li className="project-points">
                    Cluttered and confusing interfaces increase panic during
                    emergencies instead of guiding users calmly toward help.
                  </li>
                  <button className="primary-button" onClick={toggleShowMore}>
                    See Less
                  </button>
                </>
              )}
            </ul>
          </div>

          <div className="project-points-container">
            <h3>Goals</h3>
            <ul className="project-points-div">
              <li className="project-points">
                Instant real-time donor discovery with distance and availability
              </li>
              <li className="project-points">
                One-tap emergency communication via Call directly from donor
                cards.
              </li>
              <li className="project-points">
                Simple, focused interface designed for fast decisions and
                low-stress interactions.
              </li>
            </ul>
          </div>
          <div className="project-third-banner">
            <img src={thirdbanner1} />
            <img src={thirdbanner2} />
          </div>
          <div className="project-journey">
            <h3>The Journey</h3>
            <p>
              Journey began with observing the struggles people face in long
              queues at government offices and public places in India. I focused
              on identifying pain points, especially for those with physical
              limitations or time constraints. Through iterative wireframing and
              feedback, I crafted a user flow that felt simple yet powerful.
              This project reminded me how meaningful design emerges when
              empathy meets functionality.
            </p>
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
