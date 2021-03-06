﻿/*
 *
 * Copyright (c) 2018 João Pedro Martins Neves (shivayl) - All Rights Reserved.
 *
 * Portfolio-OS is licensed under the GNU LGPLv3, located in the root of this
 * project, under the name "LICENSE.md".
 *
 */

class ExplorerTemplates {
  constructor() {
    throw new Error( 'Con not intantiate static class "ExplorerTemplates"' );
  }

  static get inputIconPrefix() { return 'input-icn_'; }
  static get contentPrefix() { return 'cntnt_'; }
  static get treeNavElem() { return document.getElementById( 'exporer-tree-nav' ); }

  static window( id ) {
    return `
      <section class="grid-y explorer" id="${id}">
        <header class="cell">
          <div class="input-group">
            <span class="input-group-label"><img class="input-icn" id="${ExplorerTemplates.inputIconPrefix}${id}" src="${IMG_PATH}folder.svg" alt="${id} Input Icon"></span>
            <input class="input-group-field" type="text">
          </div>
        </header>
        <div class="cell exp-content">
          <div class="grid-x">
            <nav id="exporer-tree-nav">
            </nav>
            <section id="${ExplorerTemplates.contentPrefix}${id}">
            </section>
          </div>
        <div>
      </section>
    `;
  }
}
