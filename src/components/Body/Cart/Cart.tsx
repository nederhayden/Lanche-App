import { useState } from "react";
import { Box } from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";

import "./Cart.scss";

export default function Cart() {
  const [cart, setCart] = useState(false);

  return (
    <Box className="Cart">
      {cart ? (
        <span className="cart-items">
          <ShoppingCart />
          <dl>Carrinho com itens</dl>
        </span>
      ) : (
        <span className="cart-empty">
          <ShoppingCart className="cart-icon-empty" />
          <dl>Carrinho vazio</dl>
        </span>
      )}
    </Box>
  );
}
