import React, { useRef } from "react";
import { useRouter } from "next/router";
import useMousePosition from "../../../utils/useMousePosition";

export default function Pagination({ index = 2, maxProjects = 4 }) {
	const router = useRouter();
	const hoverdState = useRef(null);

	const { mouseX, mouseY } = useMousePosition();
	const onHover = (index, pos) => {
		hoverdState.current.style.display = "block";
		if (index == 3) {
			// hoverdState.current.classList.add("vyayam");

			if (pos == "prev") {
				hoverdState.current.classList.add("itahari");
			} else {
				hoverdState.current.classList.add("yetiyap");
			}
		}
		if (index == 1) {
			hoverdState.current.classList.add("itahari");
		}

		if (index == 2) {
			if (pos == "prev") {
				hoverdState.current.classList.add("hamroStar");
			} else {
				hoverdState.current.classList.add("vyayam");
			}
		}

		if (index == 4) {
			hoverdState.current.classList.add("vyayam");
		}
	};
	const onLeave = () => {
		hoverdState.current.style.display = "none";
		hoverdState.current.classList.remove("yetiyap");
		hoverdState.current.classList.remove("itahari");
		hoverdState.current.classList.remove("vyayam");
		hoverdState.current.classList.remove("hamroStar");
	};

	const clickHandler = (index, pos) => {
		// Go to next page / Prev page

		if (index == 1) {
			router.push("/projects/itahari", undefined, { scroll: false });
		}
		if (index == 2) {
			if (pos == "prev") {
				router.push("/projects/hamroStar", undefined, { scroll: false });
			} else {
				router.push("/projects/vyayam", undefined, { scroll: false });
			}
		}
		if (index == 3) {
			if (pos == "prev") {
				router.push("/projects/itahari", undefined, { scroll: false });
			} else {
				router.push("/projects/yetiyap", undefined, { scroll: false });
			}
		}

		if (index == 4) {
			router.push("/projects/vyayam", undefined, { scroll: false });
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
