/*
 *
 * Copyright (c) 2018 João Pedro Martins Neves (shivayl) - All Rights Reserved.
 *
 * Portfolio-OS is licensed under the GNU LGPLv3, located in the root of this
 * project, under the name "LICENSE.md".
 *
 */

class StartMenuManager {
  constructor() {
    this.init();

    this.active = false;
  }

  get element() { return document.getElementsByClassName( 'start-menu' )[0]; }
  get startMenuIcon() { return document.getElementsByClassName( 'menu-icon-wrap' )[0]; }
  get appContainerElem() { return document.getElementById('start-menu-apps'); };

  init() {
    this.injectAllApps();
  }

  injectAllApps() {
    const allApps = systemAppsManager.getAllApps();

    this.appContainerElem.innerHTML = '';
    for (let i = 0; i < allApps.length; ++i) {
      const newApp = new StartMenuApp(allApps[i].startMenuIconUrl, allApps[i].name);
      this.appContainerElem.innerHTML += newApp.template;
    }

    this.updateListeners();
  }

  updateListeners() {
    this.startMenuIcon.addEventListener( 'click', () => {
      const bottom = DomUtils.getStyle( this.element, 'bottom' );
      const bottomValue = parseInt( bottom.substring( 0, bottom.length - 2 ) );

      if ( bottomValue < 48 )
        this.show();
      else
        this.hide();
    } );

    const allApps = document.getElementsByClassName( 'start-menu-icon' );

    for (let i = 0; i < allApps.length; ++i) {
      allApps[i].addEventListener('click', (e) => {
        const clickedAppName = DomUtils.getDirectChildrenByTag(e.target, 'label').innerText;
        processManager.launchNewProcess(clickedAppName);
        // systemAppsManager.executeApplication(clickedAppName);
      });
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

const startMenuManager = new StartMenuManager();
