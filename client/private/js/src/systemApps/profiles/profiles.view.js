/*
 *
 * Copyright (c) 2018 João Pedro Martins Neves (shivayl) - All Rights Reserved.
 *
 * Portfolio-OS is licensed under the GNU LGPLv3, located in the root of this 
 * project, under the name "LICENSE.md".
 *
 */

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
