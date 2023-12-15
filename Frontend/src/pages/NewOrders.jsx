import React from "react";
import WorkerFoodCard from "../components/WorkerFoodCard";
import Header from "../components/Header";
import WorkersNavBar from "../components/WorkersNavBar";
import { useEffect, useState } from "react";
import "../styles/WorkerFoodCard.scss";
import "../styles/NewOrders.scss";

function NewOrders({ onClick }) {
  const [products, setProducts] = useState([]);
  const [newOrdersCount, setNewOrdersCount] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const getNewOrders = async () => {
    const response = await fetch(
      "https://sushi-vibes.onrender.com/api/worker/orders?user=worker&pass=0000"
    );
    const data = await response.json();
    setProducts(await data.orders);
    setNewOrdersCount(await data.orders.length);
  };

  useEffect(() => {
    setIsLoading(true);
    
    getNewOrders();
    setIsLoading(false);
  },[]);

  return (
    <>
      <Header />
      {isLoading ? <p className="loading">Loading...</p> : (
        <section className="NewOrdersContainer">
          <h2>New orders</h2>
          <section>
            {products.length > 0 ? (
              products.map((product, index) =>
                product ? (
                  <WorkerFoodCard
                    key={index}
                    product={product}
                    clickEvent={onClick}
                  />
                ) : (
                  ""
                )
              )
            ) : (
              <p className="orders-empty">No incoming orders</p>
            )}
          </section>

</section>
      ) }
     
        <WorkersNavBar newOrdersCount={newOrdersCount} />
    </>
  );
}

export default NewOrders;
