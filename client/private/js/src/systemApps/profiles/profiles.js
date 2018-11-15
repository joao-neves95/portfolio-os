class Profiles {
  constructor( processId ) {
    /** The window id */
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
    this.injectMyProfile();

    // Add Listeners.
    DomUtils.get( `#${this.id} .my-profile` ).addEventListener( 'click', ( e ) => {
      e.preventDefault( e );
      this.injectMyProfile();
    } );

    DomUtils.get( `#${this.id} .explore` ).addEventListener( 'click', ( e ) => {
      e.preventDefault( e );
      this.injectExploreProfiles();
    } );
  }

  injectMyProfile() {
    this.view.injectContent( this.id, ProfilesTemplates.userProfile( 'João Neves', 'I am a programmer.', [['Github', 'github.com', 'joao-neves95']], ['C#, .NET, ASP.NET Core', 'JavaScript, Node.js'] ) );
    this.myProfileController.initPage( this.view.contentTarget( this.id ) );
    this.currentPage = ProfilePageType.MyProfile;
  }

  injectUserProfile() {
    this.view.injectContent( this.id, ProfilesTemplates.userProfile( 'João Neves', 'I am a programmer.', [['Github', 'github.com', 'joao-neves95']], ['C#, .NET, ASP.NET Core', 'JavaScript, Node.js'] ) );
  }

  injectExploreProfiles() {
    this.currentPage = ProfilePageType.Explore;
  }
}
