import React from "react";
import WorkerFoodCard from "../components/WorkerFoodCard";
import Header from "../components/Header";
import WorkersNavBar from "../components/WorkersNavBar";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import '../styles/WorkerFoodCard.scss';
import '../styles/NewOrders.scss';

function ReadyOrders({ onClick }) {
  const [products, setProducts] = useState([]);

  const getNewOrders = async () => {
    const response = await fetch("https://sushi-vibes.onrender.com/api/worker/orders/done?user=worker&pass=0000");
    const data = await response.json();
    setProducts(data.orders);
  };


  useEffect(() => {
    try {
      getNewOrders();
    } catch (error) {
      console.log(error);
    }
    
  },[]);

  return (
    <>
      <Header />
      <section className="NewOrdersContainer">
      <h2>Ready for pickup</h2>

      <section>
        {products.length > 0 ? (
          products.map((product, index) => (
            product ? <WorkerFoodCard key={index} product={product} color="ready" clickEvent={onClick} /> : ''
          ))
        ) : (
          <p className="orders-empty">No orders are ready for pickup</p>
        )}
      </section>
      </section>
      <WorkersNavBar />
    </>
  );
}

export default ReadyOrders;