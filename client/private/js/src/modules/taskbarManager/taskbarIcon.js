/*
 *
 * Copyright (c) 2018 João Pedro Martins Neves (shivayl) - All Rights Reserved.
 *
 * Portfolio-OS is licensed under the GNU LGPLv3, located in the root of this
 * project, under the name "LICENSE.md".
 *
 */

class TaskbarIcon {
  /**
   * 
   * @param {string} windowId
   * The window that this icon is linked to.
   * 
   * @param {string} iconUrl
   * The image url of this icon.
   */
  constructor(windowId, iconUrl) {
    this.id = TaskbarIcon.idPrefix + windowId;
    this.windowId = windowId;
    this.iconContainerElem = document.getElementById('icon-container');
    this.iconUrl = IMG_PATH + 'default-taskbar-icon-white.svg';
    this.isMinimized = Boolean;

    if (iconUrl) this.iconUrl = iconUrl;

    this.init();
  }

  static get idPrefix() {
    return 'icn_';
  }

  get template() {
    return `
      <li id="${this.id}">
        <img src="${this.iconUrl}" alt="Menu Icon" class="icon" />
      </li>`;
  }

  // METHODS:
  init () {
    this.iconContainerElem.innerHTML += this.template;
    this.isMinimized = false;
  }

  kill() {
    document.getElementById( this.id ).remove();
  }

  minimized() {
    document.getElementById( this.id ).classList.add( 'minimized' );
    this.isMinimized = true;
  }

  maximized() {
    document.getElementById( this.id ).classList.remove( 'minimized' );
    this.isMinimized = false;
  }
}
