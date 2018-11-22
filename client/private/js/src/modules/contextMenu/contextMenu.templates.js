/*
 *
 * Copyright (c) 2018 João Pedro Martins Neves (shivayl) - All Rights Reserved.
 *
 * Portfolio-OS is licensed under the GNU LGPLv3, located in the root of this
 * project, under the name "LICENSE.md".
 *
 */

class ContextMenuTemplates {
  menuWindow(content = '') {
    return `
      <nav class="grid-y context-menu">
        <ul>${content}</ul>
      </nav>
    `;
  }

  /**
   * 
   * @param {string} label
   */
  menuItem(label) {
    return `
      <li class="item">${ label }</li>
    `;
  }
}
