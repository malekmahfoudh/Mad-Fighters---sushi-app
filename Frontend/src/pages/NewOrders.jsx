import React from "react";
import WorkerFoodCard from "../components/WorkerFoodCard";
import Header from "../components/Header";
import WorkersNavBar from "../components/WorkersNavBar";
import { useEffect, useState } from "react";
import '../styles/WorkerFoodCard.scss';
import '../styles/NewOrders.scss';

function NewOrders({ onClick }) {
  const [products, setProducts] = useState([]);
  const [newOrdersCount, setNewOrdersCount] = useState(0);

  const getNewOrders = async () => {
    const response = await fetch("https://sushi-vibes.onrender.com/api/worker/orders?user=worker&pass=0000");
    const data = await response.json();
    setProducts(data.orders);
    setNewOrdersCount(data.orders.length);
  };

  useEffect(() => {
    getNewOrders();
  },[]);

  return (
    <>
      <Header />
      <h2>New orders</h2>
      <section>
        {products.length > 0 ? (
          products.map((product, index) => (
            product ? <WorkerFoodCard key={index} product={product} clickEvent={onClick} /> : ''
          ))
        ) : (
          <p className="orders-empty">No incoming orders</p>
        )}
      </section>

      <WorkersNavBar newOrdersCount={newOrdersCount} />
    </>
  );
}

export default NewOrders;