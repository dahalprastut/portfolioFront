import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import Marquee from "../../component/@core/Marquee";
import Head from "../../component//Head";
import Nav from "../../component/HomePage/Nav";
import RecentWorks from "../../component/HomePage/RecentWorks";
import Social from "../../component/HomePage/Social";
import { sectionVariants, onChangeVariants, topBgVariants } from "../../utils/utils";
import useNav from "../../utils/useNav";

export default function Projects({ primaryColor, secondaryColor }) {
	const [showHiddenNav, setShowHiddenNav, openHandler, closeHandler] = useNav();
	return (
		<motion.div
			exit={{
				opacity: 0,
				transition: { duration: 1, when: "afterChildren" },
			}}
		>
			<motion.div
				className="initialRendering"
				variants={onChangeVariants}
				initial="hidden"
				animate="visible"
			></motion.div>
			<Head />
			<motion.div variants={topBgVariants} initial="hidden" animate="visible">
				<Nav
					backgroundColor={secondaryColor}
					textColor={primaryColor}
					showHiddenNav={showHiddenNav}
					setShowHiddenNav={setShowHiddenNav}
					openHandler={openHandler}
					closeHandler={closeHandler}
				/>
			</motion.div>
			<AnimatePresence exitBeforeEnter>
				{!showHiddenNav && (
					<motion.section
						className="project-section"
						variants={sectionVariants}
						initial="hidden"
						animate="visible"
						exit="exit"
					>
						<div className="center">
							<RecentWorks />
						</div>
					</motion.section>
				)}
			</AnimatePresence>
			<footer>
				<Marquee color={secondaryColor} title="SAY HI!!" />
				<div className="center">
					<Social />
				</div>
			</footer>
		</motion.div>
	);
}
