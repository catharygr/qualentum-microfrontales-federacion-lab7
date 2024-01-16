import "./index.css";
import { Menu } from "../../web-components/menu.js";
import * as moment from "moment";

export const header = () => {
  const app = document.getElementById("app");
  const header = document.createElement("div");
  header.classList.add("header");

  // Atributos de menu-global: vertical que seria un (boleano) y color que seria un string
  header.innerHTML = `
<menu-global color=""></menu-global>
<p>${moment().format("DD/MM/YYYY")}</p>
    `;
  app.appendChild(header);
};
