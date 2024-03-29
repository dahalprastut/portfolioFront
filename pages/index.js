import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import Marquee from "../component/@core/Marquee";
import Head from "../component//Head";
import Nav from "../component/HomePage/Nav";
import Slider from "../component/HomePage/Slider";
import RecentWorks from "../component/HomePage/RecentWorks";
import AboutSection from "../component/HomePage/AboutSection";
import Social from "../component/HomePage/Social";
import Gallary from "../component/HomePage/Gallary";
import useNav from "../utils/useNav";

import { sectionVariants, onChangeVariants, topBgVariants } from "../utils/utils";

export default function Home({ primaryColor, secondaryColor }) {
	const [showHiddenNav, setShowHiddenNav, openHandler, closeHandler] = useNav();

	return (
		<motion.div
			className="home"
			exit={{
				opacity: 0,
				transition: { duration: 0.2, when: "afterChildren" },
			}}
		>
			<motion.div
				className="initialRendering"
				variants={onChangeVariants}
				initial="hidden"
				animate="visible"
				// exit="exit"
			></motion.div>
			<Head />
			<motion.div variants={topBgVariants} initial="hidden" animate="visible" className="top bg-primary">
				<Nav
					backgroundColor={primaryColor}
					textColor={secondaryColor}
					showHiddenNav={showHiddenNav}
					setShowHiddenNav={setShowHiddenNav}
					openHandler={openHandler}
					closeHandler={closeHandler}
				/>
			</motion.div>
			<AnimatePresence exitBeforeEnter>
				{!showHiddenNav && (
					<motion.div
						className="outer-title"
						variants={sectionVariants}
						initial="hidden"
						animate="visible"
						exit="exit"
					>
						<div className="title">
							<div>
								<p>
									Hello! I am
									<strong> Prastut Dahal</strong> & I specialize in
								</p>
								<Slider />
							</div>
						</div>
					</motion.div>
				)}
			</AnimatePresence>
			<Marquee color={primaryColor} title="RECENT WORKS" />
			<section>
				<div className="center">
					<RecentWorks />
				</div>
			</section>
			<div
				style={{
					background: `${primaryColor}`,
					color: `${secondaryColor}`,
				}}
				className="intro"
			>
				<Marquee color={secondaryColor} title="ABOUT ME" />
				<div className="center">
					<AboutSection color="#fff" />
				</div>
			</div>
			<Marquee color={primaryColor} title="DON'T MISS OUT" />

			<div className="gallary">
				<Gallary />
			</div>
			<footer>
				<Marquee color={secondaryColor} title="SAY HI!!" />
				<div className="center">
					<Social />
				</div>
			</footer>
		</motion.div>
	);
}
