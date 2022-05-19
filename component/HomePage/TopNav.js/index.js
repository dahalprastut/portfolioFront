import React from "react";

export default function TopNav() {
  return (
    <div className="hidden-nav__top">
      <h5>
        <Link href="/" passHref>
          <a>Samar Adhikari</a>
        </Link>
      </h5>
      <div className="navigation__link">
        <div
          onClick={() => toggleOpen()}
          className="hamburger"
        >
          Menu
          <span>X</span>
        </div>
      </div>
    </div>
  );
}
