import React from "react";
import FoodCard from "../components/FoodCard";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import NavBar from "../components/NavBar";
import { useEffect, useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

function Menu({ onClick }) {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [products, setProducts] = useState([]);
  const stateProducts = useSelector((state) => state.products.products);

  const filteredProducts = selectedCategory
  ? products.filter((product) => product.category === selectedCategory)
  : products;


  useEffect(() => {
    setProducts(stateProducts);
  }, [stateProducts]);

  const navigate = useNavigate();
  return (
    <>
      <Header />
      <SearchBar setSelectedCategory={setSelectedCategory} selectedCategory={selectedCategory} />
      <section className="menu_cards">
        {filteredProducts &&
          filteredProducts.map((product, index) =>
            product ? (
              <FoodCard key={index} product={product} clickEvent={onClick} />
            ) : (
              ""
            )
          )}
      </section>
      <NavBar menu={{ opacity: "1" }} />
    </>
  );
}

export default Menu;
