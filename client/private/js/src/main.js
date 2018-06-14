// Initializations.

whenDomReady(() => {

  desktopManager.init();
  desktopManager.insertNewIcon(IMG_PATH + 'trash.svg', 'Trash');
 
  windowManager.openNewWindow('A Window Title');


  console.debug('Windows:', windowManager.windows);
  console.debug('Taskbar Icons:', taskbarManager.icons);
});
