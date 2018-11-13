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
    this.view.injectContent( this.id, ProfilesTemplates.userProfile( 'João Neves', 'I am a programmer.', [['Github', 'github.com', 'joao-neves95']], ['C#, .NET, ASP.NET Core', 'JavaScript, Node.js'] ) );

    DomUtils.get( `#${this.id} .my-profile` ).addEventListener( 'click', ( e ) => {
      e.preventDefault( e );
      this.currentPage = ProfilePageType.MyProfile;
    } );

    DomUtils.get( `#${this.id} .explore` ).addEventListener( 'click', ( e ) => {
      e.preventDefault( e );
      this.currentPage = ProfilePageType.Explore;
    } );
  }
}
