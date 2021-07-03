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
        <Link to="/" className={`${NavbarCss.link} ${NavbarCss.home}`}>
          Home
        </Link>
        <Link className={NavbarCss.link} to="/add_recipe">
          Add Recipe
        </Link>
        <Link className={NavbarCss.link} to="/generate_list">
          Generate List
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
