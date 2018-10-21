class SystemApp {
  constructor(appName, startMenuIconUrl, taskbarIconUrl, executeFunction) {
    this.name = appName;
    this.executeFunction = (processId) => { executeFunction(processId); };
    this.startMenuIconUrl = startMenuIconUrl;
    this.taskbarIconUrl = taskbarIconUrl;
  }
}
