// http://ignitersworld.com/lab/contextMenu.html
const contextMenuTemplates = new ContextMenuTemplates();

class ContextMenu {
  constructor() {
    this.menuBindings = new Dictionary();

    this.menuContent = '';

    this.init();
  }

  get element() { return document.getElementsByClassName('context-menu')[0]; };
  get menuTargetContainer() { return document.getElementById('window-manager-container'); };

  init() {
    document.addEventListener('contextmenu', (e) => {
      e.preventDefault();
      this.contextMenu = '';
      let that = e.target;

      for (let i = 0; i < this.menuBindings.length; ++i) {
        const clickedBindedElem = DomUtils.getParentByClassInclude( that, this.menuBindings.getKeyByIndex( i ) );

        if (clickedBindedElem) {
          const currentBinding = this.menuBindings.getByIndex(i);
          for (let j = 0; j < currentBinding.length; ++j) {
            this.menuContent += currentBinding[j];
          }
          break;
        }
      }

      if (this.menuContent === '')
        return;

      if (!this.element)
        this.inject(e);
      else {
        this.kill(e);
        this.inject(e);
      }
    });
  }

  inject(e) {
    this.menuTargetContainer.innerHTML += contextMenuTemplates.menuWindow( this.menuContent );
    this.element.style.left = e.clientX + 'px';
    this.element.style.top = e.clientY + 'px';
  }

  kill(e) {
    if (!this.element)
      return;

    this.menuContent = '';
    this.element.remove();
  }

  outsideClickGlobalEvent(e) {
    const that = e.target;
    if (that.closest('.context-menu'))
      return;

    this.kill(e);
  }

  /**
   * 
   * @param {string} classElementKey
   * @param {string[]} items Use: contextMenuTemplates.menuItem("Label")
   */
  bindItems(classElementKey, items) {
    this.menuBindings.add(classElementKey, items);
  }
}

const contextMenu = new ContextMenu();
