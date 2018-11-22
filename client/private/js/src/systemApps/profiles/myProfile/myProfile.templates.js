class MyProfileTemplates {
  constructor() {
    throw new Error( 'Can not instantiate the static class MyProfileTemplates' );
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
              <option value="github.com">GitHub</option>
              <option value="custom-url">Other</option>
            </select>
          </label>
        </div>
        <div class="medium-9 cell link-slug-wrapper">
          <label>Path
            <input type="text" placeholder="john-doe">
          </label>
        </div>
      </div>
    `;
  }

  static get newSkillInput() {
    return `
      <input class="new-skill" type="text" placeholder="Saying foo and bar">
    `;
  }

  static button( label, additionalClasses = '' ) {
    return `
      <button type="button" class="success button ${additionalClasses}">${label}</button>
    `;
  }
}
