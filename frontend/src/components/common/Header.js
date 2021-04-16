import React from "react";
import _ from "lodash";
import Logo from "./facetslogo.png";
import "../../stylesheets/layout.scss";

const navs = {
  HowItWorks: { display: "How It Works", url: "/" },
  Agencies: { display: "Brands & Agencies", url: "/" },
  Learn: { display: "Learn", url: "/" },
  Pricing: { display: "Pricing", url: "/" }
};
const NavBar = props => {
  return (
    <div className="nav-bar">
      <div className="nav-logo">
        <img src={Logo} alt="Logo" className="nav-img" />
      </div>
      <div className="nav-links">
        <div className="nav-pages">
          {_.map(navs, ({ display, url }, k) => (
            <a key={k} href={url}>
              {display}
            </a>
          ))}
        </div>
        <div className="sign-in-btn">
          <a>Already a creator? Sign in</a>
          <button>
            <span>BECOME A CREATOR</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
