import "./index.css";
import { Menu } from "../../web-components/menu.js";

export const header = () => {
  const app = document.getElementById("app");
  const header = document.createElement("div");
  header.classList.add("header");
  header.innerHTML = `
<menu-global></menu-global>
<p>Fecha</p>
    `;
  app.appendChild(header);
};
