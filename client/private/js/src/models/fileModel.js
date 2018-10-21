class FileModel {
  /**
   * 
   * @param { FileSystemItemType } type FileSystemItemType enum
   * @param { string } name
   * @param { string } content
   */
  constructor( type, name, content ) {
    this.type = type;
    this.name = name;
    this.content = content;
  }
}
