import Header from '../components/Header';
import NavBar from '../components/NavBar';
import HorizontalFoodCard from '../components/HorizontalFoodCard';
import { useEffect, useState } from 'react';

function Cart() {

  const [products,setProducts] = useState([]); 


  useEffect(()=> {
      fetch('./public/menu.json')
      .then(res => res.json())
      .then(data => setProducts(data)); 
  },[]);

    return ( 
        <section className='CartContainer'>
            <Header />
            <section className='AddedItems'>
                {products && products.map((product,index) => (
                <HorizontalFoodCard key={index} product={product}/>))}
            </section>
            <section className='OrderInfo'>
                <input type="text" placeholder='Add comment to the chef...' />
                <h2>Total: (sum)</h2>
                <button>Place order</button>
            </section>
            <NavBar cart={{opacity: '1'}}/>
        </section>
     );
}

export default Cart;