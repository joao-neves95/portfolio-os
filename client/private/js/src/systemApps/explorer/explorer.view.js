/*
 *
 * Copyright (c) 2018 João Pedro Martins Neves (shivayl) - All Rights Reserved.
 *
 * Portfolio-OS is licensed under the GNU LGPLv3, located in the root of this
 * project, under the name "LICENSE.md".
 *
 */

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
