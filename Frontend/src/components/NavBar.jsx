import { NavLink, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import AmountIcon from "./AmountIcon";
import { useSelector } from 'react-redux';

function NavBar() {
  const location = useLocation();
  const [activeSection, setActiveSection] = useState("");
  const selectCartQuantity = state => state.cart.cart.reduce((acc, product) => acc + product.quantity, 0);
  const cartQuantity = useSelector(selectCartQuantity);


  useEffect(() => {
    const currentPath = location.pathname;
    
    if (currentPath === "/menu") {
      setActiveSection("menu");
    } else if (currentPath === "/home") {
      setActiveSection("home");
    } else if (currentPath === "/cart") {
      setActiveSection("cart");
    }
  }, [location.pathname]);

  return (
    <footer className="nav-container">
      <NavLink to="/menu">
        <section className={`menu ${activeSection === "menu" ? "active" : ""}`}>
            <img src={activeSection === "menu" ? " ./public/icons/active-menu.png" : " ./public/icons/menu.png"} alt="" />
        </section>
      </NavLink>
      <NavLink to="/home">
        <section className={`home ${activeSection === "home" ? "active" : ""}`}>
          <img src={activeSection === "home" ? " ./public/icons/active-home.png" : " ./public/icons/home.png"} alt="" />
        </section>
      </NavLink>
      <NavLink to="/cart">
        <section className={`cart ${activeSection === "cart" ? "active" : ""}`} style={{ position: 'relative' }}>
          <img src={activeSection === "cart" ? " ./public/icons/active-cart.png" : " ./public/icons/cart.png"} alt="" />
          {cartQuantity > 0 && <AmountIcon amount={cartQuantity} style={{ position: 'absolute', top: 5, right: 0 }} />}
        </section>
      </NavLink>
    </footer>
  );
}

export default NavBar;