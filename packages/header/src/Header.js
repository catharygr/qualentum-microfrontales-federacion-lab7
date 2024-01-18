import "./index.css";
import "./header-component.js";
import * as moment from "moment";

export const header = () => {
  const app = document.getElementById("app");
  const header = document.createElement("header");
  header.classList.add("header");
  // Atributos de menu-global: vertical que seria un (boleano) y color que seria un string
  header.innerHTML = `
  <menu-global color="yellow"></menu-global>
  <p>${moment().format("DD/MM/YYYY")}</p>
      `;
  app.appendChild(header);
  return `
    <header>
      <p>popo</p>
    </header>
  `;
};
