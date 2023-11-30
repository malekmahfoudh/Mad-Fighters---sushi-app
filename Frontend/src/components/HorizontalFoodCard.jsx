import React, { useState } from "react";
import SmallSelector from "./SmallSelector";

function HorizontalFoodCard({ menu, product }) {
    const price = product.price;
    const [quantity, setQuantity] = useState(1);

  return (
      <article className={`HorizontalWrapper ${product.vegetarian ? 'HorizontalFoodCard-vegetarian': ''}` }>

        <img src={`../${product.image}`}></img>
          <section className="HorizontalInfo">
            <p> {product.title} </p>
            <p> {product.price} sek</p>
           <SmallSelector setQuantity={setQuantity} quantity={quantity} />
          </section>
      </article>
  );
}

export default HorizontalFoodCard;