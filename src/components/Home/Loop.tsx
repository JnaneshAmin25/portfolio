import React, { useRef } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import ArrowForward from "../../assets/Home/OtherProjects/arrow_forward.png";
import ArrowBackward from "../../assets/Home/OtherProjects/arrow_backward.png";
import Phone from "../../assets/Home/OtherProjects/phone.webp";
import LoopBackground from "../../assets/Home/Loop/LoopBackground.webp";

const Loop = () => {
  const slides = [
    { title: "Rent My Ride", subtitle: "Mobile Application, 2023", img: Phone },
    { title: "Travel Buddy", subtitle: "Mobile Application, 2024", img: Phone },
    { title: "Foodify", subtitle: "Mobile Application, 2024", img: Phone },
  ];

  const [index, setIndex] = React.useState(0);
  const [direction, setDirection] = React.useState(0); // -1 = backward, 1 = forward

  const nextSlide = () => {
    setDirection(1);
    setIndex((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  // === Scroll animation setup ===
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const bgOpacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);
  const contentOpacity = useTransform(scrollYProgress, [0.15, 0.4], [0, 1]);
  const contentY = useTransform(scrollYProgress, [0.15, 0.4], [40, 0]);

  // Carousel directional variants
  const imageVariants = {
    enter: (dir) => ({
      x: dir === 1 ? 150 : -150,
      opacity: 0,
      scale: 0.98,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
    exit: (dir) => ({
      x: dir === 1 ? -150 : 150,
      opacity: 0,
      scale: 0.98,
      transition: { duration: 0.45, ease: "easeIn" },
    }),
  };

  return (
    <section ref={sectionRef} className="loop-scroll-container">
      {/* Sticky Background */}
      <motion.img
        src={LoopBackground}
        className="loop-bg-img"
        alt="Background"
        style={{ opacity: bgOpacity }}
      />

      {/* Sticky Content Zone */}
      <div className="loop-sticky-wrapper">
        <motion.div
          style={{
            opacity: contentOpacity,
            y: contentY,
          }}
          className="loop-inner-content"
        >
          <div className="top-row">
            <h1 className="loop-heading">
              Where Vision Meets <br />
              Action & Ideas <br />
              Take Shape
            </h1>

            <p className="loop-caption">
              Every project reflects research, creativity, and precision,
              turning ideas into products that truly make an impact.
            </p>
          </div>

          <div className="carousel-section">
            {/* AnimatePresence for directional enter/exit */}
            <div style={{ position: "relative", width: "100%", height: "auto", display: "flex", justifyContent: "center" }}>
              <AnimatePresence mode="wait">
                <motion.img
                  key={index}
                  src={slides[index].img}
                  className="carousel-img"
                  alt="slide"
                  custom={direction}
                  variants={imageVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  style={{ position: "relative", zIndex: 3 }}
                />
              </AnimatePresence>
            </div>

            <div className="title-row">
              <button onClick={prevSlide} className="arrow-btn small-btn" aria-label="Previous slide">
                <img src={ArrowBackward} alt="" />
              </button>

              <div className="title-block">
                <h3 className="slide-title">{slides[index].title}</h3>
                <p className="slide-sub">{slides[index].subtitle}</p>
              </div>

              <button onClick={nextSlide} className="arrow-btn small-btn" aria-label="Next slide">
                <img src={ArrowForward} alt="" />
              </button>
            </div>

            <p className="scroll-text">
              Keep sliding.
              <br />
              You never know what you'll discover next.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Loop;
