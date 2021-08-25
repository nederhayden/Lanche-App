import { useState } from "react";
import { Box } from "@material-ui/core";
import { ShoppingCart, Delete } from "@material-ui/icons";

import "./Cart.scss";

export default function Cart() {
  const [cart, setCart] = useState(false);

  return (
    <Box className="Cart">
      {cart ? (
        <>
          <div className="card-cart">
            <div className="item">
              <div className="img">
                <img
                  src="https://image.freepik.com/vetores-gratis/astronauta-bonito-abraco-donut-dos-desenhos-animados-icone-ilustracao-vetorial-conceito-de-icone-de-comida-de-ciencia-isolado-vetor-premium-estilo-flat-cartoon_138676-3329.jpg"
                  alt=""
                />
              </div>
              <div className="item-details">
                <h3>{"Produto"}</h3>
                <dl>{"Descricao"}</dl>
                <div className="price-and-button">
                  <span>{`R$ ${"Valor"}`}</span>
                  <Delete style={{ color: "red" }} />
                </div>
              </div>
            </div>
          </div>
          <button>Finalizar Pedido</button>
        </>
      ) : (
        <span className="cart-empty">
          <ShoppingCart className="cart-icon-empty" />
          <dl>Carrinho vazio</dl>
        </span>
      )}
    </Box>
  );
}
