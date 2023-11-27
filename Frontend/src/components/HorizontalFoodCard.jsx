import React from "react";
import QuantitySelector from "./QuantitySelector";
import SmallSelector from "./SmallSelector";

function HorizontalFoodCard({ menu, product }) {
    const price = product.price;

  return (
      <article className={`HorizontalWrapper ${product.vegetarian ? 'HorizontalFoodCard-vegetarian': ''}` }>

        <img src={`../${product.image}`}></img>
          <section className="HorizontalInfo">
            <p> {product.title} </p>
            <p> {product.price} sek</p>
           <SmallSelector />
          </section>
      </article>
  );
}

export default HorizontalFoodCard;