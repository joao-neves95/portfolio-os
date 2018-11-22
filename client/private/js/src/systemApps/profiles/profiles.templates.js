/*
 *
 * Copyright (c) 2018 João Pedro Martins Neves (shivayl) - All Rights Reserved.
 *
 * Portfolio-OS is licensed under the GNU LGPLv3, located in the root of this
 * project, under the name "LICENSE.md".
 *
 */

class ProfilesTemplates {
  static window( id ) {
    return `
      <section class="grid-y profiles" id="${id}">

        <div class="cell top-bar stacked-for-medium">
          <div class="top-bar-left">
            <ul class="dropdown menu" data-dropdown-menu>
              <!-- <li class="menu-text">Site Title</li> -->
              <li><a href="#" class="my-profile-btn">My Profile</a></li>
              <li><a href="#" class="explore-btn">Explore</a></li>
            </ul>
          </div>
          <div class="top-bar-right">
            <ul class="menu">
              <li><input type="search" placeholder="Search for someone"></li>
              <li><button type="button" class="button">Search</button></li>
            </ul>
          </div>
        </div>

        <div class="cell content" id="cntnt_${id}">
        </div>

      </section>
    `;
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
      skillSetHtml += ProfilesTemplates.removableElem( ProfilesTemplates.disabledInput( skillSet[i].name, 'skill_' + skillSet[i].id, 'skill' ) );
    }

    let websitesHtml = '';
    for ( let i = 0; i < websites.length; ++i ) {
      websitesHtml += ProfilesTemplates.link( websites[i].id, websites[i].hostName, '', websites[i].urlPath );
    }

    return `
      <form class="grid-container my-profile">
        <div class="grid-y inner-my-profile">

          <div class="cell block-item">
            <h5>Name</h5>
            <p>${name}</p>
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

  static removableElem( content ) {
    return `
      <div class="callout">
        ${content}
        <button class="close-button disabled" type="button">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
    `;
  }

  static disabledInput( value = '', id = '', additionalClasses = '' ) {
    return `
      <input id="${id}" class="disabled-input ${additionalClasses}" type="text" value="${value}" disabled="true">
    `;
  }

  static link( linkId, hostName, host, path ) {
    return `
      <div class="grid-x">
        <div class="medium-2 cell link-label-wrapper">
          <label class="lbl">Website</label>
          <a class="pointer" href="https://${host}/${path}" target="_blank">
            <p>${hostName}</p>
          </a>
        </div>
        <div class="medium-9 cell link-slug-wrapper">
          <label class="lbl">Slug
            <input id="link_${linkId}" class="slug disabled-input" type="text" value="${path}" disabled="true">
          </label>
        </div>
      </div>
    `;
  }

  static profileCard() {
    return `
    `;
  }
}
