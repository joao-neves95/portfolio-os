﻿/*
 *
 * Copyright (c) 2018 João Pedro Martins Neves (shivayl) - All Rights Reserved.
 *
 * Portfolio-OS is licensed under the GNU LGPLv3, located in the root of this
 * project, under the name "LICENSE.md".
 *
 */

class ProfilesModel {
  constructor() {
    this.currentPage = ProfilePageType.MyProfile;
  }

  async getThisUserProfile() {
    try {
      return await HttpClient.get( `${API_ROOT_PATH}user/profile` );

    } catch ( e ) {
      console.error( e );
    }
  }

  async getUserProfile( userId ) {
    try {
      return await HttpClient.get( `${API_ROOT_PATH}users/${userId}/profile` );

    } catch ( e ) {
      console.error( e );
    }
  }
}
