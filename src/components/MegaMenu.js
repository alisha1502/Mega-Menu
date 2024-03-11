import React, { useState } from "react";
import menuData from "../utils/menuData.json";
import "../styles/MegaMenu.css";
import MenuItem from "./MenuItem";

const MegaMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(true);

  const handleMenuItemClick = () => {
    setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className="container sticky">
        <div className="row">
          <div className="logo" style={{ width: "22%" }}>
            <a href="/">Mega Menu</a>
          </div>
          <div
            className="mobile_btn"
            style={{ width: "8%", color: "white" }}
            onClick={toggleMenu}
          >
            <i className="fas fa-bars"></i>
            <i className="fas fa-times"></i>
          </div>
          <div
            className={`main_menu ${isMenuOpen ? "" : "closed"}`}
            style={{
              display: "flex",
              marginRight: "auto",
              marginLeft: "auto",
            }}
          >
            <ul>
              {menuData.map((item, index) => (
                <MenuItem
                  key={index}
                  item={item}
                  handleMenuItemClick={handleMenuItemClick}
                />
              ))}
            </ul>
          </div>
          <div style={{ width: "10%" }}>
            <a href="/">Login</a>
          </div>
          <div style={{ width: "20%" }}>
            <button
              className="primary button w-button"
              style={{ padding: "-0.25em 1.5em" }}
            >
              Sign up for FREE
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default MegaMenu;
