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
    .rating-bar-container {
        height: 32px;
        font-size: 1.6rem;
    }
    .rating-bar {
        height: 8px;
        border-radius: 10px;
    }
    .rating-bar-desc {
        display: flex;
        justify-content: space-between;
        margin-top: 8px;
    }
`;

