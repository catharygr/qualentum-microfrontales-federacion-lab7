import "./index.css";
import { Menu } from "../../web-components/menu.js";
import * as moment from "moment";

export const footer = () => {
  const app = document.getElementById("app");
  const footer = document.createElement("footer");
  footer.classList.add("footer");

  // Atributos de menu-global: vertical que seria un (boleano) y color que seria un string
  footer.innerHTML = `
<menu-global vertical color="orange"></menu-global>
<p>${moment().format("DD/MM/YYYY")}</p>
    `;
  app.appendChild(footer);
};
