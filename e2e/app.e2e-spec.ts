import { MeanRsvpAppPage } from './app.po';

describe('mean-rsvp-app App', () => {
  let page: MeanRsvpAppPage;

  beforeEach(() => {
    page = new MeanRsvpAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
