import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import EmptyCart from '../components/EmptyCart';
import NavBar from '../components/NavBar';
import { useDispatch, useSelector } from 'react-redux';
import HorizontalFoodCard from '../components/HorizontalFoodCard';
import { clearCart } from '../redux/slices/cart';
import { Navigate, useNavigate } from 'react-router-dom';

function Cart() {
  const [products,setProducts] = useState([]);
  const cart = useSelector(state => state.cart.cart);
  const [comment,setComment] = useState('');
  const [response , setResponse] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();
  const navigate = useNavigate();




  const onClick = () => {};
  useEffect(()=> {
    setIsLoading(true);
    setProducts(cart);
    setIsLoading(false);
  },[cart]);

//   {
//     "comment":"kommentar till kocken",
//     "products": [
//         {
//             "id":"1"
//         },
//         {
//             "id":"2"
//         }    
//     ]
// }
  const makeOrder = async (e) => {
    e.preventDefault();
    const productArray = products.map((product) => {
      const productIds = [];
      for (let i = 0; i < product.quantity; i++) {
        productIds.push({ id: product.product.id });
      }

      return productIds;
    })
    const order = {
      comment: comment,
      products: productArray.flat(), // flat() makes an array of arrays into one array
    }
    localStorage.setItem("cart", JSON.stringify(order));
    const res = await fetch("https://sushi-vibes.onrender.com/api/order", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(order),
    });
    setResponse(await res.json());

    dispatch(clearCart());
    navigate('/home');
  }

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
            <input type="text" placeholder='Add a comment to the chef...' onChange={(e)=> setComment(e.target.value)} />
            <h2>Total: {calculateTotal()} sek</h2>
            <button onClick={makeOrder}>Place order</button>
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