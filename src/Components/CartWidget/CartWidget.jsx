import React, { useContext } from "react";
import cartLogo from "./assets/carrito.svg";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import "./CartWidget.css";
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
