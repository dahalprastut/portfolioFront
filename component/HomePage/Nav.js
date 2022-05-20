import React, { useState } from "react";
import { AnimatePresence } from "framer-motion";
import TopNav from "./TopNav";
import HiddenNav from "./HiddenNav";

export default function Nav() {
  const primaryColor = "#000";
  const secondaryColor = "#fff";

  const [showHiddenNav, setShowHiddenNav] =
    useState(false);

  const openHandler = () => {
    setShowHiddenNav(true);
  };

  const closeHandler = () => {
    setShowHiddenNav(false);
  };
  return (
    <AnimatePresence exitBeforeEnter>
      {!showHiddenNav ? (
        <TopNav
          key="1"
          color={secondaryColor}
          toggleOpen={openHandler}
        />
      ) : (
        <HiddenNav
          key="2"
          toggleClose={closeHandler}
        />
      )}
    </AnimatePresence>
  );
}
