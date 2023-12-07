import { NavLink } from "react-router-dom";

function NavBar() {
     return (
        <footer className="nav-container">
            <NavLink to="/menu">
                <section className="menu">
                    <img src="/public/assets/icons/menu.png" alt=""  />
                </section>
            </NavLink>
            <NavLink to="/home">
                <section className="home">
                    <img src="/public/assets/icons/home.png" alt="" />
                </section>
            </NavLink>
            <NavLink to="/cart">
                <section className="cart">
                    <img src="/public/assets/icons/cart.png" alt="" />
                </section>
            </NavLink>
        </footer>
     );
}

export default NavBar;
