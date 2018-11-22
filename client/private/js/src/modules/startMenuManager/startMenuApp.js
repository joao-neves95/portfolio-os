/*
 *
 * Copyright (c) 2018 João Pedro Martins Neves (shivayl) - All Rights Reserved.
 *
 * Portfolio-OS is licensed under the GNU LGPLv3, located in the root of this
 * project, under the name "LICENSE.md".
 *
 */

class StartMenuApp {
  constructor(iconUrl, appName) {
    this.iconUrl = iconUrl;
    this.appName = appName;
  };

  get template() {
    return `
      <li class="start-menu-icon">
        <img src="${this.iconUrl}" alt="${this.appName} Icon" class="icon" /><label>${this.appName}</label>
      </li>
    `;
  }
}
