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
    const appModel = new AppStoreApplication(
      FileSystemItemType.Executable,
      formData.appName,
      'user-name',
      formData.indexPage,
      formData.appDescription,
      formData.startMenuIconUrl
    );

    try {
      const res = await HttpClient.post( `${API_ROOT_PATH}app-store`, appModel );
      if ( !res.ok )
        Notifications.errorToast( 'There was an error while adding the new app.' );

      Notifications.successToast( 'Application successfully added.' );

      return res;
    } catch ( e ) {
      throw new Error( e );
    }
  }
}
