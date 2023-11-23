import React, { useState } from 'react';
import Header from '../components/Header';
import HeroFood from '../components/HeroFood';
import SearchBar from '../components/SearchBar';
import FoodCard from '../components/FoodCard';
import { Overlay } from '../components/ChosenDish';
import NavBar from '../components/NavBar';

function HomePage() {
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);

  const openOverlay = () => {
    console.log('open');
    setIsOverlayOpen(true);
  }

  const closeOverlay = () => { 
    setIsOverlayOpen(false);
  }

  return (
    <main className='HomePage'>
        <Header />
        <HeroFood />
        <SearchBar />
        <article>
          <h3>Top choices</h3>
        </article>
        <FoodCard onClick={openOverlay} />
        {isOverlayOpen && <Overlay close={closeOverlay} />}
        <NavBar 
          menu={{opacity: '1'}}
        />
    </main>
    
    )
}

export default HomePage;
