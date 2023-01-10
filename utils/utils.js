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
			duration: 0.1,
			type: "tween",
			ease: "easeInOut",
			delay: 1,
		},
	},
	exit: {
		opacity: 0,
		transition: {
			duration: 0.1,
			delay: 0.2,
			type: "tween",
			ease: "easeInOut",
		},
	},
};

export const onChangeVariants = {
	hidden: { top: "-150vh" },
	visible: {
		top: ["-150vh", "-100vh", "100vh", "200vh"],
		height: ["100vh", "100vh", "100vh", "0vh"],
		transition: {
			duration: 1.4,
			type: "tween",
			ease: "easeOut",
			// delay: 2,
		},
	},
	// exit: {
	// 	top: ["-150vh", "-100vh", "100vh", "200vh"],
	// 	height: ["100vh", "100vh", "100vh", "100vh", "0vh"],
	// 	transition: {
	// 		duration: 1.4,
	// 		type: "tween",
	// 		ease: "easeOut",
	// 		// delay: 2,
	// 	},
	// },
};

export const topBgVariants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			duration: 0.1,
			type: "tween",
			ease: "easeInOut",
			delay: 0.7,
		},
	},
};

export const hiddenNavVariants = {
	hidden: { y: "-240vh" },
	visible: {
		y: "0",
		transition: {
			duration: 0.7,
			type: "tween",
			ease: "easeOut",
			when: "beforeChildren",
		},
	},
	exit: {
		y: "-240vh",
		transition: {
			duration: 0.7,
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
			duration: 0.2,
			staggerChildren: 0.1,
		},
	},
};

export const socialVariants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			duration: 0.2,
			delay: 0.3,
		},
	},
};

export const linkVariants = {
	hidden: { x: "-60px" },
	visible: {
		x: "0",
		transition: {
			duration: 0.4,
			type: "tween",
		},
	},
};

export const shownNavVariants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			duration: 0.3,
			type: "tween",
			ease: "easeInOut",
		},
	},
	exit: {
		opacity: 0,
		transition: {
			duration: 0.3,
			type: "tween",
			ease: "easeInOut",
		},
	},
};

export const animateCardVariants = {
	hidden: {
		y: 400,
	},
	visible: {
		y: 0,
		transition: {
			duration: 0.8,
			type: "tween",
			ease: "easeInOut",
		},
	},
};
