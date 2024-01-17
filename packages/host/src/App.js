import "./index.css";
import { header } from "header/Header";
import { footer } from "footer/Footer";
const app = document.getElementById("app");

const content = document.createElement("div");
content.classList.add("container");
content.innerHTML = `
<p>hola</p>
`;

header();
app.appendChild(content);
footer();
