import { LitElement, html, css } from "lit";

export class Menu extends LitElement {
  constructor() {
    super();
    this.color = "black";
    this.vertical = false;
  }

  static properties = {
    color: { type: String },
    vertical: { type: Boolean },
  };

  static styles = css`
    .container {
      display: flex;
      gap: 1rem;
      list-style: none;
      padding: 0;
      margin: 0;
      font-size: 1.5rem;
    }
  `;

  render() {
    return html`
      <style>
        .container {
          flex-direction: ${this.vertical ? "column" : "row"};
          color: ${this.color};
        }
      </style>
      <ul class="container">
        <li>Home</li>
        <li>About</li>
      </ul>
    `;
  }
}

window.customElements.define("menu-global", Menu);
