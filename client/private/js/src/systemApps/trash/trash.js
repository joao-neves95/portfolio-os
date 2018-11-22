/*
 *
 * Copyright (c) 2018 João Pedro Martins Neves (shivayl) - All Rights Reserved.
 *
 * Portfolio-OS is licensed under the GNU LGPLv3, located in the root of this 
 * project, under the name "LICENSE.md".
 *
 */

class Trash {
  constructor( processId ) {
    this.id = `trash-${processId}`;
    this.processId = processId;

    this.items = [];

    this.init();
  }

  init() {
    windowManager.openNewWindow( this.processId, terminalTemplates.window( this.id ) );
  }
}
