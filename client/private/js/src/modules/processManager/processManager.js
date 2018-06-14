class ProcessManager {
  constructor() {
    this.activeProcesses = new Dictionary();

    this.launchNewProcess = (processName) => {
      const newProcess = new Process(processName);
      activeProcesses.add(newProcess.id, newProcess);
      windowManager.openNewWindow(processName, processId);
    }
  }

  get getActiveProcessesNum() {
    return this.activeProcesses;
  }
}
