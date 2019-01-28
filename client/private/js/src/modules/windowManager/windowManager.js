/*
 *
 * Copyright (c) 2018 João Pedro Martins Neves (shivayl) - All Rights Reserved.
 *
 * Portfolio-OS is licensed under the GNU LGPLv3, located in the root of this
 * project, under the name "LICENSE.md".
 *
 */

let windowManager = null;

class WindowManager {
  constructor() {
    if ( windowManager )
      throw new Error( 'There can only be one instance of WindowManager.' );

    this.windows = new Dictionary();

    windowManager = this;
    Object.seal( windowManager );
  }

  /**
   * Open a new window from a running process.
   * @param { string } processId
   * @param { string } content
   */
  openNewWindow( processId, content = '' ) {
    const thisAppInstance = processManager.getAppInstance( processId );
    this.openNewWindowCustom(
      processId,
      thisAppInstance.name,
      content,
      true,
      thisAppInstance.taskbarIconUrl
    );
  }

  openNewAppStoreAppWindow( processId, url ) {
    const thisAppInstance = processManager.getAppInstance( processId );
    this.openNewWindowCustom(
      processId,
      thisAppInstance.name,
      window.appStoreAppWindowTemplate( url ),
      true,
      thisAppInstance.taskbarIconUrl
    );
  }

  /**
   * To use as a modal. It does not add a taskabar icon by default. Use .openNewWindow() for application windows.
   */
  openNewWindowCustom( processId, title, content = '', addTaskbarIcon = false, taskbarIconUrl = null, width = null, heigth = null ) {
    const thisWindow = new Window( processId, title, content );

    if ( addTaskbarIcon ) {
      const newTaskbarIcon = taskbarManager.addIcon( thisWindow.id, taskbarIconUrl );
      thisWindow.icon = newTaskbarIcon;
    }

    /** @type { HTMLElement } */
    const thisWindowElem = thisWindow.element;
    thisWindowElem.style.zIndex = this.windows.length > 0 ? ( DomUtils.getStyleProp( this.windows.lastValue.element, 'z-index' ) + 1 ).toString() : ( 1 ).toString();
    thisWindowElem.style.width = !width ? '70%' : width;
    thisWindowElem.style.height = !heigth ? '80%' : heigth;
    thisWindowElem.classList.add( 'anim' );
    thisWindowElem.classList.add( 'zoom-in' );
    setTimeout( () => {
      thisWindowElem.classList.remove( 'anim' );
      thisWindowElem.classList.remove( 'zoom-in' );
    }, 1000 );

    this.unselectAllWindows();
    this.windows.add( thisWindow.id, thisWindow );
    thisWindow.select();
    this.updateListeners();
    dragAndDrop.cancelNonDraggableElements();
    dragAndDrop.updateFreeDraggListeners();
    windowResizer.updateListeners();
  }

  closeWindow( windowId ) {
    const thisWindow = this.findWindowInstance( windowId );
    // For AddNewApp windows.
    if ( !thisWindow )
      return;

    thisWindow.kill();
    taskbarManager.killIcon( windowId );
    this.windows.remove( windowId );
    this.updateListeners();
  }

  minimizeWindow( windowId ) {
    this.findWindowInstance(windowId).minimize();
    taskbarManager.minimizedIcon( windowId );
  }

  unminimizeWindow( windowId ) {
    this.findWindowInstance( windowId ).unminimize();
    taskbarManager.maximizedIcon( windowId );
  }

  maxSizeWindow( windowId ) {
    this.findWindowInstance( windowId ).maxSize();
  }

  unselectAllWindows() {
    this.windows.forEachValue( ( window ) => {
      window.unselect();
    } );
  }

  moveWindowToFront( window ) {
    const windowIdx = this.windows.findIndexOfKey( window.id );
    if ( windowIdx === false )
      return;

    this.windows.remove( window.id );

    // Update the index of all the other windows.
    for ( let i = windowIdx; i < this.windows.length; ++i ) {
      const thisWindow = this.windows.getByIndex( i );
      if ( !thisWindow )
        continue;

      thisWindow.element.style.zIndex = i + 1;
      thisWindow.unselect();
    }

    const lastWindow = this.windows.lastValue;
    if ( !lastWindow )
      window.element.style.zIndex = ( 1 ).toString();
    else
      window.element.style.zIndex = ( parseInt( lastWindow.element.style.zIndex ) + 1 ).toString();

    this.windows.add( window.id, window );
  }

