import React from "react";
import Head from "../component//Head";
import Nav from "../../component/HomePage/Nav";
import Marquee from "../../component/HomePage/Marquee";
import Social from "../../component/HomePage/Social";
import Content from "../../component/Detail/Content";

export default function ProjectDetail() {
  const primaryColor = "#000";
  const secondaryColor = "#fff";
  return (
    <>
      <Head />

      <div>
        <div className="center">
          <Nav color={primaryColor} />
        </div>
      </div>
      <article>
        <div className="center">
          <div className="title-intro">
            <h3>YetiYap</h3>
            <h1>
              Identity Design for Nepal's First
              Viral News Site
            </h1>
            <div className="about-client">
              <div>
                <span>Client</span>
                <h4>YetiYap</h4>
              </div>
              <div>
                <span>Responsibility</span>
                <h4>
                  Branding | Web Design | UI/UX
                </h4>
              </div>
            </div>
          </div>
        </div>
      </article>
      <div className="parallax"></div>
      <Content />
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
