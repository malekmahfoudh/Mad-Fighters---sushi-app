function SmallSelector({ quantity, setQuantity}) {

  
  const increment = () => {
    setQuantity(quantity + 1);
  };

  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  
    return (
      <section className="SelectoryWrapper">
        <section className="SelectorInput" onClick={(e) => e.stopPropagation()}>
          <button className='MinusButton' onClick={decrement}></button>
          <input className='SelectorInput_field' type="text" value={quantity} readOnly />
          <button className='PlusButton' onClick={increment}></button>
        </section>
      </section>
    );
}

export default SmallSelector;