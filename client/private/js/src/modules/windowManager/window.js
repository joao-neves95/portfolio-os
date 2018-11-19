// TODO: Add the z-index of each each window.

class Window {
  constructor(processId, title, content) {

    this.id = `${Window.idPrefix}${processId}`;
    this.title = title;
    this.content = content;
    this.icon = TaskbarIcon;

    this.isMinimized = false;
    this.init();
  }

  get element() { return document.getElementById( this.id ); }
  static get idPrefix() { return 'win-'; }

  get template() {
    return `
      <article class="window-manager grid-y resizable" id="${this.id}">
        <header class="toolbar">
          <div class="grid-x">
            <div class="cell small-8 medium-8 large-8">
              <p class="window-title free-draggable">${this.title}</p>
            </div>
            <div class="cell auto"></div>
            <div class="cell small-1 medium-1 large-1 icon-wrap">
              <img src="${IMG_PATH}minimize-white.svg" alt="Minimize Window Icon" class="minimize-window icon" />
            </div>
            <div class="cell small-1 medium-1 large-1 icon-wrap">
              <img src="${IMG_PATH}maximize-white.svg" alt="Maximize Window Icon" class="max-size-window icon" />
            </div>
            <div class="cell small-1 medium-1 large-1 icon-wrap">
              <img src="${IMG_PATH}close-white.svg" alt="Close Window Icon" class="close-window icon" />
            </div>
          </div>
        </header>
        <section class="content">
          ${this.content}
        </section>
        <div class="resizer"></div>
      </article>`;
  }

  /**
   * Note: Currently in only supports having one modal.
   * @param {any} content
   */
  static modalTemplate( content ) {
    return `
      <div class="reveal" id="modal" data-reveal>
        ${content}
        <button class="close-button" data-close aria-label="Close modal" type="button">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>`;
  }

  init() {
    document.getElementById( 'window-manager-container' ).innerHTML += this.template;
  }

  kill() {
    this.element.remove();
  }

  minimize() {
    this.element.style.display = 'none';
    this.isMinimized = true;
  }

  unminimize() {
    this.element.style.display = 'block';
    this.isMinimized = false;
  }

  maxSize() {
    this.element.style.width = '100%';
    this.element.style.height = '92%';
    this.element.style.top = '0%';
    this.element.style.left = '0%';
  }
}
