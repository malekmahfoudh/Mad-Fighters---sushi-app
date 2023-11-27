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
            {
        products && products.map((product,index) => (
           <HorizontalFoodCard key={index} product={product}/>))
      }
            <input type="text" placeholder='Add comment to the chef...' />
            <h2>Total: (sum)</h2>
            <button>Place order</button>
            <NavBar 
          cart={{opacity: '1'}}
        />
        </section>
     );
}

export default Cart;