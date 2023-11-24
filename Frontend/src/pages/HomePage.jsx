import Header from '../components/Header';
import HeroFood from '../components/HeroFood';
import SearchBar from '../components/SearchBar';
import FeaturedFoods from '../components/FeaturedFoods';
import NavBar from '../components/NavBar';
import { Overlay } from '../components/ChosenDish';
import { useState } from 'react';

function HomePage() {

  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuClick = () => {
    console.log("Menu clicked");
    setMenuOpen(!menuOpen); 
  };

  return (
    <main className='HomePage'>
        <Header />
        <HeroFood />
        <SearchBar />
        <article>
          <h3>Top choices</h3>
        </article>
        <FeaturedFoods />
        <NavBar
          menu={{opacity: '1'}} 
          menuOpen={menuOpen} 
          onMenuClick={handleMenuClick}/>
    </main>
  );
}

export default HomePage;
