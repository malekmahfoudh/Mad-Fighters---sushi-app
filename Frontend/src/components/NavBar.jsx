import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/NavBar.scss";

export default function NavBar() {
  return (
    <div class="navbar">
      <NavLink to="/menu" href="#" class="nav-link">
        Menu
      </NavLink>
      <NavLink to="/home" href="#" class="nav-link">
        Home
      </NavLink>
      <NavLink to="/cart" href="#" class="nav-link">
        Cart
      </NavLink>
    </div>
  );
}
