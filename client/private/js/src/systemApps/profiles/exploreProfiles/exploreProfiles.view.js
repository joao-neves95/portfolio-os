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

  get allUserCards() { return DomUtils.get( '#' + this.model.targetWindow + '.user-card' ); }

  injectCards( target, users ) {
    const container = document.getElementById( 'cntnt_' + target );
    container.innerHTML = '';

    for ( let i = 0; i < userCards.length; ++i ) {
      container.innerHTML += ExploreProfilesTemplates.userCard();
    }
  }

  injectProfile( target, content ) {

  }
}
