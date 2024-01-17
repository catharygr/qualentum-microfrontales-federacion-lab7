import { LitElement, html, css } from "lit";

export class HeaderComponent extends LitElement {
  constructor() {
    super();
  }

  static styles = css`
    header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      background-color: #282c34;
      color: white;
      padding: 1rem 2rem;
    }
  `;

  render() {
    return html`
      <header>
        <menu-global color="yellow"></menu-global>
        <p>${moment().format("DD/MM/YYYY")}</p>
      </header>
    `;
  }
}

window.customElements.define("header-component", HeaderComponent);
