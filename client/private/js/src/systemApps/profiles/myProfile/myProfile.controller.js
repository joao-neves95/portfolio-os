/*
 *
 * Copyright (c) 2018 João Pedro Martins Neves (shivayl) - All Rights Reserved.
 *
 * Portfolio-OS is licensed under the GNU LGPLv3, located in the root of this
 * project, under the name "LICENSE.md".
 *
 */

// TODO: Refectoring. Pass view logic to the view.

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
      e.target.insertAdjacentHTML( 'beforebegin', MyProfileTemplates.newSkillInput );

      Array.from( this.view.target.getElementsByClassName( 'new-skill' ) ).forEach( elem => {
        elem.removeEventListener( 'blur', this.___updatePortfolioValue );

        elem.addEventListener( 'blur', ( e ) => {
          e.preventDefault();
          this.___updatePortfolioValue( e );
        } );
      } );
    } );

    Array.from( this.view.target.getElementsByClassName( 'close-button' ) ).forEach( elem => {
      elem.addEventListener( 'click', ( e ) => {
        e.preventDefault();
        this.___updatePortfolioValue( e );
      } );
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
      value.addEventListener( 'blur', async ( e ) => {
        e.preventDefault();
        await this.___updatePortfolioValue( e );
      } );
    } );
  }

  // TODO: Prevent user from updating if the value is the same.
  async ___updatePortfolioValue( e ) {
    /** @type { HTMLElement } */
    const that = e.target.parentElement;
    const valueElemId = that.id;

    if ( valueElemId.startsWith( 'link_' ) )
      ;
    else if ( valueElemId.startsWith( 'skill_' ) ) {
      const res = await this.model.updateSkill( valueElemId.substring( 6 ), that.value );
      if ( res <= 0 )
        // TODO: Show notification.
        console.info( 'Error updating skill' );
    }
    else if ( that.className.includes( 'new-skill' ) ) {
      const res = await this.model.postNewSkill( that.value );
      that.id = 'skill_' + res.id;
    }
    else if ( that.className.includes( 'close-button' ) ) {
       if ( that.className.includes( 'disabled' ) )
         return;

      const res = await this.model.deleteSkill( that.parentElement.firstElementChild.id.substring( 6 ) );
      if ( res <= 0 )
        // TODO: Show notification.
        console.info( 'Error deleting skill' );
      else
        that.parentElement.remove();
    }
    else if ( that.className.includes( 'summary' ) )
      await this.model.updateSummary( that.value );

    // TODO: Rerender the profile after the update;
  }
}
