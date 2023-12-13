import React from "react";
import { NavLink, useNavigate, useLocation } from 'react-router-dom';
import '../styles/Header.scss';

function Header() {
    const navigation = useNavigate();
    const location = useLocation();

    const handleClick = () => {
        navigation('/');
    }

    const getUserInfo = () => {
        if (location.pathname === '/home' || location.pathname === '/cart' || location.pathname === '/menu') {
            return <h3>Hello, customer!</h3>;
        } else {
            return <h3>Hello, worker!</h3>;
        }
    }

    const getUserImage = () => {
        if (location.pathname === '/home' || location.pathname === '/cart' || location.pathname === '/menu') {
            return <img src="./public/assets/icons/customer.jpg" alt="profile image" />;
        } else  {
            return <img src="./public/assets/icons/worker.png" alt="profile image" />;
        }
    }

    const ProfileLink = ['/home', '/cart', '/menu'].includes(location.pathname);

    return (
        <header className="HeaderContainer">
            <img className="Logo" src="./public/assets/img/header-logo.svg" alt="sushi vibes logo" onClick={handleClick} />
            <section className="Profile">
                <section className="ProfileInfo">
                    {getUserInfo()}
                </section>
                <div>
                    {ProfileLink ? (
                        <NavLink to='/profile'>
                            {getUserImage()}
                        </NavLink>
                    ) : (
                        getUserImage()
                    )}
                </div>
            </section>
        </header>
    );
}

export default Header;
