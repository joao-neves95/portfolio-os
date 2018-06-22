// Initializations.

whenDomReady(() => {

  desktopManager.init();
  desktopManager.insertNewIcon(IMG_PATH + 'trash.svg', 'Trash');

  // Bind SystemApps:
  systemAppsManager.bindApplication('Terminal', '/img/terminal-green.svg', '/img/terminal-white.svg', (processId) => { new Terminal(processId) });
  startMenuManager.insertAllApps();

  console.debug('Windows:', windowManager.windows);
  console.debug('Taskbar Icons:', taskbarManager.icons);
  dragAndDrop.updateDraggables();
});
