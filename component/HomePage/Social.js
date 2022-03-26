import React from "react";
import Credits from "./Credits";

export default function Social() {
  return (
    <div className="social">
      <h4>Wanna start a project? Say Hii</h4>
      <h1>samar.adhikari77@gmail.com</h1>
      <div className="social__links">
        <a href="#">Behance</a>
        <a href="#">Dribble</a>
        <a href="#">Facebook</a>
        <a href="#">Instagram</a>
      </div>

      <Credits />
    </div>
  );
}
