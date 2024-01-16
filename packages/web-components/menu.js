import { LitElement, html, css } from "lit";

export class Menu extends LitElement {
  constructor() {
    super();
    this.color = "black";
    this.vertical = true;
  }

  static properties = {
    color: { type: String },
    vertical: { type: Boolean },
  };

  static styles = css`
    .container {
      display: flex;
      flex-direction: ${this.vertical ? css`column` : css`row`};
      gap: 1rem;
      list-style: none;
      padding: 0;
      margin: 0;
    }
  `;

  render() {
    return html`
      <ul class="container">
        <li>Home</li>
        <li>About</li>
      </ul>
    `;
  }
}

window.customElements.define("menu-global", Menu);
