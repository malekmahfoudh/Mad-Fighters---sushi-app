// import { useState } from "react";

function NavBar({ account, menu, cart }) {
     return (
        <footer className="nav-container">
          <section className="bubble-container">
                <div style={account}></div>
                <div style={menu}></div>
                <div style={cart}></div>
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