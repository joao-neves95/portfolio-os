// Initializations.
const dragAndDrop = new DragAndDrop();

whenDomReady(() => {

  desktopManager.init();
  desktopManager.insertIcon(IMG_PATH + 'trash.svg', 'Trash');
 
  windowManager.openNewWindow('A Window Title');

  dragAndDrop.init();

  console.debug('Windows:', windowManager.windows);
  console.debug('Taskbar Icons:', taskbarManager.icons);
});
