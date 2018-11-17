export default class HelloworldLink {
  public text: string;
  public href: string;
  /**
   *
   * @param href
   * @param text
   */
  constructor(href: string, text: string) {
    this.href = href;
    this.text = text;
  }

  public generateLink() {
    return this.href;
  }

  public printText() {
    return this.text;
  }
}
