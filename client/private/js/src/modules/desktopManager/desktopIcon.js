class DesktopIcon {
  constructor(emptyCell, iconUrl, label) {
    this.id = 'd-icon-' + Utils.randomString(4);
    this.isSelected = Boolean;

    this.template = desktopTemplates.iconTemplate(this.id, iconUrl, label);

    this.init = () => {
      emptyCell.innerHTML += this.template;
      this.isSelected = false;
    };

    this.init();

    this.selected = () => {
      const thisIcon = document.getElementById(this.id);

      if (this.isSelected)
        thisIcon.classList.remove('selected');
      else
        thisIcon.classList.add('selected');

      this.isSelected = !this.isSelected;
    }

    this.getCellElem = () => {
      const thisIcon = document.getElementById(this.id).offsetParent;
    }
  }
}
