import React, { useContext } from "react";
import cartLogo from "./assets/carrito.png";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/cartContext";

const CartWidget = () => {
  const { totalQuantity } = useContext(CartContext);
  return (
    <Link
      to="/cart"
      className="CartWidget"
      style={{ display: totalQuantity > 0 ? "block" : "none" }}
    >
      <img src={cartLogo} alt="cart" width={25} height={25} />
      {totalQuantity}
    </Link>
  );
};

export default CartWidget;

//desarrollar clases
