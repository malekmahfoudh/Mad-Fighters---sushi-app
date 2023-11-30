import { NavLink, useLocation } from "react-router-dom";

function WorkersNavBar({ menu, cart, menuOpen, onMenuClick }) {
    const location = useLocation();
     return (
        <footer className="nav-container">
          <section className="bubble-container">
            <NavLink to="/new-orders">
                <div style={menu}></div>
            </NavLink>
            <NavLink to="/preparing-orders">
                <div style={menu}></div>
            </NavLink>
            <NavLink to="/ready-orders">
                <div style={cart}></div>
            </NavLink>
            </section>
            {location.pathname === "/new-orders" ? (
            <>
                <section className="icon-container" >
                    <section onClick={onMenuClick}>
                        <img src="/public/assets/icons/new.svg" alt=""  />
                    </section>
                    <section onClick={onMenuClick}>
                        <img src="/public/assets/icons/preparing.svg" alt="" />
                    </section>
                    <section onClick={onMenuClick}>
                        <img src="/public/assets/icons/ready.svg" alt="" />
                    </section>
                </section>
            </>
            ) : (
            <>
                <section className="icon-container">
                    <section  onClick={onMenuClick}>
                        <img src="/public/assets/icons/new.svg" alt="" />
                    </section>
                    <section  onClick={onMenuClick}>
                        <img src="/public/assets/icons/preparing.svg" alt="" />
                    </section>
                    <section  onClick={onMenuClick}>
                        <img src="/public/assets/icons/ready.svg" alt="" />
                    </section>
                </section>
            </>
            )}
        </footer>
     );
}

export default WorkersNavBar;