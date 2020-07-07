import { html, customElement, property } from 'lit-element';
import { TranslationClass } from '@orxe-culture/lit';
import { styleMap } from 'lit-html/directives/style-map';
import styles from './rating-bar-css';

@customElement('orxe-rating-bar')
export default class OrxeRatingBar extends TranslationClass {

  @property({type: Number})
  rating;

  @property({type: String})
  label;


  getRatingColor() {
    if ( this.rating >= 8.5 && this.rating <=10) {
      return 'var(--rating-excellent)';
    }
    if ( this.rating >= 7 && this.rating < 8.5) {
      return 'var(--rating-great)';
    }
    if ( this.rating >= 5 && this.rating < 7) {
      return 'var(--rating-average)';
    }
    if ( this.rating >= 3 && this.rating < 5) {
      return 'var(--rating-poor)';
    }
    if ( this.rating >= 1 && this.rating < 3) {
      return 'var(--rating-bad)';
    }
    return 'var(--separator-01)';
  }
  getStyleProps() {
    return {
      background: `linear-gradient(to right, ${this.getRatingColor()} ${this.rating * 10}%, var(--separator-01) ${this.rating * 10}%, var(--separator-01))`
    }
  }
  render() {
    return html`
    Test
    <section class="rating-bar-container" role="img" aria-describedby="rating-bar-desc">
      <div class="rating-bar" style="${styleMap(this.getStyleProps())}"></div>
      <p class="rating-bar-desc" id="rating-bar-desc">
        <span>${this.label}</span>
        <span>${this.rating}</span>
      </p>
    </section>
    `;
  }

  static styles = styles;
}
