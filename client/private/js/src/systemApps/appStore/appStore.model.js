/*
 *
 * Copyright (c) 2018 João Pedro Martins Neves (shivayl) - All Rights Reserved.
 *
 * Portfolio-OS is licensed under the GNU LGPLv3, located in the root of this
 * project, under the name "LICENSE.md".
 *
 */

class AppStoreModel {
  constructor() {
    this.processId = '';
    this.id = '';
  }

  async getAppStorePageFrom( id ) {
    try {
      /** @type { Response } */
      const res = await HttpClient.get( `${API_ROOT_PATH}app-store?lastId=${id}&limit=6` );
      return !res.ok ? Notifications.errorToast( 'There was an error getting the AppStore page.' ) : await res.json();

    } catch ( e ) {
      Notifications.errorToast( 'There was an error getting the AppStore page.' );
      console.debug( e );
      return e;
    }
  }

  async installApp( appId ) {
    try {
      return await HttpClient.post( `${API_ROOT_PATH}user/installed-apps/${appId}` );

    } catch ( e ) {
      console.error( e );
      return e;
    }
  }
}
