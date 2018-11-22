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
   * @param {string} processName
   * The name of the application.
   */
  launchNewProcess( processName ) {
    const newProcess = new Process( processName );
    // TODO: In the future find the app on systemAppsManager or userAppsManager.
    const thisAppInstance = systemAppsManager.getAppInstance( processName );
    this.activeProcesses.add( newProcess.id, thisAppInstance );
    systemAppsManager.executeApplication( processName, newProcess.id );
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
