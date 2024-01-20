import { html, css, LitElement } from "lit";
import * as moment from "moment";
import "../../web-components/menu.js";

export class FooterComponent extends LitElement {
  constructor() {
    super();
  }

  static styles = css`
    footer {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      background-color: lightslategray;
      color: black;
      padding: 1rem 2rem;
      font-weight: 900;
      gap: 1.5rem;
    }
  `;

  render() {
    return html`
      <footer>
        <menu-global vertical color="orange"></menu-global>
        <p>${moment().format("DD/MM/YYYY")}</p>
      </footer>
    `;
  }
}
