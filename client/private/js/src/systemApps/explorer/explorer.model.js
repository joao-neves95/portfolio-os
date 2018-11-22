/*
 *
 * Copyright (c) 2018 João Pedro Martins Neves (shivayl) - All Rights Reserved.
 *
 * Portfolio-OS is licensed under the GNU LGPLv3, located in the root of this 
 * project, under the name "LICENSE.md".
 *
 */

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
        label: 'users/',
        parent: 'portfolioOS/',
        id: 'users/',
        opened: true
      } );

        this.treeNav.add( {
          label: 'local/',
          parent: 'users/',
          id: 'local/',
          opened: true
        } );

        this.treeNav.add( {
          label: 'public/',
          parent: 'users/',
          id: 'public/',
          opened: true
        } );

    this.treeNav.add( {
      label: 'applications/',
      parent: 'root/',
      id: 'applications/',
      opened: true
    } );
  }
}
