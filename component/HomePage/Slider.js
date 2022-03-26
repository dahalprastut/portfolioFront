import React, { Component, useRef } from "react";
import Slider from "react-slick";
import {
  motion,
  useAnimation,
} from "framer-motion";
import useMousePosition from "../../utils/useMousePosition";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function VerticalMode() {
  const hoverdState = useRef(null);
  const settings = {
    dots: false,
    autoplay: false,
    autoplaySpeed: 5000,
    //   adaptiveHeight: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: false,
    arrows: false,
    //   beforeChange: function (
    //     currentSlide,
    //     nextSlide
    //   ) {
    //     console.log(
    //       "before change",
    //       currentSlide,
    //       nextSlide
    //     );
    //   },
    //   afterChange: function (currentSlide) {
    //     console.log("after change", currentSlide);
    //   },
  };
  const { mouseX, mouseY } = useMousePosition();
  const onHover = () => {
    hoverdState.current.style.display = "block";
  };
  const onLeave = () => {
    hoverdState.current.style.display = "none";
  };
  return (
    <div>
      <div
        className="hovered-state"
        ref={hoverdState}
        style={{
          left: mouseX - 300,
          top: mouseY - 250,
        }}
      ></div>
      <Slider {...settings}>
        <div
          onMouseEnter={onHover}
          onMouseLeave={onLeave}
        >
          <h1>Identity & Branding</h1>
        </div>
        <div
          onMouseEnter={onHover}
          onMouseLeave={onLeave}
        >
          <h1>Logo Design</h1>
        </div>
        <div
          onMouseEnter={onHover}
          onMouseLeave={onLeave}
        >
          <h1>UI/UX</h1>
        </div>
      </Slider>
    </div>
  );
}
