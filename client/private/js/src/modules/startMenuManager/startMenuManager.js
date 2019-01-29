/*
 *
 * Copyright (c) 2018 João Pedro Martins Neves (shivayl) - All Rights Reserved.
 *
 * Portfolio-OS is licensed under the GNU LGPLv3, located in the root of this
 * project, under the name "LICENSE.md".
 *
 */

/** @type { StartMenuManager } */
let startMenuManager = null;

class StartMenuManager {
  constructor() {
    if ( startMenuManager )
      throw new Error( 'There can only be one instance of StartMenuManager.' );

    this.init();

    this.active = false;
    startMenuManager = this;
    Object.seal( startMenuManager );
  }

  get element() { return document.getElementsByClassName( 'start-menu' )[0]; }
  get startMenuIcon() { return document.getElementsByClassName( 'menu-icon-wrap' )[0]; }
  get appContainerElem() { return document.getElementById('start-menu-apps'); }

  async init() {
    await this.injectAllApps();
  }

  async injectAllApps() {
    let allApps = systemAppsManager.getAllApps();
    await userAppsManager.__fetchInstalledApps();
    allApps = allApps.concat( userAppsManager.installedApps.getAllValues() );

    this.appContainerElem.innerHTML = '';
    for ( let i = 0; i < allApps.length; ++i ) {
      this.appContainerElem.innerHTML += new StartMenuApp( allApps[i].startMenuIconUrl, allApps[i].name ).template;
    }

    this.updateListeners();
  }

  updateListeners() {
    this.startMenuIcon.addEventListener( 'click', () => {
      // Hide/Show the start menu.
      const bottom = DomUtils.getStyleProp( this.element, 'bottom' );
      const bottomValue = parseInt( bottom.substring( 0, bottom.length - 2 ) );

      if ( bottomValue < 48 )
        this.show();
      else
        this.hide();
    } );

    // LOGOUT BUTTON.
    document.getElementById( 'logout-btn' ).addEventListener( 'click', ( e ) => {
      e.preventDefault();
      document.getElementById( 'logout-audio' ).play();
      setTimeout( () => {
        authentication.logout();
      }, 3200 );
    } );

    // APP BUTTONS.
    const allApps = document.getElementsByClassName( 'start-menu-icon' );
    for (let i = 0; i < allApps.length; ++i) {
      allApps[i].addEventListener( 'click', ( e ) => {
        const clickedAppName = DomUtils.getDirectChildrenByTag( e.target, 'label' ).innerText;
        this.hide();
        processManager.launchNewProcess( clickedAppName );
        // systemAppsManager.executeApplication(clickedAppName);
      } );
    }
  }

  show() {
    const that = this.element;
    that.classList.remove( 'anim' );
    that.classList.remove( 'start-menu-slide-down' );
    that.classList.add( 'anim' );
    that.classList.add( 'start-menu-slide-up' );
    this.active = true;
  }

  hide() {
    const that = this.element;
    that.classList.remove( 'anim' );
    that.classList.remove( 'start-menu-slide-up' );
    that.classList.add( 'anim' );
    that.classList.add( 'start-menu-slide-down' );
    this.active = false;
  }

  outsideClickGlobalEvent( e ) {
    const that = e.target;
    if ( that.closest( '.start-menu' ) || that.closest( '.menu-icon-wrap' ) || !this.active )
      return;

    this.hide();
  }
}

new StartMenuManager();
