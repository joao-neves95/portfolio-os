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
      const res = await HttpClient.get( API_ROOT_PATH + 'app-store?lastId=' + id + '&limit=6' );
      return !res.ok() ? Notifications.errorToast( await res.json() ) : await res.json();

    } catch ( e ) {
      console.debug( e );
      return e;
    }
  }
}
