import React from "react";
import '../styles/EmptyCart.scss'

function EmptyCart() {
    return ( 
        <article className="EmptyCartContainer">
            <section>
                <img src="  /assets/img/empty-cart.svg" alt="empty plate"/>
                <p>Your plate is empty...</p>
            </section>
        </article>
     );
}

export default EmptyCart;