import React, {
  useState,
  useEffect,
  useRef,
} from "react";
import Link from "next/link";

import HoverEffect from "hover-effect";

export default function Card() {
  const container = useRef();

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
      <a className="card">
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
