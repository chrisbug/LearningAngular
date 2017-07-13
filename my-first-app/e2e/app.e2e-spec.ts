import { BlankAppPage } from './app.po';

describe('blank-app App', () => {
  let page: BlankAppPage;

  beforeEach(() => {
    page = new BlankAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
