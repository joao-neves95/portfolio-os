/*
 *
 * Copyright (c) 2018 João Pedro Martins Neves (shivayl) - All Rights Reserved.
 *
 * Portfolio-OS is licensed under the GNU LGPLv3, located in the root of this
 * project, under the name "LICENSE.md".
 *
 */

let taskbarManager = null;

class TaskbarManager {
  constructor() {
    if ( taskbarManager )
      throw new Error( 'There can only be one instance of TaskbarManager.' );

    this.iconContainerElem = document.getElementById( 'icon-container' );
    this.icons = new Dictionary();

    taskbarManager = this;
    Object.seal( taskbarManager );
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

  killIcon( windowId ) {
    const thisWindow = this.findIconInstance( windowId );
    // For the AddNewApp windows.
    if ( !thisWindow )
      return;

    thisWindow.kill();
    this.icons.remove( TaskbarIcon.idPrefix + windowId );
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

new TaskbarManager();
