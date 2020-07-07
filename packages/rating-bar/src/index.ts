import { registerTranslateResources } from '@orxe-culture/lit';
import OrxeRatingBar from './orxe-rating-bar';
import OrxeRatingDonut from './orxe-rating-donut';
import { translation } from './assets/locales/en-US';

registerTranslateResources(translation);

export { OrxeRatingBar, OrxeRatingDonut };
