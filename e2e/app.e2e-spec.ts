import { MyQuickstartScssPage } from './app.po';

describe('my-quickstart-scss App', function() {
  let page: MyQuickstartScssPage;

  beforeEach(() => {
    page = new MyQuickstartScssPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
