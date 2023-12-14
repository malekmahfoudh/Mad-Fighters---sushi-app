
import React from 'react';
import '../styles/Splash.scss';

function Splash({ message }) {
  return (
    <section className='splash-overlay'>
        <img src="  ./public/img/logo.svg" alt="logo" className='logo' />
        <h1>{message}</h1>
    </section>
  );
}

export default Splash;

