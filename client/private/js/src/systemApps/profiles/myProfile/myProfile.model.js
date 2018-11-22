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
