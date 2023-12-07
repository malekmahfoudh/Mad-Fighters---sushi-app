import { NavLink, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

function NavBar() {
  const location = useLocation();
  const [activeSection, setActiveSection] = useState("");

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
            <img src={activeSection === "menu" ? "/public/assets/icons/active-menu.png" : "/public/assets/icons/menu.png"} alt="" />
        </section>
      </NavLink>
      <NavLink to="/home">
        <section className={`home ${activeSection === "home" ? "active" : ""}`}>
          <img src={activeSection === "home" ? "/public/assets/icons/active-home.png" : "/public/assets/icons/home.png"} alt="" />
        </section>
      </NavLink>
      <NavLink to="/cart">
        <section className={`cart ${activeSection === "cart" ? "active" : ""}`}>
          <img src={activeSection === "cart" ? "/public/assets/icons/active-cart.png" : "/public/assets/icons/cart.png"} alt="" />
        </section>
      </NavLink>
    </footer>
  );
}

export default NavBar;