// Initializations.

whenDomReady( () => {

  $( document ).foundation();
  desktopManager.init();
  desktopManager.insertNewIcon( IMG_PATH + 'trash.svg', 'Trash' );

  // SystemApps bindings:
  systemAppsManager.bindApplication( 'Explorer', `${IMG_PATH}folder.svg`, `${IMG_PATH}folder.svg`, ( processId ) => { new Explorer( processId ); } );
  systemAppsManager.bindApplication( 'Terminal', `${IMG_PATH}terminal-green.svg`, `${IMG_PATH}terminal-white.svg`, ( processId ) => { new Terminal( processId ); } );
  systemAppsManager.bindApplication( 'Profiles', `${IMG_PATH}default-taskbar-icon-white`, `${IMG_PATH}default-taskbar-icon-white`, ( processId ) => { new Profiles( processId ); } );
  systemAppsManager.bindApplication( 'AppStore', `${IMG_PATH}default-taskbar-icon-white`, `${IMG_PATH}default-taskbar-icon-white`, ( processId ) => { new AppStore( processId ); } );
  // The trash is temporary.
  systemAppsManager.bindApplication( 'Trash', `${IMG_PATH}trash.svg`, `${IMG_PATH}trash.svg`, ( processId ) => { new Trash( processId ); } );
  startMenuManager.init();

  // ContextMenu bindings:
  contextMenu.bindItems( 'desktop-icon', [contextMenuTemplates.menuItem( "Delete" ), contextMenuTemplates.menuItem( "Open" )] );

  // GlobalEvents bindings:
  globalEvents.bindEvent( 'click', ( e ) => { contextMenu.outsideClickGlobalEvent( e ); } );
  globalEvents.bindEvent( 'click', ( e ) => { startMenuManager.outsideClickGlobalEvent( e ); } );
  globalEvents.init();

  console.debug( 'FS V2:', fileSystem.____fsv2 );
  console.debug( 'Windows:', windowManager.windows );
  console.debug( 'Taskbar Icons:', taskbarManager.icons );
  dragAndDrop.updateDraggables();
} );
