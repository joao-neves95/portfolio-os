/*
 *
 * Copyright (c) 2018 João Pedro Martins Neves (shivayl) - All Rights Reserved.
 *
 * Portfolio-OS is licensed under the GNU LGPLv3, located in the root of this
 * project, under the name "LICENSE.md".
 *
 */

/** @type { UserAppsManager } */
let userAppsManager = null;

class UserAppsManager {
  constructor() {
    if ( userAppsManager !== null )
      return null;

    this.installedApps = new Dictionary();
    this.__fetchInstalledApps();

    userAppsManager = this;
    Object.seal( userAppsManager );
  }

  /**
   * Executes and returns the executed app, or returns false if not found.
   * @param { string } appName
   * @param { string } processId
   */
  executeApplication( appName, processId ) {
    /** @type { AppStoreApplication } */
    const thisApp = this.installedApps.getByKey( appName );

    if ( !thisApp ) {
      Notifications.errorToast( 'App "' + appName + '" not found.' );
      return false;

    } else {
      windowManager.openNewAppStoreAppWindow( processId, thisApp.htmlIndexUrl );
      return thisApp;
    }
  }

  /**
   * 
   * @param { AppStoreApplication } appStoreApplication
   */
  bindApplication( appStoreApplication ) {
    this.installedApps.add( appName, appStoreApplication );
  }

  async __fetchInstalledApps() {
    const installedApps = await HttpClient.get( API_ROOT_PATH + 'user/installed-apps' );
    if ( !installedApps.ok() ) {
      Notifications.errorToast( 'There was an error while fetching the installed apps. Please try again later.' );
      return _reject( false );
    }

    for ( let i = 0; i < installedApps.lenght; ++i ) {
      this.installedApps.add( installedApps[i].name, installedApps[i] );
    }

    return _resolve();
  }
}

new UserAppsManager();
