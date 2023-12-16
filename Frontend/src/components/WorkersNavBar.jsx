import { NavLink, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import AmountIcon from "./AmountIcon";

function WorkersNavBar( {newOrdersCount} ) {

    const location = useLocation();
    const [activeSection, setActiveSection] = useState("");

    useEffect(() => {
        const currentPath = location.pathname;
        
        if (currentPath === "/new-orders") {
          setActiveSection("new");
        } else if (currentPath === "/preparing-orders") {
          setActiveSection("prepare");
        } else if (currentPath ==="/ready-orders") {
          setActiveSection("ready");
        }
      }, [location.pathname]);

     return (
        <footer className="nav-container">
            <NavLink to="/new-orders">
                <section className={`new ${activeSection === "new" ? "active" : ""}`} style={{ position: 'relative' }}>
                    <img src={activeSection === "new" ? " /assets/icons/active-new.png" : " /assets/icons/new.png"} alt="" />
                    {newOrdersCount > 0 && <AmountIcon amount={newOrdersCount} style={{ position: 'absolute', top: 5, right: -15 }} />}
                </section>
            </NavLink>
            <NavLink to="/preparing-orders">
                <section className={`prepare ${activeSection === "prepare" ? "active" : ""}`}>
                    <img src={activeSection === "prepare" ? " /assets/icons/active-prepare.png" : " /assets/icons/prepare.png"} alt="" />
                </section>
            </NavLink>
            <NavLink to="/ready-orders">
                <section className={`ready ${activeSection === "ready" ? "active" : ""}`}>
                    <img src={activeSection === "ready" ? " /assets/icons/active-ready.png" : " /assets/icons/ready.png"} alt="" />
                </section>
            </NavLink>
        </footer>
     );
}

export default WorkersNavBar;