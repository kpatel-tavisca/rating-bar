import { html, customElement, LitElement, property } from 'lit-element';
import { styleMap } from 'lit-html/directives/style-map';
import styles from './rating-bar-css';

@customElement('orxe-rating-bar')
export default class OrxeRatingBar extends LitElement {

  @property({type: Number})
  rating;

  getRatingColor() {
    if ( this.rating >= 8.5 && this.rating <=10) {
      return `var(--rating-excellent)`;
    }
    if ( this.rating >= 7 && this.rating < 8.5) {
      return `var(--rating-great)`;
    }
    if ( this.rating >= 5 && this.rating < 7) {
      return `var(--rating-average)`;
    }
    if ( this.rating >= 3 && this.rating < 5) {
      return `var(--rating-poor)`;
    }
    if ( this.rating >= 1 && this.rating < 3) {
      return `var(--rating-bad)`;
    }
    return `var(--separator-01)`;
  }
  render() {
    const bar = {
      background: `linear-gradient(to right, ${this.getRatingColor()} ${this.rating * 10}%, var(--separator-01) ${this.rating * 10}%, var(--separator-01))`
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
