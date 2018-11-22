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
  bindApplication(appName, startMenuIconUrl, taskbarIconUrl, executeFunction) {
    const newApp = new SystemApp( appName, startMenuIconUrl, taskbarIconUrl, executeFunction );
    this.systemApps.add( appName, newApp );
  }

  /**
   * It executes the system application specified with the its bind name.
   * 
   * @param {string} appName
   * @param {string} processId
   */
  executeApplication( appName, processId ) {
    /** @type { SystemApp } */
    const thisApp = this.systemApps.getByKey( appName );
    !thisApp ? console.error( `Application not found ` ) : thisApp.executeFunction( processId );
  }

  getAppInstance(appName) {
    return this.systemApps.getByKey(appName);
  }

  getAllApps() {
    return this.systemApps.getAllValues();
  }
}

const systemAppsManager = new SystemAppsManager();
