/*
 *
 * Copyright (c) 2018 João Pedro Martins Neves (shivayl) - All Rights Reserved.
 *
 * Portfolio-OS is licensed under the GNU LGPLv3, located in the root of this
 * project, under the name "LICENSE.md".
 *
 */

class ExploreProfilesController {
  constructor() {
    this.model = new ExploreProfilesModel();
    this.view = new ExploreProfilesView();

    this.userProfilesController = new UserProfilesController();
  }

  inject( targetWindow ) {
    this.model.target = target;
    this.__nextUsersPage( 0 );
  }

  async __changeUsersPage( lastId ) {
    const users = this.model.getUsersPage();
    this.view.injectCards( targetWindow, users );
  }

  ____updateListeners() {
    const allUserCards = this.view.allUserCards;
    for ( let i = 0; i < allUserCards.length; ++i ) {
      allUserCards[i].addEventListener( 'click', async ( e ) => {
        const thisUserId = e.target.id;
        await this.____injectProfile();
      } );
    }
  }

  async ____injectProfile() {
    const userProfile = await this.model.getUserProfile( userId );
    this.view.injectProfile( this.id,
      UserProfilesTemplates.userProfile(
        userProfile.name,
        userProfile.summary,
        userProfile.socialLinks,
        userProfile.skillSet
      )
    );
  }
}
