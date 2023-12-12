import Header from "../components/Header";
import HeroFood from "../components/HeroFood";
import SearchBar from "../components/SearchBar";
import FeaturedFoods from "../components/FeaturedFoods";
import NavBar from "../components/NavBar";
import { useState } from "react";

import { ToastContainer } from "react-toastify";

function HomePage() {
  const [selectedCategory, setSelectedCategory] = useState("");

  return (
    <main className="HomePage">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <Header />
      <HeroFood />
      <SearchBar
        setSelectedCategory={setSelectedCategory}
        selectedCategory={selectedCategory}
      />
      <article>
        <h3>
          {selectedCategory ? selectedCategory.toUpperCase() : "TOP CHOICES"}
        </h3>
      </article>
      <FeaturedFoods selectedCategory={selectedCategory} />
      <NavBar />
    </main>
  );
}

export default HomePage;
