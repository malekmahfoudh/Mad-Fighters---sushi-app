import React from "react";
import '../styles/WorkerFoodCard.scss';
import { useState } from "react";  
import { OrderOverlay } from '../components/OrderOverlay';

function WorkerFoodCard({ product= {}, color}) {
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);
  
  const openOverlay = () => {
    setIsOverlayOpen(true);
  }
  
  const closeOverlay = () => { 
    setIsOverlayOpen(false);
  }

  return (
    <>
    <article className={`worker-foodcard-wrapper ${color}`} onClick={openOverlay}>
      <section className="info">
        <p>Order nr:<br></br> {product.orderNumber}</p>
      </section>
      <img src=" ./assets/icons/takeaway.svg/" alt="take away" />
    </article>
    {isOverlayOpen && <OrderOverlay product={product} close={closeOverlay} />}
    </>
  );
}

export default WorkerFoodCard;
