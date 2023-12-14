import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import EmptyCart from "../components/EmptyCart";
import NavBar from "../components/NavBar";
import { useDispatch, useSelector } from "react-redux";
import HorizontalFoodCard from "../components/HorizontalFoodCard";
import { clearCart } from "../redux/slices/cart";
import { Navigate, useNavigate, useParams, useSearchParams } from "react-router-dom";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { clearCart_update } from "../redux/slices/orderUpdate";

function CartUpdate() {
  const [products, setProducts] = useState([]);
  const cart = useSelector((state) => state.orderUpdate.cart);
  const [comment, setComment] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const orderNumber = searchParams.get("orderNumber");



  const onClick = () => {};
  useEffect(() => {
    setIsLoading(true);
    setProducts(cart);
    setIsLoading(false);
  }, [cart]);

  const makeOrder = async (e) => {
    e.preventDefault();
    const productArray = products.map((product) => {
      const productIds = [];
      for (let i = 0; i < product.quantity; i++) {
        productIds.push({ id: product.product.id });
      }
      return productIds;
    });

    const order = {
      comment: comment,
      products: productArray.flat(), // flat() makes an array of arrays into one array
    };
    
    const res = await fetch(`https://sushi-vibes.onrender.com/api/order/update/${orderNumber}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(order),
    });

    const resData = await res.json();
    if(resData.success){
      localStorage.setItem("OrderNumber", JSON.stringify(resData.theOrder.orderNumber));
      dispatch(clearCart_update());
      toast(`Your order #${resData.theOrder.orderNumber} has been sent`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }else {
      toast(resData.message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
 

    
 
    navigate("/home");
  };





  
  const calculateTotal = () => {
    if (!products || products.length === 0) {
      return 0;
    }
    const total = products.reduce(
      (acc, product) => acc + product.product.price * product.quantity,
      0
    );
    return total;
  };

  return (
    <section className="CartContainer">
      <Header />
      {products && products.length > 0 ? (
        <>
          {products.map((product, index) => (
            <React.Fragment key={index}>
              <HorizontalFoodCard
                product={product.product}
                quantity={product.quantity}
                updateOrder={true}
                clickEvent={onClick}
              />
            </React.Fragment>
          ))}
          <section className="OrderInfo">
            <input
              type="text"
              placeholder="Add a comment to the chef..."
              onChange={(e) => setComment(e.target.value)}
            />
            <h2>Total: {calculateTotal()} sek</h2>
            <button onClick={makeOrder}>Update order</button>

          </section>
        </>
      ) : (
        <EmptyCart />
      )}
      <NavBar />
    </section>
  );
}

export default CartUpdate;
