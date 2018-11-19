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

    // Update Portfolio (DB) values.
    this.view.summaryElem.addEventListener( 'blur', ( e ) => {
      e.preventDefault();
      this.___updatePortfolioValue( e );
    } );

    document.querySelectorAll( '[id^="link_"].slug' ).forEach( value => {
      value.addEventListener( 'blur', ( e ) => {
        e.preventDefault();
        this.___updatePortfolioValue( e );
      } );
    } );

    document.querySelectorAll( '[id^="skill_"].skill' ).forEach( value => {
      value.addEventListener( 'blur', ( e ) => {
        e.preventDefault();
        this.___updatePortfolioValue( e );
      } );
    } );
  }

  ___updatePortfolioValue( e ) {
    /** @type { HTMLElement } */
    const that = e.target;
    const valueElemId = that.id;

    if ( valueElemId.startsWith( 'link_' ) )
      ;
    else if ( valueElemId.startsWith( 'skill_' ) )
      ;
    else if ( that.className.includes( 'summary' ) )
      ;
  }
}
