import { html, customElement, LitElement, property } from 'lit-element';
import { styleMap } from 'lit-html/directives/style-map';
import styles from './rating-bar-css';

@customElement('orxe-rating-bar')
export default class OrxeRatingBar extends LitElement {

  @property({type: Number})
  rating;

  render() {
    const bar = {
      background: `linear-gradient(to right, green ${this.rating * 10}%, grey ${this.rating * 10}%, grey)`
    };
    return html`
    <section class="rating-bar-container">
      <div class="rating-bar" style="${styleMap(bar)}"></div>
      <p class="rating-bar-desc">
        <span>Location</span>
        <span>${this.rating}</span>
      </p>
    </section>
    `;
  }

  static styles = styles;
}
