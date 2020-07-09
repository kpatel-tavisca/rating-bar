import { html, customElement, property } from 'lit-element';
import { TranslationClass } from '@orxe-culture/lit';
import { styleMap, StyleInfo } from 'lit-html/directives/style-map';
import styles from './rating-bar-css';

@customElement('orxe-rating-bar')
export default class OrxeRatingBar extends TranslationClass {

  @property({type: Number})
  rating;

  @property({type: String})
  label;


  getRatingColor() : String {
    if ( this.rating >= 8.5 && this.rating <=10) {
      return 'var(--rating-excellent, #238738)';
    }
    if ( this.rating >= 7 && this.rating < 8.5) {
      return 'var(--rating-great, #67AB04)';
    }
    if ( this.rating >= 5 && this.rating < 7) {
      return 'var(--rating-average, #D99B22)';
    }
    if ( this.rating >= 3 && this.rating < 5) {
      return 'var(--rating-poor)';
    }
    if ( this.rating >= 1 && this.rating < 3) {
      return 'var(--rating-bad, #D9222A)';
    }
    return 'var(--rating-track-color)';
  }
  getStyleProps(): StyleInfo {
    return {
      background: `linear-gradient(to right, ${this.getRatingColor()} ${this.rating * 10}%, var(--rating-track-color) ${this.rating * 10}%, var(--rating-track-color))`
    }
  }
  render() {
    return html`
    <section class="rating-bar--container">
      <div role="img" aria-label="${this.label} rating ${this.rating} out of 10">
        <div class="rating-bar" style="${styleMap(this.getStyleProps())}"></div>
        <p class="rating-bar--desc">
          <span>${this.label}</span>
          <span>${this.rating}</span>
        </p>
      </div>
    </section>
    `;
  }

  static styles = styles;
}
