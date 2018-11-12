class ProfilesView {
  constructor() {

  }

  /**
   * 
   * @param { string } id
   * @returns { HTMLElement }
   */
  contentTarget( windowId ) { return document.getElementById( windowId ).querySelector( `[id^="cntnt_"] ` ); }

  injectContent( windowId, content ) {
    this.contentTarget( windowId ).innerHTML = content;
  }
}
