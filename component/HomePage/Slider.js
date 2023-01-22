import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import useMousePosition from "../../utils/useMousePosition";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function VerticalMode() {
	const hoverdState = useRef(null);
	const settings = {
		dots: false,
		autoplay: true,
		autoplaySpeed: 4000,
		adaptiveHeight: true,
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		vertical: true,
		verticalSwiping: false,
		arrows: false,
		pauseOnHover: false,
	};
	const { mouseX, mouseY } = useMousePosition();
	const onHover = (index) => {
		hoverdState.current.style.display = "block";
		if (index == 0) {
			hoverdState.current.classList.remove("image-two");
			hoverdState.current.classList.remove("image-three");
			hoverdState.current.classList.add("image-one");
		} else if (index == 1) {
			hoverdState.current.classList.remove("image-one");
			hoverdState.current.classList.remove("image-three");
			hoverdState.current.classList.add("image-two");
		} else {
			hoverdState.current.classList.remove("image-one");
			hoverdState.current.classList.remove("image-two");
			hoverdState.current.classList.add("image-three");
		}
	};
	const onLeave = () => {
		hoverdState.current.style.display = "none";
	};

	const [innerWidth, setInnerWidth] = useState(0);
	useEffect(() => {
		setInnerWidth(window.innerWidth);
	}, []);

	return (
		<div>
			<div
				className="hovered-state"
				ref={hoverdState}
				style={{
					left: mouseX - 100,
					top: mouseY - 100,
				}}
			></div>
			<Slider {...settings}>
				<div onMouseEnter={() => onHover("0")} onMouseLeave={onLeave}>
					<h1>React JS</h1>
				</div>
				<div onMouseEnter={() => onHover("1")} onMouseLeave={onLeave}>
					<h1>Vanilla JS</h1>
				</div>
				<div onMouseEnter={() => onHover("2")} onMouseLeave={onLeave}>
					<h1>Node JS</h1>
				</div>
				<div onMouseEnter={() => onHover("2")} onMouseLeave={onLeave}>
					<h1>Next JS</h1>
				</div>
			</Slider>
		</div>
	);
}
