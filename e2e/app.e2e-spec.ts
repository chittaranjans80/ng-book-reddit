import { NgBookRedditPage } from './app.po';

describe('ng-book-reddit App', function() {
  let page: NgBookRedditPage;

  beforeEach(() => {
    page = new NgBookRedditPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
