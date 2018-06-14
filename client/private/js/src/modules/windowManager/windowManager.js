class WindowManager {
  constructor() {
    this.windows = new Dictionary();

    this.openNewWindow = (windowTitle, content) => {
      if (!content) content = '';

      const thisWindow = new Window(windowTitle);
      const newIcon = taskbarManager.addIcon(thisWindow.id);
      thisWindow.icon = newIcon;
      this.windows.add(thisWindow.id, thisWindow);
      this.updateListeners();
      dragAndDrop.updateFreeDraggListeners()

      console.info(this.windows)
    };

    this.closeWindow = (windowId) => {
      this.utils.findWindowInstance(windowId).kill();
      taskbarManager.killIcon(windowId);
      this.updateListeners();
    };

    this.minimizeWindow = (windowId) => {
      this.utils.findWindowInstance(windowId).minimize();
      taskbarManager.minimizedIcon(windowId);
    };

    this.maximizeWindow = (windowId) => {
      this.utils.findWindowInstance(windowId).maximize();
      taskbarManager.maximizedIcon(windowId);
    };

    this.updateListeners = () => {
      const allCloseWindowsBtns = document.querySelectorAll('[id^="win-"] .close-window');

      for (let i = 0; i < allCloseWindowsBtns.length; i++) {
        allCloseWindowsBtns[i].removeEventListener('click', this.eventHandlers.closeWindowHandler);
        allCloseWindowsBtns[i].addEventListener('click', (e) => {
          this.eventHandlers.closeWindowHandler(e, allCloseWindowsBtns[i]);
        });
      };

      const allMinimizeWindowsBtns = document.querySelectorAll('[id^="win-"] .minimize-window');

      for (let i = 0; i < allMinimizeWindowsBtns.length; i++) {
        allMinimizeWindowsBtns[i].removeEventListener('click', this.eventHandlers.minimizeWindowHandler);
        allMinimizeWindowsBtns[i].addEventListener('click', (e) => {
          this.eventHandlers.minimizeWindowHandler(e, allMinimizeWindowsBtns[i]);
        });
      }

      const allTaskbarIcons = document.querySelectorAll('[id^="icn_"] .icon');

      for (let i = 0; i < allTaskbarIcons.length; i++) {
        allTaskbarIcons[i].removeEventListener('click', this.eventHandlers.taskbarIconsHandler);
        allTaskbarIcons[i].addEventListener('click', (e) => {
          this.eventHandlers.taskbarIconsHandler(e, allTaskbarIcons[i]);
        });
      }
    };

    this.eventHandlers = {

      closeWindowHandler: (e, closeWindowBtn) => {
        console.debug('close')
        e.stopPropagation();
        const thisWindow = DomUtils.getParentByIdInclude(closeWindowBtn, 'win-');
        windowManager.closeWindow(thisWindow.id);
      },

      minimizeWindowHandler: (e, minimizeWindowBtn) => {
        e.stopPropagation();
        const thisWindow = DomUtils.getParentByIdInclude(minimizeWindowBtn, 'win-');
        windowManager.minimizeWindow(thisWindow.id);
      },

      taskbarIconsHandler: (e, taskbarIcon) => {
        e.stopPropagation();
        const thisIconId = DomUtils.getParentByIdInclude(taskbarIcon, 'win-').id;
        const thisWindowId = Utils.parseIDs(thisIconId)[1];
        const thisWindow = this.utils.findWindowInstance(thisWindowId);
        if (thisWindow.isMinimized)
          windowManager.maximizeWindow(thisWindowId);
        else
          windowManager.minimizeWindow(thisWindowId);
      }
    };

    this.utils = {

      findWindowInstance: (windowId, Callback) => {
        thisWindow = this.windows.getByKey(windowId);
        if (Callback) Callback(thisWindow);
        else return thisWindow;
      }
    }
  }
}

const windowManager = new WindowManager();
