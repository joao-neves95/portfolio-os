class DesktopIcon {
  constructor(emptyCell, iconUrl, label) {
    this.id = 'd-icon-' + Utils.randomString( 4 );
    this.iconUrl = iconUrl;
    this.label = label;
    this.emptyCell = emptyCell;
    this.isSelected = Boolean;

    this.init();

    this.getCellElem = () => {
      const thisIcon = document.getElementById( this.id ).offsetParent;
    };
  }

  get template() { return desktopTemplates.iconTemplate( this.id, this.iconUrl, this.label ); }

  init() {
    this.emptyCell.innerHTML += this.template;
    this.isSelected = false;
  }

  selected() {
    const thisIcon = document.getElementById( this.id );

    if ( this.isSelected )
      thisIcon.classList.remove( 'selected' );
    else
      thisIcon.classList.add( 'selected' );

    this.isSelected = !this.isSelected;
  }
}
