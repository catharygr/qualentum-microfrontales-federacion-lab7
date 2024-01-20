import { LitElement, html, css } from "lit";
import * as moment from "moment";

export class Header extends LitElement {
  constructor() {
    super();
  }

  static styles = css`
  .header {
    background-color: #333333; 
    overflow: hidden;
  }
  .header ul {
    list-style-type: none;
    margin: 0; 
    padding: 0;
  }
  .header li { 
    float: left;
  }
  .header li a {
     display: block; 
     color: white; 
     text-align: center; 
     padding: 14px 16px; 
     text-decoration: none;
  }
  .header .date { 
    display: block; 
    color: white; 
    text-align: center; 
    padding: 14px 16px;
  `;

  render() {
    return html`
      <header class="header">
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li class="date">${moment().format("DD/MM/YYYY")}</li>
        </ul>
      </header>
    `;
  }
}
