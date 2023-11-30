import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import "swiper/scss";
import '../styles/OrderOverlay.scss';

export function OrderOverlay({ close, product }) {
  const price = product.price;

  const overlayVariants = {
    hidden: { scale: 0 },
    visible: { scale: 1 },
    exit: { scale: 0 },
  };

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
          <h1>Order nr: {product.id}</h1>
          <section className="order-info">
            <h3>{product.id} x {product.title}</h3>
          </section>

          <section className="order-comment">
            <h3>Comment:</h3>
            <p>- comment from customer -</p>
          </section>
      
          <button onClick={close}>YES</button>
        </section>
      </motion.div>
    </AnimatePresence>
  );
}

