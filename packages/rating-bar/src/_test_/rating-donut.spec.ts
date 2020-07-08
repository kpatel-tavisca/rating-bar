import { OrxeRatingDonut } from '../';

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