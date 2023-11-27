import QuantitySelector from "./QuantitySelector";

function HorizontalFoodCard() {
    return ( 
        <article className="HorizontalWrapper">
          <img src="../../public/assets/img/bibimbap.svg" alt="" />
            <section className="info">
              <p> title </p>
              <p> price sek</p>
              {/* <QuantitySelector /> */}
            </section>
        </article>
     );
}

export default HorizontalFoodCard;