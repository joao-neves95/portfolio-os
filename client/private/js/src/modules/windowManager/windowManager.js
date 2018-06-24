// TODO: Refactor class.
class WindowManager {
  constructor() {
    this.windows = new Dictionary();
  }

  openNewWindow(processId, content = '') {
    const thisAppInstance = processManager.getAppInstance(processId);
    const thisWindow = new Window(processId, thisAppInstance.name, content);
    const newTaskbarIcon = taskbarManager.addIcon(thisWindow.id, thisAppInstance.taskbarIconUrl);
    thisWindow.icon = newTaskbarIcon;
    this.windows.add(thisWindow.id, thisWindow);

    this.updateListeners();
    dragAndDrop.cancelNonDraggableElements();
    dragAndDrop.updateFreeDraggListeners();

    console.info(this.windows)
  };

  closeWindow(windowId) {
    this.findWindowInstance(windowId).kill();
    taskbarManager.killIcon(windowId);
    this.windows.remove(windowId);
    this.updateListeners();
  };

  minimizeWindow(windowId) {
    this.findWindowInstance(windowId).minimize();
    taskbarManager.minimizedIcon(windowId);
  };

  maximizeWindow (windowId) {
    this.findWindowInstance(windowId).maximize();
    taskbarManager.maximizedIcon(windowId);
  };

  // TODO: Fix "removeEventListener"'s.
  // LISTENERS:
  updateListeners() {
    const allCloseWindowsBtns = document.querySelectorAll('[id^="win-"] .close-window');

    for (let i = 0; i < allCloseWindowsBtns.length; i++) {
      allCloseWindowsBtns[i].removeEventListener('click', this.closeWindowHandler);
      allCloseWindowsBtns[i].addEventListener('click', (e) => {
        this.closeWindowHandler(e, allCloseWindowsBtns[i]);
      });
    };

    const allMinimizeWindowsBtns = document.querySelectorAll('[id^="win-"] .minimize-window');

    for (let i = 0; i < allMinimizeWindowsBtns.length; i++) {
      allMinimizeWindowsBtns[i].removeEventListener('click', this.minimizeWindowHandler);
      allMinimizeWindowsBtns[i].addEventListener('click', (e) => {
        this.minimizeWindowHandler(e, allMinimizeWindowsBtns[i]);
      });
    }

    const allTaskbarIcons = document.querySelectorAll('[id^="icn_"] .icon');

    for (let i = 0; i < allTaskbarIcons.length; i++) {
      allTaskbarIcons[i].removeEventListener('click', this.taskbarIconsHandler);
      allTaskbarIcons[i].addEventListener('click', (e) => {
        this.taskbarIconsHandler(e, allTaskbarIcons[i]);
      });
    }
  };

  // EVENT HANDLERS:
  closeWindowHandler (e, closeWindowBtn) {
    e.stopPropagation();
    const thisWindow = DomUtils.getParentByIdInclude(closeWindowBtn, 'win-');
    this.closeWindow(thisWindow.id);
  };

  minimizeWindowHandler(e, minimizeWindowBtn) {
    e.stopPropagation();
    const thisWindow = DomUtils.getParentByIdInclude(minimizeWindowBtn, 'win-');
    this.minimizeWindow(thisWindow.id);
  };

  taskbarIconsHandler(e, taskbarIcon) {
    e.stopPropagation();
    const thisIconId = DomUtils.getParentByIdInclude(taskbarIcon, 'win-').id;
    const thisWindowId = Utils.parseIDs(thisIconId)[1];
    const thisWindow = this.findWindowInstance(thisWindowId);
    if (thisWindow.isMinimized)
      this.maximizeWindow(thisWindowId);
    else
      this.minimizeWindow(thisWindowId);
  };

  // UTILITIES:
  findWindowInstance(windowId, Callback) {
    const thisWindow = this.windows.getByKey(windowId);
    if (Callback) Callback(thisWindow);
    else return thisWindow;
  }
}

const windowManager = new WindowManager();
