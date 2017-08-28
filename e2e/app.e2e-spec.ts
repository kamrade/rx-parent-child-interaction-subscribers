import { ParentChildrenCommunicatePage } from './app.po';

describe('parent-children-communicate App', () => {
  let page: ParentChildrenCommunicatePage;

  beforeEach(() => {
    page = new ParentChildrenCommunicatePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
