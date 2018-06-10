// Initializations.
'use strict'

whenDomReady(() => {
 
  windowManager.openNewWindow('A WIndow Title');

  console.debug('Windows:', windowManager.windows);
  console.debug('Taskbar Icons:', taskbarManager.icons);
});
