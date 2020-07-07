import {css} from 'lit-element';
export default css`
    .rating-donut-container{
        font-size: 1.4rem;
    }
    .rating-donut-container > svg > circle {
        fill: transparent;
        transform: rotate(-90deg);
        transform-origin: 50% 50%;
    }
    .rating-donut-container > svg > text {
        fill: black;
        text-anchor: middle;
    }
`;

