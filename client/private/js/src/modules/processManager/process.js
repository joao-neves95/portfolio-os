/*
 *
 * Copyright (c) 2018 João Pedro Martins Neves (shivayl) - All Rights Reserved.
 *
 * Portfolio-OS is licensed under the GNU LGPLv3, located in the root of this
 * project, under the name "LICENSE.md".
 *
 */

class Process {
  constructor( processName ) {
    this.id = Utils.randomString( PROCESS_ID_LENGTH );
    this.name = processName;
  }
}
