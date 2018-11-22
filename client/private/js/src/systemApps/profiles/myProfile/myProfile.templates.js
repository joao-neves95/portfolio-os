/*
 *
 * Copyright (c) 2018 João Pedro Martins Neves (shivayl) - All Rights Reserved.
 *
 * Portfolio-OS is licensed under the GNU LGPLv3, located in the root of this
 * project, under the name "LICENSE.md".
 *
 */

class MyProfileTemplates {
  constructor() {
    throw new Error( 'Can not instantiate the static class MyProfileTemplates' );
  }

  static get linkSocialAccounts() {
    return `
      <div class="grid-x">
        <div class="cell large-4 large-offset-2">
          <a href="/portfolio-os/auth/google" class="link-account">
            <span class="hint--top hint--bounce" aria-label="Link Google Account.">
              <span class="hint--bottom hint--warning hint--bounce" aria-label="WARNING: This overrides any current linked Google account.">
                <img src="img/google-plus.svg" alt="Google-Plus Icon" class="icon" id="google-btn" />
              </span>
            </span>
          </a>
        </div>
        <div class="cell large-4">
          <a href="/portfolio-os/auth/github" class="link-account">
            <span class="hint--top hint--bounce" aria-label="Link GitHub Account.">
              <span class="hint--bottom hint--warning hint--bounce" aria-label="WARNING: This overrides any current linked GitHub account.">
                <img src="img/github.svg" alt="Github Icon" class="icon" draggable="false" />
              </span>
            </span>
          </a>
        </div>
      </div>
    `;
  }

  static get addLink() {
    return `
      <div class="grid-x">
        <div class="medium-2 cell link-label-wrapper">
          <label>Website
            <select>
              <option value="${HostId.GitHub}">GitHub</option>
              <option value="${HostId.Behance}">Behance</option>
              <option value="${HostId.Twitter}">Twitter</option>
              <option value="${HostId.Instagram}">Instagram</option>
            </select>
          </label>
        </div>
        <div class="medium-9 cell link-slug-wrapper">
          <label>Path
            <input class="slug new-link" type="text" placeholder="john-doe">
          </label>
        </div>
      </div>
    `;
  }

  static get newSkillInput() {
    return `
      <input class="new-skill" type="text" placeholder="Saying foo and bar">
    `;
  }

  static button( label, additionalClasses = '' ) {
    return `
      <button type="button" class="success button ${additionalClasses}">${label}</button>
    `;
  }
}
