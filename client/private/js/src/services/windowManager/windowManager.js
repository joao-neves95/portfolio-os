﻿'use strict';
const taskbarManager = new TaskbarManager();

class WindowManager {
  constructor () {
    this.windows = [];

    this.openNewWindow = (content) => {
      if (!content) content = '';

      const thisWindow = new Window();
      this.windows.push(thisWindow);
      thisWindow.init();
      const newIcon = taskbarManager.addIcon(thisWindow.id);
      thisWindow.icon = newIcon;
      this.updateListeners();
    }

    this.closeWindow = (windowId) => {
      findWindow(windowId).kill();
      taskbarManager.killIcon(windowId);
      this.updateListeners();
    }

    this.minimizeWindow = (windowId) => {
      findWindow(windowId).minimize();
      taskbarManager.minimizedIcon(windowId);
    }

    this.maximizeWindow = (windowId) => {
      findWindow(windowId).maximize();
      taskbarManager.maximizedIcon(windowId);
    }

    this.updateListeners = () => {
      const allCloseWindowsBtns = document.querySelectorAll('[id^="win-"] .close-window');

      for (let i = 0; i < allCloseWindowsBtns.length; i++) {
        allCloseWindowsBtns[i].addEventListener('click', () => {
          const thisWindow = DomUtils.getParentByIdInclude(allCloseWindowsBtns[i], 'win-');
          this.closeWindow(thisWindow.id);
        });
      };

      const allMinimizeWindowsBtns = document.querySelectorAll('[id^="win-"] .minimize-window');

      for (let i = 0; i < allMinimizeWindowsBtns.length; i++) {
        allMinimizeWindowsBtns[i].addEventListener('click', () => {
          const thisWindow = DomUtils.getParentByIdInclude(allCloseWindowsBtns[i], 'win-');
          this.minimizeWindow(thisWindow.id);
        });
      }

      const allTaskbarIcons = document.querySelectorAll('[id^="icn_"] .icon');

      for (let i = 0; i < allTaskbarIcons.length; i++) {
        allTaskbarIcons[i].addEventListener('click', () => {
          const thisIconId = DomUtils.getParentByIdInclude(allTaskbarIcons[i], 'win-').id;
          const thisWindowId = Utils.parseIDs(thisIconId)[1];
          const thisWindow = findWindow(thisWindowId);
          if (thisWindow.isMinimized)
            this.maximizeWindow(thisWindowId);
          else
            this.minimizeWindow(thisWindowId);
        });
      }
    }
  }
}

const windowManager = new WindowManager();

const findWindow = (windowId, Callback) => {
  const windows = windowManager.windows;

  for (let i = 0; i < windows.length; i++) {
    if (windows[i].id === windowId) {
      if (Callback) Callback();
      else return windows[i];
    }
  }
}
