class ProfilesModel {
  constructor() {
    this.currentPage = ProfilePageType.MyProfile;
  }

  async getThisUserProfile() {
    return await HttpClient.get( SERVER_ROOT_PATH + 'portfolio-os/api/user/profile' );
  }

  async getUserProfile( userId ) {
    return await HttpClient.get( SERVER_ROOT_PATH + 'portfolio-os/api/users/' + userId + '/profile' );
  }
}
