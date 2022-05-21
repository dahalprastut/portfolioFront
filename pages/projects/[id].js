import React, { useEffect } from "react";
import {
  motion,
  AnimatePresence,
} from "framer-motion";
import Marquee from "../../component/@core/Marquee";
import Head from "../../component//Head";
import Nav from "../../component/HomePage/Nav";
import Social from "../../component/HomePage/Social";
import Content from "../../component/Detail/Content";
import {
  sectionVariants,
  topBgVariants,
} from "../../utils/utils";

export default function ProjectDetail({
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
          <motion.article
            variants={sectionVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <div className="center">
              <div className="title-intro">
                <h3>YetiYap</h3>
                <h1>
                  Identity Design for Nepal's
                  First Viral News Site
                </h1>
                <div className="about-client">
                  <div>
                    <span>Client</span>
                    <h4>YetiYap</h4>
                  </div>
                  <div>
                    <span>Responsibility</span>
                    <h4>
                      Branding | Web Design |
                      UI/UX
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </motion.article>
        )}
      </AnimatePresence>
      <div className="parallax"></div>
      <Content />
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
