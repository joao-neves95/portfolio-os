class DesktopManager {
  constructor() {
    this.rowCount = 0
    this.cellCount = 0;
    this.icons = new Dictionary();

    this.init = () => {
      const theDesktop = document.getElementById('desktop');
      const grid = Utils.calculateGrid(5, 15);
      this.rowCount = grid.y;
      this.cellCount = grid.x;

      Utils.insertGrid(grid.x, grid.y, theDesktop, desktopTemplates.rowTemplate, desktopTemplates.cellTemplate);
    }

    this.insertNewIcon = (iconUrl, label) => {
      const emptyCell = this.utils.findEmptyCell();
      const newIcon = new DesktopIcon(emptyCell, iconUrl, label);
      this.icons.add(newIcon.id, newIcon);
      this.updateListeners();
      dragAndDrop.updateDraggables();
    }

    this.updateListeners = () => {
      const allIcons = document.getElementsByClassName('desktop-icon');
      if (!allIcons) return false;

      for (let i = 0; i < allIcons.length; i++) {
        allIcons[i].removeEventListener('click', this.utils.findIconInstance);
        allIcons[i].addEventListener('click', (e) => {
          const that = e.target;
          const icon = DomUtils.getParentByTag(that, 'figure');
          this.utils.findIconInstance(icon.id, (thisIcon) => {
            thisIcon.selected();
          });
        });

        allIcons[i].removeEventListener('dblclick', windowManager.openNewWindow);
        allIcons[i].addEventListener('dblclick', (e) => {
          const that = e.target;
          const icon = DomUtils.getDirectChildrenByTag(that, 'img');
          // windowManager.openNewWindow(icon.alt);
          processManager.launchNewProcess(icon.alt);
        });
      }
    }

    this.utils = {

      findEmptyCell: () => {
        const cellCount = desktopManager.cellCount;

        for (let i = 0; i < cellCount; i++) {
          let currentCell = document.getElementById(`cell-${i + 1}`);
          if (currentCell.childElementCount <= 0)
            return currentCell;
        }
        return false;
      },

      findIconInstance: (iconId, Callback) => {
        const thisIcon = this.icons.getByKey(iconId);
        if (Callback) Callback(thisIcon);
        else return thisIcon;
      }
    }
  }
}

const desktopManager = new DesktopManager();
