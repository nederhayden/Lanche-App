import { useState } from "react";
import { Box } from "@material-ui/core";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import PaymentIcon from "@material-ui/icons/Payment";

import "./Header.scss";

export default function Header() {
  const [status, setStatus] = useState(false);

  return (
    <Box className="Header">
      <div className="details">
        <div className="status">
          <span>{status ? "Aberto" : "Fechado"}</span>
          <div
            className="circle-status"
            style={
              status ? { background: "#05d305" } : { background: "#ff0000" }
            }
          ></div>
        </div>

        <div className="delivery-time">
          <span>Tempo de entrega</span>
          <AccessTimeIcon className="access-time-icon" />
          <span>45 - 65 min</span>
        </div>

        <div className="payment-methods">
          <span>Formas de pagamento</span>
          <PaymentIcon className="payment-icon" />
        </div>
      </div>

      <img
        src="https://image.freepik.com/vetores-gratis/astronauta-bonito-abraco-donut-dos-desenhos-animados-icone-ilustracao-vetorial-conceito-de-icone-de-comida-de-ciencia-isolado-vetor-premium-estilo-flat-cartoon_138676-3329.jpg"
        alt="Logo"
      />

      <h1>Lanche App</h1>

      <button>Entrar</button>
    </Box>
  );
}
