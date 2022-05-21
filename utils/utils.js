export const distance = (x1, y1, x2, y2) => {
  var a = x1 - x2;
  var b = y1 - y2;

  return Math.hypot(a, b);
};

export const sectionVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 1.5,
      delay: 2,
      type: "tween",
      ease: "easeIn",
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 1.5,
      type: "tween",
      ease: "easeInOut",
    },
  },
};

export const topBgVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 1,
      type: "tween",
      ease: "easeIn",
    },
  },
};

export const hiddenNavVariants = {
  hidden: { y: "-250vh" },
  visible: {
    y: "0",
    transition: {
      duration: 3,
      type: "tween",
      ease: "easeInOut",
      when: "beforeChildren",
    },
  },
  exit: {
    y: "-200vh",
    transition: {
      duration: 3,
      type: "tween",
      ease: "easeInOut",
    },
  },
};

export const bottomVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.2,
    },
  },
};

export const socialVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
      delay: 0.8,
    },
  },
};

export const linkVariants = {
  hidden: { x: "-60px" },
  visible: {
    x: "0",
    transition: {
      duration: 0.5,
      type: "tween",
    },
  },
};

export const shownNavVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 1.5,
      type: "tween",
      ease: "easeInOut",
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 1.5,
      type: "tween",
      ease: "easeInOut",
    },
  },
};
