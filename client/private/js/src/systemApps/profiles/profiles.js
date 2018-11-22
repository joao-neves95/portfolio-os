class Profiles {
  constructor( processId ) {
    /** The window id */
    this.id = `profiles-${processId}`;
    this.processId = processId;
    this.model = new ProfilesModel();
    this.view = new ProfilesView();

    this.myProfileController = new MyProfileController();
    this.userProfilesController = new UserProfilesController();

    this.init();
    Object.freeze( this );
  }

  async init() {
    windowManager.openNewWindow( this.processId, ProfilesTemplates.window( this.id ) );
    await this.injectMyProfile();

    // Add Listeners.
    DomUtils.get( `#${this.id} .my-profile-btn` ).addEventListener( 'click', ( e ) => {
      e.preventDefault( e );
      this.injectMyProfile();
    } );

    DomUtils.get( `#${this.id} .explore-btn` ).addEventListener( 'click', ( e ) => {
      e.preventDefault( e );
      this.injectExploreProfiles( e );
    } );
  }

  async injectMyProfile() {
    const thisUserProfile = await this.model.getThisUserProfile();
    this.view.injectContent( this.id, ProfilesTemplates.userProfile( thisUserProfile.name, thisUserProfile.summary, thisUserProfile.socialLinks, thisUserProfile.skillSet ) );
    this.myProfileController.initPage( this.view.contentTarget( this.id ) );
    this.model.currentPage = ProfilePageType.MyProfile;
  }

  async injectUserProfile( e ) {
    // TODO: Get the user id from the user card.
    const userProfile = await this.model.getUserProfile( 1 );
    this.view.injectContent( this.id, ProfilesTemplates.userProfile( 'João Neves', 'I am a programmer.', [['1', 'Github', 'github.com', 'joao-neves95']], ['C#, .NET, ASP.NET Core', 'JavaScript, Node.js'] ) );
    this.model.currentPage = ProfilePageType.UserProfiles;
  }

  injectExploreProfiles() {
    this.model.currentPage = ProfilePageType.Explore;
  }
}
