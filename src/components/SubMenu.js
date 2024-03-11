import React from "react";
import { Link } from "react-router-dom";

const SubMenu = ({ subMenu, handleMenuItemClick }) => {
  const handleSubMenuClick = () => {
    // Close the submenu when a submenu item is clicked
    handleMenuItemClick();
  };
  return (
    <div className="mega_menu sub_menu">
      {subMenu.map((subItem, subIndex) => (
        <div key={subIndex} className="mega_menu_item">
          {subItem.category && <h3>{subItem.category}</h3>}
          {subItem.subCategories && (
            <ul className="submenu-ul">
              {subItem.subCategories.map((subCatItem, subCatIndex) => (
                <li key={subCatIndex}>
                  <Link to={subCatItem.url} onClick={handleSubMenuClick}>
                    {subCatItem.title}
                  </Link>
                </li>
              ))}
            </ul>
          )}
          {subItem.mega_menu_item && (
            <div dangerouslySetInnerHTML={{ __html: subItem.mega_menu_item }} />
          )}
        </div>
      ))}
    </div>
  );
};

export default SubMenu;
