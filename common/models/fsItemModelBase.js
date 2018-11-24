/*
 *
 * Copyright (c) 2018 João Pedro Martins Neves (shivayl) - All Rights Reserved.
 *
 * Portfolio-OS is licensed under the GNU LGPLv3, located in the root of this
 * project, under the name "LICENSE.md".
 *
 */

// TODO: Chnage the parameter order.

class FSItemModelBase {
  constructor( type, permission, name, iconUrl = null, content ) {
    this.type = type;
    this.permission = permission;
    this.name = name;
    this.content = content;
    this.iconUrl = iconUrl;
  }
}

try {
  if ( process.env !== undefined )
    module.exports = FSItemModelBase;

} catch ( e ) {
  // This is the browser.
}

