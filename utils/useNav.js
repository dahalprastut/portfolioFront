import { useState, useEffect } from "react";

function useNav() {
  const [showHiddenNav, setShowHiddenNav] =
    useState(false);
  useEffect(() => {
    document.body.style.overflow = "auto";
  }, []);

  const openHandler = () => {
    setShowHiddenNav(true);
    document.body.style.overflow = "hidden";
  };

  const closeHandler = () => {
    setShowHiddenNav(false);
    document.body.style.overflow = "auto";
  };

  return [
    showHiddenNav,
    setShowHiddenNav,
    openHandler,
    closeHandler,
  ];
}

export default useNav;
