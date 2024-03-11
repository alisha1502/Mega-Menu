import React from "react";
import google_logo from "../images/background-1.png";

const Banner = () => {
  return (
    <div className="container">
      <div className="header-component-container">
        <div className="header-component">
          <div className="header-component-heading-wrap">
            <h1 className="text-custom-heading1 text-align-left">
              We bring product and engineering together
            </h1>
            <div className="header-component-subheading">
              <div className="text-size-medium text-color-white text-align-justify">
                Shortcut brings planning and development together, keeping your
                ongoing work and Docs completely in sync.
                <strong>Automatically.</strong>
              </div>
            </div>
            <div className="common-buttons">
              <a href="/start" className="primary button w-button">
                Get Started - free forever
              </a>
              <a href="/signup" className="button is-google w-button">
                {" "}
                Sign Up with Google
              </a>
            </div>
          </div>

          <div className="header_image-wrap">
            <img alt="" src={google_logo}></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
