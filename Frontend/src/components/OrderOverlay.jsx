import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { getProductsWithQuantity } from "../utils/utils.js";
import "swiper/scss";
import '../styles/OrderOverlay.scss';



export function OrderOverlay({ close, product }) {
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
    getOrder();
    console.log(await verifiedOrder.json());
    window.location.reload();
  };


  const getOrder = async () => {
    const response = await fetch(`https://sushi-vibes.onrender.com/api/order/status/${product.orderNumber}`);
    const data = await response.json();
    setOrder(data.order);

    //getProductsWithQuantity(data.order.products); is a function that converts the array of products into an array of objects with the product and the quantity
    setProducts(await getProductsWithQuantity(data.order.products));
  } 
  
 
  useEffect(() => {
    getOrder();
    console.log("order", order);
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
            <table className="products-table">
              <thead>
              <tr>
                <th>Qt</th>
                <th>Product</th>
              </tr>
              </thead> 
              <tbody>
                {products && products.map((item, index) => (
                  <tr key={index}>
                    <td>{item.quantity}</td>
                    <td>{item.product.title}</td>
                  </tr>
                ))
                }
              </tbody>

            </table>
          </section>

          <section className="order-comment">
         
            <h3>Comment:</h3>
            <p>{order.comment}</p>
            
          </section>

          {/* button to confirm the order */}
          {order && order.status === "done" ? (<p>The order is ready..</p>) : (
          <section className="button-container">
            {order && order.status === 'pending' ? (
            <button className="confirm_btn" onClick={() => {
              verifyOrder();
              close();
            }}>CONFIRM</button>
            ) : (
            <button className="confirm_btn" onClick={() => {
              verifyOrder();
              close();
            }}>Done</button>
            )}
          </section>
          
          )}
        </section>
      </motion.div>
    </AnimatePresence>
  );
}

export default OrderOverlay;
