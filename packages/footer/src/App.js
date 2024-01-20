import "./index.css";
import { Footer } from "./Footer.js";

customElements.define("footer-component", Footer);

document.getElementById("app").innerHTML = `
<div class="container">
  <div>Name: footer</div>
    <div>Framework: vanilla</div>
    <div>Language: JavaScript</div>
    <div>CSS: Empty CSS</div>
  </div>
  <footer-component></footer-component>
`;
