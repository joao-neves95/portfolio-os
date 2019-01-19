/*
 *
 * Copyright (c) 2018 João Pedro Martins Neves (shivayl) - All Rights Reserved.
 *
 * Portfolio-OS is licensed under the GNU LGPLv3, located in the root of this
 * project, under the name "LICENSE.md".
 *
 */

class Profiles {
  constructor( processId ) {
    /** The window id */
    this.id = `profiles-${processId}`;
    this.processId = processId;
    this.model = new ProfilesModel();
    this.view = new ProfilesView();

    this.myProfileController = new MyProfileController();
    this.exploreProfilesController = new ExploreProfilesController();

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
    /** @type {Response} */
    const res = await this.model.getThisUserProfile();
    if ( res.status !== 200 || !res )
      return Notifications.errorToast( 'There was an error while getting the user profile.' );

    const thisUserProfile = await res.json();
    this.view.injectContent( this.id, UserProfilesTemplates.userProfile( thisUserProfile.name, thisUserProfile.summary, thisUserProfile.socialLinks, thisUserProfile.skillSet ) );
    this.myProfileController.initPage( this.view.contentTarget( this.id ) );
    this.model.currentPage = ProfilePageType.MyProfile;
  }

  injectExploreProfiles() {
    this.model.currentPage = ProfilePageType.Explore;
    this.exploreProfilesController.inject( this.id );
  }

  async injectUserProfile( userId ) {
    const userProfile = await this.model.getUserProfile( userId );
    this.view.injectContent( this.id, UserProfilesTemplates.userProfile( 'João Neves', 'I am a programmer.', [['1', 'Github', 'github.com', 'joao-neves95']], ['C#, .NET, ASP.NET Core', 'JavaScript, Node.js'] ) );
    this.model.currentPage = ProfilePageType.UserProfiles;
  }
}
