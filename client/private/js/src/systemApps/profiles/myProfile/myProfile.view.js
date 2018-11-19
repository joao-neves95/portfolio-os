class MyProfileView {
  constructor() {
    /** @type { HTMLElement } */
    this.target = HTMLElement;
  }

  get summaryElem() { return this.target.getElementsByTagName( 'textarea' )[0]; }

  activateProfileEdition() {
    const inputs = this.target.getElementsByTagName( 'input' );
    for ( let i = 0; i < inputs.length; ++i ) {
      inputs[i].classList.remove( 'disabled-input' );
      inputs[i].disabled = false;
    }

    const summary = this.summaryElem;
    summary.classList.remove( 'disabled-input' );
    summary.disabled = false;

    const linksContainer = this.target.getElementsByClassName( 'links-container' )[0];
    linksContainer.insertAdjacentHTML( 'beforeend', MyProfileTemplates.button( 'Add Link', 'add-link-btn' ) );
        
    const skillsContainer = this.target.getElementsByClassName( 'skills-container' )[0];
    skillsContainer.insertAdjacentHTML( 'beforeend', MyProfileTemplates.button( 'Add Skill', 'add-skill-btn' ) );
  }
}
