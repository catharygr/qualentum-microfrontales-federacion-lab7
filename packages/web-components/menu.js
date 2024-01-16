import { LitElement, html, css } from "lit";

export class Menu extends LitElement {
  constructor() {
    super();
  }

  render() {
    return html`
      <div class="container">
        <ul>
          <li>Home</li>
          <li>About</li>
        </ul>
      </div>
    `;
  }
}

window.customElements.define("menu-global", Menu);
