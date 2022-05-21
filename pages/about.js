import React, { useEffect } from "react";
import {
  motion,
  AnimatePresence,
} from "framer-motion";
import Marquee from "../component/@core/Marquee";
import Head from "../component//Head";
import Nav from "../component/HomePage/Nav";
import AboutSection from "../component/HomePage/AboutSection";
import Social from "../component/HomePage/Social";
import {
  sectionVariants,
  topBgVariants,
} from "../utils/utils";

export default function About({
  primaryColor,
  secondaryColor,
  showHiddenNav,
  setShowHiddenNav,
  openHandler,
  closeHandler,
}) {
  useEffect(() => {
    setShowHiddenNav(false);
    document.body.style.overflow = "auto";
  }, []);
  return (
    <motion.div
      exit={{
        opacity: 0,
        transition: { duration: 1 },
      }}
    >
      <Head />
      <motion.div
        variants={topBgVariants}
        initial="hidden"
        animate="visible"
        className="top bg-primary"
      >
        <Nav
          backgroundColor={primaryColor}
          textColor={secondaryColor}
          showHiddenNav={showHiddenNav}
          setShowHiddenNav={setShowHiddenNav}
          openHandler={openHandler}
          closeHandler={closeHandler}
        />
      </motion.div>
      <AnimatePresence exitBeforeEnter>
        {!showHiddenNav && (
          <motion.div
            className="outer-title"
            variants={sectionVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <div className="title">
              <div className="center">
                <h2>
                  Hello! My name is Samar
                  Adhikari, I'm a Kathmandu based
                  UI/UX designer with more than 4
                  years of digital design
                  experience.
                </h2>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <div
        style={{
          background: `${secondaryColor}`,
          color: "#000",
        }}
        className="intro about-page-intro"
      >
        <div className="center">
          <AboutSection />
        </div>
      </div>

      <footer>
        <Marquee
          color={secondaryColor}
          title="SAY HI!!"
        />
        <div className="center">
          <Social />
        </div>
      </footer>
    </motion.div>
  );
}
