class ExplorerTemplates {
  constructor() {
    throw new Error( 'Con not intantiate static class "ExplorerTemplates"' );
  }

  static get treeNavElem() { return document.getElementById( 'exporer-tree-nav' ); }

  static window( id ) {
    return `
      <section class="grid-y explorer" id="${id}">
        <header class="cell">
          <div class="input-group">
            <span class="input-group-label"><img class="input-icn" id="input-icn_${id}" src="${IMG_PATH}folder.svg" alt="${id} Input Icon"></span>
            <input class="input-group-field" type="text">
          </div>
        </header>
        <div class="cell exp-content">
          <div class="grid-x">
            <nav id="exporer-tree-nav">
            </nav>
            <section>
            </section>
          </div>
        <div>
      </section>
    `;
  }
}
