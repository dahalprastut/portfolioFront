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
								Itahari Medical is Itahari’s leading multi-specialty preventative clinic serving since
								1995 A.D. Their main mission is to provide patient-centered healthcare with excellence
								in quality, service, and access and also to inspire hope and contribute to health and
								well-being by providing the best care to every patient through best clinical practice.
							</p>
						</div>
					</div>
				</div>
				<div className="images-wrapper">
					<div className="parallax itahari-parallax-two"></div>
					<div className="inside-content">
						<div className="center">
							<h2>The challenge</h2>
							<div>
								<p>
									After being in operation for over 2 decades, Itahari Medical has evolved from a
									small clinic to a leading hospital in Itahari. With the market competition growing
									and new hospitals commencing their operations, Itahari Medical felt stuck in the
									past and unable to connect to the younger audience. Itahari Medical wanted to give a
									fresh re-branding and visual structure and make it appealing to the younger target
									generation.
								</p>
							</div>
						</div>
					</div>
					<div className="outer-single_image">
						<div className="center">
							<div className="single-image single-image-itahari"></div>
							{/* <div className="description">Identity Design</div> */}
						</div>
					</div>

					<div className="double-image">
						<div className="center">
							<div>
								<div className="outer-image">
									<img src="/images/IM_contents/IM-04.jpg" alt="yeti" />
								</div>
								<div className="description">Mobile View</div>
							</div>
							<div>
								<div className="outer-image">
									<img src="/images/IM_contents/IM-06.jpg" alt="yeti" />
								</div>

								<div className="description">Web View</div>
							</div>
						</div>
					</div>

					<div className="margin-box">
						<div className="inside-content">
							<div className="center">
								<h2>Solution</h2>
								<div>
									<p>
										Our Team came up with a unique solution to re-designing the entire website along
										with its identity design. We worked vigorously for months making various mockups
										on Adobe XD and constantly communicating with the client for a proper
										understanding of the requirement.
										<br />
										<br /> Finally, the client was happy with the design and we consequently started
										the development process. I was part of the front-end team and had to complete
										the entire website design. It took me 10 days to complete the mockup
										development. I developed the website from scratch using HTML, SCSS, and Vanilla
										Javascript. I also used various animation libraries like GSAP and smooth-scroll
										for smooth animations.
									</p>
								</div>
							</div>
						</div>
					</div>

					<div className="double-image">
						<div className="center">
							<div>
								<div className="outer-image">
									<img src="/images/IM_contents/IM-01.jpg" alt="yeti" />
								</div>
							</div>

							<div>
								<div className="outer-image">
									<img src="/images/IM_contents/IM-01-01.jpg" alt="yeti" />
								</div>
							</div>
						</div>
					</div>
					<div className="double-image">
						<div className="center">
							<div>
								<div className="outer-image">
									<img src="/images/IM_contents/IM-02.jpg" alt="yeti" />
								</div>
								{/* <div className="description">Identity Design</div> */}
							</div>
							<div>
								<div className="outer-image">
									<img src="/images/IM_contents/IM-03.jpg" alt="yeti" />
								</div>

								{/* <div className="description">Identity Design</div> */}
							</div>
						</div>
					</div>
					<div className="outer-single_image">
						<div className="center">
							<div className="single-image single-image-itahari-two"></div>
							{/* <div className="description">Identity Design</div> */}
						</div>
					</div>

					<div className="parallax itahari-parallax-three"></div>
				</div>
				<h4 className="text-center fnt-2">
					<a href="https://itaharimedical.com/" className="dsl-r bold" target="_blank">
						View Website
					</a>
				</h4>
			</div>
		</div>
	);
}
