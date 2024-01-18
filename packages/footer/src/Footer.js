import "./index.css";
import "./footer-component.js";

export const footer = () => {
  const app = document.getElementById("app");
  const footerComponent = document.createElement("footer-component");
  app.appendChild(footerComponent);
};
