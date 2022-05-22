import React, {
  useState,
  useEffect,
  useRef,
} from "react";
import Slider from "react-slick";
import useMousePosition from "../../utils/useMousePosition";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function VerticalMode() {
  const hoverdState = useRef(null);
  const settings = {
    dots: false,
    autoplay: true,
    autoplaySpeed: 5000,
    //   adaptiveHeight: true,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: false,
    arrows: false,
  };
  const { mouseX, mouseY } = useMousePosition();
  const onHover = () => {
    hoverdState.current.style.display = "block";
  };
  const onLeave = () => {
    hoverdState.current.style.display = "none";
  };

  const [innerWidth, setInnerWidth] = useState(0);
  useEffect(() => {
    setInnerWidth(window.innerWidth);
  }, []);

  return (
    <div>
      <div
        className="hovered-state"
        ref={hoverdState}
        // style={{
        //   left: mouseX - (innerWidth / 2 - 450),
        //   top: mouseY - 250,
        // }}
        style={{
          left: mouseX,
          top: mouseY,
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
