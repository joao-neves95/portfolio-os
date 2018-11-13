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
    windowManager.openNewWindow( this.model.processId, AppStoreTemplates.window( this.model.id ) );
    $( `#${this.model.id} .dropdown` ).foundation();

    DomUtils.get( `#${this.model.id} .add-new` ).addEventListener( 'click', ( e ) => {
      e.preventDefault();

      this.openAddNewAppWindow();
    } );
  }

  openAddNewAppWindow() {
    if ( this.model.openedAddNewAppWindow )
      return;

    const processId = Utils.randomString( 4 );
    windowManager.openNewWindowCustom( processId, 'Add New App', AppStoreTemplates.openAddNewAppWin() );
    this.model.openedAddNewAppWindow = true;

    DomUtils.get( `#${Window.idPrefix}${processId} .close-window` ).addEventListener( 'click', () => {
      this.model.openedAddNewAppWindow = false;
    } );
  }
}
