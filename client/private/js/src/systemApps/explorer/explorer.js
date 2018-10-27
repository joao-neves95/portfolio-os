class Explorer {
  constructor( processId ) {
    this.processId = processId;

    this.controller = new ExplorerController( processId );
  }
}
