import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  hiddenNavVariants,
  bottomVariants,
  socialVariants,
  linkVariants,
} from "../../../utils/utils";

export default function HiddenNav({
  color,
  toggleClose,
}) {
  return (
    <motion.div
      className="outer-nav"
      variants={hiddenNavVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <nav className="hidden-nav">
        <div className="center">
          <div className="hidden-nav__top">
            <h5>
              <Link href="/" passHref>
                <a>Samar Adhikari</a>
              </Link>
            </h5>
            <div className="navigation__link">
              <div
                onClick={() => toggleClose()}
                className="hamburger"
              >
                Menu
                <span>X</span>
              </div>
            </div>
          </div>
          <div className="hidden-nav__bottom">
            <motion.ul variants={bottomVariants}>
              <motion.li variants={linkVariants}>
                <Link href="/" passHref>
                  <a className="active">Home</a>
                </Link>
              </motion.li>

              <motion.li variants={linkVariants}>
                <Link href="/projects" passHref>
                  <a>Case Studies</a>
                </Link>
              </motion.li>
              <motion.li variants={linkVariants}>
                <Link href="/about" passHref>
                  <a>About</a>
                </Link>
              </motion.li>
              <motion.li variants={linkVariants}>
                <Link href="/contact" passHref>
                  <a>Contact</a>
                </Link>
              </motion.li>
            </motion.ul>
            <motion.div
              variants={socialVariants}
              className="social"
            >
              <div className="links">
                <h3>Socials</h3>
                <a href="#">Behance</a>
                <a href="#">Dribble</a>
                <a href="#">Facebook</a>
                <a href="#">Instagram</a>
              </div>
              <div className="mail">
                <h3>Say Hi</h3>
                <span>
                  samar.adhikari@gmail.com
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </nav>
      <div
        className="animated-div"
        style={{ background: color }}
      ></div>
    </motion.div>
  );
}
