import React from "react";

export default function Content() {
	return (
		<div className="content_wrapper">
			<div className="first_intro">
				<div className="inside-content">
					<div className="center">
						<h2>Project Introduction</h2>
						<div>
							<p>
								DrivingSales is a web application developed to maximize employee performance with an
								End-to-End Human Capital Management Platform. It is a US-based company that is supported
								by Tech team of Nepal: Seva Development.
							</p>
						</div>
					</div>
				</div>
				<div className="images-wrapper">
					<div className="parallax driving-parallax-two"></div>
					<div className="inside-content">
						<div className="center">
							<h2>The Challenge</h2>
							<div>
								<p>
									The DrivingSales application has almost 50 different pages. The codebase at first
									was pretty messed up: there were a lot of bugs in the application which were making
									the application slow and even the saga functions were poorly managed as most of the
									APIs were used unnecessarily throughout the application.
								</p>
							</div>
						</div>
					</div>
					<div className="double-image">
						<div className="center">
							<div>
								<div className="outer-image">
									<img src="/images/driving_sales/DV_1.jpg" alt="yeti" />
								</div>

								{/* <div className="description">Identity Design</div> */}
							</div>

							<div>
								<div className="outer-image">
									<img src="/images/driving_sales/DV_2.jpg" alt="yeti" />
								</div>
								{/* <div className="description">Identity Design</div> */}
							</div>
						</div>
					</div>
					<div className="margin-box">
						<div className="inside-content">
							<div className="center">
								<h2>My Contribution</h2>
								<div>
									<p>
										Seva has been working with driving sales for the past 5 years. I joined Seva in
										2021 and was assigned to Driving Sales React Team.
										<br />
										<br /> My responsibility included talking with the client on a daily basis to
										get the requirements and also was also responsible for the entire development
										team of Nepal.
										<br /> <br /> I worked alongside some excellent developers and made optimizing
										code my primary concern. I fixed many bugs in the application and also wrote
										some quality code. I fixed many re-rendering problems in the app and made use of
										useMemo and custom hooks in solving the slow rendering of the app.
									</p>
								</div>
							</div>
						</div>
					</div>

					<div className="outer-single_image">
						<div className="center">
							<div className="single-image single-image-driving"></div>
							{/* <div className="description">Identity Design</div> */}
						</div>
					</div>
					<div className="parallax driving-parallax-three"></div>
				</div>
				<h4 className="text-center fnt-2">
					<a href="https://www.drivingsales.com/" className="dsl-r bold" target="_blank">
						View Website
					</a>
				</h4>
			</div>
		</div>
	);
}
