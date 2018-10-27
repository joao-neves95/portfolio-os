class ExplorerView {
  constructor() {
    Object.freeze( this );
  }

  /**
   * 
   * @param { string } id
   * @returns { HTMLElement }
   */
  element( id ) { return document.getElementById( id ); }
  /**
   * 
   * @param { string } id
   * @returns { HTMLElement }
   */
  contentTarget( id ) { return element( id ).querySelector( `[id^='${ExplorerTemplates.contentPrefix}']` ); }

  /**
   * 
   * @param { string } content
   */
  injectContent( id, content ) {
    this.contentTarget( id ).innerHTML = content;
  }
}
