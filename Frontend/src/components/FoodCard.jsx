import React from "react";
import { useEffect, useState } from "react";  
import { Overlay } from '../components/ChosenDish';

function FoodCard({ menu, product }) {
    const [isOverlayOpen, setIsOverlayOpen] = useState(false);

    const openOverlay = () => {
      setIsOverlayOpen(true);
    }
  
    const closeOverlay = () => { 
      setIsOverlayOpen(false);
    }

  return (
    <>
      <article className={`FoodCard ${product.vegetarian ? 'FoodCard-vegetarian': ''}` } onClick={openOverlay}>
        
        <section>
          <img src="./public/assets/img/mat.svg" alt="" />
          <section className="info">
            <p> {product.title} </p>
            <p> {product.price} sek</p>
          </section>
        </section>
      </article>
      {isOverlayOpen && <Overlay product={product} close={closeOverlay} />}
    </>
  );
}

export default FoodCard;