/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import GoogleClassroom from "../../asset/Home/Marquee/Google Classroom.webp";
import Ollie from "../../asset/Home/Marquee/Ollie.webp";
import Whatsapp from "../../asset/Home/Marquee/Whatsapp.webp";
import KITE from "../../asset/Home/Marquee/KITE.webp";
import Cricbuzz from "../../asset/Home/Marquee/Cricbuzz.webp";
import URBANMoneky from "../../asset/Home/Marquee/URBAN Moneky.webp";
import Youtube from "../../asset/Home/Marquee/Youtube.webp";


const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.25 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20, filter: "blur(10px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

function Marquee() {
  return (
     <div className="home-marquee ">
      {/* <img
        className="home-marquee-background"
        src={DesktopBackground}
        alt="Background"
      /> */}
      <motion.div
              className="heading"
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false }}
      >
        <motion.h2
        variants={item}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, }}
        style={{ display: "inline-block" }}
      >
        Redesign Concepts
      </motion.h2>
            </motion.div>
      <div className="home-marquee-container">
        <div className="marquee-wrapper">
          <div className="marquee-marquee">
            <img src={GoogleClassroom} alt="Google Classroom" />
            <img src={Ollie} alt="Ollie" />
            <img src={Whatsapp} alt="Whatsapp" />
            <img src={KITE} alt="KITE" />
            <img src={Cricbuzz} alt="Cricbuzz" />
            <img src={URBANMoneky} alt="URBAN Monkey" />
            <img src={Youtube} alt="Youtube" />

            <img src={GoogleClassroom} alt="Google Classroom" />
            <img src={Ollie} alt="Ollie" />
            <img src={Whatsapp} alt="Whatsapp" />
            <img src={KITE} alt="KITE" />
            <img src={Cricbuzz} alt="Cricbuzz" />
            <img src={URBANMoneky} alt="URBAN Monkey" />
            <img src={Youtube} alt="Youtube" />

            <img src={GoogleClassroom} alt="Google Classroom" />
            <img src={Ollie} alt="Ollie" />
            <img src={Whatsapp} alt="Whatsapp" />
            <img src={KITE} alt="KITE" />
            <img src={Cricbuzz} alt="Cricbuzz" />
            <img src={URBANMoneky} alt="URBAN Monkey" />
            <img src={Youtube} alt="Youtube" />

            <img src={GoogleClassroom} alt="Google Classroom" />
            <img src={Ollie} alt="Ollie" />
            <img src={Whatsapp} alt="Whatsapp" />
            <img src={KITE} alt="KITE" />
            <img src={Cricbuzz} alt="Cricbuzz" />
            <img src={URBANMoneky} alt="URBAN Monkey" />
            <img src={Youtube} alt="Youtube" />
          </div>
        </div>
        <div className="home-marquee-dark left"></div>
        <div className="home-marquee-dark right"></div>
      </div>
    </div>
  );
}

export default Marquee;
