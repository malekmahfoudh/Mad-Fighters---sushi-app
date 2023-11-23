import React, { useState } from 'react';
import Header from '../components/Header';
import HeroFood from '../components/HeroFood';
import SearchBar from '../components/SearchBar';
import FoodCard from '../components/FoodCard';
import { Overlay } from '../components/ChosenDish';

function HomePage() {
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
    </main>
  );
}

export default HomePage;
