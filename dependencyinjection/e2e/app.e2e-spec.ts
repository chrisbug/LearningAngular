import { DependencyinjectionPage } from './app.po';

describe('dependencyinjection App', () => {
  let page: DependencyinjectionPage;

  beforeEach(() => {
    page = new DependencyinjectionPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
