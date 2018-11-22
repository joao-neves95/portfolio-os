/*
 *
 * Copyright (c) 2018 João Pedro Martins Neves (shivayl) - All Rights Reserved.
 *
 * Portfolio-OS is licensed under the GNU LGPLv3, located in the root of this
 * project, under the name "LICENSE.md".
 *
 */

/**
 * Document events.
 * */
class GlobalEvents {
  constructor() {
    this.clickEventFunctions = [];
  }

  init() {
    document.addEventListener('click', (e) => {
      for (let i = 0; i < this.clickEventFunctions.length; ++i) {
        this.clickEventFunctions[i](e);
      }
    });
  };

  bindEvent(eventType, executeFunction) {
    switch (eventType.toUpperCase()) {
      case 'CLICK':
        this.clickEventFunctions.push( executeFunction );
        break;
      default:
        return;
    }
  };
}

const globalEvents = new GlobalEvents();
