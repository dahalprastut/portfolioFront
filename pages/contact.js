import React, { useEffect } from "react";
import {
  motion,
  AnimatePresence,
} from "framer-motion";
import Marquee from "../component/@core/Marquee";
import Head from "../component/Head";
import Nav from "../component/HomePage/Nav";
import Social from "../component/HomePage/Social";
import Form from "../component/Contact/Form";
import {
  sectionVariants,
  topBgVariants,
} from "../utils/utils";

export default function contact({
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
            variants={sectionVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <div className="center">
              <h1>CONTACT</h1>
              <Form />
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
