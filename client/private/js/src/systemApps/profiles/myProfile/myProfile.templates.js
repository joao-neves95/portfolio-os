class MyProfileTemplates {
  constructor() {
    throw new Error( 'Can not instantiate the static class MyProfileTemplates' );
  }

  static myProfilePage() {
    return `
      <form class="grid-container my-profile">
        <div class="grid-y inner-my-profile">

          <div class="cell">
            <label>
              Summary
              <textarea class="summary" placeholder="None"></textarea>
            </label>
          </div>

          <button type="button" class="success button add-link-btn">Add Link</button>
          ${MyProfileTemplates.addLink}

          <button type="button" class="success button add-link-btn">Add Skill</button>
          <label>
            <input type="text" placeholder="Type your skill">
          </label>

          <button type="button" class="success button add-link-btn">Add Image</button>
          <button type="button" class="success button add-link-btn">Add Video</button>
          <button type="button" class="success button add-link-btn">Add Document</button>

        </div>
      </form>
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
}
