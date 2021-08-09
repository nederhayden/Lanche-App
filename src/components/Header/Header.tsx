import React, { useState } from "react";
import { Box } from "@material-ui/core";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import PaymentIcon from "@material-ui/icons/Payment";
import Dropdown from "../Dropdown/Dropdown";

import "./Header.scss";

export default function Header() {
  const [status, setStatus] = useState(false);
  const [logo, setLogo] = useState(
    "https://image.freepik.com/vetores-gratis/astronauta-bonito-abraco-donut-dos-desenhos-animados-icone-ilustracao-vetorial-conceito-de-icone-de-comida-de-ciencia-isolado-vetor-premium-estilo-flat-cartoon_138676-3329.jpg"
  );
  const [snackName, setSnackName] = useState("Lanche APP");

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
          <Dropdown
            title={"Veja os horários"}
            item1={"DOM 17:00 as 23:00"}
            item2={"SEG 17:00 as 23:00"}
            item3={"TER 17:00 as 23:00"}
            item4={"QUA 17:00 as 23:00"}
            item5={"QUI 17:00 as 23:00"}
            item6={"SEX 17:00 as 23:00"}
            item7={"SAB 17:00 as 23:00"}
          />
        </div>

        <div className="delivery-time">
          <span>Tempo de entrega</span>
          <AccessTimeIcon className="access-time-icon" />
          <span>45 - 65 min</span>
        </div>

        <Dropdown
          title="Formas de pagamento"
          icon={React.createElement(PaymentIcon)}
          item1="Dinheiro"
          item2="Visa"
          item3="Mastercard"
        />
      </div>

      <img src={logo} alt="Logo" />

      <h1>{snackName}</h1>

      <button>Entrar</button>
    </Box>
  );
}
