/*
 *
 * Copyright (c) 2018 João Pedro Martins Neves (shivayl) - All Rights Reserved.
 *
 * Portfolio-OS is licensed under the GNU LGPLv3, located in the root of this
 * project, under the name "LICENSE.md".
 *
 */

// TODO: (FRONTEND) Refectoring. Pass view logic to the view and redo all of this crap.

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

    // UPDATE LINK.
    if ( valueElemId.startsWith( 'link_' ) ) {
      if ( that.value === '' )
        return;

      const res = await this.model.updateLink( valueElemId.substring( 5 ), that.value );
      if ( !res.ok )
        return Notifications.errorToast( 'There was an error updating the link.' );

      Notifications.successToast( 'Link successfully updated.' );

      // UPDATE SKILL.
    } else if ( valueElemId.startsWith( 'skill_' ) ) {
      if ( that.value === '' )
        return;

      const res = await this.model.updateSkill( valueElemId.substring( 6 ), that.value );
      if ( !res.ok )
        return Notifications.errorToast( 'There was an error updating the skill.' );

      Notifications.successToast( 'Skill successfully updated.' );

      // POST NEW SKILL.
    } else if ( that.className.includes( 'new-skill' ) ) {
      let res = await this.model.postNewSkill( that.value );
      if ( !res.ok )
        return Notifications.errorToast( 'There was an error while adding the new link.' );

      Notifications.successToast( 'New skill successfully added.' );
      res = await res.json();
      that.id = 'skill_' + res.id;

      // POST NEW LINK.
    } else if ( that.className.includes( 'new-link' ) ) {
      let res = await this.model.postNewLink( that.parentElement.parentElement.previousElementSibling.children[0].children[0].value, that.value );
      if ( !res.ok )
        return Notifications.errorToast( 'There was an error while adding the new link.' );

      Notifications.successToast( 'Link successfully added.' );
      res = await res.json();
      that.id = 'link_' + res.id;

      // DELETE.
    } else if ( that.parentElement.className.includes( 'close-button' ) || that.className.includes( 'close-button' ) ) {
      if ( that.className.includes( 'disabled' ) )
        return;

      let res;

      // DELETE SKILL
      if ( that.parentElement.previousElementSibling.className.includes( 'skill' ) ) {
        res = await this.model.deleteSkill( that.parentElement.previousElementSibling.id.substring( 6 ) );
        if ( !res.ok )
          return Notifications.errorToast( 'There was an error while deleting the skill.' );

        that.parentElement.parentElement.remove();
        Notifications.successToast( 'Skill successfully deleted.' );

        // DELETE LINK
      } else {
        res = await this.model.deleteLink( that.parentElement.previousElementSibling.children[1].children[0].children[0].id.substring( 5 ) );
        if ( !res.ok )
          return Notifications.errorToast( 'There was an error while deleting the link.' );

        DomUtils.getParentByClassInclude( that, 'callout' ).remove();
        Notifications.successToast( 'Link successfully deleted.' );
      }

      if ( res <= 0 )
        return Notifications.errorToast( 'Error while removing from the page.' );
      else
        if ( that.parentElement ) that.parentElement.remove();

    } else if ( that.className.includes( 'summary' ) ) {
      let res = await this.model.updateSummary( that.value );
      if ( !res.ok )
        return Notifications.errorToast( 'There was an error while updating the summary.' );

      Notifications.successToast( 'Summary successfully updated.' );
    }
  }

  __notifyUserOfResponse( res ) {
  }
}
