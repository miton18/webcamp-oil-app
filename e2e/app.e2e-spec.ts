import { WebcampOilAppPage } from './app.po';

describe('webcamp-oil-app App', function() {
  let page: WebcampOilAppPage;

  beforeEach(() => {
    page = new WebcampOilAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
