import React from "react";
import styled from "styled-components";

const StrongStyled = styled.strong`
	-webkit-text-stroke: 2px ${(props) => props.primary};
`;

export default function AboutSection({ color }) {
	return (
		<div className="about">
			<div className="about-des">
				<h2>
					Multidisciplinary Web Developer with more than 4 years of experience in Front End Web Development
				</h2>
				<div className="des-right">
					<p>
						Hi! I am Prastut Dahal, a 25-year-old Web Developer from Kathmandu Nepal. I am a Computer
						Science student, currently working with some awesome folks at Seva Development. I specialize in
						Front End Web Development tools like HTML, CSS, React JS, NEXT JS, and more.
					</p>

					<p>
						I see teaching as a passion and have been teaching Web Development to various college students.
						But one caution – if you’re looking for a rigid teacher, that’s not me!
					</p>
					<p>
						You can connect with me on LinkedIn. I am always excited to do business with like-minded people.
						Hope to talk to you soon!
					</p>
				</div>
			</div>
			<div className="skills">
				<div>
					<StrongStyled primary={color}>01</StrongStyled>
					<h3>Design and Mockup</h3>
					<div className="bottom-skills">
						<span>HTML</span>
						<span>CSS</span>
						<span>SCSS</span>
						<span>Responsive Designs</span>
						<span>Bootstrap</span>
					</div>
				</div>
				<div>
					<StrongStyled primary={color}>02</StrongStyled>
					<h3>Front End Technologies</h3>
					<div className="bottom-skills">
						<span>Javascript</span>
						<span>React JS</span>
						<span>Redux</span>
						<span>Redux Saga</span>
						<span>NEXT JS</span>
					</div>
				</div>
				<div>
					<StrongStyled primary={color}>03</StrongStyled>
					<h3>Back End Technologies</h3>
					<div className="bottom-skills">
						<span>Javascript</span>
						<span>Node JS</span>
						<span>Express JS</span>
						<span>MongoDB</span>
					</div>
				</div>
			</div>
		</div>
	);
}
