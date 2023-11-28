import React from "react";
import FoodCard from "../components/FoodCard";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import NavBar from "../components/NavBar"
import { useEffect, useState } from "react";
import { useNavigate, NavLink } from 'react-router-dom';
import {  useSelector} from "react-redux";


function Menu({onClick}) {
 const [products,setProducts] = useState([]);
  const stateProducts = useSelector(state => state.products.products); 

  useEffect(()=> {
    setProducts(stateProducts);
  },[stateProducts]);


    const navigate = useNavigate();
  return (
    <>
      <Header />
      <SearchBar />
      <section className="menu_cards">
      {
        products && products.map((product,index) => (
           product ?  <FoodCard key={index} product={product} clickEvent={onClick}/> : '' 
        ))
      }
      </section>
      <NavBar />
      
    </>
  );
}

export default Menu;