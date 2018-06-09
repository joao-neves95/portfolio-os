'use strict'

class TaskbarManager {
  constructor() {
    this.iconContainerElem = document.getElementById('icon-container');
    this.icons = [];

    /**
     * 
     * @param {string} windowId 
     * The window that this icon is linked to.
     */
    this.addIcon = (windowId) => {
      const newIcon = new TaskbarIcon(windowId);
      this.icons.push(newIcon);
      newIcon.init();
      return newIcon;
    }

    this.killIcon = (windowId) => {
      findIcon(windowId).kill();
    }

    this.minimizedIcon = (windowId) => {
      findIcon(windowId).minimized();
    }

    this.maximizedIcon = (windowId) => {
      findIcon(windowId).maximized();
    }
  }
}

// UTILITIES:
const findIcon = (windowId, Callback) => {
  const icons = taskbarManager.icons;
  for (let i = 0; i < icons.length; i++) {
    if (icons[i].windowId === windowId) {
      if (Callback) Callback();
      else return icons[i];
    }
  }
}