  // #region LISTENERS:

  updateListeners() {
    // WINDOW CLICK.
    this.windows.forEachValue( ( window ) => {
      window.element.addEventListener( 'click', ( e ) => {
        this.moveWindowToFront( window );
        window.select();
        } );
    } );

    // CLOSE WINDOW CLICK.
    const allCloseWindowsBtns = document.querySelectorAll('[id^="win-"] .close-window');
    for (let i = 0; i < allCloseWindowsBtns.length; i++) {
      allCloseWindowsBtns[i].removeEventListener('click', this.__closeWindowHandler);
      allCloseWindowsBtns[i].addEventListener('click', (e) => {
        this.__closeWindowHandler(e, allCloseWindowsBtns[i]);
      });
    }

    // MINIMIZE WINDOW CLICK.
    const allMinimizeWindowsBtns = document.querySelectorAll( '[id^="win-"] .minimize-window' );
    for (let i = 0; i < allMinimizeWindowsBtns.length; i++) {
      allMinimizeWindowsBtns[i].removeEventListener( 'click', this.__minimizeWindowHandler );
      allMinimizeWindowsBtns[i].addEventListener( 'click', ( e ) => {
        this.__minimizeWindowHandler( e, allMinimizeWindowsBtns[i] );
      } );
    }

    // MAX-SIZE WINDOW CLICK.
    const allMaxWindowsBtns = document.querySelectorAll( '[id^="win-"] .max-size-window' );
    for ( let i = 0; i < allMinimizeWindowsBtns.length; i++ ) {
      allMaxWindowsBtns[i].removeEventListener( 'click', this.maxSizeWindow );
      allMaxWindowsBtns[i].addEventListener( 'click', ( e ) => {
        this.__maxSizeWindowHandler( e, allMaxWindowsBtns[i] );
      } );
    }

    // TASKBAR ICONS CLICK.
    const allTaskbarIcons = document.querySelectorAll( '[id^="icn_"] .icon' );
    for (let i = 0; i < allTaskbarIcons.length; i++) {
      allTaskbarIcons[i].removeEventListener( 'click', this.__taskbarIconsHandler );
      allTaskbarIcons[i].addEventListener( 'click', ( e ) => {
        this.__taskbarIconsHandler( e, allTaskbarIcons[i] );
      } );
    }
  }

  // #endregion

  // #region EVENT HANDLERS:

  __closeWindowHandler(e, closeWindowBtn) {
    e.stopPropagation();
    const thisWindow = DomUtils.getParentByIdInclude( closeWindowBtn, 'win-' );
    this.closeWindow( thisWindow.id );
  }

  __minimizeWindowHandler(e, minimizeWindowBtn) {
    e.stopPropagation();
    const thisWindow = DomUtils.getParentByIdInclude( minimizeWindowBtn, 'win-' );
    this.minimizeWindow( thisWindow.id );
  }

  __maxSizeWindowHandler( e, maxSizeWindowBtn ) {
    e.stopPropagation();
    const thisWindow = DomUtils.getParentByIdInclude( maxSizeWindowBtn, 'win-' );
    this.maxSizeWindow( thisWindow.id );
  }

  __taskbarIconsHandler(e, taskbarIcon) {
    e.stopPropagation();
    const thisIconId = DomUtils.getParentByIdInclude( taskbarIcon, 'icn_win-' ).id;
    const thisWindowId = Utils.parseIDs(thisIconId)[1];
    const thisWindow = this.findWindowInstance( thisWindowId );

    if ( thisWindow.isMinimized )
      this.unminimizeWindow( thisWindowId );
    else
      this.minimizeWindow( thisWindowId );
  }

  // #endregion

  openNewModal( content ) {
    const target = document.getElementById( 'window-manager-container' );
    $( '#modal' ).remove();
    target.innerHTML += Window.modalTemplate( content );
    $( '#modal' ).foundation();
    $( '#modal' ).foundation( 'open' );
    document.querySelector( '[data-reveal]' ).addEventListener( 'closed.zf.reveal', () => {
      this.updateListeners();
      this.updateFreeDraggListeners();
    } );
  }

  // #region UTILITIES

  findWindowInstance( windowId, Callback ) {
    const thisWindow = this.windows.getByKey( windowId );

    return Callback ? Callback( thisWindow ) : thisWindow;
  }

  // #endregion
}

new WindowManager();
