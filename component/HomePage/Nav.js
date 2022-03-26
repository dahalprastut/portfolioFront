import React, { useEffect } from "react";
import Link from "next/link";
import {
  AnimatePresence,
  motion,
  useCycle,
} from "framer-motion";
import Button from "../Buttons/Button";

const mainNav = {
  hidden: {
    opacity: 0,
    top: -600,
    transition: {
      duration: 1,
      when: "beforeChildren",
      delay: 1.3,
    },
  },
  show: {
    opacity: 1,
    top: 0,
    transition: {
      duration: 1,
      when: "beforeChildren",
      delay: 1,
    },
  },
};

const hiddenNav = {
  hidden: {
    opacity: 0,
    top: -600,
    transition: {
      duration: 1,
      when: "beforeChildren",
      delay: 1.3,
    },
  },
  show: {
    opacity: 1,
    top: 86,
    transition: {
      duration: 1,
      when: "beforeChildren",
      delay: 1,
    },
  },
};

// const buttonVariant = {
//   hidden:{
//     opacity: 0,
//     top: -100,
//   }
// }

const variants = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const whiteBg = {
  hidden: {
    y: -1200,
    transition: {
      duration: 3.4,
      ease: "linear",
    },
  },
  show: {
    y: 950,
    transition: {
      duration: 3.4,
      ease: "linear",
    },
  },
};

const listItem = {
  hidden: {
    x: -1000,
    transition: {
      duration: 0.1,
    },
  },
  show: {
    x: 0,
    transition: {
      duration: 0.3,
    },
  },
};
const socialMotion = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
  },
};

export default function Nav({ color }) {
  const [isOpen, toggleOpen] = useCycle(
    false,
    true
  );

  useEffect(() => {
    console.log("is", isOpen);

    if (isOpen) {
      setTimeout(() => {
        document.body.style.height = "100vh";
        document.body.style.overflowY = "hidden";
      }, [3000]);
    } else {
      setTimeout(() => {
        document.body.style.height = "auto";
        document.body.style.overflowY = "auto";
      }, [3000]);
    }
  }, [isOpen]);

  return (
    <>
      <motion.nav
        variants={mainNav}
        initial="hidden"
        animate={isOpen ? "hidden" : "show"}
        style={{ color: color }}
      >
        <h5>
          {" "}
          <Link href="/" passHref>
            <a>Samar Adhikari</a>
          </Link>
        </h5>
        <div className="navigation__link">
          <motion.div variants={mainNav}>
            <Link className="btn-round" href="#">
              <Button text={"Hire Me"} />
            </Link>
          </motion.div>

          <div
            onClick={() => toggleOpen()}
            className="hamburger"
          >
            Menu
            <span>
              <small
                style={{ borderColor: color }}
              ></small>
              <small
                style={{ borderColor: color }}
                className="middle-small"
              ></small>
              <small
                style={{ borderColor: color }}
              ></small>
            </span>
          </div>
        </div>
      </motion.nav>
      <motion.div
        variants={whiteBg}
        animate={isOpen ? "show" : "hidden"}
        className="animation-div"
        style={{ background: color }}
      ></motion.div>
      <motion.nav
        variants={hiddenNav}
        animate={isOpen ? "show" : "hidden"}
        className="hidden-nav"
      >
        <div className="hidden-nav__top">
          <h5>
            <Link href="/" passHref>
              <a>Samar Adhikari</a>
            </Link>
          </h5>
          <div className="navigation__link">
            <div
              onClick={() => toggleOpen()}
              className="hamburger"
            >
              Menu
              <span>X</span>
            </div>
          </div>
        </div>
        <div className="hidden-nav__bottom">
          <motion.ul variants={variants}>
            <motion.li variants={listItem}>
              <Link href="/" passHref>
                <a className="active">Home</a>
              </Link>
            </motion.li>

            <motion.li variants={listItem}>
              <Link href="/projects" passHref>
                <a>Case Studies</a>
              </Link>
            </motion.li>
            <motion.li variants={listItem}>
              <Link href="/about" passHref>
                <a>About</a>
              </Link>
            </motion.li>
            <motion.li variants={listItem}>
              <Link href="/contact" passHref>
                <a>Contact</a>
              </Link>
            </motion.li>
          </motion.ul>
          <motion.div
            variants={socialMotion}
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
      </motion.nav>
    </>
  );
}
