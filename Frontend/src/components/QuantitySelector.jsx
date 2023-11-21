import React, { useState } from "react";

function QuantitySelector({ price }) {
  const [quantity, setQuantity] = useState(0);

  const increment = () => {
    setQuantity(quantity + 1);
  };

  const decrement = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="QuantityWrapper">
      <div className="QuantityInput" onClick={(e) => e.stopPropagation()}>
        <button className='minus_btn' onClick={decrement}></button>
        <input type="text" value={quantity} readOnly />
        <button className='plus_btn' onClick={increment}></button>
      </div>
      <p>Total price: <br></br>{quantity * price}</p>
    </div>
  );
}

export default QuantitySelector;
