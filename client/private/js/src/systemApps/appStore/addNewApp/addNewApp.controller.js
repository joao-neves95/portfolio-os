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

  openWindow() {
    if (this.model.isOpen)
      return;

    this.model.processId = Utils.randomString( 4 );
    windowManager.openNewWindowCustom(
      this.model.processId,
      'Add New App',
      AddNewAppTemplates.content,
      false, null,
      '30%', '65%'
    );
    this.model.isOpen = true;

    this.view.addNewAppBtnElem.addEventListener( 'click', async ( e ) => {
      e.preventDefault();

      try {
        const res = this.model.addNewApp( this.view.getFormData() );
        if ( !res.ok() )
          return Notifications.errorToast( 'There was an error while adding the new application.' );

        Notifications.successToast( await res.json().msg );
        this.view.closeWindowBtnElem.click();
        console.debug( res );

      } catch ( e ) {
        Notifications.errorToast( e );
        console.debug( e );
        return;
      }

    } );

    this.view.helpBtnElem.addEventListener( 'click', () => {
      windowManager.openNewModal( AddNewAppTemplates.helpModalContent );
    } );

    this.view.closeWindowBtnElem.addEventListener( 'click', () => {
      this.model.isOpen = false;
    });
  }
}
