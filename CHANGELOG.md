# CHANGELOG

&nbsp;

#### v0.2.2 - //2018
- CLIENT:
  - Multiple important fixes for the AppStore;
  - Added the AppStore icon;
  - Fixes on the GridSystem and Desktop icons (and general) responsibility;
  - Fixed shivayl's landing page mobile navbar responsibility;
  - Added the Portfolio OS logo icon to the taskbar start menu button + styling;
- SERVER:
  - Fixed the caching of Portfolio OS's IMG/HTML/JS/CSS.

&nbsp;

#### *v0.2.1 - 23/01/2018
- (CLIENT) Turned all module managers into a singleton to ensure only on instance and integrity of each module manager.

&nbsp;

#### v0.2.0 - 22/01/2018
- Added the click sound;
- Added the notifications module;
- Refactored the HttpClient (frontend): It now returns the Response object (broke everything; to fix on the next release);
- Added the setResetCookie to the server to solve a bug where if the JWT expired, it didn't let the user login; Added the reset cookies (and localStorage) to clear the JWT if expired;
- Completed the Profiles:
  - ProfileExplorer;
  - (Public) UserProfile.
- AppStore:
  - Application Explorer (the top apps) is now functional (not searchable though);
  - Add new app is now functional (kind of);
  - Added the fetch all installed apps methods;
  - Added the app icon property/collumn to the appStore app model/table;
  - When the process is launched it now tries to find the app on the SystemAppsManager and if not found it tries to found on the        UserAppsManager;
  - The StartMenuManager also injects the installed UserApps now (apps can not yet be installed).
  - **A lot of bugs**.
- Added guest accounts (not functional yet);
- Fixes on the Desktop responsibility.

&nbsp;

#### v0.1.3 - 06/01/2018

- CLIENT:
  - Solved a bug (happening after resizing the window): "Uncaught TypeError: this.findWindowInstance(...).kill is not a function".

&nbsp;

#### v0.1.2 - 01/01/2018

- CLIENT:
  - Added the logout button to the start menu;
  - Added the logout sound;
  - Added the window shifting. It changes the position of the windows when they are selected. When clicked that one goes to the front;
  - Added a blue stroke to the selected window;
  - Small fix to hide the StartMenu when an App Icon is clicked;
  - Fixed (refactoring) the auth page: social login buttons;
  - Small fixes/improvements/refactorings to ease production vs local development.
- SERVER:
  - The user is now redirected to the "/portfolio-os/auth" route when it goes to "/portfolio-os".

&nbsp;

#### v0.1.1

- Multiple minor fixes.

&nbsp;

#### v0.1.0 - 25/11/2018

- Moved to Production. The app is online.
