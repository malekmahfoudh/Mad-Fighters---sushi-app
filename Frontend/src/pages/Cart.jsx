import React from 'react';
import Header from '../components/Header';
import EmptyCart from '../components/EmptyCart';
import NavBar from '../components/NavBar';

function Cart() {
    return ( 
        <section className='CartContainer'>
            <Header />
            <EmptyCart />
            <NavBar 
          cart={{opacity: '1'}}
        />
        </section>
     );
}

export default Cart;