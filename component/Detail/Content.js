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
								YetiYap is an online media company whose primary focus is to provide youth with viral
								news and entertainment content. The main goal is to provide young audiences with
								infotainment and entertainment content.
							</p>
						</div>
					</div>
				</div>
				<div className="images-wrapper">
					<div className="parallax yeti-parallax-two"></div>
					<div className="inside-content">
						<div className="center">
							<h2>The Challenge</h2>
							<div>
								<p>
									Being a pioneer, Yetiyap has to conceive a strong impact on the youth by being
									distinctive from mainstream news websites. The identity system has to be fresh and
									unique to create a lasting and memorable impression. The website needed to be
									eye-catching with easy-to-read content.
								</p>
							</div>
						</div>
					</div>
					<div className="double-image">
						<div className="center">
							<div>
								<div className="outer-image">
									<img src="/images/yetiyap/yeti-13.jpg" alt="yeti" />
								</div>

								{/* <div className="description">Identity Design</div> */}
							</div>

							<div>
								<div className="outer-image">
									<img src="/images/yetiyap/yeti-14.jpg" alt="yeti" />
								</div>
								{/* <div className="description">Identity Design</div> */}
							</div>
						</div>
					</div>
					<div className="double-image">
						<div className="center">
							<div>
								<div className="outer-image">
									<img src="/images/yetiyap/yeti-15.jpg" alt="yeti" />
								</div>

								<div className="description">Mobile View</div>
							</div>

							<div>
								<div className="outer-image">
									<img src="/images/yetiyap/yeti-16.jpg" alt="yeti" />
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
										Our team was excellent when it came to client handling. We made sure we
										understood the requirements and started our work on website design from Adobe
										XD. We constantly communicated with the client and closely listened to the
										feedback.
										<br />
										<br /> After a couple of hit-and-trails, the client was satisfied with the
										design and I took charge of the development process. Since the client wanted
										subtle animations on the website, I stuck with GSAP for the animations. I also
										wrote custom CSS code since it was one of those projects which needed a lot of
										changes along the way – and I made sure it was easy to make such changes. I also
										focused a lot on mobile design in this project since most of the client's user
										base was mobile users. Therefore, I had to go with a “mobile first” approach in
										designing the website.
									</p>
								</div>
							</div>
						</div>
					</div>
					<div className="outer-single_image">
						<div className="center">
							<div className="single-image"></div>
							{/* <div className="description">Identity Design</div> */}
						</div>
					</div>
				</div>
				<h4 className="text-center fnt-2">
					<a href="https://yetiyap.com/" className="dsl-r bold" target="_blank">
						View Website
					</a>
				</h4>
			</div>
		</div>
	);
}
