import React, { useContext } from "react";
import cartLogo from "./assets/carrito.png";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/cartContext";
import "./CartWidget.css"; // Asegúrate de importar tus estilos aquí

const CartWidget = () => {
  const { totalQuantity } = useContext(CartContext);

  return (
    <Link to="/cart" className="CartWidget">
      <img src={cartLogo} alt="cart" className="CartIcon" />
      <span className="CartQuantity">{totalQuantity}</span>
    </Link>
  );
};

export default CartWidget;
