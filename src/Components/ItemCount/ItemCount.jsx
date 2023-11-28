import React, { useState } from "react";
import "./ItemCount.css";

const ItemCount = ({ stock, initial, onAdd }) => {
  const [quantity, setQuantity] = useState(initial);

  const increment = () => {
    if (quantity < stock) {
      setQuantity(quantity + 1);
    }
  };

  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleAddToCart = () => {
    if (quantity > 0) {
      onAdd(quantity);
    }
  };

  return (
    <div className="ItemCount">
      <div className="ButtonsContainer">
        <button className="Button" onClick={decrement}>
          -
        </button>
        <h4 className="Number">{quantity}</h4>
        <button className="Button" onClick={increment}>
          +
        </button>
      </div>
      <div>
        <button
          className="AddToCartButton"
          onClick={handleAddToCart}
          disabled={!stock || quantity === 0}
        >
          Agregar al Carrito
        </button>
      </div>
    </div>
  );
};

export default ItemCount;
