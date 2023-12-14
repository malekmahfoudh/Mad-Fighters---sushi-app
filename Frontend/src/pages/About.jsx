import React from 'react';
import '../styles/About.scss';
import { NavLink } from 'react-router-dom';

function About() {
    return ( 
        <section className='about-container'>
            <section className='logo-container'>
                <img src="  ./public/img/logo.svg" alt="logo" className='logo'/>
            </section>
            <section className='about-info-container'>
                <h2>About Sushi Vibes</h2>
                <img src="  ./public/img/chef.png" alt="sushi vibes chef"/>
                <p className='about-info'>
                    We are a restaurant that seamlessly integrates Japanese culinary expertise with a modern touch. At Sushi Vibes, you'll encounter the art of sushi craftsmanship in a space designed for culinary excellence and a welcoming atmosphere.
                </p>
                <address>
                    1405 Main Street, 17103
                </address>
                <NavLink to='/profile'>
                    <p className='back-button'>Go back</p>
                </NavLink>
            </section>
            
        </section>
     );
}

export default About;