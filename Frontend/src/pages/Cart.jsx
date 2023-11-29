import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import EmptyCart from '../components/EmptyCart';
import NavBar from '../components/NavBar';
import { useSelector } from 'react-redux';
import FoodCard from '../components/FoodCard';
import HorizontalFoodCard from '../components/HorizontalFoodCard';

function Cart() {
  const [products,setProducts] = useState([]);
  const cart = useSelector(state => state.cart.cart);
  
  const onClick = (product) => {};
  useEffect(()=> {
    setProducts(cart);
  },[cart]);

  console.log('cart side: ', products);
    return ( 
        <section className='CartContainer'>
            <Header />
            {
              products ? products.map((product,index) =>  {
                return (
                   <HorizontalFoodCard key={index} product={product} clickEvent={onClick} />  
                )
              }) : (<EmptyCart />)
            }
            
            <NavBar 
          cart={{opacity: '1'}}
        />
        </section>
     );
}

export default Cart;