import React from "react";
import { useEffect, useState } from "react";  
import FoodCard  from "../components/FoodCard";


function FeaturedFoods({onClick}) {
  const [products,setProducts] = useState([]); 


  useEffect(()=> {
      fetch('./public/menu.json')
      .then(res => res.json())
      .then(data => setProducts(data)); 
  },[]);


  return (
    <section className='FoodCard_wrapper' >

      {
        products && products.map((product,index) => (
            
           product.featured ?  <FoodCard key={index} product={product} clickEvent={onClick}/> : '' //kom iåg att lägga till .featured här sen 
        ))
      }
   
    </section>
  );
}

export default FeaturedFoods;
