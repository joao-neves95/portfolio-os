/*
 *
 * Copyright (c) 2018 João Pedro Martins Neves (shivayl) - All Rights Reserved.
 *
 * Portfolio-OS is licensed under the GNU LGPLv3, located in the root of this
 * project, under the name "LICENSE.md".
 *
 */

class DesktopManager {
  constructor() {
    this.rowCount = 0;
    this.cellCount = 0;
    this.icons = new Dictionary();
    this.rowIdsPrefix = 'dsktp-row_';
    this.cellIdsPrefix = 'dsktp-cell_';

    // 0 because it's added bellow.
    this.gridSystemConfig = {
      gridType: GridType.GridY,
      cellWidthPercent: 5,
      cellHeightPercent: 10,
      gridXCount: 0,
      gridYCount: 0,
      target: document.getElementById( 'desktop' ),
      rowIdsPrefix: this.rowIdsPrefix,
      cellIdsPrefix: this.cellIdsPrefix,
      additionalCellClasses: 'desktop-cell',
      droppableCell: true
    };
  }

  init() {
    const grid = Utils.calculateGrid( 5, 15 );
    this.rowCount = grid.y;
    this.gridSystemConfig.gridYCount = grid.y;
    this.cellCount = grid.x;
    this.gridSystemConfig.gridXCount = grid.x;

    gridSystem.insertGrid( this.gridSystemConfig );
  }

  insertNewIcon( iconUrl, label ) {
    const emptyCell = gridSystem.findEmptyCell( this.cellIdsPrefix, desktopManager.cellCount );
    const newIcon = new DesktopIcon( emptyCell, iconUrl, label );
    this.icons.add( newIcon.id, newIcon );
    this.updateListeners();
    dragAndDrop.updateDraggables();
  }

  updateListeners() {
    const allIcons = document.getElementsByClassName( 'desktop-icon' );
    if ( !allIcons ) return false;

    for ( let i = 0; i < allIcons.length; i++ ) {
      if ( !allIcons[i].classList.contains( 'clk' ) ) {
        allIcons[i].addEventListener( 'click', ( e ) => {
          const that = e.target;
          const icon = DomUtils.getParentByTag( that, 'figure' );
          this.__findIconInstance( icon.id, ( thisIcon ) => {
            thisIcon.selected();
          } );
        } );

        allIcons[i].classList.add( 'clk' );
      }

      if ( !allIcons[i].classList.contains( 'dblclk' ) ) {
        allIcons[i].removeEventListener( 'dblclick', processManager.launchNewProcess );
        allIcons[i].addEventListener( 'dblclick', ( e ) => {
          const that = e.target;
          const icon = DomUtils.getDirectChildrenByTag( that, 'img' );
          // windowManager.openNewWindow(icon.alt);
          processManager.launchNewProcess( icon.alt );
        } );

        allIcons[i].classList.add( 'dblclk' );
      }

    }
  }

  __findIconInstance( iconId, Callback ) {
    const thisIcon = this.icons.getByKey( iconId );

    if( Callback ) Callback( thisIcon );
    else return thisIcon;
  }
}

const desktopManager = new DesktopManager();
