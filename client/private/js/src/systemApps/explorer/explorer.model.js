class ExplorerModel {
  constructor() {
    this.processId = '';
    this.id = '';

    this.treeNav = {};

    Object.seal( this );
  }

  initTreeNav() {
    this.treeNav = new VanillaTree( ExplorerTemplates.treeNavElem, {
      contextmenu: [{
        label: '',
        action: ( id ) => {
        }
      }]
    } );

    // Hardcoded for now.
    // TODO: Loop the file system to include user created directories e.g. Tree Traversal.
    this.treeNav.add( {
      label: 'root/',
      id: 'root/',
      opened: true
    } );

    this.treeNav.add( {
      label: 'portfolioOS/',
      parent: 'root/',
      id: 'portfolioOS/',
      opened: true
    } );

    this.treeNav.add( {
      label: 'applications/',
      parent: 'root/',
      id: 'applications/',
      opened: true
    } );

    this.treeNav.add( {
      label: 'user/',
      parent: 'root/',
      id: 'user/',
      opened: true
    } );
  }
}
