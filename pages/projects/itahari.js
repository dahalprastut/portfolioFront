// rename file name to [id].js

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import Marquee from "../../component/@core/Marquee";
import Pagination from "../../component/@core/Pagination";
import Head from "../../component//Head";
import Nav from "../../component/HomePage/Nav";
import Social from "../../component/HomePage/Social";
import Content from "../../component/Detail/ContentItahari";
import { sectionVariants, topBgVariants } from "../../utils/utils";
import useNav from "../../utils/useNav";

export default function ProjectDetail({ primaryColor, secondaryColor }) {
	const [showHiddenNav, setShowHiddenNav, openHandler, closeHandler] = useNav();

	return (
		<motion.div
			exit={{
				opacity: 0,
				transition: { duration: 1 },
			}}
		>
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
					<motion.article variants={sectionVariants} initial="hidden" animate="visible" exit="exit">
						<div className="center">
							<div className="title-intro">
								<h3>Ithari Medical</h3>
								<h1>Re-brading and Website Design for Itahari Medical</h1>
								<div className="about-client">
									<div>
										<span>Client</span>
										<h4>YetiYap</h4>
									</div>
									<div>
										<span>Responsibility</span>
										<h4>Re-Branding | UI/UX</h4>
									</div>
								</div>
							</div>
						</div>
					</motion.article>
				)}
			</AnimatePresence>
			<div className="parallax parallax-itahari"></div>
			<Content />

			<div className="button-wrapper">
				<div className="center">
					<Pagination index={1} />
				</div>
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
