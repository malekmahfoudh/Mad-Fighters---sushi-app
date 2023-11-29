import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "swiper/scss";
import QuantitySelector from "./QuantitySelector";
import { useDispatch } from "react-redux";
import { addProductToCart } from "../redux/slices/cart";

export function Overlay({ close, product }) {
  const [quantity, setQuantity] = useState(1);
  const price = product.price;

  const distpatch = useDispatch();  
  const overlayVariants = {
    hidden: { scale: 0 },
    visible: { scale: 1 },
    exit: { scale: 0 },
  };  

  function addProduct() {
    console.log(product);
    if (quantity > 0) {
      for (let i = 0; i < quantity; i++) {
        distpatch(addProductToCart(product));
      }
    }
  }

  return (
    <AnimatePresence>
      <motion.main
        className="overlay"
        variants={overlayVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <button
          className="close_btn"
          style={{ position: "absolute", top: "10px", right: "10px" }}
          onClick={close}
        ></button>
        <img src={`../${product.image}`}></img>
        <section
          className={`ChosenDishContainer  ${
            product.vegetarian ? "ChosenDishContainer-vegetarian" : ""
          }`}
        >
          <div className="ChosenDishInfo">
            <div className="ChosenDishTitle">
              <h3>{product.title}</h3>
              <h3>{product.price} sek</h3>
            </div>
            <div className="ChosenDishInfo_container">
              <p className="description">{product.description}</p>
              <div className="ChosenDishDescription">
                <p>Pieces: {product.info.quantity}</p>
                <p>{product.info.allergy}</p>
                <p>{product.info.spice}</p>
              </div>
            </div>
            <div className="QuantitySelector">
              <QuantitySelector price={price} setQuantity={setQuantity} quantity={quantity} />
            </div>
            <div className="ChosenDishAdd">
              <button className="add_btn" onClick = {addProduct}></button>
            </div>
          </div>
        </section>
      </motion.main>
    </AnimatePresence>
  );
}
