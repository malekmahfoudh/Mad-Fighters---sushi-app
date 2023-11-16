import React from "react";
import '../styles/Header.scss'

function Header() {
    return ( 
        <header className="HeaderContainer">
            <img className="Logo" src="./public/assets/img/header-logo.svg" alt="sushi vibes logo" />

            <section className="Profile">
                <section className="ProfileInfo">
                    <h3>Hello, John</h3>
                    <p>Branteviksgatan 5B</p>
                </section>

                <img src="./public/assets/img/profile-image.svg" alt="profile image" />
            </section>
        </header>
     );
}

export default Header;