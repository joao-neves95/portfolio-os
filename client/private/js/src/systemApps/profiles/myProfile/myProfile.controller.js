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
    Array.from( this.view.target.getElementsByClassName( 'link-account' ) ).forEach( elem => {
      elem.addEventListener( 'click', ( e ) => {
        const that = e.target.parentElement.parentElement.parentElement;

        let loginType;
        if ( that.href.includes( '/portfolio-os/auth/github' ) )
          loginType = LoginType.GitHub;
        else
          loginType = LoginType.Google;

        authentication.JWTLocalStorageToCookie( { accountType: loginType } );
      } );
    } );

    this.view.target.getElementsByClassName( 'add-link-btn' )[0].addEventListener( 'click', ( e ) => {
      e.preventDefault();
      e.target.insertAdjacentHTML( 'beforebegin', ProfilesTemplates.removableElem( MyProfileTemplates.addLink ) );

      Array.from( this.view.target.getElementsByClassName( 'new-link' ) ).forEach( elem => {
        elem.removeEventListener( 'blur', this.___updatePortfolioValue );

        elem.addEventListener( 'blur', ( e ) => {
          e.preventDefault();
          this.___updatePortfolioValue( e );
        } );
      } );
    } );

    this.view.target.getElementsByClassName( 'add-skill-btn' )[0].addEventListener( 'click', ( e ) => {
      e.preventDefault();
      e.target.insertAdjacentHTML( 'beforebegin', ProfilesTemplates.removableElem( MyProfileTemplates.newSkillInput ) );

      Array.from( this.view.target.getElementsByClassName( 'new-skill' ) ).forEach( elem => {
        elem.removeEventListener( 'blur', this.___updatePortfolioValue );

        elem.addEventListener( 'blur', ( e ) => {
          e.preventDefault();
          this.___updatePortfolioValue( e );
        } );
      } );
    } );

    // Update Portfolio (DB) values.
    Array.from( this.view.target.getElementsByClassName( 'close-button' ) ).forEach( elem => {
      elem.addEventListener( 'click', ( e ) => {
        e.preventDefault();
        this.___updatePortfolioValue( e );
      } );
    } );

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
    const that = e.target;
    const valueElemId = that.id;

    if ( valueElemId.startsWith( 'link_' ) ) {
      if ( that.value === '' )
        return;

      const res = await this.model.updateLink( valueElemId.substring( 5 ), that.value );

    // UPDATE SKILL.
    } else if ( valueElemId.startsWith( 'skill_' ) ) {
      if ( that.value === '' )
        return;

      const res = await this.model.updateSkill( valueElemId.substring( 6 ), that.value );
      if ( !res.ok() ) {
        Notifications.errorToast(
          await res.json()
            .catch( e => { Notifications.errorToast( 'Error updating skill.' ); } )
        );

      } else {
        Notifications.errorToast( 'Skill successfully updated.' );
      }

    } else if ( that.className.includes( 'new-skill' ) ) {
      const res = await this.model.postNewSkill( that.value );
      that.id = 'skill_' + res.id;

    } else if ( that.className.includes( 'new-link' ) ) {
      const res = await this.model.postNewLink( that.parentElement.parentElement.parentElement.firstElementChild.firstElementChild.firstElementChild.value, that.value );
      that.id = 'link_' + res.id;

    } else if ( that.parentElement.className.includes( 'close-button' ) ) {
       if ( that.className.includes( 'disabled' ) )
        return;


      const target = that.parentElement.parentElement;
      let res;

      // DELETE SKILL
      if ( target.firstElementChild.classList.contains( 'skill' ) || target.firstElementChild.classList.contains( 'new-skill' ) ) {
        res = await this.model.deleteSkill( target.firstElementChild.id.substring( 6 ) );

      // DELETE LINK
      } else {
        res = await this.model.deleteLink( target.firstElementChild.lastElementChild.firstElementChild.firstElementChild.id.substring( 5 ) );
      }

      if ( res <= 0 )
        // TODO: (FRONTEND) Show notification.
        console.info( 'Error Deleting.' );
      else
        target.remove();

    } else if ( that.className.includes( 'summary' ) )
      await this.model.updateSummary( that.value );
  }

  __notifyUserOfResponse( res ) {
  }
}
