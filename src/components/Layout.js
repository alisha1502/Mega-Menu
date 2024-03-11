import React, { useEffect } from "react";
import { Outlet, Link, useLocation } from "react-router-dom";
import Banner from "./Banner";

const Layout = () => {
  const location = useLocation();

  // Check if the current route is not the home page
  const showBanner = location.pathname === "/";

  //   useEffect(() => {
  //     if (location.pathname !== "/" && location.pathname !== "/home") {
  //       const timeout = setTimeout(() => {
  //         window.history.replaceState(null, "", "/");
  //       }, 0);

  //       return () => clearTimeout(timeout);
  //     }
  //   }, [location.pathname]);

  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">MegaMenu</Link>
          </li>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/blogs">Blogs</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>

      {showBanner && <Banner />}

      <Outlet />
    </>
  );
};

export default Layout;
