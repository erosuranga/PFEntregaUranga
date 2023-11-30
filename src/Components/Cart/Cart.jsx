import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import CartItem from "./CartItem";

//escribir clases

const Cart = () => {
  const { cart, clearCart, removeItem, totalQuantity, total } =
    useContext(CartContext);

  if (totalQuantity === 0) {
    return (
      <div>
        <h1>No hay productos en el carro</h1>
        <Link to="/" className="Option"></Link>
      </div>
    );
  }

  return (
    <div>
      {cart.map((item) => (
        <CartItem
          key={item.id}
          {...item}
          onRemove={() => removeItem(item.id)}
        />
      ))}
      <h3>Total : ${total}</h3>
      <button onClick={() => clearCart()} className="Button">
        Limpiar carro
      </button>
      <Link to="/checkout" className="Option">
        Finalizar compra
      </Link>
    </div>
  );
};
export default Cart;
