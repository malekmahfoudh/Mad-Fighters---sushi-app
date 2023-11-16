import React from "react";

function FoodCard({price, pieces}) {
    return ( 
        <article className="FoodCard">
            <section>
                <img src="./public/assets/img/mat.svg" alt=""/>
                <section className="info">
                    <p>{pieces} 12pc mix</p>
                    <p>{price} 130 sek</p>
                </section>
            </section>
        </article>
     );
}

export default FoodCard;