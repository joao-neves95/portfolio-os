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
    this.view.targetId = this.model.id;

    this.init();
    Object.freeze( this );
  }

  async init() {
    windowManager.openNewWindow( this.model.processId, AppStoreTemplates.window( this.model.id ) );
    $( `#${this.model.id} .dropdown` ).foundation();

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
    for ( let i = 0; i < apps.length; ++i ) {
      this.view.injectApp( apps[i] );
    }

    this.__updateListeners();
  }

  __updateListeners() {
    DomUtils.get( `#${this.model.id} .add-new` ).addEventListener( 'click', ( e ) => {
      e.preventDefault();
      this.addNewAppController.openWindow();
      document.getElementById( 'win-' + this.model.processId ).getElementsByClassName( 'close-window' )[0].click();
    } );

    // INSTALL BUTTON
    const allAppCardsInstallBtns = DomUtils.getAll( `#${this.model.id} .install` );
    for ( let i = 0; i < allAppCardsInstallBtns.length; ++i ) {
      allAppCardsInstallBtns[i].addEventListener( 'click', async ( e ) => {
        try {
          const thisAppId = DomUtils.getParentByIdInclude( e.target, 'app_' ).id.substring( 4 );
          const res = await this.model.installApp( thisAppId );
          if ( !res.ok )
            return Notifications.errorToast( ERROR_MSG_INSTALL_APP );

          Notifications.successToast( 'App successfully installed.' );
          // TODO (FRONTEND) Optimise.
          await startMenuManager.injectAllApps();
          return 0;

        } catch ( e ) {
          return Notifications.errorToast( ERROR_MSG_INSTALL_APP );
        }
      } );
    }
  }
}
