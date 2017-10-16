import { HighchartsAndCLIPage } from './app.po';

describe('highcharts-and-cli App', () => {
  let page: HighchartsAndCLIPage;

  beforeEach(() => {
    page = new HighchartsAndCLIPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
