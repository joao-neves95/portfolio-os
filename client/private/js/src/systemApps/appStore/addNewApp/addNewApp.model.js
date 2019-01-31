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

  async getThisUserCodepenUsername() {
    try {
      let res = await HttpClient.get( `${API_ROOT_PATH}user/profile/links/codepen` );
      if ( !res.ok )
        return false;
      else if ( res.status === 404 ) {
        Notifications.infoToast( 'If you add your CodePen username to your profile, it will be automaticaly added to the AddNewApp formulary.' );
        return false;
      }

      res = await res.json();
      if ( res.length <= 0 )
        return false;

      return res[0].urlpath;

    } catch ( e ) {
      return false;
    }
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
    else if ( formData.indexPage.split( '/' ).length !== 2 )
      return Notifications.errorToast( 'The application CodePen\'s index page is not valid.' );
    
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
