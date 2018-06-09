'use strict'

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
    this.id = 'icn_' + windowId;
    this.windowId = windowId;
    this.iconContainerElem = document.getElementById('icon-container');
    this.iconUrl = '../wwwroot/img/default-taskbar-icon-white.svg';
    this.element = HTMLElement;
    this.isMinimized = Boolean;

    if (iconUrl) this.iconUrl = iconUrl;

    this.template = `
      <li id="${this.id}">
        <img src="${this.iconUrl}" alt="Menu Icon" class="icon" />
      </li>`;

    // METHODS:
    this.init = () => {
      this.iconContainerElem.innerHTML += this.template;
      this.element = document.getElementById(this.id);
      this.isMinimized = false;
    }

    this.kill = () => {
      this.element.remove();
    }

    this.minimized = () => {
      this.element.children[0].classList.add('minimized');
      this.isMinimized = true;
    }

    this.maximized = () => {
      this.element.children[0].classList.remove('minimized');
      this.isMinimized = false;
    }

    // EVENT:
    this.clicked = () => {
      if (this.clicked) return;
    }
  }
}
