import React from "react";
import WorkerFoodCard from "../components/WorkerFoodCard";
import Header from "../components/Header";
import WorkersNavBar from "../components/WorkersNavBar"
import { useEffect, useState } from "react";
import {  useSelector} from "react-redux";
import '../styles/WorkerFoodCard.scss';


function NewOrders({onClick}) {
 const [products,setProducts] = useState([]);
  const stateProducts = useSelector(state => state.products.products); 

  useEffect(()=> {
    setProducts(stateProducts);
  },[stateProducts]);


  return (
    <>
      <Header />
     
      <section>
      {
        products && products.map((product,index) => (
           product ?  <WorkerFoodCard key={index} product={product} clickEvent={onClick}/> : '' 
        ))
      }
      </section>
      
      <WorkersNavBar />
      
    </>
  );
}

export default NewOrders;