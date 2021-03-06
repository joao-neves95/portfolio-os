﻿/*
 *
 * Copyright (c) 2018 João Pedro Martins Neves (shivayl) - All Rights Reserved.
 *
 * Portfolio-OS is licensed under the GNU LGPLv3, located in the root of this
 * project, under the name "LICENSE.md".
 *
 */

class GridSystemTemplates {
  constructor() {
    throw new Error( 'Can not intantiate the static class \'GridSystemTemplates\'' );
  }

   /**
    * If grid-y use width, if grid-x use height.
    * 
   * @param { string } id
   * @param { GridType } gridType
   * @param { number | null } widthPercent <number | null>
   * @param { number | null } heightPercent <number | null>
   */
  static rowTemplate( id, gridType, widthPercent = null, heightPercent = null ) {
    widthPercent = widthPercent === null ? '' : `width: ${widthPercent.toString()}%;min-width: 10em !important;`;
    heightPercent = heightPercent === null ? '' : `height: ${heightPercent.toString()}%;min-height: 40em !important;`;
    const gridTypeClass = gridType === GridType.GridY ? 'grid-system-row-y' : 'grid-system-row-x';

    return `
      <div id="${id}" class="${gridType} ${gridTypeClass} unselectable" style="${widthPercent}${heightPercent}"></div>
    `;
  }

  /**
    * If grid-y use height, if grid-x use width.
    * 
   * @param { string } id
   * @param { number | null } widthPercent <number | null>
   * @param { number | null } heightPercent <number | null>
   * @param { boolean } droppable
   */
  static cellTemplate( id, widthPercent, heightPercent, droppable = false, additionalClasses ) {
    widthPercent = widthPercent === null ? '' : `width: ${widthPercent.toString()}%; min-width: ${widthPercent.toString()}% !important;`;
    heightPercent = heightPercent === null ? '' : `height: ${heightPercent.toString()}%; min-height: ${heightPercent.toString()}% !important;`;
    droppable = droppable ? 'droppable' : '';

    return `
        <article id="${id}" class="cell grid-system-cell unselectable ${droppable} ${additionalClasses}" style="${widthPercent}${heightPercent}">&nbsp;</article>
      `;
  }
}