import "./index.css";
import { header } from "./Header.js";

document.getElementById("app").innerHTML = `
<div class="container">
  <div>Name: header</div>
  <div>Framework: vanilla</div>
  <div>Language: JavaScript</div>
  <div>CSS: Empty CSS</div>
  <menu-global></menu-global>
</div>
`;

header();
