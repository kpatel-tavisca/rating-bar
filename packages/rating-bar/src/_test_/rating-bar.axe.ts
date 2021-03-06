import { OrxeRatingBar } from '../';

import { axe, toHaveNoViolations } from '@orxe-devkit/axe';
expect.extend(toHaveNoViolations);

describe('orxe-rating-bar-axe', () => {
  it('', () => {
    expect(true).toBeTruthy();
  });
  
  let ratingBar;

  beforeEach(async () => {
    OrxeRatingBar;
    ratingBar = document.createElement('orxe-rating-bar') as OrxeRatingBar;
    await document.body.append(ratingBar);
  });

  afterEach(() => {
    ratingBar.remove();
  });

  it('should support all WCAG Accessibility Rules. when default toolbar is rendered', async () => {
    const result = await axe(ratingBar);
    expect(result).toHaveNoViolations();
  });
});
