import "./index.css";
import { footer } from "./Footer.js";

document.getElementById("app").innerHTML = `
<div class="container-footer">
  <div>Name: footer</div>
  <div>Framework: vanilla</div>
  <div>Language: JavaScript</div>
  <div>CSS: Empty CSS</div>
</div>
`;
footer();
