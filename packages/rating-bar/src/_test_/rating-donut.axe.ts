import { OrxeRatingDonut } from '../';

import { axe, toHaveNoViolations } from '@orxe-devkit/axe';
expect.extend(toHaveNoViolations);

describe('orxe-rating-bar-axe', () => {
  it('', () => {
    expect(true).toBeTruthy();
  });
  
  let ratingDonut;

  beforeEach(async () => {
    OrxeRatingDonut;
    ratingDonut = document.createElement('orxe-rating-donut') as OrxeRatingDonut;
    await document.body.append(ratingDonut);
  });

  afterEach(() => {
    ratingDonut.remove();
  });

  it('should support all WCAG Accessibility Rules. when default toolbar is rendered', async () => {
    const result = await axe(ratingDonut);
    expect(result).toHaveNoViolations();
  });
});
