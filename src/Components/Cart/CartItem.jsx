const CartItem = ({ id, name, price, quantity, onRemove }) => {
  return (
    <div className="cart-item">
      <div>
        <h3>{name}</h3>
        <p>Precio individual: ${price}</p>
        <p>Cantidad: {quantity}</p>
        <p>Precio total: ${quantity * price}</p>
      </div>
      <button onClick={() => onRemove(id)}>Quitar</button>
    </div>
  );
};

export default CartItem;
