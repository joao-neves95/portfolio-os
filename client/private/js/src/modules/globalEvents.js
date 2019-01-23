/*
 *
 * Copyright (c) 2018 João Pedro Martins Neves (shivayl) - All Rights Reserved.
 *
 * Portfolio-OS is licensed under the GNU LGPLv3, located in the root of this
 * project, under the name "LICENSE.md".
 *
 */

let globalEvents = null;

/**
 * Document events.
 * */
class GlobalEvents {
  constructor() {
    if ( globalEvents )
      throw new Error( 'There can only be one instance of GlobalEvents.' );

    this.clickEventFunctions = [];

    globalEvents = this;
    Object.seal( globalEvents );
  }

  init() {
    document.addEventListener( 'click', ( e ) => {
      for ( let i = 0; i < this.clickEventFunctions.length; ++i ) {
        this.clickEventFunctions[i]( e );
      }
    } );
  }

  bindEvent(eventType, executeFunction) {
    switch (eventType.toUpperCase()) {
      case 'CLICK':
        this.clickEventFunctions.push( executeFunction );
        break;
      default:
        return;
    }
  }
}

new GlobalEvents();
