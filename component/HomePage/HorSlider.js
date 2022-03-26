import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import Link from "next/link";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
export default function HorSlider() {
  //   const panel = useRef(null);
  //   let sections = gsap.utils.toArray();

  const panels = useRef([]);
  const panelsContainer = useRef();

  const createPanelsRefs = (panel, index) => {
    panels.current[index] = panel;
  };
  useEffect(() => {
    const totalPanels = panels.current.length;
    gsap.to(panels.current, {
      xPercent: -100 * (totalPanels - 1),
      ease: "none",
      scrollTrigger: {
        trigger: panelsContainer.current,
        pin: true,
        scrub: 1,
        snap: 1 / (totalPanels - 1),
        // base vertical scrolling on how wide the container is so it feels more natural.
        end: () =>
          "+=" +
          panelsContainer.current.offsetWidth,
      },
    });
  }, []);

  return (
    <div className="hor-slider">
      <div
        ref={panelsContainer}
        className="hor-slider__container"
      >
        <div
          ref={e => createPanelsRefs(e, 0)}
          className="slide-one panel"
        >
          <Link href="#" passHref>
            <a className="portfolio first-portfolio">
              <img
                src="/images/yeti2.png"
                alt=""
              />
            </a>
          </Link>
          <Link href="#" passHref>
            <a className="portfolio">
              <img
                src="/images/yeti2.png"
                alt=""
              />
            </a>
          </Link>
          {/* <Link href="#" passHref>
            <a className="portfolio">
              <img
                src="/images/yeti2.png"
                alt=""
              />
            </a>
          </Link> */}
        </div>
        <div
          ref={e => createPanelsRefs(e, 1)}
          className="slide-two panel"
        >
          <Link href="#" passHref>
            <a className="portfolio">
              <img
                src="/images/yeti2.png"
                alt=""
              />
            </a>
          </Link>
          <Link href="#" passHref>
            <a className="portfolio">
              <img
                src="/images/yeti2.png"
                alt=""
              />
            </a>
          </Link>
          {/* <Link href="#" passHref>
            <a className="portfolio">
              <img
                src="/images/yeti2.png"
                alt=""
              />
            </a>
          </Link> */}
        </div>
        <div
          ref={e => createPanelsRefs(e, 2)}
          className="slide-three panel"
        >
          <Link href="#" passHref>
            <a className="portfolio">
              <img
                src="/images/yeti2.png"
                alt=""
              />
            </a>
          </Link>
          <Link href="#" passHref>
            <a className="portfolio">
              <img
                src="/images/yeti2.png"
                alt=""
              />
            </a>
          </Link>
          {/* <Link href="#" passHref>
            <a className="portfolio">
              <img
                src="/images/yeti2.png"
                alt=""
              />
            </a>
          </Link> */}
        </div>
      </div>
    </div>
  );
}
