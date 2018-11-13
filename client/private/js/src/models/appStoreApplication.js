class AppStoreApplication {
  /**
   * @param { FileSystemItemType } type FileSystemItemType enum
   * @param { string } name
   * @param { string } creator
   * @param { string } htmlIndexUrl
   */
  constructor( type, name, creator, htmlIndexUrl ) {
    this.type = type;
    this.name = name;
    this.creator = creator;
    this.htmlIndexUrl = htmlIndexUrl; // 'https://rawgit.com/'

    this.rating = {};
    /** An array ith the users id's
     * @type { string[] } */
    this.downloads = [];
    this.creation = '';
    this.lastUpdate = '';
  }
}
