import React, {
  useState,
  useEffect,
  useRef,
} from "react";
import Link from "next/link";
import {
  motion,
  useAnimation,
} from "framer-motion";
import HoverEffect from "hover-effect";
import { useInView } from "react-intersection-observer";
import { animateCardVariants } from "./../../utils/utils";
import useMousePosition from "../../utils/useMousePosition";

export default function Card() {
  const container = useRef();
  const controls = useAnimation();
  const [ref, inView] = useInView();
  const { mouseX, mouseY } = useMousePosition();

  const [innerWidth, setInnerWidth] = useState(0);
  useEffect(() => {
    setInnerWidth(window.innerWidth);
  }, []);
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  useEffect(() => {
    new HoverEffect({
      parent: container.current,
      intensity: 0.3,
      image1: "/images/YetiYap.png",
      image2: "https://picsum.photos/420/620",
      displacementImage:
        "https://raw.githubusercontent.com/robin-dela/hover-effect/master/images/fluid.jpg",
    });
  }, [container]);

  return (
    <motion.div
      className="card"
      ref={ref}
      variants={animateCardVariants}
      initial="hidden"
      animate={controls}
    >
      <Link href="/projects/1">
        <a>
          <div
            className="outer-image"
            ref={container}
            id="imgContainer"
            style={{ height: 500, width: "100%" }}
          >
            <div
              className="cursor-change"
              style={{
                left: mouseX,
                top: mouseY,
              }}
            >
              Read More
            </div>
          </div>

          <div className="bottom-des">
            <strong>YetiYap</strong>
            <h2>
              Identity Design for Nepal's First
              Viral News Site
            </h2>
            <span>
              Branding | Website | UI/UX
            </span>
          </div>
        </a>
      </Link>
    </motion.div>
  );
}
