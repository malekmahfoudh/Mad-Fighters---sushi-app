import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import '../styles/NewOrders.scss';
import WorkersNavBar from '../components/WorkersNavBar';
import { useSelector } from 'react-redux';
import WorkerFoodCard from '../components/WorkerFoodCard';

function PreparingOrders() {
    const [products,setProducts] = useState([]);
    const cart = useSelector(state => state.cart.cart);
    
    const onClick = (product) => {};

    useEffect(()=> {
        setProducts(cart);
      },[cart]);


  return (
    <>
      <Header />
      <h2>Preparing orders</h2>
      {products && products.length > 0 ? (
        <>
      {products.map((product, index) => (
            <React.Fragment key={index}>
              <WorkerFoodCard product={product.product} clickEvent={onClick} />
            </React.Fragment>
          ))}
        </>
      ) : (
        <p className='orders-empty'>No orders are currently being prepared</p>
      )}

      <WorkersNavBar/>
    </>
  );
}

export default PreparingOrders;
