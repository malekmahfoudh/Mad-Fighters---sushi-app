import Header from '../components/Header';
import HeroFood from '../components/HeroFood';
import SearchBar from '../components/SearchBar';
import FeaturedFoods from '../components/FeaturedFoods';
import NavBar from '../components/NavBar';
import { useState } from 'react';

function HomePage() {
  const [selectedCategory, setSelectedCategory] = useState('');

  return (
    <main className='HomePage'>
        <Header />
        <HeroFood />
        <SearchBar setSelectedCategory={setSelectedCategory} selectedCategory={selectedCategory} />
        <article>
          <h3>{selectedCategory ? selectedCategory.toUpperCase() : "TOP CHOICES"}</h3>
        </article>
        <FeaturedFoods selectedCategory={selectedCategory} />
        <NavBar />
    </main>
  );
}

export default HomePage;