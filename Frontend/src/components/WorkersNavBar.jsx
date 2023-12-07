import { NavLink, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

function WorkersNavBar() {

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
                <section className={`new ${activeSection === "new" ? "active" : ""}`}>
                    <img src={activeSection === "new" ? "/public/assets/icons/active-new.png" : "/public/assets/icons/new.png"} alt="" />
                </section>
            </NavLink>
            <NavLink to="/preparing-orders">
                <section className={`prepare ${activeSection === "prepare" ? "active" : ""}`}>
                    <img src={activeSection === "prepare" ? "/public/assets/icons/active-prepare.png" : "/public/assets/icons/prepare.png"} alt="" />
                </section>
            </NavLink>
            <NavLink to="/ready-orders">
                <section className={`ready ${activeSection === "ready" ? "active" : ""}`}>
                    <img src={activeSection === "ready" ? "/public/assets/icons/active-ready.png" : "/public/assets/icons/ready.png"} alt="" />
                </section>
            </NavLink>
        </footer>
     );
}

export default WorkersNavBar;