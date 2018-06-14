class DesktopTemplates {
  constructor() {
    this.rowTemplate = (idx) => {
      return `
        <div id="row-${idx}" class="grid-y desktop-row"></div>
      `;
    }

    this.cellTemplate = (idx, content) => {
      if (!content) content = '';

      return `
        <article id="cell-${idx}" class="cell desktop-cell droppable"></article>
      `;
    } 

    this.iconTemplate = (id, iconUrl, label) => {
      if (!label) label = 'Desktop Icon';

      return `
        <figure class="desktop-icon draggable" id="${id}">
          <img src="${iconUrl}" alt="${label}" class="unselectable icon" />
          <label class="unselectable icon-label">Trash</label>
        </figure>
      `;
    }
  }
}

const desktopTemplates = new DesktopTemplates();
