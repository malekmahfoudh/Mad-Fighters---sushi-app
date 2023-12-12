import React from "react";
import '../styles/Header.scss'
import { NavLink, useNavigate } from 'react-router-dom';

function Header() {
    const navigation = useNavigate();
    const handleClick = () => {
        navigation('/');
    }
    return ( 
        <header className="HeaderContainer">
            <img className="Logo" src="./public/assets/img/header-logo.svg" alt="sushi vibes logo" onClick={handleClick} />

            <section className="Profile">
                <section className="ProfileInfo">
                    <h3>Hello, John</h3>
                    <p>Branteviksgatan 5B</p>
                </section>
                <NavLink to='/profile'>
                    <img src="./public/assets/img/profile-image.svg" alt="profile image" />
                </NavLink>
            </section>
        </header>
     );
}

export default Header;