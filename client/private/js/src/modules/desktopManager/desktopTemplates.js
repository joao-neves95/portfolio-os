class DesktopTemplates {
  constructor() {
    this.iconTemplate = ( id, iconUrl, label ) => {
      if ( !label ) label = 'Desktop Icon';

      return `
        <figure class="desktop-icon draggable" id="${id}">
          <img src="${iconUrl}" alt="${label}" class="unselectable icon" />
          <label class="unselectable icon-label">Trash</label>
        </figure>
      `;
    };
  }
}

const desktopTemplates = new DesktopTemplates();
