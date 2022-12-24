import React, { useEffect, useRef } from "react";
import styled from "styled-components";

const StrongStyled = styled.strong`
	display: flex;
	color: transparent;
	align-items: center;
	-webkit-text-stroke: 2px ${(props) => props.primary};
	font-size: inherit;
	margin-right: 10rem;
	margin-left: 10rem;
`;

export default function Marquee({ title, color }) {
	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	function handleScroll(event) {
		const positionTop = (firstMarquee?.current?.getBoundingClientRect().bottom - 350) / 25;
		const positionBottom = -((secondMarquee?.current?.getBoundingClientRect().bottom - 350) / 25);
		// const positionTop =
		//   (firstMarquee.current.getBoundingClientRect()
		//     .bottom -
		//     event.path[1].scrollY) /
		//   25;
		// const positionBottom =
		//   (event.path[1].scrollY -
		//     secondMarquee.current.getBoundingClientRect()
		//       .bottom -
		//     500) /
		//   25;

		firstMarquee.current.style.transform = `translateX(${positionTop}%)`;
		secondMarquee.current.style.transform = `translateX(${positionBottom}%)`;

		// const firstPosition =
	}

	const firstMarquee = useRef(null);
	const secondMarquee = useRef(null);

	return (
		<div className="marquee">
			<h1 style={{ color }} ref={firstMarquee}>
				{title}{" "}
				<StrongStyled primary={color} style={{ textStroke: `2px ${color}` }}>
					{title}
				</StrongStyled>{" "}
				{title}{" "}
				<StrongStyled primary={color} style={{ textStroke: `2px ${color}` }}>
					{title}
				</StrongStyled>{" "}
				{title}
			</h1>
			<h1 style={{ color }} ref={secondMarquee}>
				{title}{" "}
				<StrongStyled primary={color} style={{ textStroke: `2px ${color}` }}>
					{title}
				</StrongStyled>{" "}
				{title}{" "}
				<StrongStyled primary={color} style={{ textStroke: `2px ${color}` }}>
					{title}
				</StrongStyled>{" "}
				{title}
			</h1>
			{/* <div>
        <h1>RECENT WORKS</h1>
        <h1>RECENT WORKS</h1>
      </div> */}
		</div>
	);
}
