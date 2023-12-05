import React from "react";
import { useEffect, useState } from "react";  
import FoodCard  from "../components/FoodCard";


function FeaturedFoods({onClick, selectedCategory}) {
  const [products,setProducts] = useState([]); 


  useEffect(()=> {
      fetch('./public/menu.json')
      .then(res => res.json())
      .then(data => setProducts(data)); 
  },[]);

  const filteredProducts = selectedCategory ? products.filter(product => product.category === selectedCategory) 
  : products.filter(product => product.featured);

  return (
    <section className='FoodCard_wrapper' >

{
        filteredProducts && filteredProducts.map((product,index) => (
           <FoodCard key={index} product={product} clickEvent={onClick}/> 
        ))
      }
   
    </section>
  );
}

export default FeaturedFoods;