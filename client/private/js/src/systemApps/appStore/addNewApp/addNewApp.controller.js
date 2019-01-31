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
    this.view = new AddNewAppView();
  }

  async openWindow() {
    if (this.model.isOpen)
      return;

    const thisUserCodePenUsername = await this.model.getThisUserCodepenUsername();
    this.model.processId = Utils.randomString( 4 );
    windowManager.openNewWindowCustom(
      this.model.processId,
      'Add New App',
      AddNewAppTemplates.content( thisUserCodePenUsername ),
      false, null,
      '30%', '65%'
    );
    this.model.isOpen = true;

    this.view.addNewAppBtnElem( this.model.processId ).addEventListener( 'click', async ( e ) => {
      e.preventDefault();
      try {
        const res = await this.model.addNewApp( this.view.getFormData( this.model.processId ) );
        // TODO: (FRONTEND) Prompt the user if not successful.
        this.view.closeWindowBtnElem( this.model.processId ).click();
        console.debug( res );

      } catch ( e ) {
        console.debug( e );
        return;
      }

    } );

    this.view.helpBtnElem( this.model.processId ).addEventListener( 'click', () => {
      windowManager.openNewModal( AddNewAppTemplates.helpModalContent );
    } );

    this.view.closeWindowBtnElem( this.model.processId ).addEventListener( 'click', () => {
      this.model.isOpen = false;
    });
  }
}
