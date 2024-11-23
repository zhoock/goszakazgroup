import React from "react";
import Navigation from "../Navigation/Navigation";
import Logo from "../Logo/Logo"
import "./style.scss";

export default function Header() {
  return (
    <>
      <header role="banner">
        <div className="banner">
          <div className="row">
            <div className="column">
              <div className="header-content">
                <Logo />
                <nav role="navigation">
                  <Navigation />
                </nav>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
