import React from "react";
import Card from "../Cards/Card";

export default function RecentWorks() {
	const cards = [
		{
			id: 0,
			image: "/images/hamrostar/hamrostar_01.jpg",
			mirrorImage: "/images/hamrostar/hamrostar_reflection.jpg",
			title: "Social Platform for Connecting Users & Celebrities",
			work: "Branding | UI/UX",
			name: "Hamro Star",
			slug: "hamroStar",
		},
		{
			id: 1,
			image: "/images/itahari.jpg",
			mirrorImage: "/images/itahari_mirror.jpg",
			title: "Rebranding & Website for Itahari Medical",
			work: "Re-Branding | UI/UX",
			name: "Itahari Medical",
			slug: "itahari",
		},
		{
			id: 2,
			image: "/images/vyayam.jpg",
			mirrorImage: "/images/vyayam_mirror.jpg",
			title: "Identity Design for Active Wear Brand based in Nepal",
			work: "Branding",
			name: "Vyayam",
			slug: "vyayam",
		},
		{
			id: 3,
			image: "/images/YetiYap.png",
			mirrorImage: "/images/YetiYap_mirror.jpg",
			title: "Identity Design for Nepal's First Viral News Site",
			work: "Branding | Website | UI/UX",
			name: "YetiYap",
			slug: "yetiyap",
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
