export default class HelloworldLink {
  public text: string;
  public href: string;
  /**
   *
   * @param config
   * @param filters
   */
  constructor(href: string, text: string) {
    this.href = href;
    this.text = text;
  }

  generateLink() {
    return this.href;
  }

  printText() {
    return this.text;
  }
}
