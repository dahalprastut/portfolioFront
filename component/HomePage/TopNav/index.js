import React from "react";
import Link from "next/link";
import Button from "../../@core/Buttons";
import { motion } from "framer-motion";
import { shownNavVariants } from "../../../utils/utils";

export default function TopNav({
  color,
  toggleOpen,
}) {
  return (
    <motion.nav
      variants={shownNavVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <div className="center">
        <h5>
          {" "}
          <Link href="/" passHref>
            <a style={{ color: color }}>
              Samar Adhikari
            </a>
          </Link>
        </h5>
        <div className="navigation__link">
          <div>
            <Link className="btn-round" href="#">
              <Button text={"Hire Me"} />
            </Link>
          </div>

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
      </div>
    </motion.nav>
  );
}
