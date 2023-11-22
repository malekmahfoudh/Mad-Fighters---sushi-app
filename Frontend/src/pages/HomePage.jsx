import Header from "../components/Header";
import HeroFood from "../components/HeroFood";
import SearchBar from "../components/SearchBar";
import FeaturedFoods from "../components/FeaturedFoods";

function HomePage() {
  return (
    <main className="HomePage">
      <Header />
      <HeroFood />
      <SearchBar />
      <article>
        <h3>Top choices</h3>
      </article>
      <FeaturedFoods />
    </main>
  );
}

export default HomePage;
