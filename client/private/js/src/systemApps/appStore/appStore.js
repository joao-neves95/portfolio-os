class AppStore {
  constructor( processId ) {
    this.processId = processId;

    this.controller = new AppStoreController( processId );
  }
}
