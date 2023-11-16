import React from 'react';
import Header from '../components/Header';
import HeroFood from '../components/HeroFood';
import SearchBar from '../components/SearchBar';
import FoodCard from '../components/FoodCard';

function HomePage() {
  return (
    <main className='HomePage'>
        <Header />
        <HeroFood />
        <SearchBar />
        <FoodCard />
    </main>
    
    )
}

export default HomePage;
