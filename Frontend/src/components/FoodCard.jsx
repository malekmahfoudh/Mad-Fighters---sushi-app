import React from "react";
import { useState } from "react";  
import { Overlay } from '../components/ChosenDish';

function FoodCard({ product= {}}) {
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
        <img src={`../${product.image}`}></img>
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