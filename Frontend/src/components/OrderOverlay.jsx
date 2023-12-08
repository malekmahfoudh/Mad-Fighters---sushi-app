import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "swiper/scss";
import '../styles/OrderOverlay.scss';
import { useDispatch } from "react-redux";
import { addProductToCart } from "../redux/slices/orders";


export function OrderOverlay({ close, product }) {
  const dispatch = useDispatch();
  const [order, setOrder] = useState({});
  const [products, setProducts] = useState([]);

  const overlayVariants = {
    hidden: { scale: 0 },
    visible: { scale: 1 },
    exit: { scale: 0 },
  };

  const verifyOrder = async () => {
    const verifiedOrder = await fetch(`https://sushi-vibes.onrender.com/api/worker/orders/verify/${product.orderNumber}?user=worker&pass=0000`, {
      method: "PUT"
    });
    console.log(await verifiedOrder.json());

  };


  const getOrder = async () => {
    const response = await fetch(`https://sushi-vibes.onrender.com/api/order/status/${product.orderNumber}`);
    const data = await response.json();
    setOrder(data.order);
    setProducts(data.order.products);
    console.log(data);
  } 

  useEffect(() => {
    getOrder();
  }
  ,[]);

  

  return (
    <AnimatePresence>
      <motion.div
        className="order-overlay"
        variants={overlayVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <section className="order-overlay-container">
          <button className="close_btn" onClick={close}></button>
          <h2>Order nr: {product.orderNumber}</h2>
          <section className="order-info">
            {products && products.map((item, index) => (
              <h3 key={index}>{item.title}</h3>
            ))
              }
          </section>

          <section className="order-comment">
            <h3>Comment: {order.comment}</h3>
            <p>- comment from customer -</p>
          </section>

          <section className="button-container">
            <button className="confirm_btn" onClick={() => {
              verifyOrder();
              close();
            }}>CONFIRM</button>
          </section>
        </section>
      </motion.div>
    </AnimatePresence>
  );
}

export default OrderOverlay;
