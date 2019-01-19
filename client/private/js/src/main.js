/*
 *
 * Copyright (c) 2018 João Pedro Martins Neves (shivayl) - All Rights Reserved.
 *
 * Portfolio-OS is licensed under the GNU LGPLv3, located in the root of this
 * project, under the name "LICENSE.md".
 *
 */

// Initializations.

whenDomReady( () => {

  authentication.init();
  $( document ).foundation();
  desktopManager.init();
  desktopManager.insertNewIcon( IMG_PATH + 'trash.svg', 'Trash' );
  desktopManager.insertNewIcon( IMG_PATH + 'profiles.svg', 'Profiles' );
  desktopManager.insertNewIcon( `${IMG_PATH}default-taskbar-icon-white.svg`, 'ShivaylCV' );

  // SystemApps bindings:
  systemAppsManager.bindApplication( 'Explorer', `${IMG_PATH}folder.svg`, `${IMG_PATH}folder.svg`, ( processId ) => { new Explorer( processId ); } );
  systemAppsManager.bindApplication( 'Terminal', `${IMG_PATH}terminal-green.svg`, `${IMG_PATH}terminal-white.svg`, ( processId ) => { new Terminal( processId ); } );
  systemAppsManager.bindApplication( 'Profiles', `${IMG_PATH}profiles.svg`, `${IMG_PATH}profiles.svg`, ( processId ) => { new Profiles( processId ); } );
  systemAppsManager.bindApplication( 'AppStore', `${IMG_PATH}default-taskbar-icon-white.svg`, `${IMG_PATH}default-taskbar-icon-white.svg`, ( processId ) => { new AppStore( processId ); } );
  // The trash is temporary.
  systemAppsManager.bindApplication( 'Trash', `${IMG_PATH}trash.svg`, `${IMG_PATH}trash.svg`, ( processId ) => { new Trash( processId ); } );
  systemAppsManager.bindApplication( 'ShivaylCV', `${IMG_PATH}default-taskbar-icon-white.svg`, `${IMG_PATH}default-taskbar-icon-white.svg`, ( processId ) => { new ShivaylCV( processId ); } );
  startMenuManager.init();

  // ContextMenu bindings:
  contextMenu.bindItems( 'desktop-icon', [contextMenuTemplates.menuItem( 'Delete' ), contextMenuTemplates.menuItem( 'Open' )] );

  // GlobalEvents bindings:
  globalEvents.bindEvent( 'click', ( e ) => { contextMenu.outsideClickGlobalEvent( e ); } );
  globalEvents.bindEvent( 'click', ( e ) => { startMenuManager.outsideClickGlobalEvent( e ); } );
  globalEvents.bindEvent( 'click', ( e ) => { document.getElementById( 'click-audio' ).play(); } );
  globalEvents.init();

  //console.debug( 'FS V2:', fileSystem.____fsv2 );
  //console.debug( 'Windows:', windowManager.windows );
  //console.debug( 'Taskbar Icons:', taskbarManager.icons );
  windowManager.openNewModal(
    `<p><strong>Portfolio-OS</strong> is a work in progress and so, some features do not work as of yet.</p>
     <p>(Features like the AppStore, the Explorer, or searrching for users in the Profiles app)</p>
     <p>Keep also in mind that this is the Portfolio-OS's Dekstop version and not the mobile, so it is <strong>not</strong> mobile responsive.</p>`
  );

  dragAndDrop.updateDraggables();
} );
