import "./index.css";
import { header } from "header/Header";
import { footer } from "footer/Footer";
import * as moment from "moment";
const app = document.getElementById("app");

const content = document.createElement("div");
content.classList.add("container");
content.innerHTML = `
<h1>Name: host</h1>
<ul>
<li>He creado tres microfrontales: host, header y footer.</li>
<li>Utlizando la librería Lit he creado una web component con el nombre menu-global. El componente tiene dos atributos: color (string - para el color de texto), vertical (boleano - para la dirección del menú).</li>
<li>Este componente lo reutilizo tanto en el header como en el del footer. Ambos son web component desarrollados con Lit.</li>
<li>La fecha la he configurado utilizando la librería moment.</li>
<li>En la webpack.config de header y footer en el plugin ModuleFederationPlugin he configurado exposes y shared para la federación y para compartir la librería moment.</li>
<li>En el webpack.config de host he configurado los remotes para la federación y shared para la librería moment.</li>
</ul>
<h2>Fecha: ${moment().format("DD/MM/YYYY")}</h2>
`;

header();
app.appendChild(content);
footer();
