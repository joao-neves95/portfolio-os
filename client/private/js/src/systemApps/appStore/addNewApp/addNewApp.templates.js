/*
 *
 * Copyright (c) 2018 João Pedro Martins Neves (shivayl) - All Rights Reserved.
 *
 * Portfolio-OS is licensed under the GNU LGPLv3, located in the root of this 
 * project, under the name "LICENSE.md".
 *
 */

class AddNewAppTemplates {
  constructor() {
    throw new Error( 'Can not instantiate the static class AddNewAppTemplate.' );
  }

  static get content() {
    return `
      <form class="grid-container add-new-app">
        <section class="grid-x wrapper" >

          <div class="cell">
            <h5>Application Name</h5>
            <input type="text" name="name" required>
          </div>

          <div class="cell">
            <h5>Descrition</h5>
            <textarea type="text" name="description"></textarea>
          </div>

          <div class="cell">
            <h5>Index HTML Page</h5>
            <input type="text" name="index-page" required>
          </div>

          <div class="cell">
            <button class="button help" data-open="modal">Help</button>
            ${MyProfileTemplates.button( 'Submit App' ) }
          </div>

        </section>
      </form>
    `;
  }

  static get helpModalContent() {
    return `
      <h1>Help</h1>
      <ul>
        <li>
          For security reasons, Portfolio-OS only accepts apps stored on GitHub.
          To add a new app just go to the GitHub file and click on RAW.
          Then just copy and paste the link to Index HTML Page input.
        </li>
      </ul>`;
  }
}
