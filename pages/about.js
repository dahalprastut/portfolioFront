import React from "react";
import Head from "../component//Head";
import Nav from "../component/HomePage/Nav";
import Marquee from "../component/HomePage/Marquee";
import AboutSection from "../component/HomePage/AboutSection";
import Social from "../component/HomePage/Social";

export default function About() {
  const primaryColor = "#000";
  const secondaryColor = "#fff";
  return (
    <>
      <Head />
      <div className="top bg-primary">
        <div className="center">
          <Nav color={secondaryColor} />
        </div>
      </div>
      <div className="outer-title">
        <div className="title">
          <div className="center">
            <h2>
              Hello! My name is Samar Adhikari,
              I'm a Kathmandu based UI/UX designer
              with more than 4 years of digital
              design experience.
            </h2>
          </div>
        </div>
      </div>
      <div
        style={{
          background: `${secondaryColor}`,
          color: "#000",
        }}
        className="intro about-page-intro"
      >
        <div className="center">
          <AboutSection />
        </div>
      </div>

      <footer>
        <Marquee
          color={secondaryColor}
          title="SAY HI!!"
        />
        <div className="center">
          <Social />
        </div>
      </footer>
    </>
  );
}
