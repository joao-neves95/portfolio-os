const START_MENU_ANIM_DELAY = 1;

class TaskbarManager {
  constructor() {
    this.iconContainerElem = document.getElementById('icon-container');
    this.icons = new Dictionary();

    this.startMenu.style.bottom = '-550px';
    this.updateStartMenuListener();
  }

  // #region TASKBAR ICONS
  /**
    * It adds an icon to the taskbar.
    * Returns the new TaskbarIcon instance.
    * 
    * @param {string} windowId 
    * The window that this icon is linked to.
    */
  addIcon(windowId, taskbarIconUrl) {
    const newIcon = new TaskbarIcon(windowId, taskbarIconUrl);
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
  // #endregion

  // #region START MENU
  get startMenuIcon() { return document.getElementsByClassName('menu-icon-wrap')[0]; }
  get startMenu() { return document.getElementsByClassName('start-menu')[0]; }

  updateStartMenuListener() {
    // Start Menu animation.
    this.startMenuIcon.addEventListener('click', () => {
      if (this.startMenu.style.bottom !== '48px')
        window.showMenu = setInterval(this.showStartMenu.bind(this), START_MENU_ANIM_DELAY);
      else
        window.hideMenu = setInterval(this.hideStartMenu.bind(this), START_MENU_ANIM_DELAY);
    });
  }

  showStartMenu() {
    let currentHeight = Utils.parsePxToInt( this.startMenu.style.bottom );

    if (currentHeight >= 48) {
      clearInterval(window.showMenu);
      return;
    }

    this.startMenu.style.bottom = (currentHeight + 2).toString() + 'px';
  }

  hideStartMenu() {
    let currentHeight = Utils.parsePxToInt(this.startMenu.style.bottom)
    if (currentHeight <= -550) {
      if (!window.hideMenu)
        return;

      clearInterval(window.hideMenu);
      return;
    }

    this.startMenu.style.bottom = (currentHeight - 2).toString() + 'px';;
  }

  outsideClickGlobalEvent(e) {
    const that = e.target;
    if (that.closest('.start-menu') || that.closest('.menu-icon-wrap'))
      return;

    window.hideMenu = setInterval(this.hideStartMenu.bind(this), START_MENU_ANIM_DELAY);
  }
  // #endregion

  // #region UTILITIES:
  findIconInstance(windowId) {
    return this.icons.getByKey(TaskbarIcon.idPrefix + windowId);
  }
  // #endregion
}

const taskbarManager = new TaskbarManager();
