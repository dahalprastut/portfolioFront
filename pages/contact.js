import React from "react";
import Nav from "../component/HomePage/Nav";
import Marquee from "../component/HomePage/Marquee";
import Social from "../component/HomePage/Social";
import Form from "../component/Contact/Form";

export default function contact() {
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
          <h1>CONTACT</h1>
          <Form />
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
