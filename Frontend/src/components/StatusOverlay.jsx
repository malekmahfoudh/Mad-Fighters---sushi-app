import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import "swiper/scss";
import '../styles/StatusOverlay.scss';


export function StatusOverlay() {
    
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
        <section className="status-overlay-container">
            <h2>Your order number is:<br></br> </h2>
            
            <section className="order-info">
                <p>- list of ordered food -</p>
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
