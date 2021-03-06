import { html, customElement } from 'lit-element';
import OrxeRatingBar from './orxe-rating-bar';
import styles from './rating-donut-css';

@customElement('orxe-rating-donut')
export default class OrxeRatingDonut extends OrxeRatingBar {

  /**
   * @constant {Number} STROKE_WIDTH Stroke width for the Circle, value 4
   */
  STROKE_WIDTH = 4;

  /**
   * @constant {Number} CONTAINER_WIDTH Container Width for the container, value 40
   */
  CONTAINER_WIDTH = 40;

  /**
   * Function 
   */
  getDonutProps() {
    const normalizedRadius = (this.CONTAINER_WIDTH - this.STROKE_WIDTH)/2;
    const circumference = normalizedRadius * 2 * Math.PI;
    const offset = circumference - (this.rating / 10 * circumference);
    return {
      normalizedRadius,
      circumference,
      offset
    };
  }

  render() {
    const {
      normalizedRadius,
      circumference,
      offset } = this.getDonutProps();

    return html`
    <section class="rating-donut--container">
        <svg
        height="${this.CONTAINER_WIDTH}"
        width="${this.CONTAINER_WIDTH}"
        role="img"
        aria-label="${this.label} rating ${this.rating} out of 10">
          <circle
                  stroke="var(--rating-track-color)"
                  stroke-dasharray="${circumference} ${circumference}"
                  stroke-width="${this.STROKE_WIDTH}"
                  r="${normalizedRadius}"
                  cx="${this.CONTAINER_WIDTH / 2}"
                  cy="${this.CONTAINER_WIDTH / 2}"
              />
          <circle
              stroke="${this.getRatingColor()}"
              stroke-dasharray="${circumference} ${circumference}"
              style="stroke-dashoffset:${offset}"
              stroke-width="${this.STROKE_WIDTH}"
              r="${normalizedRadius}"
              cx="${this.CONTAINER_WIDTH / 2}"
              cy="${this.CONTAINER_WIDTH / 2}"
          />
          <text
              x="50%"
              y="50%"
              dy="0.3em"
              aria-hidden="true">
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
