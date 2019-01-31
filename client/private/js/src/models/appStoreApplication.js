/*
 *
 * Copyright (c) 2018 João Pedro Martins Neves (shivayl) - All Rights Reserved.
 *
 * Portfolio-OS is licensed under the GNU LGPLv3, located in the root of this
 * project, under the name "LICENSE.md".
 *
 */

const DEFAULT_ICON = '';

class AppStoreApplication {
  /**
   * @param { FileSystemItemType } type FileSystemItemType enum
   * @param { string } appName
   * @param { string } creator
   * @param { string } htmlIndexUrl
   * @param { string } description
   * @param { string } startMenuIconUrl
   * @param { string } taskbarIconUrl
   */
  constructor( type, id, appName, creator, htmlIndexUrl, description, iconUrl = '' ) {
    this.type = type;
    this.id = id;
    this.name = appName;
    this.creator = creator;
    this.htmlIndexUrl = htmlIndexUrl; // https://cdn.jsdelivr.net/gh/user/repo@version/file
    this.description = description;

    this.rating = [];
    /** An array with the users id's
     * @type { string[] } */
    this.downloads = [];
    this.creationDate = '';
    this.lastUpdateDate = '';

    this.startMenuIconUrl = !iconUrl ? null : iconUrl;
    this.taskbarIconUrl = !iconUrl ? null : iconUrl;
  }
}
