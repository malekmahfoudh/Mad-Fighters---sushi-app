import { NavLink } from "react-router-dom";

function NavBar({ home, menu, cart}) {
     return (
        <footer className="nav-container">
          <section className="bubble-container">
            <NavLink to="/menu">
                <div style={menu}></div>
            </NavLink>
            <NavLink to="/">
                <div style={home}></div>
            </NavLink>
            <NavLink to="/cart">
                <div style={cart}></div>
            </NavLink>
            </section>
            <section className="icon-container" >
                <section>
                    <img src="/public/assets/icons/menu.png" alt=""  />
                </section>
                <section>
                    <img src="/public/assets/icons/home2.png" alt="" />
                </section>
                <section>
                    <img src="/public/assets/icons/cart.png" alt="" />
                </section>
            </section>
        </footer>
     );
}

export default NavBar;
