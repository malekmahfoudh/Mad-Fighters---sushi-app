import React from 'react';
import '../styles/MyProfile.scss';
import { NavLink } from 'react-router-dom';

function MyProfile() {
    return ( 
        <section className='profile-container'>
            <section className='logo-container'>
                <img src="./public/assets/img/logo.svg" alt="logo" className='logo'/>
            </section>
            <main className='profile-info-container'>
                <img src="./public/assets/img/profile-image.svg" alt="profile picture"/>
                <ul>
                    <li>About Sushi Vibes</li>
                    <li>Account settings</li>
                    <li>Support</li>
                    <li>Payment options</li>
                    <li>Order history</li>
                </ul>
                <NavLink to='-1'>
                    <p>Go back</p>
                </NavLink>
            </main>
        </section>
     );
}

export default MyProfile;