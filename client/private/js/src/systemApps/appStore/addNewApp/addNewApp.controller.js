/*
 *
 * Copyright (c) 2018 João Pedro Martins Neves (shivayl) - All Rights Reserved.
 *
 * Portfolio-OS is licensed under the GNU LGPLv3, located in the root of this 
 * project, under the name "LICENSE.md".
 *
 */

class AddNewAppController {
  constructor() {
    this.model = new AddNewAppModel();
  }

  openWindow() {
    if (this.model.isOpen)
      return;

    const processId = Utils.randomString(4);
    windowManager.openNewWindowCustom(
      processId,
      'Add New App',
      AddNewAppTemplates.content,
      false, null,
      '30%', '65%'
    );
    this.model.isOpen = true;

    DomUtils.get( `#${Window.idPrefix}${processId} .help` ).addEventListener( 'click', () => {
      windowManager.openNewModal( AddNewAppTemplates.helpModalContent );
    } );

    DomUtils.get(`#${Window.idPrefix}${processId} .close-window`).addEventListener('click', () => {
      this.model.isOpen = false;
    });
  }
}
