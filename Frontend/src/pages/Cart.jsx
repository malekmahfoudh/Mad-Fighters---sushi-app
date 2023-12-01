import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import EmptyCart from '../components/EmptyCart';
import NavBar from '../components/NavBar';
import { useSelector } from 'react-redux';
import HorizontalFoodCard from '../components/HorizontalFoodCard';

function Cart() {
  const [products,setProducts] = useState([]);
  const cart = useSelector(state => state.cart.cart);
  
  const onClick = (product) => {};
  useEffect(()=> {
    setProducts(cart);
  },[cart]);

  console.log('cart side: ', products);

  const calculateTotal = () => {
    if (!products || products.length === 0) {
      return 0;
    }
    const total = products.reduce((acc, product) => acc + product.product.price * product.quantity, 0);
    return total;
  };

  return ( 
    <section className='CartContainer'>
      <Header />
      {products && products.length > 0 ? (
        <>
          {products.map((product, index) => (
            <React.Fragment key={index}>
              <HorizontalFoodCard product={product.product} quantity={product.quantity} clickEvent={onClick} />
            </React.Fragment>
          ))}
          <section className='OrderInfo'>
            <input type="text" placeholder='Add a comment to the chef...' />
            <h2>Total: {calculateTotal()} sek</h2>
            <button>Place order</button>
          </section>
        </>
      ) : (
        <EmptyCart />
      )}
      <NavBar cart={{ opacity: '1' }} />
    </section>
  );
}

export default Cart;