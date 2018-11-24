/*
 *
 * Copyright (c) 2018 João Pedro Martins Neves (shivayl) - All Rights Reserved.
 *
 * Portfolio-OS is licensed under the GNU LGPLv3, located in the root of this
 * project, under the name "LICENSE.md".
 *
 */

class ShivaylCV {
  constructor( processId ) {
    windowManager.openNewWindow( processId, this.window( 'shivayl-cv_' + processId ) );
  }

  window( id ) {
    return `
      <section class="grid-x shivayl-cv" id="${id}">
        <img src="${IMG_PATH}shivayl-cv.png" alt="Shivayl CV Icon" title="Shivayl CV" />
      </section>
    `;
  }
}
