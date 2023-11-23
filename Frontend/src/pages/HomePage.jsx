import React, { useState } from 'react';
import Header from '../components/Header';
import HeroFood from '../components/HeroFood';
import SearchBar from '../components/SearchBar';
import FeaturedFoods from '../components/FeaturedFoods';
import NavBar from '../components/NavBar';
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
        <FeaturedFoods />
        <NavBar />
    </main>
  );
}

export default HomePage;
