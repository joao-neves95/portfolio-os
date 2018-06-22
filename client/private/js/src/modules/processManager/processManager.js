class ProcessManager {
  constructor() {
    this.activeProcesses = new Dictionary();

    /**
     * 
     * @param {string} processName
     * The name of the application.
     */
    this.launchNewProcess = (processName) => {
      const newProcess = new Process(processName);
      this.activeProcesses.add(newProcess.id, newProcess);
      // In the future find the app on systemAppsManager or userAppsManager.
      systemAppsManager.executeApplication(processName, newProcess.id);
    }
  }

  get getActiveProcessesNum() {
    return this.activeProcesses.length;
  }
}

const processManager = new ProcessManager();
