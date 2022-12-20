import React from "react";
import Credits from "./Credits";

export default function Social() {
	return (
		<div className="social">
			<h4>Wanna start a project? Say Hii</h4>
			<h1>samar.adhikari77@gmail.com</h1>
			<div className="social__links">
				<a className="text-up" href="#">
					<small>Behance</small> <small>Behance</small>
				</a>
				<a className="text-up" href="#">
					<small>Dribble</small> <small>Dribble</small>
				</a>
				<a className="text-up" href="#">
					<small>Facebook</small>
					<small>Facebook</small>
				</a>
				<a className="text-up" href="#">
					<small>Instagram</small>
					<small>Instagram</small>
				</a>
			</div>

			<Credits />
		</div>
	);
}
