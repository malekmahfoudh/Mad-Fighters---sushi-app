import React from "react";
import FoodCard from "../components/FoodCard";
import FeaturedFoods from "../components/FeaturedFoods";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import { useNavigate, NavLink } from 'react-router-dom';

function Menu({product}) {

    const navigate = useNavigate();
  return (
    <>
      <Header />
      <SearchBar />
      <FoodCard 
        {
            ...product && product.map((product,index) => ( 
                <FoodCard key={index} product={product} clickEvent={onClick} />))
          }
      />
      
    </>
  );
}

export default Menu;