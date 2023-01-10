import React, { useRef } from "react";
import Slider from "react-slick";
import useMousePosition from "../../utils/useMousePosition";

export function ResponsiveSlider() {
	const hoverdState = useRef(null);
	const { mouseX, mouseY } = useMousePosition();
	var settings = {
		dots: false,
		arrows: false,
		infinite: true,
		autoplay: true,
		speed: 500,
		adaptiveWidth: true,
		adaptiveHeight: true,
		className: "slider variable-width",
		slidesToShow: 4,
		responsive: [
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 2,
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
				},
			},
		],
	};

	const onHover = () => {
		hoverdState.current.classList.add("shown-cursor");
	};
	const onLeave = () => {
		hoverdState.current.classList.remove("shown-cursor");
	};
	return (
		<div>
			<div
				className="cursor-change"
				ref={hoverdState}
				style={{
					left: mouseX,
					top: mouseY,
				}}
			>
				Drag
			</div>
			<Slider {...settings}>
				<div onMouseEnter={() => onHover()} onMouseLeave={onLeave}>
					<img src="/images/meroGame.jpg" alt="yeti" />
				</div>
				<div onMouseEnter={() => onHover()} onMouseLeave={onLeave}>
					<img src="/images/hamroStar.jpg" alt="yeti" />
				</div>
				<div onMouseEnter={() => onHover()} onMouseLeave={onLeave}>
					<img src="/images/Parentiv.jpg" alt="yeti" />
				</div>
				<div onMouseEnter={() => onHover()} onMouseLeave={onLeave}>
					<img src="/images/NewsGram.jpg" alt="yeti" />
				</div>
				<div onMouseEnter={() => onHover()} onMouseLeave={onLeave}>
					<img src="/images/SajiloPay.jpg" alt="yeti" />
				</div>
			</Slider>
		</div>
	);
}

export default ResponsiveSlider;
