import React from "react";

function FoodCard({ price, pieces, onClick }) {
  return (
    <main className='FoodCard_wrapper' >
      <article className="FoodCard" onClick={onClick}>
        <section>
          <img src="./public/assets/img/mat.svg" alt="" />
          <section className="info">
            <p>{pieces} 12pc mix</p>
            <p>{price} 130 sek</p>
          </section>
        </section>
      </article>
    </main>
  );
}

export default FoodCard;
