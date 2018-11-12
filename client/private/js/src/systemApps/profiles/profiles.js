class Profiles {
  constructor( processId ) {
    this.id = `profiles-${processId}`;
    this.processId = processId;
    this.view = new ProfilesView();

    this.myProfileController = new MyProfileController();
    this.userProfilesController = new UserProfilesController();

    this.currentPage = ProfilePageType.MyProfile;

    this.init();
    Object.freeze( this );
  }

  init() {
    windowManager.openNewWindow( this.processId, ProfilesTemplates.window( this.id ) );
    this.view.injectContent( this.id, MyProfileTemplates.myProfilePage() );
  }
}
