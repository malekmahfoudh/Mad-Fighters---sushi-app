import React from 'react';
import Header from '../components/Header';
import HeroFood from '../components/HeroFood';
import SearchBar from '../components/SearchBar';

function HomePage() {
  return (
    <main className='HomePage'>
        <Header />
        <HeroFood />
        <SearchBar />
    </main>
    
    )
}

export default HomePage;
