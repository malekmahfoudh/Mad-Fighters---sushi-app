import React from "react";
import WorkerFoodCard from "../components/WorkerFoodCard";
import Header from "../components/Header";
import WorkersNavBar from "../components/WorkersNavBar";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import '../styles/WorkerFoodCard.scss';
import '../styles/NewOrders.scss';

function NewOrders({ onClick }) {
  const [products, setProducts] = useState([]);
  const stateProducts = useSelector(state => state.products.products);

  useEffect(() => {
    setProducts(stateProducts);
  }, [stateProducts]);

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

      <WorkersNavBar />
    </>
  );
}

export default NewOrders;
