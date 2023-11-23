import React from "react";
import { NavLink } from "react-router-dom";

function NavBar({ account, menu, cart }) {
     return (
        <footer className="nav-container">
          <section className="bubble-container">
                <div style={account}></div>
            <NavLink to="/">
                <div style={menu}></div>
            </NavLink>
            <NavLink to="cart">
                <div style={cart}></div>
            </NavLink>
            </section>
            <section className="icon-container">
                <section>
                    <img src="../../public/assets/icons/user.png" alt="" />
                </section>
                <section>
                    <img src="../../public/assets/icons/home.png" alt="" />
                </section>
                <section>
                    <img src="../../public/assets/icons/cart.png" alt="" />
                </section>
            </section>
        </footer>
     );
}

export default NavBar;