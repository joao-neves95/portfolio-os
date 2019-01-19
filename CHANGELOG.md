# CHANGELOG

<!-- &nbsp;

#### *v0.2.0 - /01/2018 -->

&nbsp;

#### *v0.2.0-Alpha.4 - 19/01/2018
- Finishing the Profiles: ProfileExplorer + (public) UserProfile;
- Added guest accounts;
- Added the click sound;
- Other fixes/refactorings.

&nbsp;

#### v0.2.0-Alpha.3 - 14/01/2018
- Finishing the AppStore [FRONTEND/SERVER/DATABASE] (TO TEST):
  - When the process is launched it now tries to find the app on the SystemAppsManager and if not found it tries to found on the UserAppsManager;
  - The StartMenuManager also injects the UserApps now;
  - Added the app icon property/collumn to the appStore app model/table;
  - Added the fetch all installed apps methods;
  - Other fixes.

&nbsp;

#### v0.2.0-Alpha.2 - 09/01/2018
- Finishing the AppStore: Application explorer (the top apps);
- Added the reset cookies (and localStorage) to clear the JWT if expired;
- Refactored the HttpClient: It now returns the Response object (broke everything; to fix on the next release).

&nbsp;

#### v0.2.0-Alpha.1 - 07/01/2018
- Added the notifications module;
- Added the setResetCookie to the server to solve a bug where if the JWT expired, it didn't let the user login;
- Finishing the AppStore: addNewApp - (ALPHA).

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
