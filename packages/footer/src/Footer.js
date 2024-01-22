import { html, css, LitElement } from "lit";
import * as moment from "moment";

export class Footer extends LitElement {
  constructor() {
    super();
  }

  static styles = css`
  .footer {
    background-color: #efefef; 
    overflow: hidden;
  }
  .footer ul {
    list-style-type: none;
    margin: 0; 
    padding: 0;
  }
  .footer li { 
    float: left;
  }
  .footer li a {
     display: block; 
     color: #333333; 
     text-align: center; 
     padding: 14px 16px; 
     text-decoration: none;
  }
  .footer .date { 
    display: block; 
    color: #333333; 
    text-align: center; 
    padding: 14px 16px;
  `;

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
