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

  getAppInstance(processId) {
    return this.activeProcesses.getByKey(processId);
  }
}

const processManager = new ProcessManager();
