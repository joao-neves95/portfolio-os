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

  static removableElem( content, disabled = false ) {
    disabled = !disabled ? '' : 'disabled';

    return `
      <div class="callout">
        ${content}
        <button class="close-button ${disabled}" type="button">
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

  static link( linkId, hostLabel, hostUrl, urlPath ) {
    return `
      <div class="grid-x">
        <div class="medium-2 cell link-label-wrapper">
          <label class="lbl">Website</label>
          <a class="pointer" href="https://${hostUrl}/${urlPath}" target="_blank">
            <p>${hostLabel}</p>
          </a>
        </div>
        <div class="medium-9 cell link-slug-wrapper">
          <label class="lbl">Slug
            <input id="link_${linkId}" class="slug disabled-input" type="text" value="${urlPath}" disabled="true">
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
