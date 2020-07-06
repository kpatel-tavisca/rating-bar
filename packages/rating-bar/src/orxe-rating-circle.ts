import { html, customElement, property } from 'lit-element';
import OrxeRatingBar from './orxe-rating-bar';
import styles from './rating-circle-css';

@customElement('orxe-rating-circle')
export default class OrxeRatingCircle extends OrxeRatingBar {
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
        <svg height="${this.CONTAINER_WIDTH}" width="${this.CONTAINER_WIDTH}">
          <circle
                  stroke="var(--separator-01)"
                  stroke-dasharray="${_circumference} ${_circumference}"
                  stroke-width="${this.STROKE_WIDTH}"
                  r="${normalizedRadius}"
                  cx="${this.CONTAINER_WIDTH / 2}"
                  cy="${this.CONTAINER_WIDTH / 2}"
              />
          <circle
              stroke="${this.getRatingColor()}"
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
