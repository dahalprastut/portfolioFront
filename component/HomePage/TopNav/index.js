import React from "react";
import Link from "next/link";
import Button from "../../@core/Buttons";
import { motion } from "framer-motion";
import { shownNavVariants } from "../../../utils/utils";

export default function TopNav({ textColor, toggleOpen }) {
	return (
		<motion.nav variants={shownNavVariants} initial="hidden" animate="visible" exit="exit">
			<div className="center">
				<h5>
					{" "}
					<Link href="/" scroll={false} passHref>
						<a style={{ color: textColor }}>Samar Adhikari</a>
					</Link>
				</h5>
				<div className="navigation__link">
					<div className="hire-btn">
						{/* <Link className="btn-round" href="#"> */}
						<Button className="btn-round" href="mailto:hello@samaradhikari.com" text={"Hire Me"} />
						{/* </Link> */}
					</div>

					<div onClick={() => toggleOpen()} className="hamburger" style={{ color: textColor }}>
						Menu
						<span>
							<small
								style={{
									borderColor: textColor,
								}}
							></small>
							<small
								style={{
									borderColor: textColor,
								}}
								className="middle-small"
							></small>
							<small
								style={{
									borderColor: textColor,
								}}
							></small>
						</span>
					</div>
				</div>
			</div>
		</motion.nav>
	);
}
