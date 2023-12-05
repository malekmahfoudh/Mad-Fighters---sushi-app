import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import "swiper/scss";
import '../styles/OrderOverlay.scss';
import { useDispatch } from "react-redux";
import { addProductToCart } from "../redux/slices/orders";
export function OrderOverlay({ close, product }) {
  const dispatch = useDispatch();
  const overlayVariants = {
    hidden: { scale: 0 },
    visible: { scale: 1 },
    exit: { scale: 0 },
  };

  function addProduct() {
    dispatch(addProductToCart({ product }));
  }

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
          <h1>Order nr: {product.id}</h1>
          <section className="order-info">
            <h3>{product.id} x {product.title}</h3>
          </section>

          <section className="order-comment">
            <h3>Comment:</h3>
            <p>- comment from customer -</p>
          </section>

          <section className="button-container">
            <button className="confirm_btn" onClick={() => {
              addProduct();
              close();
            }}>CONFIRM</button>
          </section>
        </section>
      </motion.div>
    </AnimatePresence>
  );
}

export default OrderOverlay;
