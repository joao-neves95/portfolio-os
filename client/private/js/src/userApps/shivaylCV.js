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
