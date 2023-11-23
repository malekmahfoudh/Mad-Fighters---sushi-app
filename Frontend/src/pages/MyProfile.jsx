import React from 'react';
import '../styles/MyProfile.scss';
import { useNavigate, NavLink } from 'react-router-dom';

function MyProfile() {

    const navigate = useNavigate();
    return ( 
        <section className='profile-container'>
            <section className='logo-container'>
                <img src="./public/assets/img/logo.svg" alt="logo" className='logo'/>
            </section>
            <section className='profile-info-container'>
                <img src="./public/assets/img/profile-image.svg" alt="profile picture"/>
                <ul>
                    <NavLink to='/about'>
                        <li>About Sushi Vibes</li>
                    </NavLink>
                    <li>Account settings</li>
                    <li>Support</li>
                    <li>Payment options</li>
                    <li>Order history</li>
                </ul>
                <button onClick={() => navigate('/')}>Go back</button>
            </section>
        </section>
     );
}

export default MyProfile;