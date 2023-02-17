import React from "react";
import Credits from "./Credits";

export default function Social() {
	return (
		<div className="social">
			<h4>Wanna start a project? Say Hii</h4>
			<h1>
				<a href="mailto:hello@samaradhikari.com">hello@samaradhikari.com</a>
			</h1>
			<div className="social__links">
				<a className="text-up" href="https://www.behance.net/samaradhikaad2">
					<small>Behance</small> <small>Behance</small>
				</a>
				<a className="text-up" href="https://dribbble.com/samar_adh/shots">
					<small>Dribble</small> <small>Dribble</small>
				</a>
				<a className="text-up" href="https://www.linkedin.com/in/samar-adhikari-73a826171/">
					<small>LinkedIn</small>
					<small>LinkedIn</small>
				</a>
				<a className="text-up" href="https://www.instagram.com/samar_adh/">
					<small>Instagram</small>
					<small>Instagram</small>
				</a>
			</div>

			{/* <Credits /> */}
		</div>
	);
}
