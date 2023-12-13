import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "swiper/scss";
import '../styles/StatusOverlay.scss';
import { getProductsWithQuantity } from "../utils/utils.js";

export   function StatusOverlay({order,locked, close}) {
  const [products, setProducts] = useState([]);
    const overlayVariants = {
    hidden: { scale: 0 },
    visible: { scale: 1 },
    exit: { scale: 0 },
  };

  async function getProducts() {
    const productsWithQuantity = await getProductsWithQuantity(order.order.products);
    setProducts(productsWithQuantity);
  }

  useEffect(() => {
    getProducts();

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
        <section className="status-overlay-container">
            <h2>{!locked?'🔓': '🔒'} Your order number is: #{order.order.orderNumber} </h2>
            
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
                    <td>{item.title}</td>
                  </tr>
                ))
                }
              </tbody>

            </table>

            <section className="button-container">
            {!locked ? (
            <button className="confirm_btn" onClick={() => {}}>UPDATE</button>
            ) : (
              ''
            )}
          </section>
            </section>

            <section className="img">
            <img src="./public/assets/icons/order-prepare.svg" alt="order status" />
            </section>

        </section>
      </motion.div>
    </AnimatePresence>
  );
}

export default StatusOverlay;
