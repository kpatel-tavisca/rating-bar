import { OrxeRatingBar, OrxeRatingDonut } from '../';

describe('orxe-rating-bar', () => {
  let ratingBar;
  beforeEach(async () => {
    OrxeRatingBar;
    ratingBar = document.createElement('orxe-rating-bar') as OrxeRatingBar;
    await document.body.append(ratingBar);
  });
  afterEach(() => {
    ratingBar.remove();
  });

  async function setProperty(property: string, value: any): Promise<void> {
    ratingBar[property] = value;
    await ratingBar.requestUpdate();
  }

  it('RatingBar should render', () => {
    expect(ratingBar).not.toBeNull();
  });
  it('RatingBar should log error if rating attribute not set', () => {
    expect(ratingBar['rating']).toBeUndefined();
  });
  it('rating and label should be set correctly', async () => {
    await setProperty('rating', 7.9);
    await setProperty('label', 'Location');
    expect(ratingBar['rating']).toBe(7.9);
    expect(ratingBar['label']).toBe('Location');
  });
  it('Should Return Correct Color Variable', async () => {
    await setProperty('rating', 9);
    expect(ratingBar.getRatingColor()).toBe('var(--rating-excellent)');
    await setProperty('rating', 7.9);
    expect(ratingBar.getRatingColor()).toBe('var(--rating-great)');
    await setProperty('rating', 6);
    expect(ratingBar.getRatingColor()).toBe('var(--rating-average)');
    await setProperty('rating', 4.5);
    expect(ratingBar.getRatingColor()).toBe('var(--rating-poor)');
    await setProperty('rating', 2.5);
    expect(ratingBar.getRatingColor()).toBe('var(--rating-bad)');
    await setProperty('rating', 0.5);
    expect(ratingBar.getRatingColor()).toBe('var(--separator-01)');
  });
  it('Should Return Correct Background Style', async () => {
    await setProperty('rating', 9);
    expect(ratingBar.getStyleProps()).toMatchObject({
      background: 'linear-gradient(to right, var(--rating-excellent) 90%, var(--separator-01) 90%, var(--separator-01))'
    });
    await setProperty('rating', 7.9);
    expect(ratingBar.getStyleProps()).toMatchObject({
      background: 'linear-gradient(to right, var(--rating-great) 79%, var(--separator-01) 79%, var(--separator-01))'
    });
    await setProperty('rating', 6);
    expect(ratingBar.getStyleProps()).toMatchObject({
      background: 'linear-gradient(to right, var(--rating-average) 60%, var(--separator-01) 60%, var(--separator-01))'
    });
    await setProperty('rating', 4.5);
    expect(ratingBar.getStyleProps()).toMatchObject({
      background: 'linear-gradient(to right, var(--rating-poor) 45%, var(--separator-01) 45%, var(--separator-01))'
    });
    await setProperty('rating', 2.5);
    expect(ratingBar.getStyleProps()).toMatchObject({
      background: 'linear-gradient(to right, var(--rating-bad) 25%, var(--separator-01) 25%, var(--separator-01))'
    });
    await setProperty('rating', 0.5);
    expect(ratingBar.getStyleProps()).toMatchObject({
      background: 'linear-gradient(to right, var(--separator-01) 5%, var(--separator-01) 5%, var(--separator-01))'
    });
  });
});
describe('orxe-rating-donut', () => {
  let ratingDonut;
  beforeEach(async () => {
    OrxeRatingDonut;
    ratingDonut = document.createElement('orxe-rating-donut') as OrxeRatingDonut;
    await document.body.append(ratingDonut);
  });
  afterEach(() => {
    ratingDonut.remove();
  });

  async function setProperty(property: string, value: any): Promise<void> {
    ratingDonut[property] = value;
    await ratingDonut.requestUpdate();
  }

  it('RatingDonut should render', () => {
    expect(ratingDonut).not.toBeNull();
  });
  it('RatingDonut should log error if rating attribute not set', () => {
    expect(ratingDonut['rating']).toBeUndefined();
  });
  it('rating should be set correctly', async () => {
    await setProperty('rating', 7.9);
    expect(ratingDonut['rating']).toBe(7.9);
  });
  it('Should Return correct Donut Style Params', async () => {
    await setProperty('rating', 7.8);
    expect(ratingDonut.getDonutProps()).toMatchObject({
      normalizedRadius: 18,
      circumference: 113.09733552923255,
      offset: 24.881413816431163
    });
  });
});