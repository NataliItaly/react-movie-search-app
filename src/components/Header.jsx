import React from "react";
import logo from "../assets/logo.png";

export default function Header({ isHome, handleIsHome }) {
  return (
    <header className="header header_home">
      <div className="header__banner"></div>
      <nav className="header__nav">
        <div className="header__logo logo">
          <img src={logo} alt="Movie App logo." />
          <p className="logo__text">
            <span className="logo__span">M</span>ovie{" "}
            <span className="logo__span">S</span>earch{" "}
            <span className="logo__span">A</span>pp
          </p>
        </div>
        <ul className="header__menu">
          <li className="header__item">
            <button
              className={
                isHome
                  ? "header__link header__link_home"
                  : "header__link header__link_watchlist"
              }
              role="link"
              onClick={handleIsHome}
            >
              {isHome ? "My Watch List" : "Back to Home Page"}
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}
