import Header from "../components/Header";
import HeroFood from "../components/HeroFood";
import SearchBar from "../components/SearchBar";
import FeaturedFoods from "../components/FeaturedFoods";
import NavBar from "../components/NavBar";
import { motion } from "framer-motion";

function HomePage() {
  return (
    <>
      <Header />
      <main className="HomePage">
        <HeroFood />
        <SearchBar />
        <article>
          <h3>Top choices</h3>
        </article>
        <FeaturedFoods />
      </main>
      <NavBar />
    </>
  );
}

export default HomePage;
