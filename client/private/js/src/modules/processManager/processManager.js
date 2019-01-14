/*
 *
 * Copyright (c) 2018 João Pedro Martins Neves (shivayl) - All Rights Reserved.
 *
 * Portfolio-OS is licensed under the GNU LGPLv3, located in the root of this
 * project, under the name "LICENSE.md".
 *
 */

class ProcessManager {
  constructor() {
    this.activeProcesses = new Dictionary();
  }

  /**
   * @param {string} processName The name of the application.
   */
  launchNewProcess( processName ) {
    const newProcess = new Process( processName );
    let thisAppInstance = systemAppsManager.getAppInstance( processName );

    if ( !thisAppInstance ) {
      thisAppInstance = userAppsManager.executeApplication( processName, newProcess.id );

      if ( !thisAppInstance )
        Notifications.errorToast( 'App "' + appName + '" not found.' );

    } else {
      systemAppsManager.executeApplication( processName, newProcess.id );
    }

    this.activeProcesses.add( newProcess.id, thisAppInstance );
  }

  getActiveProcessesCount() {
    return this.activeProcesses.length;
  }

  /**
   * 
   * @param { string } processId
   * @returns { SystemApp }
   */
  getAppInstance(processId) {
    return this.activeProcesses.getByKey( processId );
  }
}

const processManager = new ProcessManager();
