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
          My Recipes
        </Link>
        <Link className={NavbarCss.nav_links} to="/add_recipe">
          Create Recipe
        </Link>
        <Link className={NavbarCss.nav_links} to="/generate_list">
          Weekly Shoppinglist
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
