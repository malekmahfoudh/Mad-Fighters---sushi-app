import { updateQuantityInCart, removeProductFromCart } from "../redux/slices/cart";
import { useDispatch } from "react-redux";
import { removeProductFromCart_update, updateQuantityInCart_update } from "../redux/slices/orderUpdate";

function HorizontalFoodCard({ product, quantity,updateOrder}) {

  const dispatch = useDispatch();

  const increment = () => {
    if(updateOrder === true){
      dispatch(updateQuantityInCart_update({ product, quantity: quantity + 1 }));
    }else {
      dispatch(updateQuantityInCart({ product, quantity: quantity + 1 }));
    }
  };

  const decrement = () => {
    if (quantity > 1) {
      if(updateOrder === true){
        dispatch(updateQuantityInCart_update({ product, quantity: quantity - 1 }));
      }else{
        dispatch(updateQuantityInCart({ product, quantity: quantity - 1 }));
      }

    } else if (quantity === 1) {
      if(updateOrder === true){
        dispatch(removeProductFromCart_update({ id: product.id }));
      }else{
        dispatch(removeProductFromCart({ id: product.id }));
      }
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