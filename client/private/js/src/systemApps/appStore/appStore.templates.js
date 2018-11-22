/*
 *
 * Copyright (c) 2018 João Pedro Martins Neves (shivayl) - All Rights Reserved.
 *
 * Portfolio-OS is licensed under the GNU LGPLv3, located in the root of this 
 * project, under the name "LICENSE.md".
 *
 */

class AppStoreTemplates {
  // TODO: Add the search panel as a dropdown under the top-bar, with filters (number of downloads; vote ratio).
  static window( id ) {
    return `
      <section class="grid-x app-store" id="${id}">

        <div class="top-bar">
          <div class="top-bar-left">
            <ul class="dropdown menu" data-dropdown-menu>
              <li>
                <a href="#">Explore</a>
                <ul class="menu vertical">
                  <li><a href="#">Top Rated</a></li>
                  <li><a href="#">Newest Apps</a></li>
                </ul>
              </li>
              <li><a href="#" class="add-new">Add New App</a></li>
            </ul>
          </div>
          <div class="top-bar-right">
            <ul class="menu">
              <li><input type="search" placeholder="Search"></li>
              <li><button type="button" class="button">Search</button></li>
            </ul>
          </div>
        </div>

        <div class="grid-container fluid content">
          <div class="grid-x content-grid">
            ${
              this.appCard( '1', 'Wikipedia Viewer', 'shivayl', 'https://raw.githubusercontent.com/joao-neves95/freeCodeCampProjects/master/Wikipedia_Viewer_App/index.html', Infinity, 0, 'The Wikipedia Viewer enables you to search wikipedia in an enjoyable fashion.' ) +
              this.appCard( '1', 'Wikipedia Viewer', 'shivayl', 'https://raw.githubusercontent.com/joao-neves95/freeCodeCampProjects/master/Wikipedia_Viewer_App/index.html', Infinity, 0, 'The Wikipedia Viewer enables you to search wikipedia in an enjoyable fashion.' ) +
              this.appCard( '1', 'Wikipedia Viewer', 'shivayl', 'https://raw.githubusercontent.com/joao-neves95/freeCodeCampProjects/master/Wikipedia_Viewer_App/index.html', Infinity, 0, 'The Wikipedia Viewer enables you to search wikipedia in an enjoyable fashion.' ) +
              this.appCard( '1', 'Wikipedia Viewer', 'shivayl', 'https://raw.githubusercontent.com/joao-neves95/freeCodeCampProjects/master/Wikipedia_Viewer_App/index.html', Infinity, 0, 'The Wikipedia Viewer enables you to search wikipedia in an enjoyable fashion.' ) +
              this.appCard( '1', 'Wikipedia Viewer', 'shivayl', 'https://raw.githubusercontent.com/joao-neves95/freeCodeCampProjects/master/Wikipedia_Viewer_App/index.html', Infinity, 0, 'The Wikipedia Viewer enables you to search wikipedia in an enjoyable fashion.' ) +
              this.appCard( '1', 'Wikipedia Viewer', 'shivayl', 'https://raw.githubusercontent.com/joao-neves95/freeCodeCampProjects/master/Wikipedia_Viewer_App/index.html', Infinity, 0, 'The Wikipedia Viewer enables you to search wikipedia in an enjoyable fashion.' ) +
              this.appCard( '1', 'Wikipedia Viewer', 'shivayl', 'https://raw.githubusercontent.com/joao-neves95/freeCodeCampProjects/master/Wikipedia_Viewer_App/index.html', Infinity, 0, 'The Wikipedia Viewer enables you to search wikipedia in an enjoyable fashion.' ) +
              this.appCard( '1', 'Wikipedia Viewer', 'shivayl', 'https://raw.githubusercontent.com/joao-neves95/freeCodeCampProjects/master/Wikipedia_Viewer_App/index.html', Infinity, 0, 'The Wikipedia Viewer enables you to search wikipedia in an enjoyable fashion.' )
            }
          </div>
        </div>

      </section>
    `;
  }

  static appCard( appId, title, creator, appLink, downloadNum, voteRatio, description ) {
    return `
      <div class="cell">
        <div class="card app-card" id="${appId}">
          <div class="card-divider">
            <h4>${title}</h4>
          </div>
          <img src="">
          <div class="card-section">
            <p>${description}</p>
            <p class="meta">Creator: ${creator}</p>
            <p class="meta">Downloads: ${downloadNum}</p>
            <p class="meta">Vote Ratio: ${voteRatio}</p>
            <a href="${appLink}" target="_blank" class="primary button">View on GitHub</a>
            <button type="button" class="install primary button">Install</button>
          </div>
        </div>
      </div>
    `;
  }

  static appDescriptionModal() {
    return `
    `;
  }
}
