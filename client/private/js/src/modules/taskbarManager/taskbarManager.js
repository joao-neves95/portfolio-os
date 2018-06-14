class TaskbarManager {
  constructor() {
    this.iconContainerElem = document.getElementById('icon-container');
    this.icons = new Dictionary();

    /**
     * 
     * @param {string} windowId 
     * The window that this icon is linked to.
     */
    this.addIcon = (windowId) => {
      const newIcon = new TaskbarIcon(windowId);
      this.icons.add(TaskbarIcon.idPrefix + windowId, newIcon);
      return newIcon;
    }

    this.killIcon = (windowId) => {
      this.utils.findIconInstance(windowId).kill();
      this.icons.remove(TaskbarIcon.idPrefix + windowId);
    }

    this.minimizedIcon = (windowId) => {
      this.utils.findIconInstance(windowId).minimized();
    }

    this.maximizedIcon = (windowId) => {
      this.utils.findIconInstance(windowId).maximized();
    }

    this.utils = {
      findIconInstance: (windowId) => {
        return this.icons.getByKey(TaskbarIcon.idPrefix + windowId);
      }
    }
  }
}

const taskbarManager = new TaskbarManager();
