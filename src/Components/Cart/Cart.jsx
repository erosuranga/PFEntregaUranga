import { useContext } from "react";
import { CartContext } from "../../context/cartContext";
import { Link } from "react-router-dom";

//escribir clases

const Cart = () => {
  const { cart, clearCart, totalQuantity, total } = useContext(CartContext);

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
      {cart.map((p) => (
        <cartItem key={p.id} {...p} />
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
