import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { getProductsWithQuantity } from "../utils/utils.js";
const process = import.meta.env;
import "swiper/scss";
import '../styles/OrderOverlay.scss';

export function OrderOverlay({ close, product }) {
  const [order, setOrder] = useState({});
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const overlayVariants = {
    hidden: { scale: 0 },
    visible: { scale: 1 },
    exit: { scale: 0 },
  };



  const getOrder = async () => {
    try {
      const response = await fetch(`${process.VITE_BACKEND_HOST}/api/order/status/${product.orderNumber}`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setOrder(data.order);
      setProducts(await getProductsWithQuantity(data.order.products));
    } catch (error) {
      console.error('A problem occurred fetching the order:', error);
    }
  }

  const verifyOrder = async () => {
    try {
      const response = await fetch(`${process.VITE_BACKEND_HOST}/api/worker/orders/verify/${product.orderNumber}?user=worker&pass=0000`, {
        method: "PUT"
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      window.location.reload();
    } catch (error) {
      console.error('A problem occurred verifying the order:', error);
    }
  };
 
  useEffect(() => {
    const fetchOrder = async () => {
      await getOrder();
    };
    fetchOrder();
  }, []);

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
            <div className="table-container">
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
            </div>
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
