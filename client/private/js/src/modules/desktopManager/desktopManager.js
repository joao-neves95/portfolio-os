const desktopTemplates = new DesktopTemplates();

class DesktopManager {
  constructor() {
    this.rowCount = 0
    this.cellCount = 0;
    this.icons = [];

    this.init = () => {
      const theDesktop = document.getElementById('desktop');

      for (let rowIdx = 0; rowIdx <= 19; rowIdx++) {
        theDesktop.innerHTML += desktopTemplates.rowTemplate(rowIdx + 1);
        this.rowCount++;

        for (let cellIdx = 0; cellIdx <= 5; cellIdx++) {
          const lastInsertedRow = document.getElementById(`row-${this.rowCount}`);
          lastInsertedRow.innerHTML += desktopTemplates.cellTemplate(this.cellCount + 1);
          this.cellCount++;
        }
      }
    }

    // TODO: Create a DesktopIcon class and add it to the DesktopManager on instantiation.
    this.insertIcon = (iconUrl, label) => {
      const emptyCell = findEmptyCell();
      const newIconId = Utils.randomString(4);
      emptyCell.innerHTML = desktopTemplates.iconTemplate(newIconId, iconUrl, label);
      this.updateListeners();
    }

    this.updateListeners = () => {
      const allIcons = document.getElementsByClassName('desktop-icon');
      if (!allIcons) return false;

      for (let i = 0; i < allIcons.length; i++) {
        allIcons[i].removeEventListener('click', this.selectedIcon);
        allIcons[i].addEventListener('click', (e) => {
          console.debug('click')
          const that = e.target;
          const figure = DomUtils.getParentByTag(that, 'figure');
          this.selectedIcon(figure);
        });

        allIcons[i].removeEventListener('dblclick', windowManager.openNewWindow);
        allIcons[i].addEventListener('dblclick', (e) => {
          const that = e.target;
          const icon = DomUtils.getDirectChildrenByTag(that, 'img');
          windowManager.openNewWindow(icon.alt);
        });
      }
    }

    // TEMPORARY.
    // TODO: Pass this to the DesktopIcon class.
    this.selectedIcon = (icon) => {
      if (icon.className.includes('selected'))
        icon.classList.remove('selected');
      else
        icon.classList.add('selected');
    }
  }
}

const desktopManager = new DesktopManager();

const findEmptyCell = () => {
  const cellCount = desktopManager.cellCount;

  for (let i = 0; i < cellCount; i++) {
    let currentCell = document.getElementById(`cell-${i + 1}`);
    if (currentCell.childElementCount <= 0)
      return currentCell;
  }
  return false;
}
