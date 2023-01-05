import React, { useRef } from "react";
import { useRouter } from "next/router";
import useMousePosition from "../../../utils/useMousePosition";

export default function Pagination({ index = 2, maxProjects = 3 }) {
	const router = useRouter();
	const hoverdState = useRef(null);

	const { mouseX, mouseY } = useMousePosition();
	const onHover = (index, pos) => {
		hoverdState.current.style.display = "block";
		if (index == 3) {
			hoverdState.current.classList.add("vyayam");
		}
		if (index == 1) {
			hoverdState.current.classList.add("vyayam");
		}

		if (index == 2) {
			if (pos == "prev") {
				hoverdState.current.classList.add("itahari");
			} else {
				hoverdState.current.classList.add("yetiyap");
			}
		}
	};
	const onLeave = () => {
		hoverdState.current.style.display = "none";
		hoverdState.current.classList.remove("yetiyap");
		hoverdState.current.classList.remove("itahari");
		hoverdState.current.classList.remove("vyayam");
	};

	const clickHandler = (index, pos) => {
		// Go to next page / Prev page
		if (index == 3) {
			router.push("/projects/vyayam");
		}
		if (index == 1) {
			router.push("/projects/vyayam");
		}
		if (index == 2) {
			if (pos == "prev") {
				router.push("/projects/itahari");
			} else {
				router.push("/projects/yetiyap");
			}
		}
	};
	return (
		<>
			<div
				className="hovered-state"
				ref={hoverdState}
				style={{
					left: mouseX - 100,
					top: mouseY - 100,
				}}
			></div>
			{index === 1 ? (
				<div className="d-flex jc-end pagination">
					<button
						onMouseEnter={() => onHover(index, "next")}
						onMouseLeave={onLeave}
						onClick={() => clickHandler(index, "next")}
						className="text-right"
					>
						NEXT <br /> PROJECT
					</button>
				</div>
			) : index === maxProjects ? (
				<div className="d-flex pagination">
					<button
						onMouseEnter={() => onHover(index, "prev")}
						onMouseLeave={onLeave}
						onClick={() => clickHandler(index, "prev")}
						className="text-left"
					>
						PREVIOUS <br /> PROJECT
					</button>
				</div>
			) : (
				<div className="d-flex jc-between pagination">
					<button
						onMouseEnter={() => onHover(index, "prev")}
						onMouseLeave={onLeave}
						onClick={() => clickHandler(index, "prev")}
						className="text-left"
					>
						PREVIOUS <br /> PROJECT
					</button>
					<button
						onMouseEnter={() => onHover(index, "next")}
						onMouseLeave={onLeave}
						onClick={() => clickHandler(index, "next")}
						className="text-right"
					>
						NEXT <br /> PROJECT
					</button>
				</div>
			)}
		</>
	);
}
