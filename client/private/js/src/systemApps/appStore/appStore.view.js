/*
 *
 * Copyright (c) 2018 João Pedro Martins Neves (shivayl) - All Rights Reserved.
 *
 * Portfolio-OS is licensed under the GNU LGPLv3, located in the root of this
 * project, under the name "LICENSE.md".
 *
 */

class AppStoreView {
  constructor() {
    // This window id.
    this.targetId = '';
  }

  get appContainer() { return DomUtils.get( `#${this.targetId} .content-grid` ); }
  get firstAppId() { return this.appContainer.firstChild().id.substring( 4 ); }
  get lastAppId() { return this.appContainer.lastChild().id.substring( 4 ); }

  /**
   * 
   * @param { AppStoreApplication } appStoreApplication
   */
  injectApp( appStoreApplication ) {
    appContainer.innerHTML += AppStoreTemplates.appCard(
      appStoreApplication.id,
      appStoreApplication.name,
      appStoreApplication.creator,
      appStoreApplication.htmlIndexUrl,
      Infinity,
      Infinity,
      appStoreApplication.description
    );
  }
}
