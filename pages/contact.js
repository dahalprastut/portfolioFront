import React from "react";
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
import useNav from "../utils/useNav";

export default function Contact({
  primaryColor,
  secondaryColor,
}) {
  const [
    showHiddenNav,
    setShowHiddenNav,
    openHandler,
    closeHandler,
  ] = useNav();
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
          backgroundColor={secondaryColor}
          textColor={primaryColor}
          showHiddenNav={showHiddenNav}
          setShowHiddenNav={setShowHiddenNav}
          openHandler={openHandler}
          closeHandler={closeHandler}
        />
      </motion.div>
      <AnimatePresence exitBeforeEnter>
        {!showHiddenNav && (
          <motion.section
            className="contact-section"
            variants={sectionVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <div className="center">
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
