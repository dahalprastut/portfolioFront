import React, { Component } from "react";
import Slider from "react-slick";

export default class Responsive extends Component {
	render() {
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
		return (
			<div>
				<Slider {...settings}>
					<div>
						<img src="/images/meroGame.jpg" alt="yeti" />
					</div>
					<div>
						<img src="/images/hamroStar.jpg" alt="yeti" />
					</div>
					<div>
						<img src="/images/Parentiv.jpg" alt="yeti" />
					</div>
					<div>
						<img src="/images/NewsGram.jpg" alt="yeti" />
					</div>
					<div>
						<img src="/images/SajiloPay.jpg" alt="yeti" />
					</div>
				</Slider>
			</div>
		);
	}
}
