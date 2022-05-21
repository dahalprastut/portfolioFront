import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
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
  const router = useRouter();

  const routes = [
    { pathname: "/", name: "Home" },
    {
      pathname: "/projects",
      name: "Case Studies",
    },
    { pathname: "/about", name: "About" },
    { pathname: "/contact", name: "Contact" },
  ];

  const socialLinks = [
    { name: "Behance", link: "#" },
    { name: "Dribble", link: "#" },
    { name: "Facebook", link: "#" },
    { name: "Instagram", link: "#" },
  ];

  const getClassName = route => {
    return router.pathname == route
      ? "active"
      : "";
  };

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
              {routes.map(el => {
                return (
                  <motion.li
                    variants={linkVariants}
                  >
                    <Link
                      href={el.pathname}
                      passHref
                    >
                      <a
                        className={getClassName(
                          el.pathname
                        )}
                      >
                        {el.name}
                      </a>
                    </Link>
                  </motion.li>
                );
              })}
            </motion.ul>
            <motion.div
              variants={socialVariants}
              className="social"
            >
              <div className="links">
                <h3>Socials</h3>
                {socialLinks.map(el => {
                  return (
                    <a href={el.link}>
                      {el.name}
                    </a>
                  );
                })}
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
