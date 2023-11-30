import { NavLink, useLocation } from "react-router-dom";

function NavBar({ menu, cart, menuOpen, onMenuClick }) {
    const location = useLocation();
     return (
        <footer className="nav-container">
          <section className="bubble-container">
            <NavLink to="/menu">
                <div style={menu}></div>
            </NavLink>
            <NavLink to="/">
                <div style={menu}></div>
            </NavLink>
            <NavLink to="/cart">
                <div style={cart}></div>
            </NavLink>
            </section>
            {location.pathname === "/menu" ? (
            <>
                <section className="icon-container" >
                    <section onClick={onMenuClick}>
                        <img src="/public/assets/icons/menu.png" alt=""  />
                    </section>
                    <section onClick={onMenuClick}>
                        <img src="/public/assets/icons/home2.png" alt="" />
                    </section>
                    <section onClick={onMenuClick}>
                        <img src="/public/assets/icons/cart.png" alt="" />
                    </section>
                </section>
            </>
            ) : (
            <>
                <section className="icon-container">
                    <section  onClick={onMenuClick}>
                        <img src="/public/assets/icons/home.png" alt="" />
                    </section>
                    <section  onClick={onMenuClick}>
                        <img src="/public/assets/icons/home2.png" alt="" />
                    </section>
                    <section  onClick={onMenuClick}>
                        <img src="/public/assets/icons/cart.png" alt="" />
                    </section>
                </section>
            </>
            )}
        </footer>
     );
}

export default NavBar;
