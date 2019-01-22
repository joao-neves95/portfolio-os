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
    this.model.targetWindow = targetWindow;
    this.__changeUsersPage( 0 );
  }

  async __changeUsersPage( lastId ) {
    const users = await this.model.getUsersPage( lastId );
    this.view.injectCards( this.model.targetWindow, users );
    await this.____updateListeners();
  }

  ____updateListeners() {
    const allUserCards = this.view.allUserCards( this.model.targetWindow );
    for ( let i = 0; i < allUserCards.length; ++i ) {
      allUserCards[i].addEventListener( 'click', async ( e ) => {
        e.stopPropagation();
        const thisUserId = DomUtils.getParentByIdInclude( e.target, 'user_' ).id.substring( 5 );
        await this.____injectProfile( thisUserId );
      } );
    }
  }

  async ____injectProfile( userId ) {
    let res = await this.model.getUserProfile( userId );
    if ( !res.ok )
      return Notifications.errorToast( 'There was an error getting the user profile.' );

    res = await res.json();

    this.view.injectProfile(
      this.model.targetWindow,
      UserProfilesTemplates.userProfile(
        res.name,
        res.summary,
        res.socialLinks,
        res.skillSet
      )
    );
  }
}
