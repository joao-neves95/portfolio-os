/*
 *
 * Copyright (c) 2018 João Pedro Martins Neves (shivayl) - All Rights Reserved.
 *
 * Portfolio-OS is licensed under the GNU LGPLv3, located in the root of this 
 * project, under the name "LICENSE.md".
 *
 */

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
