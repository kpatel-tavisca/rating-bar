import { html, customElement, LitElement, property } from 'lit-element';
import styles from './rating-circle-css';

@customElement('orxe-rating-circle')
export default class OrxeRatingCircle extends LitElement {
  /**
   * Implement `render` to define a template for button element.
   */
  STROKE_WIDTH = 4;
  CONTAINER_WIDTH = 40;

  @property({type: Number})
  rating;

  render() {
    const normalizedRadius = (this.CONTAINER_WIDTH - this.STROKE_WIDTH)/2;
    const _circumference = normalizedRadius * 2 * Math.PI;
    const offset = _circumference - (this.rating / 10 * _circumference);
    return html`
    <section class="rating-circle-container">
        <svg>
            <circle
                stroke="green"
                stroke-dasharray="${_circumference} ${_circumference}"
                style="stroke-dashoffset:${offset}"
                stroke-width="${this.STROKE_WIDTH}"
                r="${normalizedRadius}"
                cx="${this.CONTAINER_WIDTH / 2}"
                cy="${this.CONTAINER_WIDTH / 2}"
            />
            <text
                x="50%"
                y="50%"
                dy="0.3em">
                    ${this.rating}
            </text>
        </svg>
    </section>
    `;
  }

  /**
   *  Getting styles from components custom scss file
   */
  static styles = styles;
}
