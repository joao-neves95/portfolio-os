/*
 *
 * Copyright (c) 2018 João Pedro Martins Neves (shivayl) - All Rights Reserved.
 *
 * Portfolio-OS is licensed under the GNU LGPLv3, located in the root of this 
 * project, under the name "LICENSE.md".
 *
 */

class DesktopIcon {
  constructor(emptyCell, iconUrl, label) {
    this.id = 'd-icon-' + Utils.randomString( 4 );
    this.iconUrl = iconUrl;
    this.label = label;
    this.emptyCell = emptyCell;
    this.isSelected = Boolean;

    this.init();

    this.getCellElem = () => {
      return document.getElementById( this.id ).offsetParent;
    };
  }

  get template() { return desktopTemplates.iconTemplate( this.id, this.iconUrl, this.label ); }

  init() {
    this.emptyCell.innerHTML += this.template;
    this.isSelected = false;
  }

  selected() {
    const thisIcon = document.getElementById( this.id );

    if ( this.isSelected )
      thisIcon.classList.remove( 'selected' );
    else
      thisIcon.classList.add( 'selected' );

    this.isSelected = !this.isSelected;
  }
}
