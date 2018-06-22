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
    const newApp = new SystemApp(appName, startMenuIconUrl, taskbarIconUrl, executeFunction);
    this.systemApps.add(appName, newApp);
  }

  executeApplication(appName, processId) {
    this.systemApps.getByKey(appName).executeFunction(processId);
  }

  getAllApps() {
    return this.systemApps.getAllValues();
  }
}

const systemAppsManager = new SystemAppsManager();
