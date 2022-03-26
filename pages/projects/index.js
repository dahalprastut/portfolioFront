import React from "react";
import Nav from "../../component/HomePage/Nav";
import Marquee from "../../component/HomePage/Marquee";
import RecentWorks from "../../component/HomePage/RecentWorks";
import Social from "../../component/HomePage/Social";

export default function Projects() {
  const primaryColor = "#000";
  const secondaryColor = "#fff";
  return (
    <>
      <div>
        <div className="center">
          <Nav color={primaryColor} />
        </div>
      </div>
      <section>
        <div className="center">
          <h1>CASE STUDIES</h1>
          <RecentWorks />
        </div>
      </section>
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
