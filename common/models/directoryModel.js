/*
 *
 * Copyright (c) 2018 João Pedro Martins Neves (shivayl) - All Rights Reserved.
 *
 * Portfolio-OS is licensed under the GNU LGPLv3, located in the root of this 
 * project, under the name "LICENSE.md".
 *
 */

let fsItemModelBaseDir;

try {
  if ( process.env !== undefined )
    fsItemModelBaseDir = require( './fsItemModelBase' );

} catch {
  // This is the browser.
  fsItemModelBaseDir = FSItemModelBase;
}

class DirectoryModel extends fsItemModelBaseDir {
  /**
   * 
   * @param { FileSystemItemType } type FileSystemItemType enum
   * @param { PermissionType } permission PermissionType enum
   * @param { string } name
   * @param { string } iconUrl "null" defaults to the default folder icon.
   * @param { FileSystemItemType } type "null" defaults to "FileSystemItemType.Directory".
   * @param { string } content
   */
  constructor( permission, name, iconUrl = null, type = null, content ) {
    super( !type ? FileSystemItemType.Directory : type,
      permission,
      name,
      !iconUrl ? '' : iconUrl,
      content
    );
  }
}

try {
  if ( process.env !== undefined )
    module.exports = DirectoryModel;

} catch {
  // Do nothing, this is the browser.
}
