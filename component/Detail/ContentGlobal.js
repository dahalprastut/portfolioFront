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
								Global Bank decided to build its own online banking app by forming an in-house tech
								team. Swift technology is a subsidiary company of global bank that deals with the IT
								aspect of the bank. The project was started back in 2017 with a vision to create both a
								web app (based on React and Redux), and a mobile app (based on Kotlin for android and
								Swift for IOS) – named “Global Smart Plus”.
							</p>
						</div>
					</div>
				</div>
				<div className="double-image">
					<div className="center">
						<div>
							<div className="outer-image">
								<img src="/images/global_ime/global-11.jpg" alt="yeti" />
							</div>
							{/* <div className="description">Identity Design</div> */}
						</div>
						<div>
							<div className="outer-image">
								<img src="/images/global_ime/global-12.jpg" alt="yeti" />
							</div>

							{/* <div className="description">Identity Design</div> */}
						</div>
					</div>
				</div>
				<div className="images-wrapper">
					<div className="inside-content">
						<div className="center">
							<h2>The Challenge</h2>
							<div>
								<p>
									When I was hired by Swift Technology as a front-end developer, the web app was well
									along the way. I was hired in 2020, and the project was in its final stages. But
									there were still new features being added to the web app – as there were constant
									meetings on how to make the app better and usable. The main challenge was to manage
									the code and to re-factor the pre-written codes; since the app was built by almost
									10 people (on the front-end side alone), the app had a poorly managed codebase.
								</p>
							</div>
						</div>
					</div>
					<div className="double-image">
						<div className="center">
							<div>
								<div className="outer-image">
									<img src="/images/global_ime/global-09.jpg" alt="yeti" />
								</div>
							</div>

							<div>
								<div className="outer-image">
									<img src="/images/global_ime/global-10.jpg" alt="yeti" />
								</div>
							</div>
						</div>
					</div>

					<div className="margin-box">
						<div className="inside-content">
							<div className="center">
								<h2>My Contribution</h2>
								<div>
									<p>
										My first task was to make changes in the web app as many of the codes were
										redundant. Doing so, I made several changes to the design part: I had to
										implement my own framework for the re-usability of the SCSS and was also
										responsible to implement the pixel-perfect design. I also converted many ES5
										Javascript codes to ES6 and changed the class-based approach to a function-based
										one using the latest react hooks.
									</p>
								</div>
							</div>
						</div>
					</div>

					<div className="parallax global-parallax-two"></div>
				</div>
				<h4 className="text-center fnt-2">
					<a href="https://globalonline.gibl.com.np/" className="dsl-r bold" target="_blank">
						View Website
					</a>
				</h4>
			</div>
		</div>
	);
}
