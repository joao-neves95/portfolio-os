class AppStoreController {
  constructor( processId ) {
    this.model = new AppStoreModel();
    this.view = new AppStoreView();

    this.model.processId = processId;
    this.model.id = `app-store-${processId}`;

    this.init();
    Object.freeze( this );
  }

  init() {
    windowManager.openNewWindow( this.processId, AppStoreTemplates.window( this.id ) );
    this.model.initTreeNav();
  }
}
