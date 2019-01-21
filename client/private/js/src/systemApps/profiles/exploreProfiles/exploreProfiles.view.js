/*
 *
 * Copyright (c) 2018 João Pedro Martins Neves (shivayl) - All Rights Reserved.
 *
 * Portfolio-OS is licensed under the GNU LGPLv3, located in the root of this
 * project, under the name "LICENSE.md".
 *
 */

class ExploreProfilesView {
  constructor() {
  }

  allUserCards( targetWindow ) { return DomUtils.get( `#${targetWindow} .user-card` ); }

  injectCards( target, users ) {
    const container = document.getElementById( 'cntnt_' + target );
    container.innerHTML = '';

    for ( let i = 0; i < users.length; ++i ) {
      container.innerHTML += ExploreProfilesTemplates.userCard( users[i].id, users[i].name, users[i].summary );
    }
  }

  injectProfile( target, content ) {

  }
}
