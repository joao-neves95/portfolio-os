/*
 *
 * Copyright (c) 2018 Jo�o Pedro Martins Neves (shivayl) - All Rights Reserved.
 *
 * Portfolio-OS is licensed under the GNU LGPLv3, located in the root of this
 * project, under the name "LICENSE.md".
 *
 */

class WindowManager {
  constructor() {
    this.windows = new Dictionary();
  }

  /**
   * Open a new window from a running process.
   * @param { string } processId
   * @param { string } content
   */
  openNewWindow( processId, content = '' ) {
    const thisAppInstance = processManager.getAppInstance( processId );
    this.openNewWindowCustom( processId, thisAppInstance.name, content, true, thisAppInstance.taskbarIconUrl );
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
    console.debug( this.windows );
  }

  closeWindow( windowId ) {
    this.findWindowInstance( windowId ).kill();
    taskbarManager.killIcon( windowId );
    this.windows.remove(windowId);
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

    for ( let i = windowIdx; i < this.windows.length; ++i ) {
      const thisWindow = this.windows.getByIndex( i );
      if ( !thisWindow )
        continue;

      thisWindow.element.style.zIndex = i + 1;
      thisWindow.unselect();
    }

    window.element.style.zIndex = parseInt( this.windows.lastValue.element.style.zIndex ) + 1;
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
      allCloseWindowsBtns[i].removeEventListener('click', this.closeWindowHandler);
      allCloseWindowsBtns[i].addEventListener('click', (e) => {
        this.closeWindowHandler(e, allCloseWindowsBtns[i]);
      });
    }

    // MINIMIZE WINDOW CLICK.
    const allMinimizeWindowsBtns = document.querySelectorAll( '[id^="win-"] .minimize-window' );
    for (let i = 0; i < allMinimizeWindowsBtns.length; i++) {
      allMinimizeWindowsBtns[i].removeEventListener( 'click', this.minimizeWindowHandler );
      allMinimizeWindowsBtns[i].addEventListener('click', (e) => {
        this.minimizeWindowHandler(e, allMinimizeWindowsBtns[i]);
      });
    }

    // MAX-SIZE WINDOW CLICK.
    const allMaxWindowsBtns = document.querySelectorAll( '[id^="win-"] .max-size-window' );
    for ( let i = 0; i < allMinimizeWindowsBtns.length; i++ ) {
      allMaxWindowsBtns[i].removeEventListener( 'click', this.maxSizeWindow );
      allMaxWindowsBtns[i].addEventListener( 'click', ( e ) => {
        this.maxSizeWindowHandler( e, allMaxWindowsBtns[i] );
      } );
    }

    // TASKBAR ICONS CLICK.
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

  openNewModal( content ) {
    const target = document.getElementById( 'window-manager-container' );
    target.innerHTML += Window.modalTemplate( content );
    $( '#modal' ).foundation();
    $( '#modal' ).foundation( 'open' );
    document.querySelector( '[data-reveal]' ).addEventListener( 'closed.zf.reveal', () => {
      console.debug('jgx')
      this.updateListeners();
      this.updateFreeDraggListeners();
    } );
  }

  // UTILITIES:
  findWindowInstance(windowId, Callback) {
    const thisWindow = this.windows.getByKey( windowId );

    return Callback ? Callback( thisWindow ) : thisWindow;
  }
}

const windowManager = new WindowManager();
