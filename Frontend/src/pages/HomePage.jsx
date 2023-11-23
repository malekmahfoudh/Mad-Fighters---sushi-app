import React from 'react';
import Header from '../components/Header';
import HeroFood from '../components/HeroFood';
import SearchBar from '../components/SearchBar';
import FoodCard from '../components/FoodCard';
import NavBar from '../components/NavBar';

function HomePage() {
  return (
    <main className='HomePage'>
        <Header />
        <HeroFood />
        <SearchBar />
        <article>
          <h3>Top choices</h3>
        </article>
        <FoodCard />
        <NavBar 
          account={{opacity: '1'}}
        />
    </main>
    
    )
}

export default HomePage;
