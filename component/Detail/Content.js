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
								news and entertainment contents. The main goal is to provide young audiences with
								infotainment and entertainment content.
							</p>
						</div>
					</div>
				</div>
				<div className="images-wrapper">
					<div className="parallax yeti-parallax-two"></div>
					<div className="inside-content">
						<div className="center">
							<h2>The challenge</h2>
							<div>
								<p>
									Being a pioneer, Yetiyap has to conceive a strong impact on the youth by being
									distinctive from the mainstream news websites. The identity system has to be fresh
									and unique to create a lasting and Imemorable impression.
								</p>
							</div>
						</div>
					</div>
					<div className="double-image">
						<div className="center">
							<div>
								<div className="outer-image">
									<img src="/images/yeti2.png" alt="yeti" />
								</div>

								{/* <div className="description">Identity Design</div> */}
							</div>

							<div>
								<div className="outer-image">
									<img src="/images/staion@2x.png" alt="yeti" />
								</div>
								{/* <div className="description">Identity Design</div> */}
							</div>
						</div>
					</div>
					<div className="margin-box">
						<div className="inside-content">
							<div className="center">
								<h2>Solution</h2>
								<div>
									<p>
										On clarification of the requirements, I went with a Talking Yeti mascot as the
										identity of Yetiyap. The Yeti references an old Nepali legend snow monster in
										the Himalayas (Abominable Snowman) and Yap references talking.
										<br />
										<br /> I designed a fun Talking Yeti mascot with bright and bold colors for the
										brand.
									</p>
								</div>
							</div>
						</div>
					</div>
					<div className="double-image">
						<div className="center">
							<div>
								<div className="outer-image">
									<img src="/images/YetiYap_mirror.jpg" alt="yeti" />
								</div>

								{/* <div className="description">Identity Design</div> */}
							</div>

							<div>
								<div className="outer-image">
									<img src="/images/YetiYap.png" alt="yeti" />
								</div>
								{/* <div className="description">Identity Design</div> */}
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
			</div>
		</div>
	);
}
