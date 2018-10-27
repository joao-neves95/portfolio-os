﻿// TODO: Refactor class.
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
    windowResizer.updateListeners();
    const thisWindowElem = document.getElementById( thisWindow.id );
    thisWindowElem.classList.add( 'anim' );
    thisWindowElem.classList.add( 'zoom-in' );
    setTimeout( () => {
      thisWindowElem.classList.remove( 'anim' );
      thisWindowElem.classList.remove( 'zoom-in' );
    }, 1000 );
  }

  closeWindow(windowId) {
    this.findWindowInstance(windowId).kill();
    taskbarManager.killIcon(windowId);
    this.windows.remove(windowId);
    this.updateListeners();
  }

  minimizeWindow(windowId) {
    this.findWindowInstance(windowId).minimize();
    taskbarManager.minimizedIcon(windowId);
  }

  unminimizeWindow(windowId) {
    this.findWindowInstance( windowId ).unminimize();
    taskbarManager.maximizedIcon( windowId );
  }

  maxSizeWindow( windowId ) {
    this.findWindowInstance( windowId ).maxSize();
  }

  // #region LISTENERS:

  // TODO: Fix "removeEventListener"'s.
  updateListeners() {
    const allCloseWindowsBtns = document.querySelectorAll('[id^="win-"] .close-window');

    for (let i = 0; i < allCloseWindowsBtns.length; i++) {
      allCloseWindowsBtns[i].removeEventListener('click', this.closeWindowHandler);
      allCloseWindowsBtns[i].addEventListener('click', (e) => {
        this.closeWindowHandler(e, allCloseWindowsBtns[i]);
      });
    }

    const allMinimizeWindowsBtns = document.querySelectorAll( '[id^="win-"] .minimize-window' );

    for (let i = 0; i < allMinimizeWindowsBtns.length; i++) {
      allMinimizeWindowsBtns[i].removeEventListener( 'click', this.minimizeWindowHandler );
      allMinimizeWindowsBtns[i].addEventListener('click', (e) => {
        this.minimizeWindowHandler(e, allMinimizeWindowsBtns[i]);
      });
    }

    const allMaxWindowsBtns = document.querySelectorAll( '[id^="win-"] .max-size-window' );
    for ( let i = 0; i < allMinimizeWindowsBtns.length; i++ ) {
      allMaxWindowsBtns[i].removeEventListener( 'click', this.maxSizeWindow );
      allMaxWindowsBtns[i].addEventListener( 'click', ( e ) => {
        this.maxSizeWindowHandler( e, allMaxWindowsBtns[i] );
      } );
    }

    const allTaskbarIcons = document.querySelectorAll( '[id^="icn_"] .icon' );

    for (let i = 0; i < allTaskbarIcons.length; i++) {
      allTaskbarIcons[i].removeEventListener( 'click', this.taskbarIconsHandler );
      allTaskbarIcons[i].addEventListener('click', (e) => {
        this.taskbarIconsHandler(e, allTaskbarIcons[i]);
      });
    }
  }

  // #endregion

  // #region EVENT HANDLERS:

  closeWindowHandler (e, closeWindowBtn) {
    e.stopPropagation();
    const thisWindow = DomUtils.getParentByIdInclude( closeWindowBtn, 'win-' );
    this.closeWindow(thisWindow.id);
  }

  minimizeWindowHandler(e, minimizeWindowBtn) {
    e.stopPropagation();
    const thisWindow = DomUtils.getParentByIdInclude( minimizeWindowBtn, 'win-' );
    this.minimizeWindow(thisWindow.id);
  }

  maxSizeWindowHandler( e, maxSizeWindowBtn ) {
    e.stopPropagation();
    const thisWindow = DomUtils.getParentByIdInclude( maxSizeWindowBtn, 'win-' );
    this.maxSizeWindow( thisWindow.id );
  }

  taskbarIconsHandler(e, taskbarIcon) {
    e.stopPropagation();
    const thisIconId = DomUtils.getParentByIdInclude( taskbarIcon, 'icn_win-' ).id;
    const thisWindowId = Utils.parseIDs(thisIconId)[1];
    const thisWindow = this.findWindowInstance( thisWindowId );

    if (thisWindow.isMinimized)
      this.unminimizeWindow(thisWindowId);
    else
      this.minimizeWindow(thisWindowId);
  }

  // #endregion

  // UTILITIES:
  findWindowInstance(windowId, Callback) {
    const thisWindow = this.windows.getByKey( windowId );

    return Callback ? Callback( thisWindow ) : thisWindow;
  }
}

const windowManager = new WindowManager();
