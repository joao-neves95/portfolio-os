class FileModel {
  /**
   * 
   * @param { FileSystemItemType } type FileSystemItemType enum
   * @param { PermissionType } permission PermissionType enum
   * @param { string } name
   * @param { string } content
   * @param { string } iconUrl "null" defaults to the default file icon.
   */
  constructor( type, permission, name, content, iconUrl = null ) {
    this.type = type;
    this.permission = permission;
    this.name = name;
    this.content = content;
    this.iconUrl = iconUrl;
  }
}
