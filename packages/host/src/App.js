import "./index.css";
import { Header } from "header/Header";
import { Footer } from "footer/Footer";
import * as moment from "moment";

customElements.define("header-component", Header);
customElements.define("footer-component", Footer);

document.getElementById("app").innerHTML = `
<header-component></header-component>
<div class="container">

  <div>Name: host</div>
  <div>Framework: vanilla</div>
  <div>Language: JavaScript</div>
  <div>CSS: Empty CSS</div>
  <div class="date">${moment().format("MMMM Do YYYY")}</div>
</div>
<footer-component></footer-component>
`;
