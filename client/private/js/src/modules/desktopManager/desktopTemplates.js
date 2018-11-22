/*
 *
 * Copyright (c) 2018 João Pedro Martins Neves (shivayl) - All Rights Reserved.
 *
 * Portfolio-OS is licensed under the GNU LGPLv3, located in the root of this 
 * project, under the name "LICENSE.md".
 *
 */

class DesktopTemplates {
  constructor() {
    this.iconTemplate = ( id, iconUrl, label ) => {
      if ( !label ) label = 'Desktop Icon';

      return `
        <figure class="desktop-icon draggable" id="${id}">
          <img src="${iconUrl}" alt="${label}" class="unselectable icon" />
          <label class="unselectable icon-label">${label}</label>
        </figure>
      `;
    };
  }
}

const desktopTemplates = new DesktopTemplates();
