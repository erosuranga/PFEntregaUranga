import React from "react";
import cartLogo from "./assets/carrito.png";
const CartWidget = () => {
  return (
    <>
      <img src={cartLogo} alt="cart" width={25} height={25} />
      <span>3</span>
    </>
  );
};

export default CartWidget;
