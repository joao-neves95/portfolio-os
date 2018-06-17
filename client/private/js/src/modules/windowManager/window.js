class Window {
  constructor(title, content) {

    this.id = 'win-' + Utils.randomString(5);
    this.title = title;
    this.content = content;
    this.element = HTMLElement;
    this.icon = TaskbarIcon;

    this.isMinimized = Boolean;

    this.init();
  }

  get template() {
    return `
      <article class="window-manager grid-y" id="${this.id}">
        <header class="toolbar">
          <div class="grid-x">
            <div class="cell large-10">
              <p class="window-title free-draggable">${this.title}</p>
            </div>
            <div class="cell auto"></div>
            <div class="cell large-1 icon-wrap">
              <img src="${IMG_PATH}minimize-white.svg" alt="Minimize Window Icon" class="minimize-window icon" />
            </div>
            <div class="cell large-1 icon-wrap">
              <img src="${IMG_PATH}maximize-white.svg" alt="Maximize Window Icon" class="icon" />
            </div>
            <div class="cell large-1 icon-wrap">
              <img src="${IMG_PATH}close-white.svg" alt="Close Window Icon" class="close-window icon" />
            </div>
          </div>
        </header>
        <section class="content">
          ${this.content}
        </section>
      </article>`;
  }

  init() {
    document.getElementById('window-manager-container').innerHTML += this.template;
    this.element = document.getElementById(this.id);
    this.isMinimized = false;
  }

  kill() {
    document.getElementById(this.id).remove();
  }

  minimize() {
    document.getElementById(this.id).style.display = 'none';
    this.isMinimized = true;
  }

  maximize() {
    document.getElementById(this.id).style.display = 'block';
    this.isMinimized = false;
  }
}
