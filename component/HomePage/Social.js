import React from "react";
import Credits from "./Credits";

export default function Social() {
	return (
		<div className="social">
			<h4>Wanna start a project? Say Hii</h4>
			<h1>hello@samaradhikari.com</h1>
			<div className="social__links">
				<a className="text-up" href="https://www.behance.net/samaradhikaad2">
					<small>Behance</small> <small>Behance</small>
				</a>
				<a className="text-up" href="https://dribbble.com/samar_adh/collections">
					<small>Dribble</small> <small>Dribble</small>
				</a>
				<a className="text-up" href="https://www.facebook.com/samar.adhikari1">
					<small>Facebook</small>
					<small>Facebook</small>
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
