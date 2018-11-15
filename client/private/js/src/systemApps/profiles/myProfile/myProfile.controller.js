class MyProfileController {
  constructor() {
    this.model = new MyProfileModel();
    this.view = new MyProfileView();
  }

  initPage( target ) {
    this.view.target = target;
    this.view.activateProfileEdition();
    this.____addEventListeners();
  }

  ____addEventListeners() {
    this.view.target.getElementsByClassName( 'add-link-btn' )[0].addEventListener( 'click', ( e ) => {
      e.preventDefault();
      e.target.insertAdjacentHTML( 'beforebegin', MyProfileTemplates.addLink );
    } );

    this.view.target.getElementsByClassName( 'add-skill-btn' )[0].addEventListener( 'click', ( e ) => {
      e.preventDefault();
      e.target.insertAdjacentHTML( 'beforebegin', MyProfileTemplates.input );
    } );
  }
}
