/*
 *
 * Copyright (c) 2018 João Pedro Martins Neves (shivayl) - All Rights Reserved.
 *
 * Portfolio-OS is licensed under the GNU LGPLv3, located in the root of this
 * project, under the name "LICENSE.md".
 *
 */

class AddNewAppModel {
  constructor() {
    this.isOpen = false;
    this.processId = '';
  }

  /**
   * 
   * @param { object } formData
   * 
   * @returns { Response | Error }
   */
  async addNewApp( formData ) {
    // VALIDATION
    if ( formData.appName.length <= 2 )
      return Notifications.errorToast( 'The application name must have more than 2 characters.' );
    else if ( formData.indexPage <= 1)
      return Notifications.errorToast( 'The application html index page is required.' );

    const appModel = new AppStoreApplication(
      FileSystemItemType.Executable,
      '',
      formData.appName,
      'user-name',
      formData.indexPage,
      formData.appDescription,
      formData.startMenuIconUrl
    );

    try {
      let res = await HttpClient.post( `${API_ROOT_PATH}app-store`, appModel );
      if ( !res.ok ) {
        res = await res.json();
        Notifications.errorToast( res.msg );
        return res;
      }

      Notifications.successToast( 'Application successfully added.' );

    } catch ( e ) {
      throw new Error( e );
    }
  }
}
