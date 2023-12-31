import React from "react";
import WorkerFoodCard from "../components/WorkerFoodCard";
import Header from "../components/Header";
import WorkersNavBar from "../components/WorkersNavBar";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import '../styles/WorkerFoodCard.scss';
import '../styles/NewOrders.scss';
const process = import.meta.env;
function PreparingOrders({ onClick }) {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  
  const getNewOrders = async () => {
    const response = await fetch(`${process.VITE_BACKEND_HOST}/api/worker/orders/verified?user=worker&pass=0000`);
    const data = await response.json();
    setProducts(await data.orders);
  };

  useEffect(() => {
    setIsLoading(true);
    try {
    getNewOrders();
      
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  },[]);

  return (
    <>
      <Header />
      <section className="NewOrdersContainer">
        <h2>Preparing orders</h2>
        {isLoading ? <p className="loading">Loading...</p> : (
          <section>
            {products.length > 0 ? (
              products.map((product, index) => (
                product ? <WorkerFoodCard key={index} product={product} color="preparing" clickEvent={onClick} /> : ''
              ))
            ) : (
              <p className="orders-empty">No orders are currently being prepared</p>
            )}
          </section>
        )}

      </section>
      <WorkersNavBar />
    </>
  );
}

export default PreparingOrders;