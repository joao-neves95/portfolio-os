class ExplorerController {
  constructor( processId ) {
    this.model = new ExplorerModel();
    this.view = new ExplorerView();
    this.templates = ExplorerTemplates;

    this.model.id = `explorer-${processId}`;
    this.model.processId = processId;
    this.init();
    Object.freeze( this );
  }

  init() {
    windowManager.openNewWindow( this.model.processId, this.templates.window( this.model.id ) );
    this.model.initTreeNav();
  }
}
