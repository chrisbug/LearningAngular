import { MessingPage } from './app.po';

describe('messing App', () => {
  let page: MessingPage;

  beforeEach(() => {
    page = new MessingPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
