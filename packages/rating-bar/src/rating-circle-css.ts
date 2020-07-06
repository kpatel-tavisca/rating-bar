import {css} from 'lit-element';
export default css`
    .rating-circle-container > svg {
        height: 40px;
        width: 40px;
        font-size: 1.4rem;
        font-weight: 600;
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

