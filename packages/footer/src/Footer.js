import { html, css, LitElement } from "lit";
import * as moment from "moment";

export class Footer extends LitElement {
  constructor() {
    super();
  }

  static styles = css`
  

  render() {
    return html`
      <footer class="footer">
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li class="date">${moment().format("DD/MM/YYYY")}</li>
        </ul>
      </footer>
    `;
  }
}
