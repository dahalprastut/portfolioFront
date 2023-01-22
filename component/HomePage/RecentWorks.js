import React from "react";
import Card from "../Cards/Card";

export default function RecentWorks() {
	const cards = [
		{
			id: 0,
			mirrorImage: "/images/image&reflection/im.jpg",
			image: "/images/image&reflection/hover-10.jpg",
			title: "Website Design and Development for Itahari Medical",
			work: "HTML | SCSS | Vanilla JS | GSAP",
			name: "Itahari Medical",
			slug: "itahari",
		},
		{
			id: 1,
			mirrorImage: "/images/image&reflection/gs.jpg",
			image: "/images/image&reflection/gs2.jpg",
			title: "Built various features in Global Smart Plus Web App",
			work: "React | Redux | Saga",
			name: "Global Smart Web App",
			slug: "globalSmart",
		},
		{
			id: 2,
			mirrorImage: "/images/image&reflection/yy.jpg",
			image: "/images/image&reflection/hover-09.jpg",
			title: "Website Design and Development for YetiYap",
			work: "HTML | SCSS | Vanilla JS | GSAP",
			name: "YetiYap",
			slug: "yetiyap",
		},
		{
			id: 3,
			mirrorImage: "/images/image&reflection/ds2.jpg",
			image: "/images/image&reflection/hover-11.jpg",
			title: "Optimized and refactored codes for the Driving Sales Web App",
			work: "React | Redux | Saga",
			name: "DrivingSales",
			slug: "drivingSales",
		},
	];

	return (
		<>
			{cards.map((el) => (
				<Card
					image={el.image}
					mirrorImage={el.mirrorImage}
					slug={el.slug}
					name={el.name}
					title={el.title}
					work={el.work}
				/>
			))}
		</>
	);
}
