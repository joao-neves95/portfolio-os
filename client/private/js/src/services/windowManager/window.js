'use strict'

class Window {
  constructor () {
    this.id = 'win-' + Utils.randomString(5);
    this.element = HTMLElement;
    this.icon = TaskbarIcon;
    this.isMinimized = Boolean;

    this.template = `
      <article class="window-manager" id="${this.id}">
        <header class="toolbar">
          <div class="grid-x">
            <div class="cell large-10">
              <p class="window-title">Window Title</p>
            </div>
            <div class="cell auto"></div>
            <div class="cell large-1 icon-wrap">
              <img src="../wwwroot/img/minimize-white.svg" alt="Minimize Window Icon" class="minimize-window icon" />
            </div>
            <div class="cell large-1 icon-wrap">
              <img src="../wwwroot/img/maximize-white.svg" alt="Maximize Window Icon" class="icon" />
            </div>
            <div class="cell large-1 icon-wrap">
              <img src="../wwwroot/img/close-white.svg" alt="Close Window Icon" class="close-window icon" />
            </div>
          </div>
        </header>
      </article>`

    this.init = () => {
      document.getElementById('window-manager-container').innerHTML += this.template;
      this.element = document.getElementById(this.id);
      this.isMinimized = false;
    }

    this.kill = () => {
      document.getElementById('window-manager-container').removeChild(this.element);
    }

    this.minimize = () => {
      this.element.style.display = 'none';
      this.isMinimized = true;
    }

    this.maximize = () => {
      this.element.style.display = 'block';
      this.isMinimized = false;
    }
  }
}
