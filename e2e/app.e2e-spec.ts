import { OmegaPage } from './app.po';

describe('omega App', function() {
  let page: OmegaPage;

  beforeEach(() => {
    page = new OmegaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
