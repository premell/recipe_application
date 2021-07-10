import React from "react";
import { Link } from "react-router-dom";

import NavbarCss from "./Navbar.module.css";

import "./Navbar.css";

const Navbar = () => {
  const toggleDropdown = () => {
    const dropdown = document.getElementsByClassName("nav_dropdown")[0];
    console.log(dropdown);
    dropdown.style.display =
      dropdown.style.display === "none" ? "block" : "none";
  };

  return (
    <nav>
      <div className={NavbarCss.container}>
        <Link to="/" className={`${NavbarCss.nav_links} ${NavbarCss.home}`}>
          Home
        </Link>
        <Link className={NavbarCss.nav_links} to="/add_recipe">
          Add Recipe
        </Link>
        <Link className={NavbarCss.nav_links} to="/generate_list">
          Generate List
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
