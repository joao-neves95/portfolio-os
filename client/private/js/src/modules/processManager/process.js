class Process {
  constructor(processName) {
    this.id = Utils.randomString(5);
    this.name = processName;
  }
}
