// Initializations.
'use strict'

whenDomReady(() => {
 
  windowManager.openNewWindow(null);

  console.debug('Windows:', windowManager.windows);
  console.debug('Taskbar Icons:', taskbarManager.icons);
});
