class DirectoryModel {
  /**
   * 
   * @param { FileSystemItemType } type FileSystemItemType enum
   * @param { PermissionType } permission PermissionType enum
   * @param { string } name
   * @param { string } iconUrl "null" defaults to the default folder icon.
   * @param { FileSystemItemType } type "null" defaults to "FileSystemItemType.Directory".
   * @param { string } content
   */
  constructor( permission, name, iconUrl = null, type = null, content ) {
    this.type = !type ? FileSystemItemType.Directory : type;
    this.permission = permission;
    this.name = name;
    this.iconUrl = !iconUrl ? '' : iconUrl;
    this.content = content;
  }
}
