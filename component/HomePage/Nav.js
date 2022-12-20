import React from "react";
import { AnimatePresence } from "framer-motion";
import TopNav from "./TopNav";
import HiddenNav from "./HiddenNav";

export default function Nav({ backgroundColor, textColor, showHiddenNav, openHandler, closeHandler }) {
	return (
		<AnimatePresence exitBeforeEnter>
			{!showHiddenNav ? (
				<TopNav key="1" textColor={textColor} toggleOpen={openHandler} />
			) : (
				<HiddenNav key="2" backgroundColor={backgroundColor} textColor={textColor} toggleClose={closeHandler} />
			)}
		</AnimatePresence>
	);
}
