/* eslint-disable no-unused-vars */
import React from "react";
import DesktopBackground from "../../assets/Home/Glimpse/Desktop Background.png";
import MobileBackground from "../../assets/Home/Glimpse/Mobile Background.png";
import CocaCola from "../../assets/Home/Glimpse/CocaCola.jpg";
import CocaColaMobile from "../../assets/Home/Glimpse/CocaCola Mobile.jpg";
import ThumbsUp from "../../assets/Home/Glimpse/ThumbsUp.jpg";
import ThumbsUpMobile from "../../assets/Home/Glimpse/ThumbsUp Mobile.png";
import Pepsi from "../../assets/Home/Glimpse/Pepsi.jpg";
import PepsiMobile from "../../assets/Home/Glimpse/Pepsi Mobile.jpg";
import NiveaMen from "../../assets/Home/Glimpse/NiveaMen.jpg";
import NiveaMenMobile from "../../assets/Home/Glimpse/NiveaMen Mobile.png";
import Fizz from "../../assets/Home/Glimpse/Fizz.jpg";
import FizzMobile from "../../assets/Home/Glimpse/Fizz Mobile.jpg";
import Monster from "../../assets/Home/Glimpse/Monster.png";
import MonsterMobile from "../../assets/Home/Glimpse/Monster Mobile.png";
import Casio from "../../assets/Home/Glimpse/Casio.png";
import CasioMobile from "../../assets/Home/Glimpse/Casio Mobile.png";
import India from "../../assets/Home/Glimpse/India.jpg";
import IndiaMobile from "../../assets/Home/Glimpse/India Mobile.jpg";
import RedBull from "../../assets/Home/Glimpse/RedBull.jpg";
import GalleryBackgroundBlur from "../../assets/Home/Glimpse/GalleryBackgroundBlur.webp";
import { motion } from "framer-motion";

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


function Glimpse() {
  return (
    <div className="glimpse">
      <img className="glimpse-background desktop" src={GalleryBackgroundBlur} alt="Background" />
      <img className="glimpse-background mobile" src={GalleryBackgroundBlur} alt="Background" />

      <motion.div
        className="glimpse-heading"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false }}
      >
        <motion.h2 variants={item}>
          A Glimpse Through <br className="mobile" /> My Lens
        </motion.h2>

        <motion.p className="desktop" variants={item}>
          We create stunning, user-centric websites that inspire and engage.
        </motion.p>

        <motion.p className="mobile" variants={item}>
          Elevating Brands with Stunning Product Shots
        </motion.p>
      </motion.div>
      <div className="glimpse-container">
        <section className="desktop">
          <div className="glimpse-set box-1">
            <img src={NiveaMen} />
          </div>
          <div className="glimpse-set box-4">
            <img src={ThumbsUp} />
          </div>
          <div className="glimpse-set box-7">
            <img src={Casio} />
          </div>
        </section>
        <section className="desktop">
          <div className="glimpse-set box-2">
            <img src={CocaCola} />
          </div>
          <div className="glimpse-set box-5">
            <img src={Fizz} />
          </div>
          <div className="glimpse-set box-8">
            <img src={India} />
          </div>
        </section>
        <section className="desktop">
          <div className="glimpse-set box-3">
            <img src={Pepsi} />
          </div>
          <div className="glimpse-set box-6">
            <img src={Monster} />
          </div>
          <div className="glimpse-set box-9">
            <img src={RedBull} />
          </div>
        </section>

        <section className="mobile">
          <div className="glimpse-set box-2">
            <img src={NiveaMenMobile} />
          </div>
          <div className="glimpse-set box-5">
            <img src={ThumbsUpMobile} />
          </div>
          <div className="glimpse-set box-8">
            <img src={PepsiMobile} />
          </div>
          <div className="glimpse-set box-8">
            <img src={IndiaMobile} />
          </div>
        </section>
        <section className="mobile">
          <div className="glimpse-set box-3">
            <img src={CocaColaMobile} />
          </div>
          <div className="glimpse-set box-6">
            <img src={MonsterMobile} />
          </div>
          <div className="glimpse-set box-9">
            <img src={CasioMobile} />
          </div>
          <div className="glimpse-set box-9">
            <img src={FizzMobile} />
          </div>
        </section>
      </div>
    </div>
  );
}

export default Glimpse;
