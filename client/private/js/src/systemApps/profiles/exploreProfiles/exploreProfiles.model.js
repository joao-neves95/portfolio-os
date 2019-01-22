/*
 *
 * Copyright (c) 2018 João Pedro Martins Neves (shivayl) - All Rights Reserved.
 *
 * Portfolio-OS is licensed under the GNU LGPLv3, located in the root of this
 * project, under the name "LICENSE.md".
 *
 */

class ExploreProfilesModel {
  constructor() {
    this.targetWindow;
  }

  async getUsersPage( lastId = 0 ) {
    const res = await HttpClient.get( `${API_ROOT_PATH}users/last-logged-in?lastId=${lastId}&limit=10` );
    if ( !res.ok ) {
      Notifications.errorToast( 'There was an error while getting the users page. Please try again later.' );
      return false;
    }

    return await res.json();
  }

  async getUserProfile( userId ) {
    try {
      return await HttpClient.get( `${API_ROOT_PATH}users/${userId}/profile` );

    } catch ( e ) {
      console.error( e );
      return false;
    }
  }
}
