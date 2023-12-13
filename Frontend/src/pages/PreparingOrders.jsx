import React from "react";
import WorkerFoodCard from "../components/WorkerFoodCard";
import Header from "../components/Header";
import WorkersNavBar from "../components/WorkersNavBar";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import '../styles/WorkerFoodCard.scss';
import '../styles/NewOrders.scss';

function PreparingOrders({ onClick }) {
  const [products, setProducts] = useState([]);
  const getNewOrders = async () => {
    const response = await fetch("https://sushi-vibes.onrender.com/api/worker/orders/verified?user=worker&pass=0000");
    const data = await response.json();
    setProducts(data.orders);
  };
  console.log(products);

  useEffect(() => {
    getNewOrders();
  },[]);

  return (
    <>
      <Header />
      <section className="NewOrdersContainer">
      <h2>Preparing orders</h2>

      <section>
        {products.length > 0 ? (
          products.map((product, index) => (
            product ? <WorkerFoodCard key={index} product={product} color="preparing" clickEvent={onClick} /> : ''
          ))
        ) : (
          <p className="orders-empty">No orders are currently being prepared</p>
        )}
      </section>
      </section>
      <WorkersNavBar />
    </>
  );
}

export default PreparingOrders;