/*
 *
 * Copyright (c) 2018 João Pedro Martins Neves (shivayl) - All Rights Reserved.
 *
 * Portfolio-OS is licensed under the GNU LGPLv3, located in the root of this
 * project, under the name "LICENSE.md".
 *
 */

class AppStoreApplication {
  /**
   * @param { FileSystemItemType } type FileSystemItemType enum
   * @param { string } name
   * @param { string } creator
   * @param { string } htmlIndexUrl
   */
  constructor( type, id, name, creator, htmlIndexUrl, description ) {
    this.type = type;
    this.id = id;
    this.name = name;
    this.creator = creator;
    this.htmlIndexUrl = htmlIndexUrl; // 'https://rawgit.com/'
    this.description = description;

    this.rating = [];
    /** An array with the users id's
     * @type { string[] } */
    this.downloads = [];
    this.creationDate = '';
    this.lastUpdateDate = '';
  }
}
