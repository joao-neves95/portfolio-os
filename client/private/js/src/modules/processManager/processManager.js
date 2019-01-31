/*
 *
 * Copyright (c) 2018 João Pedro Martins Neves (shivayl) - All Rights Reserved.
 *
 * Portfolio-OS is licensed under the GNU LGPLv3, located in the root of this
 * project, under the name "LICENSE.md".
 *
 */

let processManager = null;

class ProcessManager {
  constructor() {
    if ( processManager )
      throw new Error( 'There can only be one instance of ProcessManager.' );

    this.activeProcesses = new Dictionary();

    processManager = this;
    Object.seal( processManager );
  }

  /**
   * @param {string} processName The name of the application.
   */
  async launchNewProcess( processName ) {
    const newProcess = new Process( processName );
    let thisAppInstance = systemAppsManager.getAppInstance( processName );

    if ( !thisAppInstance ) {
      thisAppInstance = await userAppsManager.executeApplication( processName, newProcess.id );

      if ( !thisAppInstance )
        return Notifications.errorToast( `App "${thisAppInstance.name}" not found.` );

      this.activeProcesses.add( newProcess.id, thisAppInstance );

    } else {
      this.activeProcesses.add( newProcess.id, thisAppInstance );
      systemAppsManager.executeApplication( processName, newProcess.id );
    }
  }

  getActiveProcessesCount() {
    return this.activeProcesses.length;
  }

  /**
   *
   * @param { string } processId
   * @returns { SystemApp }
   */
  getAppInstance( processId ) {
    return this.activeProcesses.getByKey( processId );
  } 
}

new ProcessManager();
