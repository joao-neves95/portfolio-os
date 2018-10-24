const START_MENU_ANIM_DELAY = 1;

class TaskbarManager {
  constructor() {
    this.iconContainerElem = document.getElementById('icon-container');
    this.icons = new Dictionary();
  }

  // #region TASKBAR ICONS
  /**
    * It adds an icon to the taskbar.
    * Returns the new TaskbarIcon instance.
    * 
    * @param {string} windowId 
    * The window that this icon is linked to.
    */
  addIcon(windowId, taskbarIconUrl) {
    const newIcon = new TaskbarIcon(windowId, taskbarIconUrl);
    this.icons.add(TaskbarIcon.idPrefix + windowId, newIcon);
    return newIcon;
  }

  killIcon(windowId) {
    this.findIconInstance(windowId).kill();
    this.icons.remove(TaskbarIcon.idPrefix + windowId);
  }

  minimizedIcon(windowId) {
    this.findIconInstance(windowId).minimized();
  }

  maximizedIcon(windowId) {
    this.findIconInstance(windowId).maximized();
  }
  // #endregion

  // #region UTILITIES:
  findIconInstance(windowId) {
    return this.icons.getByKey(TaskbarIcon.idPrefix + windowId);
  }
  // #endregion
}

const taskbarManager = new TaskbarManager();
