import React, { useRef, useEffect } from "react";
import { useRouter } from "next/router";
import styled from "styled-components";
import {
  motion,
  useAnimation,
} from "framer-motion";
import useMousePosition from "../../../utils/useMousePosition";
import { distance } from "../../../utils/utils";
import useHover from "../../../utils/useHover";

const Text = styled(motion.span)`
  display: block;

  &::before,
  &::after {
    content: attr(data-text);
    position: absolute;
    top: 50%;
    left: 50%;
    color: white;
    white-space: nowrap;
    transform: translate3d(-50%, -50%, 0);
    transition: all 0.2s
      cubic-bezier(0.075, 0.82, 0.165, 1);
  }

  &::after {
    color: black;
    transform: translate3d(-50%, 140%, 0);
  }
`;

const Style = styled.a`
  position: relative;
  display: inline-flex;
  margin: 1em;
  padding: 10px 34px;
  font-size: 1.25em;
  font-weight: 500;
  line-height: 1.25;
  letter-spacing: 0.025em;
  color: white;
  background: black;
  border: 1px solid white;
  border-radius: 25px;
  user-select: none;
  cursor: pointer;
  overflow: hidden;
  transition: all 2s
    cubic-bezier(0.075, 0.82, 0.165, 1)
    /* Text wrapper */ > span {
    z-index: 100;
    position: relative;
    color: transparent;
  }

  &:hover {
    border-color: black;

    ${Text} {
      &::before {
        transform: translate3d(-50%, -300%, 0);
      }

      &::after {
        color: #000;
        transform: translate3d(-50%, -50%, 0);
      }
    }
  }
`;

const Fill = styled(motion.div)`
  z-index: -10;
  position: absolute;
  top: -50%;
  left: -25%;
  width: 150%;
  height: 250%;
  display: block;
  border-radius: 50%;
  background: white;
  pointer-events: none;
  transform: translate3d(0, 80%, 0);
`;

const Button = ({ text, url }) => {
  const router = useRouter();
  const { mouseX, mouseY } = useMousePosition();
  const [ref, isHovered] = useHover();
  const textRef = useRef();
  const fillControls = useAnimation();

  useEffect(() => {
    let x = 0;
    let y = 0;
    // console.log("ref", ref.current);
    if (ref) {
      const node = ref.current;

      // New values for the translations
      const rect = node.getBoundingClientRect();
      const distanceToTrigger = rect.width * 0.7;
      const distanceMouseButton = distance(
        mouseX + window.scrollX,
        mouseY + window.scrollY,
        rect.left + rect.width / 2,
        rect.top + rect.height / 2
      );

      // Handle magnetic effect
      if (
        distanceMouseButton < distanceToTrigger
      ) {
        // Translate button position on hover
        x =
          (mouseX +
            window.scrollX -
            (rect.left + rect.width / 2)) *
          0.2;
        y =
          (mouseY +
            window.scrollY -
            (rect.top + rect.height / 2)) *
          0.2;
        node.style.transform = `translate3d(${x}px, ${y}px, 0)`;
        textRef.current.style.transform = `translate3d(${
          x / 4
        }px, ${y / 4}px, 0)`;
      } else {
        // Restore initial position
        node.style.transform = `translate3d(0, 0, 0)`;
        textRef.current.style.transform = `translate3d(0, 0, 0)`;
      }

      const handleMouseEnter = () => {
        // Handle background color animation
        fillControls.start({
          y: ["80%", "-10%"],
          transition: {
            ease: [0.19, 1, 0.22, 1],
            duration: 0.55,
          },
        });
      };

      const handleMouseLeave = () => {
        fillControls.start({
          y: "-80%",
          transition: {
            ease: [0.19, 1, 0.22, 1],
            duration: 0.55,
          },
        });
      };

      if (node) {
        node.addEventListener(
          "mouseenter",
          handleMouseEnter
        );
        node.addEventListener(
          "mouseleave",
          handleMouseLeave
        );

        return () => {
          node.removeEventListener(
            "mouseenter",
            handleMouseEnter
          );
          node.removeEventListener(
            "mouseleave",
            handleMouseLeave
          );
        };
      }
    }
  }, [
    mouseX,
    mouseY,
    ref,
    textRef,
    fillControls,
  ]);

  const clickHandler = () => {
    if (url) {
      router.push(url);
    }
  };

  return (
    <Style ref={ref} onClick={clickHandler}>
      <span ref={textRef}>
        <Text data-text={text}>{text}</Text>
      </span>
      <Fill animate={fillControls} />
    </Style>
  );
};

export default Button;
