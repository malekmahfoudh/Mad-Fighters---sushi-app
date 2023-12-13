import Header from "../components/Header";
import HeroFood from "../components/HeroFood";
import SearchBar from "../components/SearchBar";
import FeaturedFoods from "../components/FeaturedFoods";
import NavBar from "../components/NavBar";
import { useState } from "react";
import { useRef } from "react";
import { motion } from "framer-motion";

import { ToastContainer } from "react-toastify";

function HomePage() {
  const [selectedCategory, setSelectedCategory] = useState("");

  const constraintsRef = useRef(null);

  return (
    <main className="HomePage">
      <motion.div 
        className="drag-area" 
        ref={constraintsRef}
        >
        <motion.button
          className="draggable_button"
          drag
          dragConstraints={constraintsRef}
          style={{ position: "absolute", zIndex: 1000 }}
        >
        </motion.button>

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
      </motion.div>

    </main>
  );
}

export default HomePage;
