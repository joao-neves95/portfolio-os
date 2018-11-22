/*
 *
 * Copyright (c) 2018 João Pedro Martins Neves (shivayl) - All Rights Reserved.
 *
 * Portfolio-OS is licensed under the GNU LGPLv3, located in the root of this 
 * project, under the name "LICENSE.md".
 *
 */

class SystemDirectoryModel extends DirectoryModel {
  constructor( name, content ) {
    super( PermissionType.UserRead, name, null, null, content );
  }
}

try {
  if ( process.env !== undefined )
    module.exports = SystemDirectoryModel;

} catch {
  // Do nothing, this is the browser.
}
