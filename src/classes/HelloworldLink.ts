export default class SearchParameters {
  public text: string;
  public href: string;
  /**
   *
   * @param config
   * @param filters
   * @param listingData
   */
  constructor(href: string, text: string) {
    this.href = href;
    this.text = text;
  }
}
