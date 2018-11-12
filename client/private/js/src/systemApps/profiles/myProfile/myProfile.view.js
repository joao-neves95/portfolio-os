class MyProfileView {
  constructor() {

  }

  /**
   * 
   * @param { string } id
   * @returns { HTMLElement }
   */
  contentTarget( windowId ) { return document.getElementById( windowId ).querySelector( `[id^="cntnt_"] ` ); }
}
