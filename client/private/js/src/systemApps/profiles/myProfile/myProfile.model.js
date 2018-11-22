/*
 *
 * Copyright (c) 2018 João Pedro Martins Neves (shivayl) - All Rights Reserved.
 *
 * Portfolio-OS is licensed under the GNU LGPLv3, located in the root of this
 * project, under the name "LICENSE.md".
 *
 */

class MyProfileModel {
  constructor() {
    this.userId;
  }

  async postNewSkill( skill ) {
    return await HttpClient.post( `${API_ROOT_PATH}user/profile/skills`, { skill: skill } );
  }

  async updateSkill( skillId, skill ) {
    return await HttpClient.put( `${API_ROOT_PATH}user/profile/skills/${skillId}`, { skill: skill } );
  }

  async deleteSkill( skillId ) {
    return await HttpClient.delete( `${API_ROOT_PATH}user/profile/skills/${skillId}` );
  }

  async updateSummary( summary ) {
    return await HttpClient.put( `${API_ROOT_PATH}user/profile/summary`, { summary: summary } );
  }
}
