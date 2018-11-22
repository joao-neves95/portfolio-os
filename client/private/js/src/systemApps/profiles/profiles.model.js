class ProfilesModel {
  constructor() {
    this.currentPage = ProfilePageType.MyProfile;
  }

  async getThisUserProfile() {
    try {
      return await HttpClient.get( `${SERVER_ROOT_PATH}portfolio-os/api/user/profile` );

    } catch ( e ) {
      console.error( e );
    }
  }

  async getUserProfile( userId ) {
    return await HttpClient.get( `${SERVER_ROOT_PATH}portfolio-os/api/users/${userId}/profile` );
  }
}
