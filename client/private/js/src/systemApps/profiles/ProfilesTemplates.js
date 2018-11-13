class ProfilesTemplates {
  static window( id ) {
    return `
      <section class="grid-y profiles" id="${id}">

        <div class="cell top-bar stacked-for-medium">
          <div class="top-bar-left">
            <ul class="dropdown menu" data-dropdown-menu>
              <!-- <li class="menu-text">Site Title</li> -->
              <li><a href="#" class="my-profile">My Profile</a></li>
              <li><a href="#" class="explore">Explore</a></li>
            </ul>
          </div>
          <div class="top-bar-right">
            <ul class="menu">
              <li><input type="search" placeholder="Search for someone"></li>
              <li><button type="button" class="button">Search</button></li>
            </ul>
          </div>
        </div>

        <div class="cell content" id="cntnt_${id}">
        </div>

      </section>
    `;
  }

  /**
   * 
   * @param {any} name
   * @param {any} summary
   * @param { string[] } websites string[string[]]: ( [['hostName', 'host', 'path']] )
   * @param { string[] } skillSet
   */
  static userProfile( name, summary, websites, skillSet ) {
    let skillSetHtml = '';
    for ( let i = 0; i < skillSet.length; ++i ) {
      skillSetHtml += ProfilesTemplates.disabledInput( skillSet[i] );
    }

    let websitesHtml = '';
    for ( let i = 0; i < websites.length; ++i ) {
      websitesHtml += ProfilesTemplates.link( websites[i][0], websites[i][1], websites[i][2] );
    }

    return `
      <form class="grid-container my-profile">
        <div class="grid-y inner-my-profile">

          <div class="cell">
            <h5>Name</h5>
            <p>${name}</p>
          </div>
          
          <div class="cell">
            <h5>Summary</h5>
            <textarea class="summary disabled-input" value="${summary}" disabled="true"></textarea>
          </div>

          <div class="cell">
            <h5>Around The Web</h5>
            ${websitesHtml}
          </div>

          <div class="cell">
            <h5>Skill Set</h5>
            <label>
              ${skillSetHtml}
            </label>
          </div>

          <h5>Images</h5>
          <h5>Videos</h5>
          <h5>Documents</h5>
          <h5>Music</h5>

        </div>
      </form>
    `;
  }

  static disabledInput( value = '' ) {
    return `
      <input class="disabled-input" type="text" value="${value}" disabled="true">
    `;
  }

  static link( hostName, host, path ) {
    return `
      <div class="grid-x">
        <div class="medium-2 cell link-label-wrapper">
          <label class="lbl">Website</label>
          <a class="pointer" href="https://${host}/${path}" target="_blank">
            <p>${hostName}</p>
          </a>
        </div>
        <div class="medium-9 cell link-slug-wrapper">
          <label class="lbl">Slug
            <input class="slug disabled-input" type="text" value="${path}" disabled="true">
          </label>
        </div>
      </div>
    `;
  }

  static get addLink() {
    return `
      <div class="grid-x">
        <div class="medium-2 cell link-label-wrapper">
          <label>Website
            <select>
              <option value="instagram">Instagram</option>
              <option value="twitter">Twitter</option>
              <option value="facebook">Facebook</option>
              <option value="behance">Behance</option>
              <option value="github">GitHub</option>
              <option value="other">Other</option>
            </select>
          </label>
        </div>
        <div class="medium-9 cell link-slug-wrapper">
          <label>Slug
            <input type="text" placeholder="john-doe">
          </label>
        </div>
      </div>
    `;
  }

  static profileCard() {
    return `
    `;
  }
}
