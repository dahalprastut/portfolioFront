import React from "react";
import { AnimatePresence } from "framer-motion";
import TopNav from "./TopNav";
import HiddenNav from "./HiddenNav";

export default function Nav({
  color,
  showHiddenNav,
  openHandler,
  closeHandler,
}) {
  return (
    <AnimatePresence exitBeforeEnter>
      {!showHiddenNav ? (
        <TopNav
          key="1"
          color={color}
          toggleOpen={openHandler}
        />
      ) : (
        <HiddenNav
          key="2"
          color={color}
          toggleClose={closeHandler}
        />
      )}
    </AnimatePresence>
  );
}
