﻿/*
 *
 * Copyright (c) 2018 João Pedro Martins Neves (shivayl) - All Rights Reserved.
 *
 * Portfolio-OS is licensed under the GNU LGPLv3, located in the root of this
 * project, under the name "LICENSE.md".
 *
 */

class AddNewAppView {
  constructor() {
  }

  get helpBtnElem() { return DomUtils.get( `#${Window.idPrefix}${processId} .help` ); }
  get closeWindowBtnElem() { return DomUtils.get( `#${Window.idPrefix}${processId} .close-window` ); }
  get addNewAppBtnElem() { return DomUtils.get( `#${Window.idPrefix}${processId} .addNewApp` ); }

  getFormData() {
    const windowQuery = `#${Window.idPrefix}${processId}`;

    const appName = DomUtils.get( `#${windowQuery} .name` ).value;
    const appDescription = DomUtils.get( `#${windowQuery} .description` ).value;
    const appIndexPage = DomUtils.get( `#${windowQuery} .index-page` ).value;
    const iconUrl = DomUtils.get( `#${windowQuery} .icon-url` ).value;

    return {
      appName: appName,
      appDescription: appDescription,
      indexPage: appIndexPage,
      startMenuIconUrl: iconUrl,
      taskbarIconUrl: iconUrl
    };
  }
}
