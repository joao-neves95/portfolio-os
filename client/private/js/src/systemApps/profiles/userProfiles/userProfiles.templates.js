/*
 *
 * Copyright (c) 2018 João Pedro Martins Neves (shivayl) - All Rights Reserved.
 *
 * Portfolio-OS is licensed under the GNU LGPLv3, located in the root of this
 * project, under the name "LICENSE.md".
 *
 */

class UserProfilesTemplates {
  constructor() {
    return;
  }

  /**
   * 
   * @param {any} name
   * @param {any} summary
   * @param { string[] } websites string[string[]]: ( [['hostName', 'host', 'path']] )
   * @param { string[] } skillSet
   */
  static userProfile( name, summary, websites, skillSet ) {
    let skillSetHtml = '';
    for ( let i = 0; i < skillSet.length; ++i ) {
      skillSetHtml += ProfilesTemplates.removableElem(
        ProfilesTemplates.disabledInput( skillSet[i].name, 'skill_' + skillSet[i].id, 'skill' ),
        true
      );
    }

    let websitesHtml = '';
    for ( let i = 0; i < websites.length; ++i ) {
      websitesHtml += ProfilesTemplates.removableElem(
        ProfilesTemplates.link( websites[i].id, websites[i].hostlabel, websites[i].hosturl, websites[i].urlpath ),
        true
      );
    }

    return `
      <form class="grid-container my-profile">
        <div class="grid-y inner-my-profile">

          <div class="cell block-item">
            <div id="name-wrapper">
              <h5>Name</h5><br/>
              <p>${name}</p>
            </div>
            <div id="link-social-accounts-wrapper">
            </div>
          </div>

          <div class="cell block-item">
            <h5>Summary</h5>
            <textarea class="summary disabled-input" disabled="true">${summary}</textarea>
          </div>

          <div class="cell block-item links-container">
            <h5>Around The Web</h5>
            ${websitesHtml}
          </div>

          <div class="cell block-item skills-container">
            <h5>Skill Set</h5>
            ${skillSetHtml}
          </div>

          <div class="cell block-item skills-container">
            <h5>Images</h5>
          </div>
          <div class="cell block-item skills-container">
            <h5>Videos</h5>
          </div>
          <div class="cell block-item skills-container">
            <h5>Documents</h5>
          </div>
          <div class="cell block-item skills-container">
            <h5>Music</h5>
          </div>

        </div>
      </form>
    `;
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

