const START_MENU_ANIM_DELAY = 1;

class TaskbarManager {
  constructor() {
    this.iconContainerElem = document.getElementById('icon-container');
    this.icons = new Dictionary();

    this.startMenu.style.bottom = '-550px';
    this.updateStartMenuListener();
  }

  get startMenuIcon() { return document.getElementsByClassName('menu-icon-wrap')[0]; };
  get startMenu() { return document.getElementsByClassName('start-menu')[0]; };

  updateStartMenuListener() {
    // Start Menu animation.
    this.startMenuIcon.addEventListener('click', () => {
      if (this.startMenu.style.bottom !== '48px')
        window.showMenu = setInterval(this.show.bind(this), START_MENU_ANIM_DELAY);
      else
        window.hideMenu = setInterval(this.hide.bind(this), START_MENU_ANIM_DELAY);
    });
  }

  show() {
    let currentHeight = Utils.parsePxToInt(this.startMenu.style.bottom)
    if (currentHeight >= 48) {
      clearInterval(window.showMenu);
      return;
    }

    this.startMenu.style.bottom = (currentHeight + 2).toString() + 'px';
  }

  hide() {
    let currentHeight = Utils.parsePxToInt(this.startMenu.style.bottom)
    if (currentHeight <= -550) {
      clearInterval(window.hideMenu);
      return;
    }

    this.startMenu.style.bottom = (currentHeight - 2).toString() + 'px';;
  }

  /**
    * 
    * @param {string} windowId 
    * The window that this icon is linked to.
    */
  addIcon(windowId) {
    const newIcon = new TaskbarIcon(windowId);
    this.icons.add(TaskbarIcon.idPrefix + windowId, newIcon);
    return newIcon;
  }

  killIcon(windowId) {
    this.findIconInstance(windowId).kill();
    this.icons.remove(TaskbarIcon.idPrefix + windowId);
  }

  minimizedIcon(windowId) {
    this.findIconInstance(windowId).minimized();
  }

  maximizedIcon(windowId) {
    this.findIconInstance(windowId).maximized();
  }

  // UTILITIES:
  findIconInstance(windowId) {
    return this.icons.getByKey(TaskbarIcon.idPrefix + windowId);
  }
}

const taskbarManager = new TaskbarManager();
