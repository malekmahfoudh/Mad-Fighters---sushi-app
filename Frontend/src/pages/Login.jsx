import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import CTAButton from '../components/CTAButton';
import Splash from '../components/Splash';
import '../styles/Login.scss';
import '../styles/Splash.scss'

function Login() {
  const navigate = useNavigate();
  const [clickedButton, setClickedButton] = useState(null);
  const [showSplash, setShowSplash] = useState(false);
  const [splashMessage, setSplashMessage] = useState('');

  useEffect(() => {
    if (clickedButton) {
      setShowSplash(true);
  
      if (clickedButton === 'customer') {
        setSplashMessage('Setting up your account...');
        setTimeout(() => {
          setShowSplash(false);
          navigate('/home');
        }, 2000);
      } else if (clickedButton === 'worker') {
        setSplashMessage('Welcome, Worker!');
        setTimeout(() => {
          setShowSplash(false);
          navigate('/new-orders');
        }, 2000);
      }
    }
  }, [clickedButton, navigate]);

  const handleButtonClick = (role) => {
    setClickedButton(role);
  };

  return (
    <section className='login-container'>
      <section className='logo-container'>
        <img src=" /assets/img/logo.svg" alt="logo" className='logo' />
      </section>

      <section className='welcome-page'>
        <h2>Welcome to Sushi Vibes!</h2>
        <h3>Are you a customer or a Sushi Vibes worker?</h3>

        <button className='CTAButton' onClick={() => handleButtonClick('customer')}>
          Customer
        </button>
        <button className='CTAButton' onClick={() => handleButtonClick('worker')}>
          Worker
        </button>

        {showSplash && <Splash message={splashMessage} />}
      </section>
    </section>
  );
}

export default Login;