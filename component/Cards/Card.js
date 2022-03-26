import React, {
  useState,
  useEffect,
  useRef,
} from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// import dynamic from "next/dynamic";
import HoverEffect from "hover-effect";

gsap.registerPlugin(ScrollTrigger);
// const hoverEffect = dynamic(
//   () => {
//     return import("hover-effect")
//   },
//   { ssr: false }
// );

// const HoverEffect = dynamic(
//   () =>
//     import("hover-effect").then(
//       a => a.hover - effect
//     ),
//   { ssr: false }
// );

// console.log("hover", hoverEffect);

export default function Card() {
  const container = useRef();
  const cardRef = useRef(null);
  const t1 = gsap.timeline();

  useEffect(() => {
    gsap.from(cardRef.current, {
      y: "100",
      duration: 1,

      scrollTrigger: {
        trigger: cardRef.current,
        start: "top 80%",
        end: "bottom 60%",
        toggleActions:
          "restart complete reverse reset",
      },
    });
  });

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
    <Link href="/projects/1">
      <a className="card" ref={cardRef}>
        <div
          className="outer-image"
          ref={container}
          id="imgContainer"
          style={{ height: 500, width: 400 }}
        ></div>

        <div className="bottom-des">
          <strong>YetiYap</strong>
          <h2>
            Identity Design for Nepal's First
            Viral News Site
          </h2>
          <span>Branding | Website | UI/UX</span>
        </div>
      </a>
    </Link>
  );
}
