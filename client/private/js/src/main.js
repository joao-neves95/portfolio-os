﻿// Initializations.

whenDomReady( () => {

  desktopManager.init();
  desktopManager.insertNewIcon( IMG_PATH + 'trash.svg', 'Trash' );

  // SystemApps bindings:
  systemAppsManager.bindApplication( 'Terminal', `${IMG_PATH}terminal-green.svg`, `${IMG_PATH}terminal-white.svg`, ( processId ) => { new Terminal( processId ); } );
  systemAppsManager.bindApplication( 'Trash', `${IMG_PATH}trash.svg`, `${IMG_PATH}trash.svg`, ( processId ) => { new Trash( processId ); } );
  startMenuManager.init();

  // ContextMenu bindings:
  contextMenu.bindItems( 'desktop-icon', [contextMenuTemplates.menuItem( "Delete" ), contextMenuTemplates.menuItem( "Open" )] );

  // GlobalEvents bindings:
  globalEvents.bindEvent( 'click', ( e ) => { contextMenu.outsideClickGlobalEvent( e ); } );
  globalEvents.bindEvent( 'click', ( e ) => { startMenuManager.outsideClickGlobalEvent( e ); } );
  globalEvents.init();

  console.debug( 'Windows:', windowManager.windows );
  console.debug( 'Taskbar Icons:', taskbarManager.icons );
  dragAndDrop.updateDraggables();
} );
