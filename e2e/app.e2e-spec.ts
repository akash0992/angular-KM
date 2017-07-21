import { AngularKMPage } from './app.po';

describe('angular-km App', () => {
  let page: AngularKMPage;

  beforeEach(() => {
    page = new AngularKMPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
