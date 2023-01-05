import React from "react";
import styled from "styled-components";

const StrongStyled = styled.strong`
	-webkit-text-stroke: 2px ${(props) => props.primary};
`;

export default function AboutSection({ color }) {
	return (
		<div className="about">
			<div className="about-des">
				<h2>Multidicpilinary Designer with more than 5 years of experience in Digital Design</h2>
				<div className="des-right">
					<p>
						My name is Samar Adhikari and I am a highly experienced designer with a whopping five whole
						years under my belt. I have a passion for combining design and solving real world problems.
					</p>

					<p>
						I specialize in branding, user interface, and user experience design because, honestly, what's
						the point of being a designer if you can't put "Branding" on your resume? And User Interface and
						User Experience? Those are just buzzwords that I throw around to sound impressive.
					</p>
					<p>
						But in all seriousness, I take my work very seriously and strive to create designs that not only
						look good, but also effectively solve the problems at hand. So if you're in need of a designer
						who has a knack for using buzz words like human-based design, emotion-driven experiences, and a
						questionable sense of humor, look no further! I'm your guy.
					</p>
				</div>
			</div>
			<div className="skills">
				<div>
					<StrongStyled primary={color}>01</StrongStyled>
					<h3>User Interface Design</h3>
					<div className="bottom-skills">
						<span>Visual Design</span>
						<span>Layout Design</span>
						<span>Design Systems</span>
						<span>Prototyping</span>
						<span>Interaction Design</span>
						<span>Motion Design</span>
					</div>
				</div>
				<div>
					<StrongStyled primary={color}>02</StrongStyled>
					<h3>User Experience Design</h3>
					<div className="bottom-skills">
						<span>User Research</span>
						<span>Usability Testing</span>
						<span>Wireframing</span>
						<span>Prototyping</span>
						<span>Information Architecture</span>
					</div>
				</div>
				<div>
					<StrongStyled primary={color}>03</StrongStyled>
					<h3>Identity Designer</h3>
					<div className="bottom-skills">
						<span>Branding</span>
						<span>Visual Identity Design</span>
						<span>Logo Design</span>
						<span>Graphic Design</span>
						<span>Packaging Design</span>
						<span>Print Design</span>
					</div>
				</div>
			</div>
		</div>
	);
}
