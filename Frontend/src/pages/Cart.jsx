import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import EmptyCart from "../components/EmptyCart";
import NavBar from "../components/NavBar";
import { useDispatch, useSelector } from "react-redux";
import HorizontalFoodCard from "../components/HorizontalFoodCard";
import { clearCart } from "../redux/slices/cart";
import { Navigate, useNavigate } from "react-router-dom";
const process = import.meta.env;
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Cart() {
  const [products, setProducts] = useState([]);
  const cart = useSelector((state) => state.cart.cart);
  const [comment, setComment] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();
  const navigate = useNavigate();


  const onClick = () => {};
  useEffect(() => {
    setIsLoading(true);
    setProducts(cart);
    setIsLoading(false);
  }, [cart]);

  const toastId = 'orderToast';

  const makeOrder = async (e) => {
    e.preventDefault();
    try {
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
      
      const res = await fetch(`${process.VITE_BACKEND_HOST}/api/order`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(order),
      });
      const resData = await res.json();
      localStorage.setItem("OrderNumber", JSON.stringify(resData.theOrder.orderNumber));
      dispatch(clearCart());
      console.log("about to show toast");
      if (!toast.isActive(toastId)) {
        console.log("showing toast");
        toast('Your order has been placed!', { toastId });
      } else {
        console.log("toast already showing");
      }
  
      navigate("/home");
    } catch (error) {
        console.log(error);
    }
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
                updateOrder={false}
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
            <button onClick={makeOrder}>Place order</button>
          </section>
        </>
      ) : (
        <EmptyCart />
      )}

    </section>
  );
}

export default Cart;
