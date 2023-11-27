import { useState } from "react";

function SmallSelector() {
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
      <div className="SelectoryWrapper">
        <div className="SelectorInput" onClick={(e) => e.stopPropagation()}>
          <button className='MinusButton' onClick={decrement}></button>
          <input className='SelectorInput_field' type="text" value={quantity} readOnly />
          <button className='PlusButton' onClick={increment}></button>
        </div>
      </div>
    );
}

export default SmallSelector;