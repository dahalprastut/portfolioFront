import React, { useEffect } from "react";
import {
  motion,
  AnimatePresence,
} from "framer-motion";
import Marquee from "../../component/@core/Marquee";
import Head from "../../component//Head";
import Nav from "../../component/HomePage/Nav";
import RecentWorks from "../../component/HomePage/RecentWorks";
import Social from "../../component/HomePage/Social";
import {
  sectionVariants,
  topBgVariants,
} from "../../utils/utils";

export default function Projects({
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
      >
        <Nav
          color={primaryColor}
          showHiddenNav={showHiddenNav}
          setShowHiddenNav={setShowHiddenNav}
          openHandler={openHandler}
          closeHandler={closeHandler}
        />
      </motion.div>
      <AnimatePresence exitBeforeEnter>
        {!showHiddenNav && (
          <motion.section
            className="project-section"
            variants={sectionVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <div className="center">
              <RecentWorks />
            </div>
          </motion.section>
        )}
      </AnimatePresence>
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
