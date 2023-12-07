import React from "react";
import { useSelector } from "react-redux";
import FoodCard from "../components/FoodCard";

function FeaturedFoods({ onClick, selectedCategory }) {
  const products = useSelector((state) => state.products.products);

  const filteredProducts = selectedCategory
    ? products.filter((product) => product.category === selectedCategory)
    : products.filter((product) => product.featured);

  return (
    <section className="FoodCard_wrapper">
      {filteredProducts &&
        filteredProducts.reverse().map((product, index) => (
          <FoodCard key={index} product={product} clickEvent={onClick} />
        ))}
    </section>
  );
}

export default FeaturedFoods;
