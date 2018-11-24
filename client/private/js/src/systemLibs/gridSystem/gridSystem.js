/*
 *
 * Copyright (c) 2018 João Pedro Martins Neves (shivayl) - All Rights Reserved.
 *
 * Portfolio-OS is licensed under the GNU LGPLv3, located in the root of this
 * project, under the name "LICENSE.md".
 *
 */

/** @type { GridSystem } */
let gridSystem = null;

class GridSystem {
  constructor() {
    if ( gridSystem )
      throw new Error( 'GridSystem can only have one instance (singleton)' );

    gridSystem = this;
    Object.freeze( gridSystem );
  }

  static _() { return gridSystem; }

  // TODO: Change from parameters to a config object.
  insertGrid( config ) {
    let rowCount = 0;
    let cellCount = 0;
    const rowWidth = config.gridType === GridType.GridY ? config.cellWidthPercent : 100;
    const rowHeight = config.gridType === GridType.GridX ? config.cellHeightPercent : 100;
    const cellWidth = config.gridType === GridType.GridX ? config.cellWidthPercent : 100;
    const cellHeight = config.gridType === GridType.GridY ? config.cellHeightPercent : 100;

    for ( let rowIdx = 0; rowIdx <= config.gridXCount; rowIdx++ ) {
      config.target.innerHTML += GridSystemTemplates.rowTemplate( config.rowIdsPrefix + ( rowIdx + 1 ).toString(), config.gridType, rowWidth, rowHeight );
      rowCount++;

      for ( let cellIdx = 0; cellIdx <= config.gridYCount; cellIdx++ ) {
        const lastInsertedRow = document.getElementById( `${config.rowIdsPrefix}${rowCount}` );
        lastInsertedRow.innerHTML += GridSystemTemplates.cellTemplate( config.cellIdsPrefix + ( cellCount + 1 ).toString(), cellWidth, cellHeight, config.droppableCell, config.additionalCellClasses );
        cellCount++;
      }
    }
  }

  findEmptyCell( cellIdsPrefix, cellCount ) {
    for ( let i = 0; i < cellCount; i++ ) {
      let currentCell = document.getElementById( `${cellIdsPrefix}${i + 1}` );
      if ( currentCell.childElementCount <= 0 )
        return currentCell;
    }

    return false;
  }
}

new GridSystem();
