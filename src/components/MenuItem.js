import React from "react";
import SubMenu from "./SubMenu";
import { Link } from "react-router-dom";

const MenuItem = ({ item, handleMenuItemClick }) => {
  let hasSubMenu = item.subMenu && item.subMenu.length > 0;
  const isActive = item.url === "/" && item.title !== "Home";

  const handleSubMenu = () => {
    handleMenuItemClick();
  };

  return (
    <li
      className={
        hasSubMenu ? "mega_menu_dropdown has_dropdown " : "submenu_navBar"
      }
    >
      <Link
        to={item.url}
        className={isActive ? "active" : ""}
        onClick={handleSubMenu}
      >
        {item.title}
        {hasSubMenu && (
          <i className="fas fa-angle-down" style={{ marginLeft: "5px" }}></i>
        )}
      </Link>
      {hasSubMenu && (
        <SubMenu
          subMenu={item.subMenu}
          handleMenuItemClick={handleMenuItemClick}
        />
      )}
    </li>
  );
};

export default MenuItem;
