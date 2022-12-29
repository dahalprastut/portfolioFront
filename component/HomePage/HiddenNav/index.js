import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import styled from "styled-components";
import { motion } from "framer-motion";
import { hiddenNavVariants, bottomVariants, socialVariants, linkVariants } from "../../../utils/utils";

const NavStyled = styled.nav`
	background: ${(props) => (props.backgroundColor ? props.backgroundColor : "")};
	color: ${(props) => (props.textColor ? props.textColor : "")};
`;
const BottomNavStyled = styled.div`
	ul {
		a {
			-webkit-text-stroke: 2px ${(props) => (props.textColor ? props.textColor : "")};

			&:hover {
				-webkit-text-stroke: ${(props) => (props.textColor ? props.textColor : "")};
				color: ${(props) => (props.textColor ? props.textColor : "")};
			}

			&.active {
				-webkit-text-stroke: ${(props) => (props.textColor ? props.textColor : "")};
				color: ${(props) => (props.textColor ? props.textColor : "")};
			}
		}
	}
`;

const OuterNavStyled = styled(motion.div)`
	background: ${(props) => (props.backgroundColor ? props.backgroundColor : "")};
`;

export default function HiddenNav({ backgroundColor, textColor, toggleClose }) {
	const router = useRouter();

	const routes = [
		{ pathname: "/", name: "Home" },
		{
			pathname: "/projects",
			name: "Case Studies",
		},
		{ pathname: "/about", name: "About" },
		// { pathname: "/contact", name: "Contact" },
	];

	const socialLinks = [
		{ name: "Behance", link: "#" },
		{ name: "Dribble", link: "#" },
		{ name: "Facebook", link: "#" },
		{ name: "Instagram", link: "#" },
	];

	const getClassName = (route) => {
		return router.pathname == route ? "active" : "";
	};

	return (
		<OuterNavStyled
			className="outer-nav"
			backgroundColor={backgroundColor}
			textColor={textColor}
			variants={hiddenNavVariants}
			initial="hidden"
			animate="visible"
			exit="exit"
		>
			<NavStyled className="hidden-nav" backgroundColor={backgroundColor} textColor={textColor}>
				<div className="center">
					<div className="hidden-nav__top">
						<h5>
							<Link href="/" passHref>
								<a>Samar Adhikari</a>
							</Link>
						</h5>
						<div className="navigation__link">
							<div onClick={() => toggleClose()} className="hamburger">
								Menu
								<span>X</span>
							</div>
						</div>
					</div>
					<BottomNavStyled
						className="hidden-nav__bottom"
						backgroundColor={backgroundColor}
						textColor={textColor}
					>
						<motion.ul variants={bottomVariants}>
							{routes.map((el) => {
								return (
									<motion.li key={el.pathname} variants={linkVariants}>
										<Link href={el.pathname} passHref>
											<a className={getClassName(el.pathname)}>{el.name}</a>
										</Link>
									</motion.li>
								);
							})}
						</motion.ul>
						<motion.div variants={socialVariants} className="social">
							<div className="links">
								<h3>Socials</h3>
								<div className="social-sites">
									{socialLinks.map((el) => {
										return (
											<a className="text-up" href={el.link} key={el.name}>
												<small>{el.name}</small>
												<small>{el.name}</small>
											</a>
										);
									})}
								</div>
							</div>
							<div className="mail">
								<h3>Say Hi</h3>
								<span>samar.adhikari@gmail.com</span>
							</div>
						</motion.div>
					</BottomNavStyled>
				</div>
			</NavStyled>
			<div className="animated-div" style={{ background: textColor }}></div>
		</OuterNavStyled>
	);
}
