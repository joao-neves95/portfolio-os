// Initializations.

whenDomReady(() => {

  desktopManager.init();
  desktopManager.insertNewIcon(IMG_PATH + 'trash.svg', 'Trash');

  // SystemApps bindings:
  systemAppsManager.bindApplication('Terminal', '/img/terminal-green.svg', '/img/terminal-white.svg', (processId) => { new Terminal(processId) });
  startMenuManager.injectAllApps

  // ContextMenu bindings:
  contextMenu.bindItems('desktop-icon', [contextMenuTemplates.menuItem("Delete"), contextMenuTemplates.menuItem("Open")]);

  // GlobalEvents bindings:
  globalEvents.bindEvent('click', (e) => { contextMenu.outsideClickGlobalEvent(e); });
  globalEvents.bindEvent('click', (e) => { taskbarManager.outsideClickGlobalEvent(e); });
  globalEvents.init();

  console.debug('Windows:', windowManager.windows);
  console.debug('Taskbar Icons:', taskbarManager.icons);
  dragAndDrop.updateDraggables();
});
