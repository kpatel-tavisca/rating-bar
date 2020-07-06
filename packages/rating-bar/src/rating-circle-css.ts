import {css} from 'lit-element';
export default css`
    :host {
        --rating-excellent: var(--primary);
        /* --rating-great: var(--rating-great);*/
        --rating-average: var(--warning);
        /* --rating-poor: var(--rating-poor); */
        --rating-bad: var(--error);
        font-family: var(--primary-font-family);
        font-color: var(--primary-text);
        font-weight: 600;
    }
    .rating-circle-container{
        font-size: 1.4rem;
    }
    .rating-circle-container > svg > circle {
        fill: transparent;
        transform: rotate(-90deg);
        transform-origin: 50% 50%;
    }
    .rating-circle-container > svg > text {
        fill: black;
        text-anchor: middle;
    }
`;

