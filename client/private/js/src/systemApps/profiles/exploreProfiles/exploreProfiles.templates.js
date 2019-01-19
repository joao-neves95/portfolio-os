/*
 *
 * Copyright (c) 2018 João Pedro Martins Neves (shivayl) - All Rights Reserved.
 *
 * Portfolio-OS is licensed under the GNU LGPLv3, located in the root of this
 * project, under the name "LICENSE.md".
 *
 */

class ExploreProfilesTemplates {
  constructor() {
    return false;
  }

  static userCard( id, name, description ) {
    return `
      <article id="user_${id}" class="card user-card">
        <div class="card-section">
          <h4>${name}</h4>
          <p>${description}</p>
        </div>
      </article>
    `;
  }
}
