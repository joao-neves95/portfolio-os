/*
 *
 * Copyright (c) 2018 João Pedro Martins Neves (shivayl) - All Rights Reserved.
 *
 * Portfolio-OS is licensed under the GNU LGPLv3, located in the root of this
 * project, under the name "LICENSE.md".
 *
 */

class SystemAppsManager {
  constructor() {
    this.systemApps = new Dictionary();
  }

  /**
   * 
   * @param {string} appName
   * @param {string} startMenuIconUrl
   * @param {string} taskbarIconUrl
   * @param {function} executeFunction
   */
  bindApplication( appName, startMenuIconUrl, taskbarIconUrl, executeFunction ) {
    this.systemApps.add( appName, new SystemApp( appName, startMenuIconUrl, taskbarIconUrl, executeFunction ) );
  }

  /**
   * It executes the system application specified with the its bind name returning true, or returns false if not found.
   * 
   * @param {string} appName
   * @param {string} processId
   * 
   * @returns { void | false }
   */
  executeApplication( appName, processId ) {
    /** @type { SystemApp } */
    const thisApp = this.systemApps.getByKey( appName );
    if ( !thisApp )
      return false;

    thisApp.executeFunction( processId );
    return true;
  }

  getAppInstance(appName) {
    return this.systemApps.getByKey(appName);
  }

  getAllApps() {
    return this.systemApps.getAllValues();
  }
}

const systemAppsManager = new SystemAppsManager();
