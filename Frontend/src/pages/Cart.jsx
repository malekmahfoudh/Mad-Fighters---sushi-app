import React from 'react';
import Header from '../components/Header';
import EmptyCart from '../components/EmptyCart';

function Cart() {
    return ( 
        <section className='CartContainer'>
            <Header />
            <EmptyCart />
        </section>
     );
}

export default Cart;