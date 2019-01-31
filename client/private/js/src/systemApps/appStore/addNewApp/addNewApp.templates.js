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

  static content( penCodeUsername = '' ) {
    penCodeUsername = !penCodeUsername || penCodeUsername === '' ? '' : `value="${penCodeUsername}/"`;

    return `
      <form class="grid-container add-new-app">
        <section class="grid-x wrapper" >

          <div class="cell">
            <h5>Application Name</h5>
            <input type="text" name="name" class="name" required>
          </div>

          <div class="cell">
            <h5>Descrition</h5>
            <textarea type="text" name="description" class="description"></textarea>
          </div>

          <div class="cell">
            <h5>CodePen Meta</h5>
            <input type="text" name="index-page" class="index-page" placeholder="codePenUserame/penCode" ${penCodeUsername} required>
          </div>

          <div class="cell">
            <h5>Icon URL</h5>
            <input type="text" name="icon-url" class="icon-url" placeholder="Leave blank for the default icon">
          </div>

          <div class="cell">
            <button class="button help" data-open="modal">Help</button>
            ${MyProfileTemplates.button( 'Submit App', 'addNewApp') }
          </div>

        </section>
      </form>
    `;
  }

  static get helpModalContent() {
    return `
      <h1>Help</h1>
      
      <p>
        For security reasons, Portfolio-OS only accepts apps stored publicly on https://codepen.io/.
      </p>

      <p>
        To add a new app add your CodePen's username and pen code of your application.
      </p>

      <p>
        Example: "shivayl/qVVbdO"
      </p>

      <p>
        You can add your CodePen's username to your social accounts in order to ease the process.
      </p>

      <p>
        All apllications that link to files that are not hosted on a public GitHub repository will be deleted.
      </p>
    `;
  }
}
