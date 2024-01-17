import "./index.css";
import { header } from "header/Header";
import { footer } from "footer/Footer";
const app = document.getElementById("app");

const content = document.createElement("div");
content.classList.add("container");
content.innerHTML = `
<div>Name: host</div>
<div>Framework: vanilla</div>
<div>Language: JavaScript</div>
<div>CSS: Empty CSS</div>
`;

header();
app.appendChild(content);
footer();
