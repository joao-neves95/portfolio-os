/*
 *
 * Copyright (c) 2018 João Pedro Martins Neves (shivayl) - All Rights Reserved.
 *
 * Portfolio-OS is licensed under the GNU LGPLv3, located in the root of this
 * project, under the name "LICENSE.md".
 *
 */

class AppStoreController {
  constructor( processId ) {
    this.model = new AppStoreModel();
    this.view = new AppStoreView();
    this.addNewAppController = new AddNewAppController();

    this.model.processId = processId;
    this.model.id = `app-store-${processId}`;
    this.view.targetId = processId;

    this.init();
    Object.freeze( this );
  }

  async init() {
    windowManager.openNewWindow( this.model.processId, AppStoreTemplates.window( this.model.id ) );
    $( `#${this.model.id} .dropdown` ).foundation();

    DomUtils.get( `#${this.model.id} .add-new` ).addEventListener( 'click', ( e ) => {
      e.preventDefault();

      this.addNewAppController.openWindow();
    } );

    const firstPageApps = await this.model.getAppStorePageFrom( 0 );
    this.__injectApps( firstPageApps );
  }

  async __nextPageHandler() {
    const apps = await this.model.getAppStorePageFrom( this.view.lastAppId );
    this.__injectApps( apps );
  }

  async __previousPageHandler() {
    const apps = await this.model.getAppStorePageFrom( this.view.firstAppId );
    this.__injectApps( apps );
  }

  /**
   * 
   * @param { AppStoreApplication[] } apps
   */
  __injectApps( apps ) {
    for ( let i = 0; i < firstPageApps.length; ++i ) {
      this.view.injectApp( firstPageApps[i] );
    }
  }
}