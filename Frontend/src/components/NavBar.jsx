import { NavLink } from "react-router-dom";

function NavBar({ menu, cart, menuOpen, onMenuClick }) {
     return (
        <footer className="nav-container">
          <section className="bubble-container">
            <NavLink to="/">
                <div style={menu}></div>
            </NavLink>
            <NavLink to="cart">
                <div style={cart}></div>
            </NavLink>
            </section>
            {menuOpen ? (
            <>
                <section className="icon-container" onClick={onMenuClick}>
                    <section>
                        <img src="/public/assets/icons/menu.png" alt="" />
                    </section>
                    <section>
                        <img src="/public/assets/icons/cart.png" alt="" />
                    </section>
                </section>
            </>
            ) : (
            <>
                <section className="icon-container" onClick={onMenuClick}>
                    <section>
                        <img src="/public/assets/icons/home.png" alt="" />
                    </section>
                    <section>
                        <img src="/public/assets/icons/cart.png" alt="" />
                    </section>
                </section>
            </>
            )}
        </footer>
     );
}

export default NavBar;