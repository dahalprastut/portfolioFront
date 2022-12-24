import React from "react";

export default function Form() {
	return (
		<form class="contact-form">
			<div>
				<label>My name is</label>
				<input type="text" />
			</div>
			<div>
				<label>My email is</label>
				<input type="text" />
			</div>
			<div>
				<label>I want to</label>
				<input type="text" />
			</div>
			<div>
				<button>SEND REQUEST</button>
			</div>
		</form>
	);
}
