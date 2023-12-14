import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "swiper/scss";
import '../styles/StatusOverlay.scss';
import { getProductsWithQuantity } from "../utils/utils.js";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, clearCart } from "../redux/slices/cart.js";


export   function StatusOverlay({order,locked, orderStatusColor }) {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const cart = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();
    const overlayVariants = {
    hidden: { scale: 0 },
    visible: { scale: 1 },
    exit: { scale: 0 },
  };


  async function getProducts() {
    const productsWithQuantity = await getProductsWithQuantity(order.order.products);
    setProducts(productsWithQuantity);
    if(!order.order.locked){
      productsWithQuantity.forEach((product) => {
        if(cart && cart.length <= 0) {
        dispatch(addToCart(product));
      } }) ;
    }else {
      dispatch(clearCart());
    }
  }


  function orderStatus() {
    if (order.order.status === 'pending') {
      return 'Your order waits for confirmation';
    }
    if (order.order.status === 'verified') {
      return 'Your order is being prepared';
    }
    if (order.order.status === 'done') {
      return 'Your order is ready for pickup';
    }
  }

 

  useEffect(() => {
    setIsLoading(true);
    getProducts();
    setIsLoading(false);
    
  }, []);

  return (
    <AnimatePresence>
      <div className="order-overlay" >
        {isLoading ? <p className="loading">Loading..</p> : (
           <motion.section 
           className="status-overlay-container"
           animate="visible"
           variants={overlayVariants}
           initial="hidden"
           exit="exit"
           >
           <h2>{!locked?'🔓': '🔒'} Your order number is: #{order?.order?.orderNumber} </h2>
           
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

           <section className="button-container">
           {!locked ? (
           <button className="confirm_btn" onClick={() => {}}>UPDATE</button>
           ) : (
             ''
           )}
         </section>
           </section>

           <section className="order_status-progress">
                <div style={orderStatusColor()} className="order_status-circle">
                  <h3>{orderStatus()}</h3>
                </div>
            </section>

       </motion.section>


        )}
       
      </div>
    </AnimatePresence>
  );
}

export default StatusOverlay;
