import { updateQuantityInCart, removeProductFromCart } from "../redux/slices/cart";
import { useDispatch } from "react-redux";

function HorizontalFoodCard({ product, quantity}) {

  const dispatch = useDispatch();

  const increment = () => {
    dispatch(updateQuantityInCart({ product, quantity: quantity + 1 }));
  };

  const decrement = () => {
    if (quantity > 1) {
      dispatch(updateQuantityInCart({ product, quantity: quantity - 1 }));
    } else if (quantity === 1) {
      dispatch(removeProductFromCart({ id: product.id }));
    }
  };


  return (
      <article className={`HorizontalWrapper ${product.vegetarian ? 'HorizontalFoodCard-vegetarian': ''}` }>
        <img src={`../${product.image}`}></img>
          <section className="HorizontalInfo">
            <p> {product.title} </p>
            <p> {product.price} sek</p>
            <section className="SelectoryWrapper">
              <section className="SelectorInput">
                <button className='MinusButton' onClick={decrement}></button>
                <input className='SelectorInput_field' type="text" value={quantity} readOnly />
                <button className='PlusButton' onClick={increment}></button>
              </section>
            </section>
          </section>
      </article>
  );
}

export default HorizontalFoodCard;