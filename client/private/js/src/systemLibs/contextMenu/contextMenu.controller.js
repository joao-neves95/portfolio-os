const contextMenuTemplates = new ContextMenuTemplates();

class ContextMenu {
  constructor() {
    this.init();
  }

  get element() { return document.getElementsByClassName('context-menu')[0]; };
  get menuTargetContainer() { return document.getElementById('window-manager-container'); };

  init() {
    document.addEventListener('contextmenu', (e) => {
      e.preventDefault();

      if (!this.element)
        this.inject(e);
      else {
        this.kill(e);
        this.inject(e);
      }
    });
  }

  inject(e) {
    this.menuTargetContainer.innerHTML += contextMenuTemplates.menuWindow(contextMenuTemplates.menuItem());
    this.element.style.left = e.clientX + 'px';
    this.element.style.top = e.clientY + 'px';
  }

  kill(e) {
    if (!this.element)
      return;

    this.element.remove();
  }

  outsideClickGlobalEvent(e) {
    const that = e.target;
    if (that.closest('.context-menu'))
      return;

    this.kill(e);
  }
}

const contextMenu = new ContextMenu();
