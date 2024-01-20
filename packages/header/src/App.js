import "./index.css";
import { Header } from "./Header.js";

customElements.define("header-component", Header);

document.getElementById("app").innerHTML = `
<header-component></header-component>
<div class="container">
  <div>Name: header</div>
  <div>Framework: vanilla</div>
  <div>Language: JavaScript</div>
  <div>CSS: Empty CSS</div>
</div>
`;
