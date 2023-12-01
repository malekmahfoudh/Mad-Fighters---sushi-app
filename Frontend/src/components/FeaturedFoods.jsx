import React from "react";
import { useEffect, useState } from "react";  
import FoodCard  from "../components/FoodCard";
import { useSelector } from "react-redux";


function FeaturedFoods({onClick}) {
  const [products,setProducts] = useState([]); 

  const menu = useSelector(state => state.products.products);
  console.log(menu);

  useEffect(()=> {
    if(menu) {
      const featured = menu.filter((product) => product.featured === true);
      setProducts(featured);
    }
  },[menu]);


  return (
    <section className='FoodCard_wrapper' >

      {
        products && products.map((product,index) => (
            
           product.featured ?  <FoodCard key={index} product={product} clickEvent={onClick}/> : '' 
        ))
      }
   
    </section>
  );
}

export default FeaturedFoods;
