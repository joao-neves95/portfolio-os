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

  async updateSummary( summary ) {
    return await HttpClient.put( `${API_ROOT_PATH}user/profile/summary`, { summary: CommonUtils.sanitizeHTML( summary ) } );
  }

  async postNewSkill( skill ) {
    return await HttpClient.post( `${API_ROOT_PATH}user/profile/skills`, { skill: CommonUtils.sanitizeHTML( skill ) } );
  }

  async updateSkill( skillId, skill ) {
    return await HttpClient.put( `${API_ROOT_PATH}user/profile/skills/${CommonUtils.sanitizeHTML(skillId)}`, { skill: CommonUtils.sanitizeHTML( skill ) } );
  }

  async deleteSkill( skillId ) {
    return await HttpClient.delete( `${API_ROOT_PATH}user/profile/skills/${CommonUtils.sanitizeHTML(skillId)}` );
  }

  async postNewLink( hostId, urlPath ) {
    return await HttpClient.post( `${API_ROOT_PATH}user/profile/links`, { hostId: CommonUtils.sanitizeHTML( hostId ), urlPath: CommonUtils.sanitizeHTML( urlPath ) } );
  }

  async updateLink( linkId, newPath ) {
    return await HttpClient.put( `${API_ROOT_PATH}user/profile/links/${CommonUtils.sanitizeHTML(linkId)}`, { newPath: CommonUtils.sanitizeHTML( newPath ) } );
  }

  async deleteLink( linkId ) {
    return await HttpClient.delete( `${API_ROOT_PATH}user/profile/links/${CommonUtils.sanitizeHTML(linkId)}` );
  }
}
