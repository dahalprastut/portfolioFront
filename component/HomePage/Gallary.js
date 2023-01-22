import React, { useRef } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import useMousePosition from "../../utils/useMousePosition";

export function ResponsiveSlider() {
	const hoverdState = useRef(null);
	const { mouseX, mouseY } = useMousePosition();
	var settings = {
		perPage: 4,
		arrows: false,
		// autoWidth: true,
		type: "loop",
		pagination: false,
		drag: "free",
		gap: "3em",
		easing: "ease",
		breakpoints: {
			1024: {
				perPage: 3,
			},
			767: {
				perPage: 2,
			},
			640: {
				perPage: 1,
			},
		},
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
			<Splide options={settings} onMouseEnter={() => onHover()} onMouseLeave={onLeave}>
				<SplideSlide>
					<div>
						<img src="/images/gallery/gs.jpg" alt="yeti" />
					</div>
				</SplideSlide>
				<SplideSlide>
					<div>
						<img src="/images/gallery/gal.jpg" alt="yeti" />
					</div>
				</SplideSlide>
				<SplideSlide>
					<div>
						<img src="/images/gallery/im.jpg" alt="yeti" />
					</div>
				</SplideSlide>
				<SplideSlide>
					<div>
						<img src="/images/gallery/sr.jpg" alt="yeti" />
					</div>
				</SplideSlide>
				<SplideSlide>
					<div>
						<img src="/images/gallery/yy.jpg" alt="yeti" />
					</div>
				</SplideSlide>
				<SplideSlide>
					<div>
						<img src="/images/gallery/yy2.jpg" alt="yeti" />
					</div>
				</SplideSlide>
			</Splide>
		</div>
	);
}

export default ResponsiveSlider;
