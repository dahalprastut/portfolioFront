import React from "react";
import Card from "../Cards/Card";

export default function RecentWorks() {
	const cards = [
		{
			id: 0,
			image: "/images/itahari.jpg",
			mirrorImage: "/images/itahari_mirror.jpg",
			title: "Rebranding & Website for Itahari Medical",
			work: "Re-Branding | UI/UX",
			slug: "itahari",
		},
		{
			id: 1,
			image: "/images/vyayam.jpg",
			mirrorImage: "/images/vyayam_mirror.jpg",
			title: "Identity Design for Active Wear Brand based in Nepal",
			work: "Branding",
			slug: "vyayam",
		},
		{
			id: 2,
			image: "/images/YetiYap.png",
			mirrorImage: "/images/YetiYap_mirror.jpg",
			title: "Identity Design for Nepal's First Viral News Site",
			work: "Branding | Website | UI/UX",
			slug: "yetiyap",
		},
	];

	return (
		<>
			{cards.map((el) => (
				<Card image={el.image} mirrorImage={el.mirrorImage} slug={el.slug} title={el.title} work={el.work} />
			))}
		</>
	);
}
